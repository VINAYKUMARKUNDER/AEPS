
const db = require("../../database");
const bcrypt = require("bcrypt");
const RetailerModule = require("../module/Retailer");

module.exports = {

    // get all entry
  getAllRetailer: async (req, res) => {
    try {
      const data = await RetailerModule.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  // get a entry by id
  getOneRetailerById: async (req, res) => {
    try {
      const data = await RetailerModule.findByPk(req.params.id);
      if (!data)
        res.status(200).json("data not found with id: ", req.params.id);
      else res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },

   // get a entry by email
  getOneRetailerByEmail:  async (req, res) => {
    try {
      const data = await db.query(
        `Select * from Retailer where email = '${req.body.email}' LIMIT 1`,
        (err, result) => {}
      );
      if (data[0].length == 0)
        res
          .status(404)
          .json(`Data not found with Retailer email id : ${req.body.email}`);
      else res.status(200).json(data[0][0]);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  // create new entry
  createNewRetailer: async (req, res) => {
    try {
      const rawData = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(rawData.password, salt);
      rawData.password = hash;
      const data = await RetailerModule.create(rawData);
      res.status(201).json("new entry created successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },


  // update entry by id
  updateRetailerById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
        res.status(200).json(`Data not found with fc id :${req.params.id}`);
      else {
        const data = await RetailerModule.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        if (data[0] == 1) res.status(200).json("updated successfully...");
        else res.status(200).json("already updated...");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },


  // delete entry by id
  deleteRetailerById: async (req, res) => {
    try {
      const data = await RetailerModule.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (data == 0)
        res.status(200).json("entry not found with id: ", req.params.id);
      else res.status(200).json("deleted successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
