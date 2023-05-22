const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../database");
const FcModule = require("../module/FC");
const jwttoken = require('./AuthController');

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
    if (!data)
      res.status(200).json(`Data not found with fc id :${req.params.id}`);
    else res.status(200).json(data);
  } catch (error) {
    res.status(200).json(error);
  }
});




// create new entry
router.post("/", async (req, res) => {
  try {
    const rawData = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(rawData.password, salt);
    rawData.password = hash;
    const data = await FcModule.create(rawData);
    const user={
      name:rawData.name,
      email:rawData.email,
      password:rawData.password
    }
    const token = jwttoken.generateToken(user);
    console.log(token)
    res.status(201).json((msg = "new data create successfully..."));
  } catch (error) {
    res.status(500).json(error);
  }
});



// update entry
router.put("/:id", async (req, res) => {
  try {
    const find = await FcModule.findByPk(req.params.id);
    if (!find)
      res.status(200).json(`Data not found with fc id :${req.params.id}`);
    else {
      const data = await FcModule.update(req.body, {
        where: {
          fc_id: req.params.id,
        },
      });
      if (data[0] == 0) res.status(200).json("already updated...");
      else res.status(200).json("update successfully....");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});




// deleted enrty by id
router.delete("/:id", async (req, res) => {
  try {
    const data = await FcModule.destroy({
      where: {
        fc_id: req.params.id,
      },
    });
    if (data == 1) res.status(200).json("deleted successfully");
    else res.status(200).json(`Data not found with fc id :${req.params.id}`);
  } catch (error) {
    res.status(500).json(error);
  }
});




module.exports = router;
