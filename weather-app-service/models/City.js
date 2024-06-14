const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    name: String,
    temperatures: [{ time: Date, temp: Number }]
});
const City = mongoose.model('City', citySchema);
module.exports = City;