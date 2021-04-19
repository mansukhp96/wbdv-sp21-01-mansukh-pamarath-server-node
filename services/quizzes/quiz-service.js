const quizzes = require('./quizzes.json');

const quizzesModel = require('../../models/quizzes/quizzes-model');

const findAllQuizzes = () => {
    return quizzesModel.find();
};

const findQuizById = (quizId) => {
    return quizzesModel.findOne({_id : quizId})
        .populate("questions")
        .exec();
};

module.exports = {
    findQuizById,
    findAllQuizzes
}