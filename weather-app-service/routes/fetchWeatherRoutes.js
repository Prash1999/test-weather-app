const express = require('express');
const { fetchWeatherDataForAllCities } = require('../services/weatherService');
const router = express.Router();
router.post('/', async (req, res) => {
    try {
        fetchWeatherDataForAllCities();
        res.status(201).json({message: "Weather Fetched successfully for all cities"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = router;