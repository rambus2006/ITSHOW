
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client';
// import style from './Modal.module.css'; // 스타일 파일

// const socket = io('http://localhost:4000'); // 서버 주소에 맞게 변경

// function SocketModel({ diaryText, onDiaryInputChange, onSaveDiary }) {
//   const [inputText, setInputText] = useState(diaryText); // 부모 컴포넌트에서 전달받은 일기 내용을 상태로 관리
//   const [htmlContent, setHtmlContent] = useState('일기를 입력하세요'); // HTML 컨텐츠를 관리하는 상태 변수
//   const [timer, setTimer] = useState(10); // 타이머 상태 변수
//   const timeoutRef = useRef(null); // 타이머 참조 변수

//   useEffect(() => {
//     // 소켓 이벤트 리스너 설정
//     socket.on('diarySaved', (data) => {
//       console.log('새 일기 저장:', data);
//       setHtmlContent(`<p>${data.message}</p>`);
//     });

//     return () => {
//       socket.off('diarySaved');
//     };
//   }, []);

//   // 입력 값 변경 시 호출되는 함수
//   const handleInputChange = (e) => {
//     const text = e.target.value;
//     setInputText(text); // 입력된 텍스트를 업데이트
//     onDiaryInputChange(e); // 부모 컴포넌트의 입력 변경 이벤트 핸들러 호출
//     resetTimer();
//   };

//   // 타이머 초기화 함수
//   const resetTimer = () => {
//     setTimer(10); // 타이머를 10초로 재설정
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     timeoutRef.current = setTimeout(() => {
//       window.location.href = "http://localhost:3000";
//     }, 60000);
//   };

//   // 변경 사항 저장 함수 (비동기 처리)
//   const handleSaveChanges = async () => {
//     const htmlCode = `<p>${inputText}</p>`; // HTML 문자열을 생성
//     setHtmlContent(htmlCode); // HTML 컨텐츠를 상태에 저장

//     // 세션에서 입력값을 쓰는 사람 이름 가져오기
//     const inusername = sessionStorage.getItem('name');
//     const email = sessionStorage.getItem('email') || '';
    
//     const data = {
//       writer: inusername,
//       message: inputText, // 입력된 텍스트를 메시지로 보냄
//       createdAt: new Date().toLocaleString(), // 댓글 작성 시간
//       email: email
//     };

//     try {
//       // 서버에 입력된 내용을 POST 요청으로 보냄
//       const response = await axios.post('http://localhost:4000/api/diary', data, {
//         headers: {
//           'Content-Type': 'application/json', // 요청 헤더에 JSON 형식으로 Content-Type 설정
//         }
//       });
//       console.log('서버 응답:', response.data); // 서버로부터 받은 데이터를 콘솔에 출력

//       // 성공적으로 저장 후 입력 텍스트 초기화
//       setInputText('');
//       onSaveDiary(); // 저장 후 부모 컴포넌트의 저장 이벤트 핸들러 호출

//       // 소켓을 통해 서버에 일기 저장 이벤트 전송
//       socket.emit('saveDiary', data);

//     } catch (error) {
//       console.error('일기 저장 중 오류 발생:', error); // 저장 과정에서 오류 발생 시 콘솔에 오류 메시지 출력
//     }
//   };

//   // 사용자의 활동을 감지하는 이벤트 리스너 등록
//   useEffect(() => {
//     const handleUserActivity = () => {
//       resetTimer();
//     };

//     window.addEventListener('mousemove', handleUserActivity);
//     window.addEventListener('keydown', handleUserActivity);

//     return () => {
//       window.removeEventListener('mousemove', handleUserActivity);
//       window.removeEventListener('keydown', handleUserActivity);
//     };
//   }, []);

//   // JSX를 반환하여 화면에 렌더링
//   return (
//     <div className={style.modalContainer}>
//       <textarea
//         value={inputText}
//         onChange={handleInputChange}
//         placeholder="일기 내용을 입력하세요..."
//         rows={10}
//         style={{ width: '100%', padding: '10px' }}
//       />
//       <div>
//         <button onClick={handleSaveChanges}>
//           저장
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SocketModel;
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import style from './Modal.module.css'; // 스타일 파일

const socket = io('http://localhost:4000'); // 서버 주소에 맞게 변경

function SocketModel({ diaryText, onDiaryInputChange, onSaveDiary }) {
  const [inputText, setInputText] = useState(diaryText); // 부모 컴포넌트에서 전달받은 일기 내용을 상태로 관리
  const [htmlContent, setHtmlContent] = useState('일기를 입력하세요'); // HTML 컨텐츠를 관리하는 상태 변수
  const [timer, setTimer] = useState(10); // 타이머 상태 변수
  const timeoutRef = useRef(null); // 타이머 참조 변수

  useEffect(() => {
    // 소켓 이벤트 리스너 설정
    socket.on('diarySaved', (data) => {
      console.log('새 일기 저장:', data);
      setHtmlContent(`<p>${data.message}</p>`);
    });

    return () => {
      socket.off('diarySaved');
    };
  }, []);

  // 입력 값 변경 시 호출되는 함수
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text); // 입력된 텍스트를 업데이트
    onDiaryInputChange(e); // 부모 컴포넌트의 입력 변경 이벤트 핸들러 호출
    resetTimer();
  };

  // 타이머 초기화 함수
  const resetTimer = () => {
    setTimer(10); // 타이머를 10초로 재설정
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      window.location.href = "http://localhost:3000";
    }, 60000);
  };

  // 변경 사항 저장 함수 (비동기 처리)
  const handleSaveChanges = async () => {
    const htmlCode = `<p>${inputText}</p>`; // HTML 문자열을 생성
    setHtmlContent(htmlCode); // HTML 컨텐츠를 상태에 저장

    // 세션에서 입력값을 쓰는 사람 이름 가져오기
    const inusername = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email') || '';
    
    const data = {
      writer: inusername,
      message: inputText, // 입력된 텍스트를 메시지로 보냄
      createdAt: new Date().toLocaleString(), // 댓글 작성 시간
      email: email
    };

    try {
      // 서버에 입력된 내용을 POST 요청으로 보냄
      const response = await axios.post('http://localhost:4000/api/diary', data, {
        headers: {
          'Content-Type': 'application/json', // 요청 헤더에 JSON 형식으로 Content-Type 설정
        }
      });
      console.log('서버 응답:', response.data); // 서버로부터 받은 데이터를 콘솔에 출력

      // 성공적으로 저장 후 입력 텍스트 초기화
      setInputText('');
      onSaveDiary(); // 저장 후 부모 컴포넌트의 저장 이벤트 핸들러 호출

      // 소켓을 통해 서버에 일기 저장 이벤트 전송
      socket.emit('saveDiary', data);

    } catch (error) {
      console.error('일기 저장 중 오류 발생:', error); // 저장 과정에서 오류 발생 시 콘솔에 오류 메시지 출력
    }
  };

  // 사용자의 활동을 감지하는 이벤트 리스너 등록
  useEffect(() => {
    const handleUserActivity = () => {
      resetTimer();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  // JSX를 반환하여 화면에 렌더링
  return (
    
    <div className={style.modalContainer}>
      <textarea
        className={style.text}
        value={inputText}
        onChange={handleInputChange}
        placeholder="일기 내용을 입력하세요..."
        rows={24}
        cols={60}
        // style={{ width: '100%', padding: '10px' }}
      />
      <div>
        <button onClick={handleSaveChanges} className={style.savebutton} > 
          저장
        </button>
      </div>
    </div>
  );
}

export default SocketModel;
