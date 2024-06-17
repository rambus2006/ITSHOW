// App.js
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal.module.css';

function Modal2() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Modal">
      <p className='inputText' onClick={handleOpenModal}>일기를 작성하세요.</p>

      <Modal show={showModal} onHide={handleCloseModal} className="texttoleft">
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is the body of the modal.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modal2;
