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
} = require("./DistributorService");

const {getAllActivityByFcId} = require('../Activity/ActivityService')

// get all distributor data
router.get("/", getAllDistributors);

// get all distributor data
router.get("/email/", getOneDistributorByEmail);

// get one entry by id
router.get("/:id", getOneDistributorById);

// create new entry
router.post("/", createNewDistributor);

// update entry by id
router.put("/:id", updateDistributorById);

// delete entry by id
router.delete("/:id", deleteDistributorById);

// get all activity by fc id
router.delete("/:id", deleteDistributorById);


// change status
router.delete("/status/:id", changeStatusById);
module.exports = router;
