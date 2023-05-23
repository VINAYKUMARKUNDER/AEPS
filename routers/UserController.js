const express = require("express");
const router = express.Router();
const db = require("../database");
const UserModule = require("../module/User");

// get all entry
router.get("/", async (req, res) => {
  try {
    const data = await UserModule.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get entry by id
// router.get("/:id", async (req, res) => {
//   try {
//     const data = await UserModule.findByPk(req.params.id);
//     if (!data) res.status(200).json("data not found with id: ", req.params.id);
//     else res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // create new entry
// router.post("/", async (req, res) => {
//   try {
//     const data = await UserModule.create(req.body);
//     res.status(201).json("new entry created successfully...");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // updated entry by id
// router.put("/:id", async (req, res) => {
//   try {
//     const data = await UserModule.update(req.body, {
//       where: {
//         activity_id: req.params.id,
//       },
//     });
//     if (data[0] == 1) res.status(200).json("updated successfully...");
//     else res.status(200).json("already updated...");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // deleted entry by id
// router.delete("/:id", async (req, res) => {
//   try {
//     const data = await UserModule.destroy({
//       where: {
//         activity_id: req.params.id,
//       },
//     });
//     if (data == 0)
//       res.status(200).json("entry not found with id: ", req.params.id);
//     else res.status.json("deleted successfully...");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });


// login user
router.post('/', async (req , res)=>{
    try {
        
        
    } catch (error) {
        
    }

})

module.exports = router;
