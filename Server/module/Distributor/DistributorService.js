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
      return res.status(200).json({
        status: 200,
        success: 1,
        msg:`data found..`,
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },

  // get one entry by id
  getOneDistributorById: async (req, res) => {
    try {
      const data = await distributorModule.findByPk(req.params.id);
      if (!data) {
        res.status(200).json({
          status:200,
          msg:`data not found with id:${req.params.id}`,
          success: 0,
          data:{}
        });
      }
      else {
        return res.status(200).json({
          status: 200,
          msg:`data found with id:${req.params.id}`,
          success: 1,
          data:data
      });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
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
      res.status(200).json({
        status:200,
        msg:`data not found with id:${req.params.email}`,
        success: 0,
        data:{}
      });
      else {
        return res.status(200).json({
          status: 200,
          msg:`data found with id:${req.params.id}`,
          success: 1,
          data:data
      });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
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

  // update entry by id
  updateDistributorById: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find){
      return res.status(200).json({
        status: 200,
        success: 0,
        msg:`data not found`,
        data: {},
      });
    }
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
          return res.status(200).json({
            status: 200,
            msg:`updated successfully`,
            success: 1,
        });
        } else {
          return res.status(200).json({
            status: 200,
            msg:`already updated...`,
            success: 0,
            data:data
        });
        }
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },

  // delete entry by id
  deleteDistributorById: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find)
        {
          return res.status(200).json({
            status: 200,
            msg:`data not found with id:${req.params.id}`,
            success: 0,
        });
        }

      const data = await distributorModule.destroy({
        where: {
          dist_id: req.params.id,
        },
      });

      await db.query(
        `INSERT INTO activity (description,distributorId,fcId) VALUES ("distributor deleted..",${req.params.id},${find.fcId})`,
        async (err, result) => {}
      );
      
        return res.status(200).json({
          status: 200,
          msg:`deleted successfully`,
          success: 1,
      });
      
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },

  changeStatusById: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find)
      return res.status(200).json({
        status: 200,
        msg:`data not found with id:${req.params.id}`,
        success: 0,
    });
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
        return res.status(200).json({
          status: 200,
          msg:`status cheanged.`,
          success: 1,
      });
      }
    } catch (error) {return res.status(500).json({
      status: 500,
      msg: "Internal sarver error!!",
      success: 0
  });
}
  },

  getAllRetailerByDistributorId: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find)
      return res.status(200).json({
        status: 200,
        msg:`data not found with id:${req.params.id}`,
        success: 0,
    });
      else {
        const data = await db.query(
          `Select * from Retailer WHERE distributorId= ${req.params.id}`,
          (err, result) => {}
        );
        return res.status(200).json({
          status: 200,
          msg:`data found with id:${req.params.id}`,
          success: 1,
          data:data[0]
      });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },
};
