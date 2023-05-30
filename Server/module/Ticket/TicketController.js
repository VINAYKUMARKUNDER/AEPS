const express = require("express");
const router = express.Router();
const {
  createTicket,
  deleteTicketById,
  getAllTicket,
  getOneTicketById,
  updateTicketById,
} = require("./TicketService");

// get all entry
router.get("/", getAllTicket);

// get entry by id
router.get("/:id", getOneTicketById);

// create new entry
router.post("/", createTicket);

// updated entry by id
router.put("/:id", updateTicketById);

// deleted entry by id
router.delete("/:id", deleteTicketById);

module.exports = router;
