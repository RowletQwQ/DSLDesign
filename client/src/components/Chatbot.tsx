import React, { useEffect } from 'react';
import '@chatui/core/es/styles/index.less';
import Chat, { Bubble, QuickReplies, useMessages } from '@chatui/core';
import '@chatui/core/dist/index.css';

interface ChatBotProps {
    titleName: string,
    wsConn: WebSocket,
    onClose?: () => void
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
const ChatBot: React.FC<ChatBotProps> = ({titleName,wsConn,onClose}) => {
    const { messages, appendMsg, setTyping } = useMessages([]);
    // Use ref to store the websocket connection
    const ws = React.useRef<WebSocket>(wsConn);
    const [isRunning, setIsRunning] = React.useState<boolean>(false);
    const [menuArray, setMenuArray] = React.useState<string[]>([]);
    const [inputMode, setInputMode] = React.useState<'text' | 'menu'>('text');
    const [refreshKey, setRefreshKey] = React.useState<number>(0);
    useEffect(() => {
        // When receive message from server, append it to the message list
        ws.current.onopen = () => {
            console.log('connected');
            setIsRunning(true);
        };
        ws.current.onmessage = (message) => {
            console.log(message);
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
                setInputMode('menu');
                setMenuArray(data.menu);
            }
            
        };

        ws.current = wsConn;
        // When websocket is closed, set the websocket to null
        ws.current.onclose = async () => {
            console.log('disconnected');
            handleRefresh();
            window.alert('Chatbot disconnected!');
            setIsRunning(false);
            await new Promise(resolve => setTimeout(resolve, 2000)); // 休眠2秒
            onClose && onClose();
            
        };
    }, [wsConn]);

    function handleRefresh() {
        setRefreshKey(refreshKey + 1);
    }

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
        if (!isRunning) {
            window.alert('Chatbot is not running!');
            return;
        }
        if (type === 'text' && val.trim()) {
            appendMsg({
                type: 'text',
                content: { text: val },
                position: 'right',
            });
            if (inputMode === 'text' || menuArray.length === 0) {
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

    function handleQuickReplyClick(item: any) {
        handleSend('text', item.name);
        setMenuArray([]);
        setInputMode('text');
    }

    return (
        <Chat
            navbar={{ title: titleName }}
            messages={messages}
            renderMessageContent={renderMessageContent}
            onSend={handleSend}
            quickReplies={menuArray.map((item) => ({
                icon: 'message',
                name: item,
                isNew: true,
                isHighlight: true,
            }) as any)}
            onQuickReplyClick={handleQuickReplyClick}
        />
    );
};

export default ChatBot;