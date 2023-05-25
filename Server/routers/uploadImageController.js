
const express = require("express");
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    }
  });
  const upload = multer({ storage });
  
  
  router.post('/upload/', upload.single('image'), (req, res) => {
    console.log(req.file)
    res.json(req.file);
  });
  