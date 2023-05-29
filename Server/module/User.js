// Import Sequelize and define the database connection
const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database");

// Define the User model
const User = db.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type:DataTypes.STRING,
    allowNull:false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('fc', 'distributor', 'retailer'),
    allowNull: false,
  },
 
});



module.exports = User;
