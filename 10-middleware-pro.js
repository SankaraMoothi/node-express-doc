const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

//using logger as middleware as easy way and also import from separate file

// app.use([logger, authorize]);

//we can also give path in use
// app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/product", [logger, authorize], (req, res) => {
  res.send("Products");
});
app.get("/api/item", [logger, authorize], (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server started");
});
