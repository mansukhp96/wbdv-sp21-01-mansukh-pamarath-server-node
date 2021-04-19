const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chalkboard',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify: false,
        useCreateIndex: true
    })

//Configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const PORT = 4000;

require('./controllers/quizzes-controller.js')(app);
require('./controllers/questions-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

app.listen(PORT, () => console.log("Node Server started on port: " + PORT));