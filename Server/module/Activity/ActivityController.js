const express = require("express");
const router = express.Router();
const verifyToken = require("../../Jwt/Auth/AuthController");
const {
  createNewActivity,
  deleteActivity,
  getAllActivity,
  getOneActivityById,
  updateActivity,
} = require("./ActivityService");

// get all entry
router.get("/", getAllActivity);

// get entry by id
router.get("/:id", getOneActivityById);

// create new entry
router.post("/", createNewActivity);

// updated entry by id
router.put("/:id", updateActivity);

// deleted entry by id
router.delete("/:id", deleteActivity);

module.exports = router;
