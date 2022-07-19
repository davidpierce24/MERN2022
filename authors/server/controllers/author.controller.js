const { Author } = require('../models/author.model');

// create an author
module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch(err => {
            res.status(400).json({message: "something went wrong when creating an author", error: err})
        })
}

// pull all authors
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({message: "something went wrong when finding all authors", error: err}))
}

// pull a single author by id
module.exports.findAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json({message: "something went wrong when finding a single author", error: err}))
}

// update an author by id
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json({message: "something went wrong when updating an author", error: err}))
}

// delete an author by id
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "something went wrong when deleting an author", error: err}))
}