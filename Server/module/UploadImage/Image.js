const express = require("express");
const router = express();
const multer = require("multer");

var pathName = "";

router.post(
  "/upload/:name",
  multer({
    limits: 1024 * 1024 * 5,
    fileFilter: (req, file, done) => {
      pathName = req.params.name;
      if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg"
      ) {
        done(null, true);
      } else {
        done("file type not supported", false);
      }
    },
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `uploads/${req.params.name}`);
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
    }),
  }).single("image"),
  (req, res) => {
    return res.json(req.file);
  }
);

module.exports = router;
