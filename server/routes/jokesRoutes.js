const JokesController = require('../controllers/jokesController');

module.exports = app => {
    app.get('/api/jokes', JokesController.allJokes);
    app.get('/api/jokes/:id', JokesController.singleJoke);
    app.put('/api/jokes/:id', JokesController.updateJokes);
    app.post('/api/jokes', JokesController.newJokes);
    app.delete('/api/jokes/:id', JokesController.deleteJokes);
}
