const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
});

const user = mongoose.model('User', userSchema);
module.exports = user;