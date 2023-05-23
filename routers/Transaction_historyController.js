const express = require("express");
const router = express.Router();
const db = require("../database");
const Transaction_historyModule = require("../module/Transaction_hist");
const ReatilerModule = require('../module/Retailer')

// get all entry
router.get("/", async (req, res) => {
  try {
    const data = await Transaction_historyModule.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get entry by id
router.get("/:id", async (req, res) => {
  try {
    const data = await Transaction_historyModule.findByPk(req.params.id);
    if (!data) res.status(200).json("data not found with id: ", req.params.id);
    else res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});


// get all transaction by retailer id
router.get('/retailer/:id', async (req, res)=>{
  try {
    const data = await db.query(`select * from transaction_history where retailer_id=${req.params.id}`, (err, result)=>{

    })
    if(data[0].length==0)res.status(200).json(`data not found with retailer id ${req.params.id}`);
    else res.status(200).json(data[0])
    
  } catch (error) {
    res.status(500).json(error)
  }

});

// find all trancation by distibutre id
router.get('/dist/:id', async (req, res)=>{
  try {
    const data =  await db.query(`select * from Retailer where distibuter_id = ${req.params.id}`, (err, result)=>{

    })
    console.log(data)
    res.status(200).json(data[0])
  } catch (error) {
    
  }
})

// create new entry
router.post("/", async (req, res) => {
  try {
    const rawData = req.body;
    rawData.transaction_date = '2022-02-03'
    console.log(rawData)
    const data = await Transaction_historyModule.create(rawData);
    res.status(201).json("new entry created successfully...");
  } catch (error) {
    res.status(500).json(error);
  }
});

// updated entry by id
router.put("/:id", async (req, res) => {
  try {
    const data = await Transaction_historyModule.update(req.body, {
      where: {
        transaction_id: req.params.id,
      },
    });
    if (data[0] == 1) res.status(200).json("updated successfully...");
    else res.status(200).json("already updated...");
  } catch (error) {
    res.status(500).json(error);
  }
});

// deleted entry by id
router.delete("/:id", async (req, res) => {
  try {
    const data = await Transaction_historyModule.destroy({
      where: {
        transaction_id: req.params.id,
      },
    });
    if (data == 0)
      res.status(200).json("entry not found with id: ", req.params.id);
    else res.status.json("deleted successfully...");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
