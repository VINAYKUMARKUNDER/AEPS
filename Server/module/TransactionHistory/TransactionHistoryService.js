const db = require("../../database");
const Transaction_historyModule = require("./TransactionHistory");

const convertDateFormat = (rawDate) => {
  let date = new Date(rawDate);
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
};

module.exports = {
  // get All transaction
  getAllTransaction: async (req, res) => {
    try {
      const data = await Transaction_historyModule.findAll();
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

  // get one transaction by id
  getOneTransactionById: async (req, res) => {
    try {
      const data = await Transaction_historyModule.findByPk(req.params.id);
      if (!data)
        return res.status(200).json({
          status: 200,
          msg: `data not found with id: ${req.params.id}`,
          success: 0,
          data: data,
        });
      else
        res.status(200).json({
          status: 200,
          msg: `ok`,
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
  createNewTransaction: async (req, res) => {
    try {
      const rawData = req.body;
      rawData.transactionDate = new Date();
      const data = await Transaction_historyModule.create(rawData);
      return res.status(201).json({
        status: 201,
        msg: "creatd new successfully..",
        success: 1,
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

  // update entry by id
  updateTransactionById: async (req, res) => {
    try {
      const data = await Transaction_historyModule.update(req.body, {
        where: {
          transaction_id: req.params.id,
        },
      });
      if (data[0] == 0)
        return res.status(200).json({
          status: 200,
          msg: `already updated...`,
          success: 0,
        });
      else
        res.status(200).json({
          status: 200,
          msg: `updated successfully.`,
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

  // delete entry by id
  deleteTransactionById: async (req, res) => {
    try {
      const data = await Transaction_historyModule.destroy({
        where: {
          transaction_id: req.params.id,
        },
      });
      if (data[0] == 0)
        return res.status(200).json({
          status: 200,
          msg: `something worng..`,
          success: 0,
        });
      else
        res.status(200).json({
          status: 200,
          msg: `deleted successfully.`,
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

  // get all transaction between todays
  getAllTransactionBetweenTwoDates: async (req, res) => {
    try {
      const start = convertDateFormat(req.params.start);
      const end = convertDateFormat(req.params.end);
      const sStart = new Date(start);
      const sEnd = new Date(end);
      var currentDate = new Date();

      if (sStart > currentDate)
        return res.status(200).json("must be date is not future");

      const data = await db.query(
        `SELECT * FROM transaction_history
      WHERE transactionDate >= '${start}' AND transactionDate <= '${end}'`,
        (err, result) => {}
      );
      if (data[0].length == 0)
        return res.status(200).json({
          status: 200,
          msg: `data not found with dates`,
          success: 0,
          data: data,
        });
      else
        res.status(200).json({
          status: 200,
          msg: `ok`,
          success: 1,
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

  // find all trancation by distributor id
  getAllTransactionByDistributorId: async (req, res) => {
    try {
      const data = await db.query(
        `SELECT th.* FROM transaction_history th JOIN retailer r ON th.retailerId = r.id
      JOIN distributor d ON r.distibuterId = d.distibuterId WHERE d.distibuterId= ${req.params.id}`,
        (err, result) => {}
      );

      if (data[0].length == 0)
        return res.status(200).json({
          status: 200,
          msg: `data not found with id`,
          success: 0,
          data: data,
        });
      else
        res.status(200).json({
          status: 200,
          msg: `ok`,
          success: 1,
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

  // get all transaction by retailer id
  getAllTransactionByRetailerId: async (req, res) => {
    try {
      const data = await db.query(
        `select * from transaction_history where retailerId=${req.params.id}`,
        (err, result) => {}
      );
      if (data[0].length == 0)
        return res.status(200).json({
          status: 200,
          msg: `data not found with dates`,
          success: 0,
          data: data,
        });
      else
        res.status(200).json({
          status: 200,
          msg: `ok`,
          success: 1,
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
};
