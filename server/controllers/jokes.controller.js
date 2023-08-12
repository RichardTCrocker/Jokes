// 1. import the model
const Joke = require("../models/jokes.model")

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res)=>{
    res.json({message: "ok"})
}

module.exports.allJokes = (req, res)=>{
    Joke.find()
        .then(jokeList => res.json(jokeList))
        .catch(err=>res.json(err))
}

module.exports.oneJoke = (req, res)=>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err=>res.json(err))
}

module.exports.addJoke = (req, res)=>{
    Joke.create(req.body)
    .then(newJoke=>res.json(newJoke))
    .catch(err=>res.json(err))
}

module.exports.updateJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
        .then(updatedJoke =>res.json(updatedJoke))
        .catch(err=>res.json(err))
}

module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(status=>res.json(status))
        .catch(err=>res.json(err))
}