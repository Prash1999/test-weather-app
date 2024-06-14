const express = require('express');
const cors = require('cors');
const cityRoutes = require('./routes/cityRoutes');
const intervalRoutes = require('./routes/intervalRoutes');
const fetchWeatherRoutes = require('./routes/fetchWeatherRoutes');
require('./config/db'); // Connect to MongoDB
const app = express();
app.use(cors());
app.use(express.json());
app.use('/cities', cityRoutes);
app.use('/interval', intervalRoutes);
app.use('/fetch-weather', fetchWeatherRoutes)
module.exports = app;