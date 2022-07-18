const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'gotta have it'],
        minlength: [3, 'gotta be longer']
    }
}, { timestamps: true });

// const Model = mongoose.model('Model', ModelSchema)

// module.exports = Model;

// below will only work if controller uses curly braces around the import

module.exports.Author = mongoose.model('Author', AuthorSchema)