const express = require('express');
const app = express();

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

require('./controllers/quiz-controller.js')(app);

app.listen(PORT, () => console.log("Node Server started on port: " + PORT));