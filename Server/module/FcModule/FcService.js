const bcrypt = require("bcrypt");
const db = require("../../database");
const FcModule = require("./FC");
const geoip = require("geoip-lite");
const { getIPAddress } = require("../../routers/Common");
const os = require("os");

module.exports = {
  // get all entry
  getAllFc: async (req, res) => {
    try {
      const allData = await FcModule.findAll();
      return res.status(200).json({
        status: 200,
        success: 1,
        msg:`data found..`,
        data: allData,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
    }
  },

  // get one entry by id
  getOneFcById: async (req, res) => {
    try {
      const data = await FcModule.findByPk(req.params.id);
      if (!data)
        return res.status(200).json({
          status: 200,
          msg: `data not found with id:${req.params.id}`,
          success: 0,
          data: data,
        });
      else {
        return res.status(200).json({
          status: 200,
          success: 1,
          data: data,
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

  // get one entry by email
  getOneFcByEmail: async (req, res) => {
    try {
      const data = await db.query(
        `Select * from Fc where email = '${req.body.email}' LIMIT 1`,
        (err, result) => {}
      );
      if (data[0].length == 0)
        return res.status(200).json({
          status: 200,
          msg: `data not found with email:${req.params.email}`,
          success: 0,
        });
      else
        return res.status(200).json({
          status: 200,
          msg: `data found with email:${req.params.email}`,
          success: 1,
          data: data,
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
  createNewFc: async (req, res) => {
    try {
      const rawData = req.body;

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(rawData.password, salt);
      rawData.password = hash;
      rawData.createAt = new Date();
      rawData.updateAt = new Date();
      const data = await FcModule.create(rawData);

      const ipAddress = await getIPAddress();
      const geo = geoip.lookup(ipAddress);
      const latitude = geo.ll[0];
      const longitude = geo.ll[1];
      const systemName = os.hostname();
      const userEmail = data.dataValues.email;
      const type = "Fc";

      await db.query(
        `INSERT INTO registerActivity (userEmail, userType, latitude, longitude, ipAddress, systemName)
      VALUES ('${userEmail}', '${type}', '${latitude}','${longitude}', '${ipAddress}', '${systemName}');`,
        (err, result) => {}
      );

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

  // updated entry by id
  updateFcById: async (req, res) => {
    try {
      const find = await FcModule.findByPk(req.params.id);
      if (!find)
        return res.status(200).json({
          status: 200,
          msg: `data found with id:${req.params.id}`,
          success: 0,
        });
      else {
        const rawData = req.body;
        rawData.updateAt = new Date();
        const data = await FcModule.update(rawData, {
          where: {
            fc_id: req.params.id,
          },
        });
        if (data[0] == 0)
          return res.status(200).json({
            status: 200,
            msg: `already updated...`,
            success: 0,
          });
        else
          return res.status(200).json({
            status: 200,
            msg: `updated successfully`,
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

  // deleted entry by id
  deleteFcById: async (req, res) => {
    try {
      const find = await FcModule.findByPk(req.params.id);
      if (!find)
        return res.status(200).json({
          status: 200,
          msg: `data found with id:${req.params.id}`,
          success: 0,
        });
      else {
        const data = await FcModule.destroy({
          where: {
            fc_id: req.params.id,
          },
        });
        if (data == 1) return res.status(200).json({
          status: 200,
          msg: `deleted successfully`,
          success: 1,
        });
        else
        return res.status(200).json({
          status: 200,
          msg: `something wrong...`,
          success: 0,
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
