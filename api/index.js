const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/bio', (req, res) => {
    res.send(`
        <h3>Satyabrata Mohanty</h3>
        <p>I am a Python developer with experience of 2years working on live project</p>
    `);
});

module.exports = app;
module.exports.handler = serverless(app);