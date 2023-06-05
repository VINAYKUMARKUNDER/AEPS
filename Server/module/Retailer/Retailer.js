const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../database");

const Retailer = db.define(
  "Retailer",
  {
    id: {
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
    houseNo: {
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
    subDistrict: {
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
    areaName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
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
    aadharFront: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    aadharBack: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bankPassbook: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shopPic: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    pan: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    gst: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    aadharNumber: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mapingImage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    panNumber: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    typeOfBusiness:{
      type: DataTypes.STRING,
      allowNull:false
    },
    createAt:{
      type: DataTypes.DATE,
      allowNull: true
    },
    updateAt:{
      type: DataTypes.DATE,
      allowNull:true
    },
    longitude:{
      type: DataTypes.STRING,
      allowNull: true
    },
    latitude:{
      type: DataTypes.STRING,
      allowNull:true
    }


  },

  {
    tableName: "Retailer",
    timestamps: false,
  }
);

const Distributor = require('../Distributor/Distributor')

Retailer.belongsTo(Distributor, {
    foreignKey: { allowNull: false, name: "distributorId" },
    onDelete: "CASCADE",
  });

module.exports = Retailer;
