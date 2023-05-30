const { DataTypes } = require("sequelize");
const db = require("../../database");

const Support = db.define(
  "Support",
  {
    support_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    support_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Support",
    timestamps: false,
  }
);

const Retailer = require("./Retailer");
Support.belongsTo(Retailer, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = Support;
