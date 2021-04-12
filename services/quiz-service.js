const quizzes = require('./quizzes.json');

const findAllQuizzes = () => {
    return quizzes;
};

const findQuizById = (quizId) => {
    return quizzes.find(q => {
        return q._id === quizId;
    })
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