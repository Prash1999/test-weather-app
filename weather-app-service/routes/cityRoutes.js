const express = require('express');
const City = require('../models/City');
const router = express.Router();
router.get('/', async (req, res) => {
    const cities = await City.find();
    res.json(cities);
});
router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const newCity = new City({ name, temperatures: [] });
        await newCity.save();
        res.status(201).json(newCity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        await City.findByIdAndDelete(req.params.id);
        res.json({ message: 'City deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = router;