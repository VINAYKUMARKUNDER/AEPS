const db = require("../../database");
const bcrypt = require("bcrypt");
const distributorModule = require("./Distributor");
const geoip = require('geoip-lite');
const {getIPAddress} = require('../../routers/Common');
const os = require('os');

module.exports = {
  // get all entry
  getAllDistributors: async (req, res) => {
    try {
      const data = await distributorModule.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get one entry by id
  getOneDistributorById: async (req, res) => {
    try {
      const data = await distributorModule.findByPk(req.params.id);
      if (!data) res.status(200).json("data not found with id:", req.params.id);
      else res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get one entry by email
  getOneDistributorByEmail: async (req, res) => {
    try {
      const data = await db.query(
        `Select * from Distributor where email = '${req.body.email}' LIMIT 1`,
        (err, result) => {}
      );
      if (data[0].length == 0)
        res
          .status(404)
          .json(`Data not found with Distributor email id : ${req.body.email}`);
      else res.status(200).json(data[0][0]);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  // create new entry
  createNewDistributor: async (req, res) => {
    console.log(req.body);
    try {
      const rawData = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(rawData.password, salt);
      rawData.password = hash;
      rawData.createAt = new Date();
      rawData.updateAt = new Date();
      const data = await distributorModule.create(rawData);

      const distributorId = data.dataValues.distributorId;
      const fcId = data.dataValues.fcId;
      const ipAddress = await getIPAddress();
      const geo = geoip.lookup(ipAddress);
      const latitude = geo.ll[0];
      const longitude = geo.ll[1];
      const systemName = os.hostname();
      const type = "Distributor";
      const userEmail = data.dataValues.email;

      await db.query(`INSERT INTO registerActivity (userEmail, userType, latitude, longitude, ipAddress, systemName)
      VALUES (${userEmail}, '${type}', '${latitude}','${longitude}', '${ipAddress}', '${systemName}');`, (err, result)=>{});
    
      await db.query(
        `INSERT INTO activity (description,distributorId,fcId) VALUES ("new distributor creted..",${distributorId},${fcId})`,
        async (err, result) => {}
      );
      res.status(201).json("created new entry successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // update entry by id
  updateDistributorById: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find)
        res.status(200).json(`Data not found with fc id :${req.params.id}`);
      else {
        const rawData = req.body;
        rawData.updateAt = new Date();
        const data = await distributorModule.update(rawData, {
          where: {
            distributorId: req.params.id,
          },
        });
        if (data[0] == 1) {
          await db.query(
            `INSERT INTO activity (description,distributorId,fcId) VALUES ("distributor updated..",${req.params.id},${find.fcId})`,
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
  deleteDistributorById: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find)
        res.status(200).json(`Data not found with fc id :${req.params.id}`);

      const data = await distributorModule.destroy({
        where: {
          dist_id: req.params.id,
        },
      });

      await db.query(
        `INSERT INTO activity (description,distributorId,fcId) VALUES ("distributor deleted..",${req.params.id},${find.fcId})`,
        async (err, result) => {}
      );
      res.status(200).json("deleted successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  changeStatusById: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find)
        return res
          .status(404)
          .json(`Data not found with fc id :${req.params.id}`);
      else {
        const getStatus = find.status;
        if (getStatus) {
          await db.query(
            `update distributor set status=false where distributorId=${req.params.id}`,
            (err, result) => {}
          );
        } else {
          await db.query(
            `update distributor set status=true where distributorId=${req.params.id}`,
            (err, result) => {}
          );
        }
        await db.query(
          `INSERT INTO activity (description,distributorId,fcId) VALUES ("distributor status updated..",${req.params.id},${find.fcId})`,
          async (err, result) => {}
        );
        res.status(200).json("updated successgully...");
      }
    } catch (error) {}
  },

  getAllRetailerByDistributorId: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find)
        res.status(200).json(`Data not found with Distributor id :${req.params.id}`);
      else {
        const data = await db.query(
          `Select * from Retailer WHERE distributorId= ${req.params.id}`,
          (err, result) => {}
        );
        return res.status(200).json(data[0]);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
