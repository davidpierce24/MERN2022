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

// const Product = mongoose.model('Product', ProductSchema)

// module.exports = Product;

// below will only work if controller uses curly braces around the import

module.exports.Product = mongoose.model('Product', ProductSchema)