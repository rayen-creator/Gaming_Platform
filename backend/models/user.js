const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Password: String,
    // Email: { type: String, required: true, unique: true },
    // Password: { type: String, required: true },
});

// userSchema.plugin(uniqueValidator);
const user = mongoose.model('User', userSchema);
module.exports = user;