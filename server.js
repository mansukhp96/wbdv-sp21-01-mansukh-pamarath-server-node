const express = require('express');
const quizController = require('./controllers/quiz-controller.js');
const app = express();
const PORT = 4000;

quizController(app);

app.listen(PORT, () => console.log("Node Server started on port: " + PORT));