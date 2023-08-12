// 1. import the controller
const JokeController = require("../controllers/jokes.controller")

// 2. export a function that reads one argument (app)
module.exports = (app) => {
    app.get("/api/testing", JokeController.apiTest);
    app.get("/api/jokes", JokeController.allJokes);
    app.get("/api/jokes/:id", JokeController.oneJoke);
    app.post("/api/jokes", JokeController.addJoke);
    app.patch("/api/jokes/:id", JokeController.updateJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
}
// 3. include all the routes with the corresponding logic from controller