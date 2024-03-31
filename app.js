//jshint esversion:6
require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const mongoose= require('mongoose')

const ejs = require("ejs")

const secretRouter = require("./routes/secret")

const app= express()

app.use(express.static("public"));

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
    extended:true,
}))

app.use(secretRouter)


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    app.listen(3000, function(){
        console.log("server started at port http://localhost:3000/");
    })
})
.catch(err=>{
    console.log(err);
})