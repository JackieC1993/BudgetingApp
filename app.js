const express = require('express');
const app = express();
const cors = require('cors');
const transactionsController = require('./controllers/transactionsController');


app.use('/transactions', transactionsController);

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to My Budget App");
})

module.exports = app;

