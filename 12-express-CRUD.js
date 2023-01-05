const express = require("express");
const app = express();
let { people } = require("./data");

//static assets for post
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

//login
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcom ${name}`);
  }
  res.status(401).send("Pleace Provide name");
});

//get all people

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//create an people

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pleace provide name " });
  }
  res.status(200).json({ success: true, person: name });
});

//create people with postman

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pleace provide name " });
  }
  res.status(200).json({ success: true, data: [...people, name] });
});

//update an person with id

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `Person Not Exist In ${id}...` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

//delete an persion with id

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `Person Not Exist In ${id}...` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server started");
});
