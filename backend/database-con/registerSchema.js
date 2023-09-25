const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    profilepic : String
});

module.exports = mongoose.model('users',registerSchema);