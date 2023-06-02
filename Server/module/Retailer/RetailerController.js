const express = require("express");
const router = express.Router();
const {
  createNewRetailer,

  getAllRetailer,
  getOneRetailerByEmail,
  getOneRetailerById,
  updateRetailerById,
  changeStatusById,
} = require("./RetailerService");

const {getAllActivityByRetailerId, getActivityByRetailerIdAndByDate, getBetweenTwoDatesActivityByRetailerId} = require('../Activity/ActivityService')

// get all entry
router.get("/", getAllRetailer);

// get entry by id
router.get("/:id", getOneRetailerById);

// get entry by email
router.get("/email/", getOneRetailerByEmail);

// create new entry
router.post("/", createNewRetailer);

// updated entry by id
router.put("/:id", updateRetailerById);

// deleted entry by id
// router.delete("/:id", deleteRetailerById);

// change status
router.put("/status/:id", changeStatusById);


// get between two dates enrty by Retailer id
router.get("/dates/:id/:start/:end/", getBetweenTwoDatesActivityByRetailerId);

// get between two dates enrty by Retailer id
router.get("/date/:id/:date/", getActivityByRetailerIdAndByDate);

// get all enrty by Retailer id
router.get("/activity/:id/", getAllActivityByRetailerId);

module.exports = router;
