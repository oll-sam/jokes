const mongoose = require("mongoose");

const JokesShema = new mongoose.Schema({
    setup:String,
    punchline:String
})

const Jokes = mongoose.model('joke', JokesShema)

module.exports = Jokes;