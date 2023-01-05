const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // if dont provide an next then the url load never stop
  next();
};
module.exports = logger;
