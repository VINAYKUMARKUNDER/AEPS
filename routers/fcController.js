const express = require("express");
const router = express.Router();

const db = require("../database");
const FcModule = require("../module/FC");

// get all fc data
router.get("/", async (req, res) => {
  try {
    const allData = await FcModule.findAll();
    res.status(200).json(allData);
  } catch (error) {
    res.status(200).json(error);
  }
});

// find by id
router.get("/:id", async (req, res) => {
  try {
    const data = await FcModule.findByPk(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json(error);
  }
});


// create new entry
router.post("/", async (req, res) => {
  try {
    const data = await FcModule.create(req.body);
    res.status(201).json((msg = "new data create successfully..."));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
