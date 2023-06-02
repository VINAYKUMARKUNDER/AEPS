const { Sequelize } = require("sequelize");
require("dotenv").config();

const conn = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// const createTable = conn.query(
//   `
//   CREATE TABLE IF NOT EXISTS fc (
//       fcId INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       country VARCHAR(30),
//       district VARCHAR(30),
//       houseNo INTEGER,
//       pincode VARCHAR(8),
//       state VARCHAR(40),
//       street VARCHAR(40),
//       subDistrict VARCHAR(40),
//       thana VARCHAR(40),
//       village VARCHAR(40),
//       areaName VARCHAR(40),
//       bio VARCHAR(255),
//       email VARCHAR(40) unique,
//       mobile VARCHAR(13),
//       name VARCHAR(40),
//       password VARCHAR(255),
//       aadharFront varchar(100),
//       aadharBack varchar(100),
//       bankPassbook varchar(100),
//       pan varchar(100),
//       gst varchar(20),
//       aadharNumber varchar(16),
//       mapingImage varchar(100),
//       panNumber varchar(10),
//       image varchar(100),
//       createAt timestamp,
//       updateAt timestamp,
//       status boolean
//   );

//   CREATE TABLE  IF NOT EXISTS distributor (
//       distributorId INTEGER NOT NULL PRIMARY KEY auto_Increment,
//      country VARCHAR(30),
//       district VARCHAR(30),
//       houseNo INTEGER,
//       pincode VARCHAR(8),
//       state VARCHAR(40),
//       street VARCHAR(40),
//       subDistrict VARCHAR(40),
//       thana VARCHAR(40),
//       village VARCHAR(40),
//       areaName VARCHAR(40),
//       bio VARCHAR(255),
//       email VARCHAR(40) unique,
//       mobile VARCHAR(13),
//       name VARCHAR(40),
//       password VARCHAR(255),
//       aadharFront varchar(100),
//       aadharBack varchar(100),
//       bankPassbook varchar(100),
//       pan varchar(100),
//       gst varchar(20),
//       aadharNumber varchar(16),
//       mapingImage varchar(100),
//       panNumber varchar(10),
//       image varchar(100),
//       policeVarification varchar(100),
//       shopPic varchar(100),
//       createAt timestamp,
//       updateAt timestamp,
//       fcId INTEGER,
//       FOREIGN KEY (fcId) REFERENCES fc(fcId)
//   );

//   CREATE TABLE  IF NOT EXISTS retailer (
//       id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       country VARCHAR(30),
//       district VARCHAR(30),
//       houseNo INTEGER,
//       pincode VARCHAR(8),
//       state VARCHAR(40),
//       street VARCHAR(40),
//       subDistrict VARCHAR(40),
//       thana VARCHAR(40),
//       village VARCHAR(40),
//       areaName VARCHAR(40),
//       bio VARCHAR(255),
//       email VARCHAR(40) unique,
//       mobile VARCHAR(13),
//       name VARCHAR(40),
//       password VARCHAR(255),
//       aadharFront varchar(100),
//       aadharBack varchar(100),
//       bankPassbook varchar(100),
//       pan varchar(100),
//       gst varchar(20),
//       aadharNumber varchar(16),
//       mapingImage varchar(100),
//       panNumber varchar(10),
//       image varchar(100),
//       shopPic varchar(100),
//       typeOfBusiness VARCHAR(255),
//       createAt timestamp,
//       updateAt timestamp,
//       distributorId INTEGER,
//       FOREIGN KEY (distributorId) REFERENCES distributor(distributorId)
//   );

//   CREATE TABLE IF NOT EXISTS services (
//       serviceId INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       about VARCHAR(255),
//       isActive BIT,
//       price FLOAT(53),
//       service_name VARCHAR(55),
//       startDate DATETIME(6)
//   );

//   CREATE TABLE IF NOT EXISTS retailer_services (
//       retailerId INTEGER NOT NULL auto_Increment,
//       serviceId INTEGER NOT NULL,
//       PRIMARY KEY (retailerId, serviceId),
//       FOREIGN KEY (retailerId) REFERENCES retailer(id),
//       FOREIGN KEY (serviceId) REFERENCES services(serviceId)
//   );

//   CREATE TABLE IF NOT EXISTS supports (
//       supportId INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       query TEXT,
//       supportType VARCHAR(255),
//       retailerId INTEGER,
//       FOREIGN KEY (retailerId) REFERENCES retailer(id)
//   );

//   CREATE TABLE IF NOT EXISTS transaction_history (
//       transactionId INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       description VARCHAR(255),
//       amount FLOAT(53) NOT NULL,
//       transactionDate DATE,
//       transactionType VARCHAR(255),
//       retailerId INTEGER,
//       FOREIGN KEY (retailerId) REFERENCES retailer(id)
//   );

// CREATE TABLE IF NOT EXISTS activity (
//   activityId INTEGER NOT NULL PRIMARY KEY auto_Increment,
//   date DATETIME(6),
//   totalAmount INTEGER,
//   description varchar(255),
//   fcId Integer,
//   distributorId INTEGER,
//   retailerId INTEGER,
//   FOREIGN KEY (distributorId) REFERENCES distributor(distributorId),
//   FOREIGN KEY (retailerId) REFERENCES retailer(id),
//   FOREIGN KEY (fcId) REFERENCES Fc(fcId)
// );

//   CREATE TABLE IF NOT EXISTS User (
//       id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       deptID INTEGER,
//       email VARCHAR(40),
//       password VARCHAR(255),
//       type VARCHAR(40),
//       createdAt DATETIME(6),
//       updatedAt DATETIME(6)
// );

//   CREATE TABLE IF NOT EXISTS ticket (
//       ticketId INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       date DATETIME(6),
//       description TEXT,
//       status BIT,
//       distributorId INTEGER,
//       retailerId INTEGER,
//       transactionId INTEGER,
//       FOREIGN KEY (distributorId) REFERENCES distributor(distributorId),
//       FOREIGN KEY (retailerId) REFERENCES retailer(id),
//       FOREIGN KEY (transactionId) REFERENCES transaction_history(transactionId)
//   );'
// );

module.exports = conn;
