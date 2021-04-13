module.exports = (app) => {
    const quizService = require('../services/quizzes/quiz-service');

    const findAllQuizzes = (req, res) => {
        res.send(quizService.findAllQuizzes());
    }

    const findQuizById = (req, res) => {
        const qid = req.params.quizId;
        res.send(quizService.findQuizById(qid));
    }

    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/quizzes/:quizId", findQuizById);
}
