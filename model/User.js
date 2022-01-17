const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = Schema({
    username: { type: String, required: true, minlength:6, maxlength:10 },
    password: { type: String, required: true, minlength:4, maxlength:200 }
})

module.exports = mongoose.model('user', user);