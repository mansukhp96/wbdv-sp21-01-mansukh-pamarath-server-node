const mongoose = require('mongoose');
const questionsSchema = require('../questions/questions-schema');
const quizAttempts = mongoose.Schema({
    _id : String,
    score : Number,
    quiz : { type : String, ref : 'QuizzesModel' },
    answers : [questionsSchema]
}, { collection : 'quizAttempts' })

module.exports = quizAttempts;