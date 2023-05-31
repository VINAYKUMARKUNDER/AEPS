const { DataTypes } = require("sequelize");
const db = require("../../database");

const Transaction_history = db.define(
  "Transaction_history",
  {
    transactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey:true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull:false
    },
    
    transactionType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { 
    tableName: "Transaction_history", 
    timestamps: false 
  }
);

const Retailer = require('../Retailer/Retailer')
Transaction_history.belongsTo(Retailer, {
  foreignKey: { allowNull: false, name:'retailerId' },
  onDelete: "CASCADE",
});

module.exports = Transaction_history;

