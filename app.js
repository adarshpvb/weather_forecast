const { response } = require("express");
const express = require("express");
const path = require("path");
const ejs= require('ejs');
const app = express();
const mongoose = require('mongoose');
const jsdom = require('jsdom');
// require("./conn");
const { JSDOM } = jsdom;

const port = process.env.PORT || 3000;


app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));

// mongoose.connect('mongodb://localhost:27017/weatherRegistration', {useNewUrlParser: true});

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });

// const user = mongoose.model('User', userSchema);

global.document = new JSDOM(ejs).window.document;

app.get("/", function(req, res){
    res.render("home");
});

app.get("/index",function (req,res){
    res.render("index");
});

app.post("/index",function(req,res){
    res.render("index");
    console.log("Post successfull");
});

app.listen(port, () =>{
    console.log(`server is running at port number ${port}`);
});
