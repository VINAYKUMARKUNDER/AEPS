const express = require("express");
const router = express.Router();
const verifyToken = require('../../Jwt/Auth/AuthController')

// get all entry
router.get("/", );

// get entry by id
router.get("/:id",);

// create new entry
router.post("/", );

// updated entry by id
router.put("/:id", );

// deleted entry by id
router.delete("/:id", );

module.exports = router;
