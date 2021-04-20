const quizAttemptDao = require('../daos/quiz-attempts-dao');

module.exports = (app) => {

    app.post('/api/quizzes/:qid/attempts', (req, res) => {
        return quizAttemptDao.createAttempt(req.params.qid, req.body)
            .then(status => res.send(status))
    });

    app.get('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptDao.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts)))

};