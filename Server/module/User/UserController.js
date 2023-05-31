const express = require("express");
const router = express.Router();
const db = require("../../database");
const UserModule = require("./User");
require('dotenv').config();
const bcrypt = require('bcrypt');
const json = require('jsonwebtoken')

// get all entry
router.get("/", async (req, res) => {
  try {
    const data = await UserModule.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login user
router.post("/login", async (req, res) => {
    const body = req.body;
   const userData = await getDataByType(body.email, body.type);
    
      if (!userData) {
        return res.json({
          data: "Invalid email or password"
        });
      }
      
      const result = bcrypt.compareSync( body.password,userData.password);
     
      if (result) {
        userData.password = undefined;
        const jsontoken = json.sign({ result: userData }, process.env.JWT_SECRET, {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,

        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    
  
});


const getDataByType = async (email, type)=>{
    if (type.toLowerCase("fc")) {
      const data = await db.query(
        `Select * from fc where email = '${email}'`,
        (err, result) => {}
      );
      
      return data[0][0];
     
    }
    else if (type.toLowerCase("distributor")) {
         const data = await db.query(
          `Select * from distributor where email = '${email}'`,
          (err, result) => {}
        );
        return data[0][0];
      }

      else if (type.toLowerCase("retailer")) {
        const data =  await db.query(
          `Select * from retailer where email = '${email}'`,
          (err, result) => {}
        );
        return data[0][0];
    }
    else return ('put valid type')
    
}

module.exports = router;
