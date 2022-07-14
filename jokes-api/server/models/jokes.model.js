const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: string,
            required: [true, "Setup is required"], 
            minlength: [10, "setup gotta be longer"]
        }, 
        punchline: {
            type: string,
            required: [true, "punchline is required"],
            minlength: [3, "punchline gotta be longer"]
        }
    }, 
    { timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;