const ActivityModule = require("./Activity");
const db = require("../../database");

const convertDateFormat = (rawDate) => {
  let date = new Date(rawDate);

  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let formattedDate = year + "-" + month + "-" + day;
  console.log(rawDate, formattedDate);
  return formattedDate;
};

module.exports = {
  // get all entry
  getAllActivity: async (req, res) => {
    try {
      const data = await ActivityModule.findAll();
      return res.status(200).json({
        status: 200,
        success: 1,
        msg: `data found..`,
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

  // get One entry by id
  getOneActivityById: async (req, res) => {
    try {
      const data = await ActivityModule.findByPk(req.params.id);
      if (!data) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found with id: ", ${req.params.id}`,
          data: {},
        });
      } else
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
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

  // create new antry
  createNewActivity: async (req, res) => {
    try {
      const data = await ActivityModule.create(req.body);
      return res.status(200).json({
        status: 200,
        success: 1,
        msg: `created new success`,
        data: data[0][0],
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
    }
  },

  // update entry
  updateActivity: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
          data: {},
        });
      }
      const data = await ActivityModule.update(req.body, {
        where: {
          activityId: req.params.id,
        },
      });
      if (data[0] == 1) {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `updated successfully..`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `already updated..`,
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

  // delete entry
  deleteActivity: async (req, res) => {
    try {
      const find = await distributorModule.findByPk(req.params.id);
      if (!find) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
          data: {},
        });
      }
      const data = await ActivityModule.destroy({
        where: {
          activityId: req.params.id,
        },
      });
      return res.status(200).json({
        status: 200,
        success: 1,
        msg: `updated successfully..`,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
    }
  },

  // get all entry by fc id
  getAllActivityByFcId: async (req, res) => {
    try {
      const data = await db.query(
        `select * from activity where fcId =${req.params.id};`,
        (err, result) => {}
      );
      return res.status(200).json({
        status: 200,
        success: 1,
        msg: `data found`,
        data: data[0],
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0,
      });
    }
  },

  // get all entry by fc id and date
  getActivityByFcIdAndByDate: async (req, res) => {
    try {
      const date = req.params.date;

      const data = await db.query(
        `SELECT * FROM activity WHERE DATE(date) = DATE('${req.params.date}')  AND fcId = ${req.params.id};`,
        (err, result) => {}
      );
      if (data[0].length == 0) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
          data: data[0],
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

  // get all entry by fc id and dates
  getBetweenTwoDatesActivityByFcId: async (req, res) => {
    try {
      const start = convertDateFormat(req.params.start);
      const end = convertDateFormat(req.params.end);

      const data = await db.query(
        `SELECT * FROM activity
      WHERE date >= '${start}' AND date <= '${end}' AND fcId = ${req.params.id}`,
        (err, result) => {}
      );
      if (data[0].length == 0) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
          data: data[0],
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

  // get all entry by distributor id
  getAllActivityByDistributorId: async (req, res) => {
    try {
      const data = await db.query(
        `select * from activity where distributorId =${req.params.id};`,
        (err, result) => {}
      );
      console.log(data)
      if (data[0].length == 0) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
          data: data[0],
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

  // get all entry by distributor id and date
  getActivityByDistributorIdAndByDate: async (req, res) => {
    try {
      const date = convertDateFormat(req.params.date);

      const data = await db.query(
        `SELECT * FROM activity WHERE DATE(date) = DATE('${req.params.date}')  AND DistributorId = ${req.params.id};`,
        (err, result) => {}
      );
      if (data[0].length == 0) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
          data: data[0],
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

  // get all entry by distributor id and dates
  getBetweenTwoDatesActivityByDistributorId: async (req, res) => {
    try {
      const start = convertDateFormat(req.params.start);
      const end = convertDateFormat(req.params.end);

      const data = await db.query(
        `SELECT * FROM activity
      WHERE date >= '${start}' AND date <= '${end}' AND DistributorId = ${req.params.id}`,
        (err, result) => {}
      );
      if (data[0].length == 0) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
          data: data[0],
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

  // get all entry by Retailer id
  getAllActivityByRetailerId: async (req, res) => {
    try {
      const data = await db.query(
        `select * from activity where RetailerId =${req.params.id};`,
        (err, result) => {}
      );
      if (data[0].length == 0) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
          data: data[0],
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

  // get all entry by Retailer id and date
  getActivityByRetailerIdAndByDate: async (req, res) => {
    try {
      const data = await db.query(
        `SELECT * FROM activity WHERE DATE(date) = DATE('${req.params.date}')  AND retailerId = ${req.params.id};`,
        (err, result) => {}
      );
      if (data[0].length == 0) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
          data: data[0],
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

  // get all entry by Retailer id and dates
  getBetweenTwoDatesActivityByRetailerId: async (req, res) => {
    try {
      const start = convertDateFormat(req.params.start);
      const end = convertDateFormat(req.params.end);

      const data = await db.query(
        `SELECT * FROM activity
  WHERE date >= '${start}' AND date <= '${end}' AND RetailerId = ${req.params.id}`,
        (err, result) => {}
      );
      if (data[0].length == 0) {
        return res.status(200).json({
          status: 200,
          success: 0,
          msg: `data not found`,
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: 1,
          msg: `data found`,
          data: data[0],
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
