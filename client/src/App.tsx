import React, { useEffect } from 'react';
import '@chatui/core/es/styles/index.less';
// 引入组件
import Chat, { Bubble, useMessages } from '@chatui/core';
// 引入样式
import '@chatui/core/dist/index.css';
import ChatBot from './components/Chatbot';
import Editor from './components/Editor';

const App = () => {
  const [wsConn, setWsConn] = React.useState<WebSocket | null>(null);
  const [botName, setBotName] = React.useState<string>('');

  function getWsConn(ws_url:string, bot_name:string): void {
    const ws = new WebSocket(ws_url);
    setWsConn(ws);
    setBotName(bot_name);
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        {wsConn === null ? (
          <p>Chatbot not initialized. Please upload a script to initialize.</p>
        ) : (
          <ChatBot titleName={botName} wsConn={wsConn} />
        )}
      </div>
      <div style={{ flex: 1 }}>
        <Editor onUpload={getWsConn} />
      </div>
    </div>
  );
};
export default App;
