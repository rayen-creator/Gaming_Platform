const mongoose = require('mongoose');
const gameSchema = mongoose.Schema({
    Platform: String,
    Playtime: String,
    Achievements: String
});

const game = mongoose.model('Game', gameSchema);
module.exports = game;