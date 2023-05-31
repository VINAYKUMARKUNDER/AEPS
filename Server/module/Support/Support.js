const { DataTypes } = require("sequelize");
const db = require("../../database");

const Support = db.define(
  "Support",
  {
    supportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    supportType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Support",
    timestamps: false,
  }
);

const Retailer = require("../Retailer/Retailer");
Support.belongsTo(Retailer, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = Support;
