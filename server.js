const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CONNECTION_URL = process.env.REACT_APP_MONGO_SERVER
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

const PORT = 4000;

require('./controllers/quizzes-controller.js')(app);
require('./controllers/questions-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

app.listen(PORT, () => console.log("Node Server started on port: " + PORT));