const express = require('express');
const app = express();

// store cached result in memory
const cachedResult = {};
const apiRouter = require('./routes/api')(cachedResult);

app.use('/api', apiRouter);

module.exports = app;