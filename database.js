



const { Sequelize } = require("sequelize");
const conn = new Sequelize("railway", "root", "0J0HaTJcmEzm4HkDPAsd", {
   host: 'containers-us-west-104.railway.app',
  dialect: 'mysql',
  logging: false
});




module.exports = conn;
