const express = require('express');
const router = express.Router();
const { loginAdmin, verifyAdmin } = require('../controller/adminController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/login', loginAdmin);
router.get('/verify', verifyToken, verifyAdmin);

module.exports = router;
