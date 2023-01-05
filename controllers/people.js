let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const creatPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pleace provide name " });
  }
  res.status(200).json({ success: true, person: name });
};

const creatPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pleace provide name " });
  }
  res.status(200).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = {
  getPeople,
  creatPerson,
  creatPersonPostman,
  updatePerson,
  deletePerson,
};