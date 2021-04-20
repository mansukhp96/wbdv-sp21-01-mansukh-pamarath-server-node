const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CONNECTION_URL = 'mongodb+srv://mansukhp96:Tempe$t1996@cluster0.g1fia.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL,
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
//Configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const PORT = process.env.PORT;

require('./controllers/quizzes-controller.js')(app);
require('./controllers/questions-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

app.listen(PORT || 4000, () => console.log("Node Server started on port: " + PORT));