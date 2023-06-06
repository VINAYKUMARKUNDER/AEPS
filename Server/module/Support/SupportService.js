
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

  // create new entry
  createNewSupport: async (req, res) => {
    try {
      const data = await SupportModule.create(req.body);
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

  // update entry by id
  updateSupportById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
      return res.status(404).json({
        status: 404,
        msg: `Data found with id : ${req.body.id}`,
        success: 0,
      });
      else {
      const data = await SupportModule.update(req.body, {
        where: {
          support_id: req.params.id,
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

  // delete entry by id
  deleteSupportById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
      return res.status(404).json({
        status: 404,
        msg: `Data found with Retailer id : ${req.body.id}`,
        success: 0,
      });
      else {
      const data = await SupportModule.destroy({
        where: {
          support_id: req.params.id,
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
