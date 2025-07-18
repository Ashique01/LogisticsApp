const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;
