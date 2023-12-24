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
  const [newConn, setNewConn] = React.useState<WebSocket | null>(null);
  const [newBotName, setNewBotName] = React.useState<string>('');
  const [botName, setBotName] = React.useState<string>('');
  const [refreshKey, setRefreshKey] = React.useState<number>(0);

  function refresh(): void {
    setRefreshKey(refreshKey + 1);
  }

  function getWsConn(ws_url:string, bot_name:string): void {
    if (wsConn !== null) {
      window.alert('You need to wait for the current chatbot to finish before uploading a new script.');
      const ws = new WebSocket(ws_url);
      setNewConn(ws);
      setNewBotName(bot_name);
      wsConn.close();
    } else {
      const ws = new WebSocket(ws_url);
      setWsConn(ws);
      setBotName(bot_name);
    }
    refresh();
  }

  function closeWsConn():void {
    if (wsConn !== null) {
      wsConn.close();
      setWsConn(null);
      refresh();
    }
    if (newConn !== null) {
      window.alert("Start new chatbot");
      setWsConn(newConn);
      setBotName(newBotName);
      setNewConn(null);
      setNewBotName('');
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
          <ChatBot key={refreshKey} titleName={botName} wsConn={wsConn} onClose={closeWsConn}/>
        )}
      </div>
      <div style={{ flex: 1 ,overflow: 'auto', height: '100vh'}}>
        <Editor onUpload={getWsConn} />
      </div>
    </div>
  );
};
export default App;
