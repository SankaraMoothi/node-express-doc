const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
//using logger as middleware as easy way and also import from separate file

// app.use([logger, authorize]);

//we can also give path in use
// app.use("/api", logger);

// there is an 3 option in middleware
//-->our own
//-->express
//-->third party

//1.app.use([logger, authorize]);
//2.app.use(express.static("./public"));
//3.morgan npm package
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/product", (req, res) => {
  res.send("Products");
});
app.get("/api/item", [logger, authorize], (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server started");
});
