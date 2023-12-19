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

  function closeWsConn(): void {
    if (wsConn !== null) {
      wsConn.close();
      setWsConn(null);
    }
  }

  return (
    <div style={{ display: 'flex' ,overflow: 'auto', height: '100vh' }}>
      <div style={{ flex: 1 ,overflow: 'auto', height: '100vh' }}>
        {wsConn === null ? (
          <div>
          <p>Chatbot not initialized. </p>
          <p>Please upload a script to initialize.</p>
          </div>
        ) : (
          <ChatBot titleName={botName} wsConn={wsConn} onClose={closeWsConn}/>
        )}
      </div>
      <div style={{ flex: 1 ,overflow: 'auto', height: '100vh'}}>
        <Editor onUpload={getWsConn} />
      </div>
    </div>
  );
};
export default App;
