const express = require('express');

const app = express();

app.use(express.static('static'));

app.get('/', (req,res) => {
    res.send('<h1>Home Page<h1>');
});

app.listen(80);