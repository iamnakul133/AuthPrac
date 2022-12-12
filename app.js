const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
var passport = require("passport");
var crypto = require("crypto");
var routes = require("routes");
const e = require("express");

//mongodb connection
const mongoDB =
  "mongodb+srv://nakul:Trivedi2242000@cluster0.vxv7ezi.mongodb.net/test";
mongoose.set("strictQuery", false);
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

require("dotenv").config();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sessions
const sessionstore = new mongoose.Schema({
  session: String,
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionstore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// passport authentication

require("./config/passport");

//routes

app.use(routes);

app.listen(5000);
