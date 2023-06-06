const bcrypt = require("bcrypt");
const db = require("../../database");
const FcModule = require("./FC");
const geoip = require('geoip-lite');
const {getIPAddress} = require('../../routers/Common');
const os = require('os');




module.exports = {
  // get all entry
  getAllFc: async (req, res) => {
    try {
      const allData = await FcModule.findAll();
      res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
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
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
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
        res
          .status(404)
          .json(`Data not found with fc email id : ${req.body.email}`);
      else res.status(200).json(data[0][0]);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
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
      rawData.createAt=new Date();
      rawData.updateAt=new Date();
      const data = await FcModule.create(rawData);


      const ipAddress = await getIPAddress();
      const geo = geoip.lookup(ipAddress);
      const latitude = geo.ll[0];
      const longitude = geo.ll[1];
      const systemName = os.hostname();
      const userEmail = data.dataValues.email;
      const type = "Fc";

      await db.query(`INSERT INTO registerActivity (userEmail, userType, latitude, longitude, ipAddress, systemName)
      VALUES ('${userEmail}', '${type}', '${latitude}','${longitude}', '${ipAddress}', '${systemName}');`, (err, result)=>{});
    

      return res.status(201).json({
        status: 201,
        msg: "create new data successfully",
        success: 1
    });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },

  // updated entry by id
  updateFcById: async (req, res) => {
    try {
      const find = await FcModule.findByPk(req.params.id);
      if (!find)
        res.status(200).json(`Data not found with fc id :${req.params.id}`);
      else {
        const rawData = req.body;
        rawData.updateAt=new Date();
        const data = await FcModule.update(rawData, {
          where: {
            fc_id: req.params.id,
          },
        });
        if (data[0] == 0) res.status(200).json("already updated...");
        else res.status(200).json("update successfully....");
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
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
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },
};
