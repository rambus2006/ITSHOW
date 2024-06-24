import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import io from 'socket.io-client';
import style from './Modal.module.css'; // 스타일 파일

const socket = io('http://localhost:4000'); // 서버 주소에 맞게 변경

function SocketModel({ sendDataToParent }) {
  const [showModal, setShowModal] = useState(false);  // 모달 열기/닫기 상태를 관리하는 상태 변수
  const [inputText, setInputText] = useState('');    // 입력된 텍스트를 관리하는 상태 변수
  const [htmlContent, setHtmlContent] = useState('일기를 입력하세요');  // HTML 컨텐츠를 관리하는 상태 변수
  const [timer, setTimer] = useState(10);  // 타이머 상태 변수
  const timeoutRef = useRef(null);  // 타이머 참조 변수

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

  // 모달 열기 함수
  const handleOpenModal = () => {
    setShowModal(true);
    resetTimer();
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setShowModal(false);
    resetTimer();
  };

  // 입력 값 변경 시 호출되는 함수
  const handleInputChange = (e) => {
    setInputText(e.target.value);  // 입력된 텍스트를 업데이트합니다
    resetTimer();
  };

  // 타이머 초기화 함수
  const resetTimer = () => {
    setTimer(10);  // 타이머를 10초로 재설정
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      window.location.href = "http://localhost:3000";
    }, 60000);
  };

  // 변경 사항 저장 함수 (비동기 처리)
  const handleSaveChanges = async () => {
    const htmlCode = `<p>${inputText}</p>`;  // HTML 문자열을 생성합니다
    setHtmlContent(htmlCode);  // HTML 컨텐츠를 상태에 저장합니다

    // 세션에서 입력값을 쓰는 사람 이름 가져오기
    const inusername = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email') || '';
    
    const data = {
      writer: inusername,
      message: inputText,  // 입력된 텍스트를 메시지로 보냅니다
      createdAt: new Date().toLocaleString(), // 댓글 작성 시간
      email: email
    };

    try {
      // 서버에 입력된 내용을 POST 요청으로 보냅니다
      const response = await axios.post('http://localhost:4000/api/diary', data, {
        headers: {
          'Content-Type': 'application/json',  // 요청 헤더에 JSON 형식으로 Content-Type을 설정합니다
        }
      });
      console.log('서버 응답:', response.data);  // 서버로부터 받은 데이터를 콘솔에 출력합니다

      // 성공적으로 저장 후 입력 텍스트 초기화 및 모달 닫기
      setInputText('');
      handleCloseModal();

      // 소켓을 통해 서버에 일기 저장 이벤트 전송
      socket.emit('saveDiary', data);

    } catch (error) {
      console.error('일기 저장 중 오류 발생:', error);  // 저장 과정에서 오류가 발생하면 콘솔에 오류 메시지를 출력합니다
      handleCloseModal();  // 오류 발생 시에도 모달을 닫습니다
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

  // JSX를 반환하여 화면에 렌더링합니다
  return (
    <div className="Modal">
      <p id="dynamic"></p>

      {/* 클릭 시 모달을 열고, HTML 컨텐츠를 출력합니다 */}
      <div className='inputText' onClick={handleOpenModal}>
        <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <span className={`${style["blinking-cursor"]}`}>|</span>
      </div>

      {/* React Bootstrap을 사용한 모달 */}
      <Modal show={showModal} onHide={handleCloseModal} className="texttoleft">
        <Modal.Header closeButton>
          <Modal.Title>일기 작성</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="일기 내용을 입력하세요..."
            rows={5}
            style={{ width: '100%', padding: '10px' }}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* 모달 하단에 닫기 버튼 */}
          <button onClick={handleCloseModal}>
            닫기
          </button>
          {/* 모달 하단에 저장 버튼 */}
          <button onClick={handleSaveChanges}>
            저장
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SocketModel;  // SocketModel 컴포넌트를 외부로 내보냅니다
