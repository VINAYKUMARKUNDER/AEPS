
const ServiceModule = require("./Service");

module.exports = {
  // get all service
  getAllService: async (req, res) => {
    try {
      const data = await ServiceModule.findAll();
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

  // get one service by id
  getOneServiceById: async (req, res) => {
    try {
      const data = await ServiceModule.findByPk(req.params.id);
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

  // create new service
  createNewService: async (req, res) => {
    try {
      const data = await ServiceModule.create(req.body);
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

  // update service by id
  updateServiceById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
      return res.status(404).json({
        status: 404,
        msg: `Data found with Retailer id : ${req.body.id}`,
        success: 0,
      });
      else {
      const data = await ServiceModule.update(req.body, {
        where: {
          service_id: req.params.id,
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

  // delete service by id
  deleteServiceById: async (req, res) => {
    try {
      const find = await RetailerModule.findByPk(req.params.id);
      if (!find)
      return res.status(404).json({
        status: 404,
        msg: `Data found with Retailer id : ${req.body.id}`,
        success: 0,
      });
      else {
      const data = await ServiceModule.destroy({
        where: {
          service_id: req.params.id,
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
