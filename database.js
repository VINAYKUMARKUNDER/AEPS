
const { Sequelize } = require("sequelize");
const conn = new Sequelize("aeps", "root", "Vinay@1313", {
  host: "localhost",
  dialect: "mysql",
});



module.exports = conn;