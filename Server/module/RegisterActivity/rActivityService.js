const rActivityModule = require("./rActivity");
const db = require("../../database");

module.exports={

     // create new antry
  createNewActivity: async (req, res) => {
    try {
      const data = await rActivityModule.create(req.body);
      res.status(201).json("new entry created successfully...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
}
