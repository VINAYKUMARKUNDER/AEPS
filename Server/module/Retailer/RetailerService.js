const db = require("../../database");
const bcrypt = require("bcrypt");
const RetailerModule = require("./Retailer");
const geoip = require("geoip-lite");
const { getIPAddress } = require("../../routers/Common");
const os = require("os");

module.exports = {
  // get all entry
  getAllRetailer: async (req, res) => {
    try {
      const data = await RetailerModule.findAll();
      res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
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
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
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
        return res.status(200).json({
          status: 200,
          msg: `Data not found with Retailer email id : ${req.body.email}`,
          success: 01,
        });
      else
        return res.status(201).json({
          status: 201,
          msg: "create new data successfully",
          success: 1,
        });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
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

      const ipAddress = await getIPAddress();
      const geo = geoip.lookup(ipAddress);
      const latitude = geo.ll[0];
      const longitude = geo.ll[1];
      const systemName = os.hostname();
      const type = "Retailer";
      const userEmail = data.dataValues.email;

      await db.query(
        `INSERT INTO registerActivity (userEmail, userType, latitude, longitude, ipAddress, systemName)
      VALUES (${userEmail}, '${type}', '${latitude}','${longitude}', '${ipAddress}', '${systemName}');`,
        (err, result) => {}
      );

      const fcId = await db.query(
        `select fcId from distributor where distributorId = ${distributorId}`,
        async (err, result) => {}
      );
      await db.query(
        `INSERT INTO activity (description,distributorId,retailerId,fcId) VALUES ("new reateler creted",${distributorId},${retailerId},${fcId[0][0].fcId})`,
        async (err, result) => {}
      );
      //  console.log(fcId[0][0].fcId)
      return res.status(201).json({
        status: 201,
        msg: "create new data successfully",
        success: 1,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
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
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
    }
  },

  // delete entry by id
  // deleteRetailerById: async (req, res) => {
  //   try {
  //     const find = await RetailerModule.findByPk(req.params.id);
  //     if (!find)
  //       res.status(200).json(`Data not found with fc id :${req.params.id}`);

  //     const data = await RetailerModule.destroy({
  //       where: {
  //         id: req.params.id,
  //       },
  //     });

  //     const fcId = await db.query(
  //       `select fcId from distributor where distributorId = ${find.distributorId}`,
  //       async (err, result) => {}
  //     );

  //     await db.query(
  //       `INSERT INTO activity (description,distributorId,retailerId,fcId) VALUES ("reateler updated...",${find.distributorId},${req.params.id},${fcId[0][0].fcId})`,
  //       async (err, result) => {}
  //     );

  //     res.status(200).json("deleted successgully...");

  //     // } else res.status(200).json("something wrong...");
  //   } catch (error) {
  //     return res.status(500).json({
    //     status: 500,
    //     msg: "Internal sarver error!!",
    //     success: 0
    // });
  //   }
  // },

  // change status
  changeStatusById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
      if (data[0].length == 0)
      return res.status(200).json({
        status: 200,
        msg: `Data not found with Retailer email id : ${req.body.email}`,
        success: 01,
      });
  
     
      else {
        const getStatus = find.status;
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

        return res.status(200).json({
          status: 200,
          msg: "status chenged successfully...",
          success: 1,
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
    }
  },
};
