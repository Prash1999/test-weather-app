const axios = require('axios');
const City = require('../models/City');
let intervalInMinutes = 60; // Default interval
let intervalId;
const fetchWeatherDataForAllCities = async () => {
    const cities = await City.find();
    const apiKey = 'dd11469d2ec2d016ca3eab70841dff7f';
    for (let city of cities) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=metric`);
            const temp = response.data.main.temp;
            city.temperatures.push({ time: new Date(), temp });
            await city.save();
        } catch (error) {
            console.error(`Error fetching weather data for ${city.name}: ${error.message}`);
        }
    }
};
const setFetchInterval = (interval) => {
    intervalInMinutes = interval;
    clearInterval(intervalId);
    intervalId = setInterval(fetchWeatherDataForAllCities, intervalInMinutes * 60 * 1000);
};
// Initialize the interval
intervalId = setInterval(fetchWeatherDataForAllCities, intervalInMinutes * 60 * 1000);
module.exports = {
    setFetchInterval,
    fetchWeatherDataForAllCities
};