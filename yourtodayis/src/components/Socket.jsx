// App.jsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';


const socket = io('http://localhost:4000');

const Socket = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      const userName = prompt('반갑습니다!', '') || '익명';
      setName(userName);
      socket.emit('newUser', userName);
    });

    socket.on('update', (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    return () => {
      socket.off('connect');
      socket.off('update');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const data = { type: 'message', message };
      socket.emit('message', data);
      setChat((prevChat) => [...prevChat, { ...data, name: '나' }]);
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Socket.IO Client</h1>
      <div id="chat">
        {chat.map((entry, index) => (
          <div key={index} className={entry.type}>
            {entry.name}: {entry.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        id="test"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Socket;
