const { DataTypes } = require("sequelize");
const db = require("../database");



const Activity = db.define(
  "activity",
  {
    activity_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "activity",
    timestamps: false,
  }
);

const Distributor = require("./Distributor");
const Retailer = require("./Retailer");
const Transaction_hist = require("./Transaction_hist");

Activity.belongsTo(Distributor, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });
Activity.belongsTo(Retailer, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });
Activity.belongsTo(Transaction_hist, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });

module.exports = Activity;
