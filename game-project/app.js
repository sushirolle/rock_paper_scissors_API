const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//set up all used routes
const choicesRoutes = require('./api/routes/choices');
const choiceRoutes = require('./api/routes/choice');
const playRoutes = require('./api/routes/play');
const homeRoutes = require('./api/routes/home');

app.use('/choices', choicesRoutes);
app.use('/choice', choiceRoutes);
app.use('/play', playRoutes);
app.use('/', homeRoutes);

//create and forward errors
app.use((req, res, next) => {
    const error = new Error('Route Does Not Exist!');
    error.status = 404 ;
    next(error);
})

//handle errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;