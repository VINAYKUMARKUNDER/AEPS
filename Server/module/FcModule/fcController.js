const express = require("express");
const router = express.Router();


const {
  createNewFc,
  deleteFcById,
  getAllFc,
  getOneFcByEmail,
  getOneFcById,
  updateFcById,
} = require("./FcService");



// get all fc data
router.get("/",getAllFc);

// find by email
router.get("/email/",getOneFcByEmail);

// find by id
router.get("/:id",getOneFcById);

// create new entry
router.post("/", createNewFc);

// update entry
router.put("/:id", updateFcById);

// deleted enrty by id
router.delete("/:id",deleteFcById);

module.exports = router;
