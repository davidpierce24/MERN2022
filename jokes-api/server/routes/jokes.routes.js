const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:_id', JokesController.findOneJoke);
    app.post('/api/jokes/new', JokesController.createNewJoke);
    app.put('/api/jokes/update/:_id', JokesController.updateJoke);
    app.delete('/api/jokes/delete/:_id', JokesController.deleteJoke)
}