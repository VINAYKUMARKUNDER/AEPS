const rActivityModule = require("./rActivity");
const db = require("../../database");

module.exports={

     // create new antry
  createNewActivity: async (req, res) => {
    try {
      const data = await rActivityModule.create(req.body);
      res.status(201).json("new entry created successfully...");
    } catch (error) {
      return res.status(500).json({
        status: 500,
        msg: "Internal sarver error!!",
        success: 0
    });
    }
  },
}
