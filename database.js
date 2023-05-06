
const mysql = require('mysql2');

 const conn= mysql.createConnection({
    host:'containers-us-west-104.railway.app',
    user:'root',
    password:'0J0HaTJcmEzm4HkDPAsd',
    database:'railway'
});

module.exports=conn;


// const { Sequelize } = require("sequelize");
// const conn = new Sequelize("railway", "root", "0J0HaTJcmEzm4HkDPAsd", {
//   host: "localhost",
//   dialect: "mysql",
// });




// module.exports = conn;
