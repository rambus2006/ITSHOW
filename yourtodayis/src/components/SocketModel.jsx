// SocketModel.jsx 파일

import React, { useState, useEffect, useRef } from 'react'; // 리액트 훅들을 가져옵니다.
import axios from 'axios'; // axios 라이브러리를 가져옵니다.
import io from 'socket.io-client'; // Socket.IO 클라이언트를 가져옵니다.
import style from './Modal.module.css'; // 모달 스타일 파일을 가져옵니다.

const socket = io('http://localhost:4000'); // 서버의 주소와 포트에 맞게 Socket.IO 클라이언트를 초기화합니다.

function SocketModel({ diaryText, onDiaryInputChange, onSaveDiary }) {
  const [inputText, setInputText] = useState(diaryText); // 입력된 일기 내용을 관리하는 상태
  const [htmlContent, setHtmlContent] = useState('일기를 입력하세요'); // HTML 형식의 일기 내용을 관리하는 상태 변수
  const [timer, setTimer] = useState(10); // 일기 저장 타이머를 관리하는 상태 변수
  const timeoutRef = useRef(null); // 타이머의 ID를 저장하는 useRef 훅을 사용합니다.

  useEffect(() => {
    // 소켓 이벤트 리스너 설정
    socket.on('diarySaved', (data) => {
      console.log('새 일기 저장:', data);
      setHtmlContent(`<p>${data.message}</p>`); // 서버에서 저장된 일기를 HTML 형식으로 변환하여 상태에 저장합니다.
    });

    return () => {
      socket.off('diarySaved'); // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    };
  }, []);

  // 입력 값이 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text); // 입력된 텍스트를 상태에 업데이트합니다.
    onDiaryInputChange(e); // 부모 컴포넌트에서 전달받은 입력 변경 이벤트 핸들러를 호출합니다.
    resetTimer(); // 타이머를 재설정합니다.
  };

  // 타이머를 초기화하는 함수
  const resetTimer = () => {
    setTimer(10); // 타이머를 10으로 설정합니다.
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // 기존의 타이머가 있으면 제거합니다.
    }
    timeoutRef.current = setTimeout(() => {
      window.location.href = "http://localhost:3000"; // 60초 후에 홈 화면으로 이동합니다.
    }, 60000);
  };

  // 변경된 일기 내용을 저장하는 함수 (비동기 처리)
  const handleSaveChanges = async () => {
    const htmlCode = `<p>${inputText}</p>`; // 입력된 텍스트를 HTML 형식으로 변환합니다.
    setHtmlContent(htmlCode); // HTML 형식의 일기 내용을 상태에 업데이트합니다.

    // 세션에서 사용자 이름과 이메일을 가져옵니다.
    const inusername = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email') || '';
    
    const data = {
      writer: inusername,
      message: inputText, // 입력된 일기 내용을 메시지로 설정합니다.
      createdAt: new Date().toLocaleString(), // 일기가 작성된 시간을 설정합니다.
      email: email // 사용자 이메일을 설정합니다.
    };

    try {
      // 서버에 입력된 일기를 POST 요청으로 전송합니다.
      const response = await axios.post('http://localhost:4000/api/diary', data, {
        headers: {
          'Content-Type': 'application/json', // 요청 헤더에 JSON 형식으로 Content-Type을 설정합니다.
        }
      });
      console.log('서버 응답:', response.data); // 서버에서 받은 데이터를 콘솔에 출력합니다.

      // 일기 저장 후 입력 텍스트를 초기화합니다.
      setInputText('');
      onSaveDiary(); // 일기 저장 후 부모 컴포넌트에서 전달받은 저장 이벤트 핸들러를 호출합니다.

      // Socket.IO를 통해 서버에 일기 저장 이벤트를 전송합니다.
      socket.emit('saveDiary', data);

    } catch (error) {
      console.error('일기 저장 중 오류 발생:', error); // 일기 저장 과정에서 오류가 발생한 경우 콘솔에 오류 메시지를 출력합니다.
    }
  };

  // 사용자의 활동을 감지하는 이벤트 리스너를 등록합니다.
  useEffect(() => {
    const handleUserActivity = () => {
      resetTimer(); // 사용자 활동이 감지되면 타이머를 재설정합니다.
    };

    window.addEventListener('mousemove', handleUserActivity); // 마우스 이벤트를 감지합니다.
    window.addEventListener('keydown', handleUserActivity); // 키보드 이벤트를 감지합니다.

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  // JSX를 반환하여 화면에 렌더링합니다.
  return (
    <div className={style.modalContainer}>
      <textarea
        className={style.text}
        value={inputText}
        onChange={handleInputChange}
        placeholder="일기 내용을 입력하세요..."
        rows={24}
        cols={60}
      />
      <div>
        {/* 저장 버튼 */}
        <button onClick={handleSaveChanges} className={style.savebutton}>
          저장
        </button>
      </div>
    </div>
  );
}

export default SocketModel;
