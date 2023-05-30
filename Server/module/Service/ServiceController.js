const express = require("express");
const router = express.Router();
const {
  createNewService,
  deleteServiceById,
  getAllService,
  getOneServiceById,
  updateServiceById,
} = require("./Servicees");

// get all entry
router.get("/", getAllService);

// get one entry by id
router.get("/:id", getOneServiceById);

// create new entry
router.post("/", createNewService);

// updated entry by id
router.put("/:id", updateServiceById);

// deleted entry by id
router.delete("/:id", deleteServiceById);

module.exports = router;
