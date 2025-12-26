const express = require('express');
const router = express.Router();
const { healthLimiter } = require('../middleware/security.middleware');

router.get('/health', healthLimiter, (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = router;

