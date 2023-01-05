const express = require("express");
const app = express();

//req=>middleware=>res

//instend of add middleware of all req we can create our own middleware

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // if dont provide an next then the url load never stop
  next();
};

app.get("/", logger, (req, res) => {
  //bad way of middleware

  // const method = req.method;
  // const url = req.url;
  // const time = new Date().getFullYear();
  // console.log(method, url, time);
  res.send("home");
});

app.get("/about", logger, (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server started");
});
