const { DataTypes } = require("sequelize");
const db = require("../database");

const Transaction_history = db.define(
  "Transaction_history",
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull:false
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    transaction_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { 
    tableName: "Transaction_history", 
    timestamps: false 
  }
);

const Retailer = require('./Retailer')
Transaction_history.belongsTo(Retailer, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = Transaction_history;
