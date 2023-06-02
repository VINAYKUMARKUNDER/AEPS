const { DataTypes } = require("sequelize");
const db = require("../../database");



const Activity = db.define(
  "activity",
  {
    activityId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FcId:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    distributorId:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    retailerId:{
      type: DataTypes.INTEGER,
      allowNull:true
    }
  },
  {
    tableName: "activity",
    timestamps: false,
  }
);

const Distributor = require("../Distributor/Distributor");
const Retailer = require("../Retailer/Retailer");
const TransactionHistory = require("../TransactionHistory/TransactionHistory");

Activity.belongsTo(Distributor, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });
Activity.belongsTo(Retailer, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });
Activity.belongsTo(TransactionHistory, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });



  

module.exports = Activity;
