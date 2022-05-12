const express = require('express');
const { errorHandler, verifyToken } = require('./middleware')
const mathHandlers = require('./handlers/math')


const app = express();

app.use(express.json());

app.get('/weekend',mathHandlers.weekend)
app.get('/leapyear',mathHandlers.leapYear)


app.use(errorHandler);
app.use('*', (req, res, next) => {
    res.status(404).json({ error: `unknown route` });
});


module.exports = app;