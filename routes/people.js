const express = require("express");

const router = express.Router();

const {
  getPeople,
  creatPerson,
  creatPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");
/*
//get all people

router.get("/", getPeople);

//create an people

router.post("/", creatPerson);

//create people with postman

router.post("/postman", creatPersonPostman);

//update an person with id

router.put("/:id", updatePerson);

//delete an persion with id

router.delete("/:id", deletePerson);
*/

//simple way setting route....

router.route("/").get(getPeople).post(creatPerson);
router.route("/postman").post(creatPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
