const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    rating: Number,
});

module.exports = mongoose.model('menus',menuSchema);