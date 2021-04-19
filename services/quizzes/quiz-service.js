const quizzes = require('./quizzes.json');

const quizzesModel = require('../../models/quizzes-model');

const findAllQuizzes = () => {
    return quizzesModel.find();
};

const findQuizById = (quizId) => {
    return quizzesModel.findOne({_id : quizId});
};

//TODO: Mongoose A8
const createQuiz = () => {};
const updateQuiz = () => {};
const deleteQuiz = () => {};

module.exports = {
    createQuiz,
    findQuizById,
    findAllQuizzes,
    updateQuiz,
    deleteQuiz
}