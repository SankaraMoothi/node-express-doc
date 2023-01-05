const express = require("express");

const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">products</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, image, name };
  });
  res.json(newProducts);
});
app.get("/api/products/:productid", (req, res) => {
  const { productid } = req.params;

  const SingleProducts = products.find(
    (product) => product.id === Number(productid)
  );
  if (!SingleProducts) {
    return res
      .status(404)
      .send(
        `product Not Found...Or Exist...<a href="/api/products">products</a>`
      );
  }
  return res.json(SingleProducts);
});

//For Getting More Complex...
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  //{ productID: '2', reviewID: '3' }
  res.send("Hello World");
});
app.get("/api/v1/query", (req, res) => {
  //query is most fun thing Use Your mind and Make More Fun
  const { search, limit } = req.query;
  let sortedProduct = [...products];
  if (search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  if (sortedProduct.length < 1) {
    // res.status(200).send("no Product Matched Your Search");
    return res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).json(sortedProduct);
});

app.listen(5000, () => {
  console.log("server started");
});
