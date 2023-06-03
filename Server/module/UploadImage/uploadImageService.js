
const multer = require("multer");

const upload = multer({
  limits:1024*1024*5,
  fileFilter: (req, file, done)=>{
    if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
      done(null, true);
    }else{
      done('file type not supported', false);
    }
  }
});

module.exports = {
  uploadProfile: multer({
    limits:1024*1024*5,
    fileFilter: (req, file, done)=>{
      if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        done(null, true);
      }else{
        done('file type not supported', false);
      }
    },
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
    limits:1024*1024*5,
    fileFilter: (req, file, done)=>{
      if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        done(null, true);
      }else{
        done('file type not supported', false);
      }
    },
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
    limits:1024*1024*5,
    fileFilter: (req, file, done)=>{
      if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        done(null, true);
      }else{
        done('file type not supported', false);
      }
    },
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/aadharFrontImage");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("aadharFront"),

  uploadPanCardImage: multer({
    limits:1024*1024*5,
    fileFilter: (req, file, done)=>{
      if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        done(null, true);
      }else{
        done('file type not supported', false);
      }
    },
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
    limits:1024*1024*5,
    fileFilter: (req, file, done)=>{
      if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        done(null, true);
      }else{
        done('file type not supported', false);
      }
    },
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
    limits:1024*1024*5,
    fileFilter: (req, file, done)=>{
      if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        done(null, true);
      }else{
        done('file type not supported', false);
      }
    },
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
    limits:1024*1024*5,
    fileFilter: (req, file, done)=>{
      if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        done(null, true);
      }else{
        done('file type not supported', false);
      }
    },
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




