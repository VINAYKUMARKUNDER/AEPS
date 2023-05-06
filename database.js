

const { Sequelize } = require("sequelize");
const conn = new Sequelize("railway", "root", "0J0HaTJcmEzm4HkDPAsd", {
  host: "localhost",
  dialect: "mysql",
});




module.exports = conn;
