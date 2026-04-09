const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    course: String,
    skills: [String],   
    address: {
        city: String,
        pincode: Number
    },
   isActive: Boolean,
   mark: [{subject: String, score: Number}]
});

const User = mongoose.model('User', userSchema,"myUsers");

module.exports = User;