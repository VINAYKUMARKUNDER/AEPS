const express = require("express");
const router = express.Router();
const {
  createNewTransaction,
  deleteTransactionById,
  getAllTransaction,
  getAllTransactionBetweenTwoDates,
  getAllTransactionByDistributorId,
  getAllTransactionByRetailerId,
  getOneTransactionById,
  updateTransactionById,
} = require("./TransactionHistoryService");

// get all entry
router.get("/", getAllTransaction);

// get entry by id
router.get("/:id", getOneTransactionById);

// get all transaction by retailer id
router.get("/retailer/:id", getAllTransactionByRetailerId);

// find all trancation by distributor id
router.get("/dist/:id", getAllTransactionByDistributorId);

// get all transaction between todays
router.get("/:start/:end", getAllTransactionBetweenTwoDates);

// create new entry
router.post("/", createNewTransaction);

// updated entry by id
router.put("/:id", updateTransactionById);

// deleted entry by id
router.delete("/:id", deleteTransactionById);

module.exports = router;
