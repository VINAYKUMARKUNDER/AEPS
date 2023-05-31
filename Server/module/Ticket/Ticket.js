const { DataTypes, BOOLEAN } = require("sequelize");
const db = require("../../database");

const Ticket = db.define(
  "Ticket",
  {
    ticketId: {
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
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },
  {
    tableName: "Ticket",
    timestamps: false,
  }
);

const Distributor = require("../Distributor/Distributor");
const Retailer = require("../Retailer/Retailer");
const TransactionHistory = require("../TransactionHistory/TransactionHistory");

Ticket.belongsTo(Distributor, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });
Ticket.belongsTo(Retailer, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });
Ticket.belongsTo(TransactionHistory, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
  });

module.exports = Ticket;
