const express = require("express");
const router = express.Router();
const db = require("../database");
const UserModule = require("../module/User");
const ReatilerModule = require("../module/Retailer");
const FcModule = require("../module/FC");
const DistributorModule = require("../module/Distributor");
const AuthController = require('./AuthController');
const http_error = require('http-errors');
const bcrypt = require('bcrypt');

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
  try {
    const rawData = req.body;
    const type = rawData.type;
    const originalData=await getDataByType(rawData.email, rawData.type);
    if(!originalData) throw http_error.NotFound(`User is not found with email id: ${rawData.email}`);

    const fetchsData = originalData[0][0];
    const salt = bcrypt.genSaltSync(10);
    const isMatch = await bcrypt.compare('123', fetchsData.password).then(function(res) {
      return res;
    });
    
    if(!isMatch)return res.status(404).json('password is no match...');


    const user ={
      name:fetchsData.name,
      email:fetchsData.email,
      password:fetchsData.password
    }

    // rawData.createdAt=new Date();
    console.log(req.body)
    const created = await UserModule.create(req.body);
    // console.log(created)

    const token = AuthController.generateToken(user);
    
    return res.status(200).json({token});
   
  } catch (error) {
    return res.status(500).json(`User is not found...`);
  }
});


const getDataByType = async (email, type)=>{
    if (type.toLowerCase("fc")) {
      const data = await db.query(
        `Select * from fc where email = '${email}'`,
        (err, result) => {}
      );
      
      return data;
     
    }
    else if (type.toLowerCase("distributor")) {
         const data = await db.query(
          `Select * from distributor where email = '${email}'`,
          (err, result) => {}
        );
        return data;
      }

      else if (type.toLowerCase("retailer")) {
        const data =  await db.query(
          `Select * from retailer where email = '${email}'`,
          (err, result) => {}
        );
        return data;
    }
    else return ('put valid type')
    
}

module.exports = router;
