//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
const posts= [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function (req, res){
  res.render( "home");

})

app.get("/foods", function(req, res){
  res.render( "foods",);
})

app.get("/books", function(req, res){
  res.render( "books");
})

app.get("/compose", function(req, res){
  res.render( "compose",{});
})


app.post("/compose", function(req, res){
  const post = {
    title: req.body.textHead,
    content: req.body.textBody
  };
  posts.push(post);
  res.redirect("/");
})

app.post("/books", function (req, res) {
  res.redirect("/books");
})

app.post("/foods", function (req, res) {
  res.redirect("/foods");
})


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
