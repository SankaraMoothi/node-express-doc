const authorize = (req, res, next) => {
  //just for ex..

  const { user } = req.query;
  if (user === "mass") {
    req.user = { name: "mass", id: 2 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
  console.log("authorize");
  next();
};

module.exports = authorize;
