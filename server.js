const express = require('express');
require("dotenv").config()
const app = express();
const mongoose = require('mongoose')
const port = 3000;

app.use(express.json())

app.use(express.static(__dirname + '/'));
app.use(express.urlencoded({extended : false}));

mongoose.connect("mongodb+srv://vivekkajale302:Vivek302@project-cluster.5ol6wbq.mongodb.net/StudyOverseasDB?retryWrites=true&w=majority&appName=Project-Cluster")
const User = require("./userModal")

//! ALL GET ENDPOINTS!!!

app.get('/',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/index.html')
})

app.get('/aus',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/aus.html')
})
app.get('/ire',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/ire.html')
})
app.get('/usa',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/usa.html')
})
app.get('/uk',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/uk.html')
})
app.get('/can',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/can.html')
})


//! ------------------------------POST METHODS---------------------------------------

app.post('/signin', async (req,res,next) => {
    try {
        const user = req.body;
        let result = await checkUser(user)
        if(result) {
            user.token = "none"
            console.log("User not found...Creating new user.")
            addUser(user)
            res.status(201)
            res.redirect('/')
        }
        else {
            console.log("ERR - user found")
            // res.redirect('/signin')
            // 400 - Bad request. Error from client side.
            res.status(400).json({
                "err":"ERR - User already exists! Try again or head to login.",
                "code":400
            })
        }
        next();
    } catch (error) {
        console.error(error);
    }
})




//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})

async function checkUser(inputuser) {
    try {
        if (await User.findOne({email : inputuser.email}) !== null) {
            return 0
        }
        else {
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}

async function addUser(user) {
    if (user.username !=="" & user.email !=="" & user.phonenumber !=="" & user.password !=="") {
        try {
            await User.create(user)
            console.log("User added successfully", user)      
        } catch (err) {
            console.error(err.message)
        }
    }
} 