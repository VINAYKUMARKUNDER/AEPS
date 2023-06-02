
const multer = require("multer");

module.exports = {
  uploadProfile: multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/profileImage");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("profile"),

  uploadAadharBack: multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/aadharBackImage");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("aadharBack"),

  uploadAadharFront: multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/aadharFrontImage");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("aadharBack"),

  uploadPanCardImage: multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/PanCardImage");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("pancard"),

  uploadPoliceVarificationImage: multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/PoliceVarificationImage");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("policeVarification"),

  uploadShopImage: multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/ShopImage");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("shopImage"),

  uploadMapingImage: multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/MapingImage");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("mapingImage"),


};




