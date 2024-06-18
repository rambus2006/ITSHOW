const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diaryController');

// POST /api/diary - 일기 저장 API
router.post('/', diaryController.saveDiaryEntry);

// GET /api/diary - 모든 일기 조회 API
router.get('/', diaryController.getAllDiaryEntries);

module.exports = router;
