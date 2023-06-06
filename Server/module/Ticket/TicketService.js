
const TicketModule = require("./Ticket");

module.exports = {
  // get all entry
  getAllTicket: async (req, res) => {
    try {
      const data = await TicketModule.findAll();
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

  // get a entry by id
  getOneTicketById: async (req, res) => {
    try {
      const data = await TicketModule.findByPk(req.params.id);
      if (!data)
      return res.status(200).json({
        status: 200,
        msg: `data not found with id: ${req.params.id}`,
        success: 0,
        data:data
      });
      else res.status(200).json({
        status: 200,
        msg: `ok`,
        success: 1,
        data:data
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },

  // create a new entry
  createTicket: async (req, res) => {
    try {
      const data = await TicketModule.create(req.body);
      return res.status(201).json({
        status: 201,
        msg: "creatd new successfully..",
        success: 1,
        data: data[0]
    });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },

  // update a entry by id
  updateTicketById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
      return res.status(404).json({
        status: 404,
        msg: `Data found with id : ${req.body.id}`,
        success: 0,
      });
      else {
      const data = await TicketModule.update(req.body, {
        where: {
          ticketId: req.params.id,
        },
      });
      if (data[0]==0)
      return res.status(200).json({
        status: 200,
        msg: `already updated...`,
        success: 0,
      });
      else res.status(200).json({
        status: 200,
        msg: `updated successfully.`,
        success: 1,
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

  // delete a entry by id
  deleteTicketById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
      return res.status(404).json({
        status: 404,
        msg: `Data found with id : ${req.body.id}`,
        success: 0,
      });
      else {
      const data = await TicketModule.destroy({
        where: {
          ticketId: req.params.id,
        },
      });
      if (data[0]==0)
      return res.status(200).json({
        status: 200,
        msg: `something worng..`,
        success: 0,
      });
      else res.status(200).json({
        status: 200,
        msg: `deleted successfully.`,
        success: 1,
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
