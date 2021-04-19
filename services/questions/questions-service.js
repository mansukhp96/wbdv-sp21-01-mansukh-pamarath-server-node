const questions = require('./questions.json');
const questionsModel = require('../../models/questions-model');

const createQuestion = () => {};

const createQuestionForQuiz = () => {};

const findAllQuestions = () => {
    // return questions;
    return questionsModel.find();
};
const findQuestionsForQuiz = (qizId) => {
    // return questions.filter(q => {
    //     return q.quizId === qizId;
    // })
    return questionsModel.find({ quizId : qizId });
};

const findQuestionById = (qId) => {
    // return questions.find(q => {
    //     return q._id === qId;
    // })
    return questionsModel.findOne({_id : qId});
};

const updateQuestion = () => {};
const deleteQuestion = () => {};

module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    createQuestionForQuiz,
    updateQuestion,
    deleteQuestion
}