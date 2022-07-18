const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.post('/api/authors/create', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findAuthor);
    app.put('/api/authors/update/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);
}