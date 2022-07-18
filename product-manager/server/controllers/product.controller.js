// must have curly braces around the import to do a one line export for the model
const { Product } = require('../models/product.model');

// create a product
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// pull all products
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

// pull a single product by id
module.exports.findProduct = (req, res) => {
    Product.findOne({_id:request.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}