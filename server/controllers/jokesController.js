const Jokes = require('../models/jokeModel');

module.exports.allJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.singleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(singleJoke => res.json({ user: singleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.newJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newJokes => res.json({ user: newJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateJokes = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJokes => res.json({ user: updatedJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJokes = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


