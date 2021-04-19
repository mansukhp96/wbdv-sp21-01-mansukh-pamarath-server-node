const quizAttemptsService = require('../services/quiz-attempts/quiz-attempts-service');

module.exports = (app) => {
    app.post('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptsService.createAttempt(req.params.qid, req.body)
            .then(attempt => res.send(attempt))
    )
    app.get('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptsService.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts))
    )
}