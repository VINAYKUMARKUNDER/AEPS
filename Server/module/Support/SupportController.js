const express = require("express");
const router = express.Router();
const {
  createNewSupport,
  deleteSupportById,
  getAllSupport,
  getOneSupportById,
  updateSupportById,
} = require("./SupportService");

// get all entry
router.get("/", getAllSupport);

// get one entry by id
router.get("/:id", getOneSupportById);

// create new entry
router.post("/", createNewSupport);

// updated entry by id
router.put("/:id", updateSupportById);

// deleted entry by id
router.delete("/:id", deleteSupportById);

module.exports = router;
