import { useState } from "react"
import ChatBot from "./Chatbot"
import { Button, Input } from '@chatui/core';

export interface UploadScriptProps {
    bot_name: string,
    script: string
}

interface EditorProps {
     onUpload: (ws_url:string, bot_name:string) => void
}

const Editor: React.FC<EditorProps> = ({onUpload}) => {
    const [bot_name, setBotName] = useState<string>('')
    const [script, setScript] = useState<string>('')
    const [url, setUrl] = useState<string>('http://localhost:8080')
    async function uploadScript(props: UploadScriptProps): Promise<void> {
        console.log(props);
        try {
            const response = await fetch(url + '/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
            });
            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message);
            }
            const result = await response.json();
            console.log(result);
            onUpload(result.ws_url, bot_name);
        } catch (error) {
            const err = error as Error;
            console.log(error);
            if (err.message === 'Failed to fetch') {
                window.alert(`脚本上传失败, 请检查后端地址 ${url} 是否正确或者后端是否成功启动`);
            } else {
                window.alert(`脚本上传失败, ${err.message}`);
            }
        }
        
    }

    return (
        <div style={{overflow: 'auto', height: '100vh'}}>
            <h2>客服脚本编辑器</h2>

            <h3>后端地址</h3>
            <Input value={url} onChange={val => setUrl(val)} placeholder="请输入..." />

            <h3>机器人名称</h3>
            <Input maxLength={20} value={bot_name} onChange={val => setBotName(val)} placeholder="请输入..." />

            <h3>脚本</h3>
            <Input minRows={10} maxRows={20} autoSize autoSave={script} value={script} onChange={val => setScript(val)} placeholder="请输入..." />

            <Button color = "primary" block onClick={() => uploadScript({bot_name, script})}>上传脚本</Button>
        </div>
    );
}
export default Editor;