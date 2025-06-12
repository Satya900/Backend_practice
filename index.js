require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;


app.get('/', (req, res)=>{
    res.send("Hello");
})

app.get('/bio',(req, res)=>{
    res.send(`
        <h3>Satyabrata Mohanty</h3>
        <p>I am a Python developer with experience of 2years working on live project</p>
        `)
})


app.listen(port, ()=>{
    console.log("Server Running on port:" + port );
})