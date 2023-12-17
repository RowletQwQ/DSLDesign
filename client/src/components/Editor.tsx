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
    const [url, setUrl] = useState<string>('')
    async function uploadScript(props: UploadScriptProps): Promise<void> {
        console.log(props);
        const response = await fetch(url + '/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props)
        });

        const result = await response.json();
        onUpload(result.ws_url, bot_name);
    }

    return (
        <div>
            <h2>客服脚本编辑器</h2>

            <h3>后端地址</h3>
            <Input value={url} onChange={val => setUrl(val)} placeholder="请输入..." />

            <h3>机器人名称</h3>
            <Input maxLength={20} value={bot_name} onChange={val => setBotName(val)} placeholder="请输入..." />

            <h3>脚本</h3>
            <Input minRows={30} maxRows={999} autoSize value={script} onChange={val => setScript(val)} placeholder="请输入..." />

            <Button color = "primary" block onClick={() => uploadScript({bot_name, script})}>上传脚本</Button>
        </div>
    );
}
export default Editor;