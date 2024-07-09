const express = require('express');
const bodyParser = require('body-parser');
const contractRoutes = require('./routes/contractRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/contract', contractRoutes);

module.exports = app;
