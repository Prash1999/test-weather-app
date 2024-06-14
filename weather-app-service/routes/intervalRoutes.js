const express = require('express');
const { setFetchInterval } = require('../services/weatherService');
const router = express.Router();
router.post('/', (req, res) => {
    const { interval } = req.body;
    setFetchInterval(interval);
    res.status(200).json({ message: `Fetch interval updated to ${interval} minutes` });
});
module.exports = router;