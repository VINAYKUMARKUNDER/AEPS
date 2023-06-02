const db = require("../../database");
const bcrypt = require("bcrypt");
const RetailerModule = require("./Retailer");
const { createNewActivity } = require("../Activity/ActivityService");

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
  getOneRetailerByEmail: async (req, res) => {
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
      rawData.password = bcrypt.hashSync(rawData.password, salt);
      rawData.createAt = new Date();
      rawData.updateAt = new Date();
      const data = await RetailerModule.create(rawData);
      const retailerId = data.dataValues.id;
      const distributorId = data.dataValues.distributorId;
      const fcId = await db.query(
        `select fcId from distributor where distributorId = ${distributorId}`,
        async (err, result) => {}
      );
      await db.query(
        `INSERT INTO activity (description,distributorId,retailerId,fcId) VALUES ("new reateler creted",${distributorId},${retailerId},${fcId[0][0].fcId})`,
        async (err, result) => {}
      );
      //  console.log(fcId[0][0].fcId)
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
        const rawData = req.body;
        rawData.updateAt = new Date();
        const data = await RetailerModule.update(rawData, {
          where: {
            id: req.params.id,
          },
        });
        if (data[0] == 1) {
          const fcId = await db.query(
            `select fcId from distributor where distributorId = ${find.distributorId}`,
            async (err, result) => {}
          );

          await db.query(
            `INSERT INTO activity (description,distributorId,retailerId,fcId) VALUES ("reateler updated...",${find.distributorId},${req.params.id},${fcId[0][0].fcId})`,
            async (err, result) => {}
          );

          res.status(200).json("updated successgully...");
        } else res.status(200).json("already updated...");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete entry by id
  deleteRetailerById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
        res.status(200).json(`Data not found with fc id :${req.params.id}`);

      const data = await RetailerModule.destroy({
        where: {
          id: req.params.id,
        },
      });


      const fcId = await db.query(
        `select fcId from distributor where distributorId = ${find.distributorId}`,
        async (err, result) => {}
      );

      await db.query(
        `INSERT INTO activity (description,distributorId,retailerId,fcId) VALUES ("reateler updated...",${find.distributorId},${req.params.id},${fcId[0][0].fcId})`,
        async (err, result) => {}
      );

      res.status(200).json("deleted successgully...");

      // } else res.status(200).json("something wrong...");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  changeStatusById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
        return res
          .status(404)
          .json(`Data not found with fc id :${req.params.id}`);
      else {
        const getStatus = find.status;
        console.log(getStatus)
        if (getStatus) {
          await db.query(
            `update Retailer set status=0 where id=${req.params.id}`,
            (err, result) => {}
          );
        } else {
          await db.query(
            `update Retailer set status=1 where id=${req.params.id}`,
            (err, result) => {}
          );
        }
        const fcId = await db.query(
          `select fcId from distributor where distributorId = ${find.distributorId}`,
          async (err, result) => {}
        );
  
        await db.query(
          `INSERT INTO activity (description,distributorId,retailerId,fcId) VALUES ("reateler status updated...",${find.distributorId},${req.params.id},${fcId[0][0].fcId})`,
          async (err, result) => {}
        );
  
        res.status(200).json(`updated status successgully...`);

      }
    } catch (error) {}
  },
};
