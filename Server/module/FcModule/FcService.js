
const bcrypt = require("bcrypt");
const db = require("../../database");
const FcModule = require("./FC");


module.exports = {
  // get all entry
  getAllFc: async (req, res) => {
    try {
      const allData = await FcModule.findAll();
      res.status(200).json(allData);
    } catch (error) {
      res.status(200).json(error);
    }
  },

  // get one entry by id
  getOneFcById: async (req, res) => {
    try {
      const data = await FcModule.findByPk(req.params.id);
      if (!data)
        res.status(200).json(`Data not found with fc id :${req.params.id}`);
      else res.status(200).json(data);
    } catch (error) {
      res.status(200).json(error);
    }
  },

  // get one entry by email
  getOneFcByEmail: async (req, res) => {
    try {
      const data = await db.query(`Select * from Fc where email = '${req.body.email}' LIMIT 1`, (err, result)=>{})
      if (data[0].length==0)
        res.status(404).json(`Data not found with fc email id : ${req.body.email}`);
      else res.status(200).json(data[0][0]);
    } catch (error) {
      res.status(500).json({error});
    }
  },

  // create new entry
  createNewFc: async (req, res) => {
    try {
      const rawData = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(rawData.password, salt);
      rawData.password = hash;
      const data = await FcModule.create(rawData);
      res.status(201).json((msg = "new data create successfully..."));
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // updated entry by id
  updateFcById: async (req, res) => {
    try {
      const find = await FcModule.findByPk(req.params.id);
      if (!find)
        res.status(200).json(`Data not found with fc id :${req.params.id}`);
      else {
        const data = await FcModule.update(req.body, {
          where: {
            fc_id: req.params.id,
          },
        });
        if (data[0] == 0) res.status(200).json("already updated...");
        else res.status(200).json("update successfully....");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // deleted entry by id
  deleteFcById: async (req, res) => {
    try {
      const data = await FcModule.destroy({
        where: {
          fc_id: req.params.id,
        },
      });
      if (data == 1) res.status(200).json("deleted successfully");
      else res.status(200).json(`Data not found with fc id :${req.params.id}`);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
