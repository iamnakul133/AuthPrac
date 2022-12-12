const express = require("express");

const app = express();

middleware1 = (req, res, next) => {
  console.log("I am a middleware 1");
  next();
};

middleware2 = (req, res, next) => {
  console.log("I am middlware 2");
  next();
};

errorHandler = (err, req, res, next) => {
  if (err) {
    console.log("I am a error");
  }
};
app.use(middleware1);
app.use(middleware2);

app.get("/", (req, res, next) => {
  res.end("<h1>Hloo Worls</h1>");
  console.log("lkahdha");
  next();
});

app.use(errorHandler);

app.listen(5000);
