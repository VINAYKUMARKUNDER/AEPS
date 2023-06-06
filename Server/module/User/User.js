const { DataTypes } = require("sequelize");
const db = require("../../database");



const Login = db.define(
  "login",
  {
    loginId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userEmail:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    userType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ipAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    systemName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // dateAndTime: {
    //     type: DataTypes.timestamps,
    //     allowNull: false
    // },
   
  },
  {
    tableName: "Login",
    timestamps: false,
  }
);

  

module.exports = Login;
