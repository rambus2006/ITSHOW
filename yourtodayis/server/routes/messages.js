const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// POST 요청 처리
router.post('/', messageController.saveMessage);

// GET 요청 처리 (메시지 읽기)
router.get('/', messageController.getMessage);

module.exports = router;
