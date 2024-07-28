const express = require("express");
const router = express.Router();
const person = require("./../models/person");

router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data is saved");
    res.send(data);
  } catch (error) {
    console.log("internet server error");
    res.status(500).json({
      error: "internet server error",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    //create a new person document using mongoose model
    const newperson = new person(data);
    const response = await newperson.save();
    console.log("data is saved");
    res.send(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "internet server error",
    });
  }
});
router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype; // extract the worktype from url parameter
    if (worktype == "chef" || worktype == "manager" || worktype == "waiter") {
      const response = await person.find({ work: worktype });
      console.log("data is saved");
      res.send(response);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "intrnal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const updatedpersondata = req.body;
    const response = await person.findByIdAndUpdate(
      personid,
      updatedpersondata,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({
        error: "person not found",
      });
    }
    console.log("data is updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const response = await person.findByIdAndDelete(personid);
    if (!response) {
      return res.status(404).json({
        error: "person not found",
      });
    }
    console.log("data is deleted");
    res.status(200).json({ messsage: "deletd succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
