const mongoose = require('mongoose');

const quizAttemptSchema = require('./quiz-attempts-schema');

const quizAttemptModel = mongoose.model(
    'QuizAttemptModel',
    quizAttemptSchema
);

module.exports = quizAttemptModel;