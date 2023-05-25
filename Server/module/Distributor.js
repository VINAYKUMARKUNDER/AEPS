const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database");

const Distributor = db.define(
  "Distributor",
  {
    dist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thana: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    village: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    aadhar_front: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    aadhar_back: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bank_passbook: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shop_pic: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },

  {
    tableName: "Distributor",
    timestamps: false,
  }
);

const FC = require('./FC')

Distributor.belongsTo(FC, {
    foreignKey: { allowNull: false, name: 'fc_id'},
    onDelete: "CASCADE",
  });

module.exports = Distributor;
