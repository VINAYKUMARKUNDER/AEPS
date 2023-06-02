const express = require("express");
const router = express.Router();
const {verifyToken} = require('../../Jwt/Auth/AuthController')

const {
  createNewFc,
  deleteFcById,
  getAllFc,
  getOneFcByEmail,
  getOneFcById,
  updateFcById,
} = require("./FcService");

const {getAllActivityByFcId} = require('../Activity/ActivityService')



// get all fc data
router.get("/",verifyToken, getAllFc);

// find by email
router.get("/email/",verifyToken, getOneFcByEmail);

// find by id
router.get("/:id",verifyToken,getOneFcById);

// create new entry
router.post("/", createNewFc);

// update entry
router.put("/:id",verifyToken, updateFcById);

// deleted enrty by id
router.delete("/:id",verifyToken,deleteFcById);

// get all enrty by fc id
router.get("/activity/:id",getAllActivityByFcId);

module.exports = router;
