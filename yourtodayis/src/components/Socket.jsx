import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

// 서버의 주소와 포트에 맞게 Socket.IO 클라이언트를 초기화합니다.
const socket = io('http://localhost:4000');

const Socket = () => {
  const [name, setName] = useState(''); // 사용자 이름을 관리하는 상태
  const [message, setMessage] = useState(''); // 입력된 메시지를 관리하는 상태
  const [chat, setChat] = useState([]); // 채팅 내용을 관리하는 상태 배열

  useEffect(() => {
    // 컴포넌트가 마운트될 때 한 번 실행되는 useEffect
    socket.on('connect', () => {
      // 사용자 이름을 입력받습니다. 입력이 없을 경우 기본값은 '익명'입니다.
      const userName = prompt('반갑습니다!', '') || '익명';
      setName(userName); // 입력받은 사용자 이름을 상태에 저장합니다.
      socket.emit('newUser', userName); // 서버에 새 사용자 접속을 알리는 이벤트를 전송합니다.
    });

    // 서버에서 'update' 이벤트를 수신하면 채팅 내용을 업데이트합니다.
    socket.on('update', (data) => {
      setChat((prevChat) => [...prevChat, data]); // 기존 채팅 내용에 새로운 데이터를 추가합니다.
    });

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    return () => {
      socket.off('connect'); // 'connect' 이벤트 리스너 제거
      socket.off('update'); // 'update' 이벤트 리스너 제거
    };
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정합니다.

  // 메시지를 전송하는 함수
  const sendMessage = () => {
    if (message.trim()) { // 메시지가 공백이 아닌 경우에만 처리합니다.
      const data = { type: 'message', message }; // 보낼 데이터를 객체로 정의합니다.
      socket.emit('message', data); // 서버에 메시지를 전송하는 이벤트를 발생시킵니다.
      setChat((prevChat) => [...prevChat, { ...data, name: '나' }]); // 채팅창에 보낸 메시지를 추가합니다.
      setMessage(''); // 입력된 메시지 상태를 초기화합니다.
    }
  };

  return (
    <div>
      <h1>Socket.IO Client</h1>
      <div id="chat">
        {/* 채팅 메시지를 맵을 통해 출력합니다. */}
        {chat.map((entry, index) => (
          <div key={index} className={entry.type}>
            {entry.name}: {entry.message}
          </div>
        ))}
      </div>
      {/* 메시지 입력 필드와 전송 버튼 */}
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
