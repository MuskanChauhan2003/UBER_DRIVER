const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const App = express();

const cors = require('cors');

App.use(cors());


App.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = App;