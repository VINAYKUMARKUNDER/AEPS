// Import Sequelize and define the database connection
const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database");

// Define the User model
const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
