const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name: String,
    description: String,
    rating: Number,
});

module.exports = mongoose.model('testimonials',reviewSchema);