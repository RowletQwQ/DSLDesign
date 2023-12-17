import React, { useEffect } from 'react';
import '@chatui/core/es/styles/index.less';
import Chat, { Bubble, QuickReplies, useMessages } from '@chatui/core';
import '@chatui/core/dist/index.css';

interface ChatBotProps {
    titleName: string,
    wsConn: WebSocket
}

enum WsMessageType {
    NormalMsg,
    ErrorMsg,
    Menu
}
interface WsMessage{
    type: WsMessageType,
    content: string,
    menu?: string[]
}


/**
 * Represents a chatbot component.
 * @param titleName - The title of the chatbot.
 * @param wsConn - The WebSocket connection.
 * @returns The chatbot component.
 */
const ChatBot: React.FC<ChatBotProps> = ({titleName,wsConn}) => {
    // Use ref to store the websocket connection
    const ws = React.useRef<WebSocket>(wsConn);
    const { messages, appendMsg, setTyping } = useMessages([]);
    let menuArray: string[] = [];
    let inputMode = 'text';
    useEffect(() => {
        // When receive message from server, append it to the message list
        ws.current.onmessage = (message) => {
            const data = JSON.parse(message.data);
            if (data.type === WsMessageType.NormalMsg) {
                appendMsg({
                    type: 'text',
                    content: { text: data.content },
                    position: 'left',
                });
            } else if (data.type === WsMessageType.ErrorMsg) {
                appendMsg({
                    type: 'text',
                    content: { text: `Error occur! ${data.content}` },
                    position: 'left',
                });
            } else if (data.type === WsMessageType.Menu) {
                appendMsg({
                    type: 'text',
                    content: { text: data.content },
                    position: 'left',
                });
                // Switch input type to menu
                inputMode = 'menu';
                menuArray = data.menu;
            }
            
        };

        ws.current = wsConn;
        // When websocket is closed, set the websocket to null
        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [wsConn]);

    /**
     * Renders the content of a message.
     * @param msg - The message object.
     * @returns The rendered Bubble component.
     */
    function renderMessageContent(msg: any) {
        const { content } = msg;
        return <Bubble content={content.text} />;
    }

    /**
     * Handles sending messages in the chatbot.
     * @param type - The type of the message.
     * @param val - The value of the message.
     */
    function handleSend(type: any, val: any) {
        if (type === 'text' && val.trim()) {
            appendMsg({
                type: 'text',
                content: { text: val },
                position: 'right',
            });
            if (inputMode === 'text') {
                ws.current.send(val);
            } else {
                if (menuArray.includes(val)) {
                    ws.current.send(val);
                } else {
                    appendMsg({
                        type: 'text',
                        content: { text: 'Invalid input!' },
                        position: 'left',
                    });
                }
            }
            setTyping(true);
        }
    }

    return (
        <Chat
            navbar={{ title: titleName }}
            messages={messages}
            renderMessageContent={renderMessageContent}
            onSend={handleSend}
        />
    );
};

export default ChatBot;