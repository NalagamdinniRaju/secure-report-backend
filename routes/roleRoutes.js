const express = require('express');
const { createRole, updateRole } = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createRole);
router.put('/update', authMiddleware, updateRole);

module.exports = router;
