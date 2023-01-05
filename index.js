const express = require("express");
const app = express();
//importing router for people
const people = require("./routes/people");
//importing router for auth
const auth = require("./routes/auth");
//static assets for post
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

//router for people
app.use("/api/people", people);

//router for auth
app.use("/login", auth);

app.listen(5000, () => {
  console.log("server started");
});
