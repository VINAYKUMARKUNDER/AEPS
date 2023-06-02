const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Jwt/Auth/AuthController");

const {
  createNewFc,
  deleteFcById,
  getAllFc,
  getOneFcByEmail,
  getOneFcById,
  updateFcById,
} = require("./FcService");

const {
  getAllActivityByFcId,
  getBetweenTwoDatesActivityByFcId,
 getActivityByFcIdAndByDate
} = require("../Activity/ActivityService");

// get all fc data
router.get("/", verifyToken, getAllFc);

// find by email
router.get("/email/", verifyToken, getOneFcByEmail);

// find by id
router.get("/:id", verifyToken, getOneFcById);

// create new entry
router.post("/", createNewFc);

// update entry
router.put("/:id", verifyToken, updateFcById);

// deleted enrty by id
router.delete("/:id", verifyToken, deleteFcById);

// get between two dates enrty by fc id
router.get("/dates/:id/:start/:end/", getBetweenTwoDatesActivityByFcId);

// get between two dates enrty by fc id
router.get("/date/:id/:date/", getActivityByFcIdAndByDate);

// get all enrty by fc id
router.get("/activity/:id/", getAllActivityByFcId);

module.exports = router;
