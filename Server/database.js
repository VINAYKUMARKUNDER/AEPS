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
//       fc_id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       country VARCHAR(30),
//       district VARCHAR(30),
//       house_no INTEGER,
//       pincode VARCHAR(8),
//       state VARCHAR(40),
//       street VARCHAR(40),
//       sub_district VARCHAR(40),
//       thana VARCHAR(40),
//       village VARCHAR(40),
//       area_name VARCHAR(40),
//       bio VARCHAR(255),
//       email VARCHAR(40) unique,
//       mobile VARCHAR(13),
//       name VARCHAR(40),
//       password VARCHAR(255),
//       aadhar_front varchar(100),
//       aadhar_back varchar(100),
//       bank_passbook varchar(100),
//       pan varchar(100),
//       gst varchar(20),
//       aadhar_num varchar(16),
//       lat_img varchar(100),
//       pan_num varchar(10),
//       image varchar(100),
//       status boolean
//   );

//   CREATE TABLE  IF NOT EXISTS distributor (
//       dist_id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//      country VARCHAR(30),
//       district VARCHAR(30),
//       house_no INTEGER,
//       pincode VARCHAR(8),
//       state VARCHAR(40),
//       street VARCHAR(40),
//       sub_district VARCHAR(40),
//       thana VARCHAR(40),
//       village VARCHAR(40),
//       area_name VARCHAR(40),
//       bio VARCHAR(255),
//       email VARCHAR(40) unique,
//       mobile VARCHAR(13),
//       name VARCHAR(40),
//       password VARCHAR(255),
//       aadhar_front varchar(100),
//       aadhar_back varchar(100),
//       bank_passbook varchar(100),
//       pan varchar(100),
//       gst varchar(20),
//       aadhar_num varchar(16),
//       lat_img varchar(100),
//       pan_num varchar(10),
//       image varchar(100),
//       police_varification varchar(100),
//       shop_pic varchar(100),
//       fc_id INTEGER,
//       FOREIGN KEY (fc_id) REFERENCES fc(fc_id)
//   );

//   CREATE TABLE  IF NOT EXISTS retailer (
//       id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       country VARCHAR(30),
//       district VARCHAR(30),
//       house_no INTEGER,
//       pincode VARCHAR(8),
//       state VARCHAR(40),
//       street VARCHAR(40),
//       sub_district VARCHAR(40),
//       thana VARCHAR(40),
//       village VARCHAR(40),
//       area_name VARCHAR(40),
//       bio VARCHAR(255),
//       email VARCHAR(40) unique,
//       mobile VARCHAR(13),
//       name VARCHAR(40),
//       password VARCHAR(255),
//       aadhar_front varchar(100),
//       aadhar_back varchar(100),
//       bank_passbook varchar(100),
//       pan varchar(100),
//       gst varchar(20),
//       aadhar_num varchar(16),
//       lat_img varchar(100),
//       pan_num varchar(10),
//       image varchar(100),
//       shop_pic varchar(100),
//       type_of_business VARCHAR(255),
//       distibuter_id INTEGER,
//       FOREIGN KEY (distibuter_id) REFERENCES distributor(dist_id)
//   );

//   CREATE TABLE IF NOT EXISTS services (
//       service_id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       about VARCHAR(255),
//       is_active BIT,
//       price FLOAT(53),
//       service_name VARCHAR(55),
//       start_date DATETIME(6)
//   );

//   CREATE TABLE IF NOT EXISTS retailer_services (
//       retailer_id INTEGER NOT NULL auto_Increment,
//       service_id INTEGER NOT NULL,
//       PRIMARY KEY (retailer_id, service_id),
//       FOREIGN KEY (retailer_id) REFERENCES retailer(id),
//       FOREIGN KEY (service_id) REFERENCES services(service_id)
//   );

//   CREATE TABLE IF NOT EXISTS supports (
//       support_id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       query TEXT,
//       support_type VARCHAR(255),
//       retailer_id INTEGER,
//       FOREIGN KEY (retailer_id) REFERENCES retailer(id)
//   );

//   CREATE TABLE IF NOT EXISTS transaction_history (
//       transaction_id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       description VARCHAR(255),
//       amount FLOAT(53) NOT NULL,
//       transaction_date DATE,
//       transaction_type VARCHAR(255),
//       retailer_id INTEGER,
//       FOREIGN KEY (retailer_id) REFERENCES retailer(id)
//   );

//   CREATE TABLE IF NOT EXISTS activity (
//       activity_id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       date DATETIME(6),
//       total_amount INTEGER,
//       distributor_id INTEGER,
//       retailer_id INTEGER,
//       transaction_id INTEGER,
//       FOREIGN KEY (distributor_id) REFERENCES distributor(dist_id),
//       FOREIGN KEY (retailer_id) REFERENCES retailer(id),
//       FOREIGN KEY (transaction_id) REFERENCES transaction_history(transaction_id)
//   );

//   CREATE TABLE IF NOT EXISTS ticket (
//       ticket_id INTEGER NOT NULL PRIMARY KEY auto_Increment,
//       date DATETIME(6),
//       description TEXT,
//       status BIT,
//       distributor_id INTEGER,
//       retailer_id INTEGER,
//       transaction_id INTEGER,
//       FOREIGN KEY (distributor_id) REFERENCES distributor(dist_id),
//       FOREIGN KEY (retailer_id) REFERENCES retailer(id),
//       FOREIGN KEY (transaction_id) REFERENCES transaction_history(transaction_id)
//   );`
// );

module.exports = conn;
