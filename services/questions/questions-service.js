const questions = require('./questions.json');

const createQuestion = () => {};

const createQuestionForQuiz = () => {};

const findAllQuestions = () => {
    return questions;
};
const findQuestionsForQuiz = (qizId) => {
    return questions.filter(q => {
        return q.quizId === qizId;
    })
};

const findQuestionById = (qId) => {
    return questions.find(q => {
        return q._id === qId;
    })
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