import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal.module.css'; // 스타일 파일

function Modal2({ sendDataToParent }) {
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 상태로 관리
  const [htmlContent, setHtmlContent] = useState('일기를 입력하세요');

  // window.localStorage.setItem("content", "일기를 입력하세요")
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value); // 입력된 텍스트 업데이트
  };

  // 입력한 일기 내용을 html 요소에 추가하는 함수 
  const handleSaveChanges = () => {
    //sendDataToP/arent(inputText); // 부모 컴포넌트에 입력된 텍스트 전달
    // const htmlCode = `<p>{inputText}</p>`
    console.log("content", inputText)
    const htmlCode = `<p>${inputText}</p>`; // Create HTML string
    setHtmlContent(htmlCode); // Store HTML content in state
    handleCloseModal(); // 모달 닫기
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
