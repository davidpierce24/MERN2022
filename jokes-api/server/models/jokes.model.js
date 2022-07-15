const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup is required"], 
            minlength: [10, "setup gotta be longer"]
        }, 
        punchline: {
            type: String,
            required: [true, "punchline is required"],
            minlength: [3, "punchline gotta be longer"]
        }
    }, 
    { timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;