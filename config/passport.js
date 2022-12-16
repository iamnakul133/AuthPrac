const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const connection = require("./database");
const User = connection.models.User;
