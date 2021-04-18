const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Password: String,
});

const user = mongoose.model('User', userSchema);
module.exports = user;