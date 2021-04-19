const questionsService = require('../services/questions/questions-service');

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        // res.send(questionsService.findAllQuestions());
        questionsService.findAllQuestions()
            .then(questions => {
                res.send(questions);
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        // res.send(questionsService.findQuestionsForQuiz(quizId));
        questionsService.findQuestionsForQuiz(quizId)
            .then(questions => res.send(questions));
    }

    const findQuestionById = (req, res) => {
        const questionId = req.params.qid;
        questionsService.findQuestionById(questionId)
            .then(question => res.send(question));
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get("/api/questions/:qid", findQuestionById);

}