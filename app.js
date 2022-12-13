const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
var passport = require("passport");
var crypto = require("crypto");
var routes = require("routes");
const MongoStore = require("connect-mongo");

const connection = require("./config/database");

//mongodb connection

require("dotenv").config();

// passport authentication

require("./config/passport");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sessions
const sessionstore = MongoStore.create({
  mongoUrl: process.env.DB_STRING,
  collection: "sessions",
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

//routes

app.use(routes);

app.listen(5000);
