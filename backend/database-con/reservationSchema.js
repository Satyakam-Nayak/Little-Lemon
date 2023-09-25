const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    date: String,
    time: String,
    occasion: String,
    guest: Number,
});

module.exports = mongoose.model('reservations',reservationSchema);