const express = require("express");
const router = express.Router();
const db = require("../../database");
const bcrypt = require("bcrypt");
const RetailerModule = require("../module/Retailer");

// get all entry
router.get("/", );

// get entry by id
router.get("/:id",);

// create new entry
router.post("/", );

// updated entry by id
router.put("/:id", );

// deleted entry by id
router.delete("/:id", );

module.exports = router;
