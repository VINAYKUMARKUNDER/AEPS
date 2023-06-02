const express = require("express");
const router = express.Router();
const {
  createNewDistributor,
  deleteDistributorById,
  getAllDistributors,
  getOneDistributorByEmail,
  getOneDistributorById,
  updateDistributorById,
  changeStatusById,
  getAllRetailerByDistributorId,
} = require("./DistributorService");

const {
  getAllActivityByDistributorId,
  getActivityByDistributorIdAndByDate,
  getBetweenTwoDatesActivityByDistributorId,
} = require("../Activity/ActivityService");

// get all distributor data
router.get("/", getAllDistributors);

// get all distributor data
router.get("/email/", getOneDistributorByEmail);

// get one entry by id
router.get("/:id/", getOneDistributorById);

// create new entry
router.post("/", createNewDistributor);

// update entry by id
router.put("/:id/", updateDistributorById);

// delete entry by id
router.delete("/:id/", deleteDistributorById);

// get all Retailers by id
router.get("/retailers/:id/", getAllRetailerByDistributorId);

// change status
router.delete("/status/:id/", changeStatusById);

// get between two dates enrty by fc id
router.get("/dates/:id/:start/:end/", getBetweenTwoDatesActivityByDistributorId);

// get between two dates enrty by fc id
router.get("/date/:id/:date/", getActivityByDistributorIdAndByDate);

// get all enrty by fc id
router.get("/activity/:id/", getAllActivityByDistributorId);
module.exports = router;
