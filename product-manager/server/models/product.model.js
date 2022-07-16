const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'gotta have it']
    }, 
    price: {
        type: Number,
        required: [true, 'gotta have it']
    },
    description: {
        type: String,
        required: [true, 'gotta have it']
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema)