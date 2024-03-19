const express = require('express');
require("dotenv").config()
const app = express();
const port = 3000;

app.use(express.json())

app.use(express.static(__dirname + '/'));
app.use(express.urlencoded())


//! ALL GET ENDPOINTS!!!

app.get('/',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/index.html')
})

app.get('/country',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/country.html')
})


//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})