const express = require("express");
const router = express();
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "_" + Date.now() + ".jpg");
    },
  }),
}).single('image');

router.post("/upload/", upload, (req, res) => {
  console.log(req.file);
  res.json(req.file);
});

router.get("/", (req, res) => {
  console.log(multer);
  res.status(200).json("welcome to uploads");
});

module.exports = router;
