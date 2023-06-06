
const TicketModule = require("./Ticket");

module.exports = {
  // get all entry
  getAllTicket: async (req, res) => {
    try {
      const data = await TicketModule.findAll();
      res.status(200).json(data);
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
        res.status(200).json("data not found with id: ", req.params.id);
      else res.status(200).json(data);
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
      res.status(201).json("new entry created successfully...");
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
      const data = await TicketModule.update(req.body, {
        where: {
          ticket_id: req.params.id,
        },
      });
      if (data[0] == 1) res.status(200).json("updated successfully...");
      else res.status(200).json("already updated...");
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
      const data = await TicketModule.destroy({
        where: {
          ticket_id: req.params.id,
        },
      });
      if (data == 0)
        res.status(200).json("entry not found with id: ", req.params.id);
      else res.status.json("deleted successfully...");
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },
};
