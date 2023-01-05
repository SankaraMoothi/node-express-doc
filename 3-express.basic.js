const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home Page Dude..😊");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page...");
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listen pn port 5000");
});
//app.get
//app.post
//app.put
//app.delete
