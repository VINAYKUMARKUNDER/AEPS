const express = require("express");
const router = express.Router();
const db = require("../../database");
const UserModule = require("./User");
require("dotenv").config();
const bcrypt = require("bcrypt");
const json = require("jsonwebtoken");
const {getIPAddress} = require('../../routers/Common');
const geoip = require('geoip-lite');

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
      data: "Invalid email or password",
    });
  }
  const range = await userMaping(userData.email, body.type);
  if(!range)res.status(500).json('you are out of range...');
  console.log(range)
  const result = bcrypt.compareSync(body.password, userData.password);

  if (result) {
    userData.password = undefined;
    const jsontoken = json.sign({ result: userData }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({
      success: 1,
      message: "login successfully",
      token: jsontoken,
    });
  } else {
    return res.json({
      success: 0,
      data: "Invalid email or password",
    });
  }
});

const getDataByType = async (email, type) => {
  if (type.toLowerCase("fc")) {
    const data = await db.query(
      `Select * from fc where email = '${email}'`,
      (err, result) => {}
    );

    return data[0][0];
  } else if (type.toLowerCase("distributor")) {
    const data = await db.query(
      `Select * from distributor where email = '${email}'`,
      (err, result) => {}
    );
    return data[0][0];
  } else if (type.toLowerCase("retailer")) {
    const data = await db.query(
      `Select * from retailer where email = '${email}'`,
      (err, result) => {}
    );
    return data[0][0];
  } else return "put valid type";
};

const userMaping = async (userEmail, userType) => {
  const u = await db.query(
    `SELECT * From registerActivity where userEmail = '${userEmail}' AND userType='${userType}';`,
    (err, res) => {}
  );
  const user = u[0][0];

  const userLatitude = user.latitude;
  const userLongitude = user.longitude;

  const ipAddress = await getIPAddress();
  // const geo = geoip.lookup(ipAddress);
  // const currentLatitude = geo.ll[0];
  // const currentLongitude = geo.ll[1];

  // define login range in km
  const range = 5;
  console.log(ipAddress)

  // get your range
  // const distance = haversineDistance(
  //   userLatitude,
  //   userLongitude,
  //   currentLatitude,
  //   currentLongitude
  // );
  // if(distance> range)return false;
  // else true;
  return true;
};




// calculate distance
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = (degree) => {
    return degree * (Math.PI / 180);
  };

  const earthRadius = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
};


module.exports = router;
