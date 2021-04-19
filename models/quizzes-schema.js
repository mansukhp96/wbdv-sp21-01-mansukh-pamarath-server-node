const mongoose = require("mongoose");
const quizzesSchema = mongoose.Schema({
    _id : String,
    title : String
}, {collection : "quizzes"});

module.exports = quizzesSchema;