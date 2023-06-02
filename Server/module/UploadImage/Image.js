const express = require("express");
const router = express();
const {
  uploadAadharBack,
  uploadAadharFront,
  uploadMapingImage,
  uploadPanCardImage,
  uploadPoliceVarificationImage,
  uploadProfile,
  uploadShopImage,
} = require("./uploadImageService");

router.post("/profile-img/", uploadProfile, (req, res) => {
  return res.json(req.file);
});

router.post("/aadharf-img/", uploadAadharFront, (req, res) => {
  return res.json(req.file);
});

router.post("/aadharb-img/", uploadAadharBack, (req, res) => {
  return res.json(req.file);
});

router.post("/pan-img/", uploadPanCardImage, (req, res) => {
    return res.json(req.file);
});

router.post("/police-img/", uploadPoliceVarificationImage, (req, res) => {
    return res.json(req.file);
});

router.post("/maping-img/", uploadMapingImage, (req, res) => {
    return res.json(req.file);
});

router.post("/shop-img/", uploadShopImage, (req, res) => {
    return res.json(req.file);
});


module.exports=router;
