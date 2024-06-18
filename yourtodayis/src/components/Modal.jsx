import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal.module.css'; // 스타일 파일

function Modal2({ sendDataToParent }) {
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 상태로 관리
  const [message, setMessage] = useState('');
  const [htmlContent, setHtmlContent] = useState('일기를 입력하세요');

  // window.localStorage.setItem("content", "일기를 입력하세요")
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value); // 입력된 텍스트 업데
  };

  // 입력한 일기 내용을 html 요소에 추가하는 함수 
  const handleSaveChanges = () => {
    //sendDataToP/arent(inputText); // 부모 컴포넌트에 입력된 텍스트 전달
    console.log("content", inputText);
    const htmlCode = `<p>${inputText}</p>`; // Create HTML string
    setHtmlContent(htmlCode); // Store HTML content in state
  
    // 서버에다가 내용 보내야 하는 부분 코드
    // 저장 버튼 클릭 시 diaryText 상태를 출력
    const diaryEntry = {
      id: 1,
      message: inputText
    };
  
    const sendMessage = async () => {
      // JSON 형식으로 변환
      const jsonContent = JSON.stringify(diaryEntry);
    
      try {
        const response = await fetch('http://localhost:4000/api/diary', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonContent, // JSON 문자열을 직접 전달
        });
        const result = await response.json();
        if (response.ok) {
          setMessage(result.message); // 메시지 상태 업데이트
          alert(result.message); // 메시지 알람
          setShowModal(false); // 모달창 닫기
    
        } else {
          console.error('Failed to send message:', result);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    sendMessage(); // 함수를 호출하여 메시지를 보냄
  };
  

  return (
    <div className="Modal">    
    <p className='inputText' onClick={handleOpenModal} > <div dangerouslySetInnerHTML={{ __html: htmlContent }} /></p>

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
          <Button variant="secondary" onClick={handleCloseModal}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modal2;
