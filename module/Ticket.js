const { DataTypes, BOOLEAN } = require("sequelize");
const db = require("../database");

const Ticket = db.define(
  "Ticket",
  {
    ticket_id: {
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

const Distributor = require("./Distributor");
const Retailer = require("./Retailer");
const Transaction_hist = require("./Transaction_hist");

Ticket.belongsTo(Distributor);
Ticket.belongsTo(Retailer);
Ticket.belongsTo(Transaction_hist);

module.exports = Ticket;
