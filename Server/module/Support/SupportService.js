
const SupportModule = require("./Support");

module.exports = {
  // get all entry
  getAllSupport: async (req, res) => {
    try {
      const data = await SupportModule.findAll();
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
  getOneSupportById: async (req, res) => {
    try {
      const data = await SupportModule.findByPk(req.params.id);
      if (!data) res.status(200).json("entry not found by id: ", req.params.id);
      else res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },

  // create new entry
  createNewSupport: async (req, res) => {
    try {
      const data = await SupportModule.create(req.body);
      res.status(201).json("new entry created successfully...");
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },

  // update entry by id
  updateSupportById: async (req, res) => {
    try {
      const data = await SupportModule.update(req.body, {
        where: {
          support_id: req.params.id,
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

  // delete entry by id
  deleteSupportById: async (req, res) => {
    try {
      const data = await SupportModule.destroy({
        where: {
          support_id: req.params.id,
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
