module.exports = (app) => {
    const quizService = require('../services/quizzes/quiz-service');

    const findAllQuizzes = (req, res) => {
        quizService.findAllQuizzes()
            .then(quizzes => {
                res.send(quizzes)
            });
    }

    const findQuizById = (req, res) => {
        const qid = req.params.quizId;
        quizService.findQuizById(qid)
            .then(quiz => {res.send(quiz)});
    }

    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/quizzes/:quizId", findQuizById);
}
