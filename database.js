
const { Sequelize } = require("sequelize");
const conn = new Sequelize("aeps", "root", "Vinay@1313", {
  host: "localhost",
  dialect: "mysql",
});


const createTable = conn.query(
  `CREATE TABLE fc (
    fc_id INTEGER NOT NULL PRIMARY KEY,
    country VARCHAR(30),
    district VARCHAR(30),
    house_no INTEGER,
    pincode VARCHAR(8),
    state VARCHAR(40),
    street VARCHAR(40),
    sub_district VARCHAR(40),
    thana VARCHAR(40),
    village VARCHAR(40),
    area_name VARCHAR(40),
    bio VARCHAR(255),
    email VARCHAR(40),
    mobile VARCHAR(13),
    name VARCHAR(40),
    password VARCHAR(40)
);

CREATE TABLE distributor (
    dist_id INTEGER NOT NULL PRIMARY KEY,
    country VARCHAR(40),
    district VARCHAR(40),
    house_no INTEGER,
    pincode VARCHAR(8),
    state VARCHAR(40),
    street VARCHAR(40),
    sub_district VARCHAR(40),
    thana VARCHAR(40),
    village VARCHAR(40),
    email VARCHAR(40),
    mobile VARCHAR(13),
    name VARCHAR(40),
    password VARCHAR(40),
    fc_id INTEGER,
    FOREIGN KEY (fc_id) REFERENCES fc(fc_id)
);

CREATE TABLE retailer (
    id INTEGER NOT NULL PRIMARY KEY,
    country VARCHAR(40),
    district VARCHAR(40),
    house_no INTEGER,
    pincode VARCHAR(40),
    state VARCHAR(40),
    street VARCHAR(40),
    sub_district VARCHAR(40),
    thana VARCHAR(40),
    village VARCHAR(40),
    bio VARCHAR(40),
    mobile VARCHAR(13),
    name VARCHAR(40),
    type_of_business VARCHAR(255),
    distibuter_id INTEGER,
    FOREIGN KEY (distibuter_id) REFERENCES distributor(dist_id)
);



CREATE TABLE services (
    service_id INTEGER NOT NULL PRIMARY KEY,
    about VARCHAR(255),
    is_active BIT,
    price FLOAT(53),
    service_name VARCHAR(55),
    start_date DATETIME(6)
);

CREATE TABLE retailer_services (
    retailer_id INTEGER NOT NULL,
    service_id INTEGER NOT NULL,
    PRIMARY KEY (retailer_id, service_id),
    FOREIGN KEY (retailer_id) REFERENCES retailer(id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);

CREATE TABLE supports (
    support_id INTEGER NOT NULL PRIMARY KEY,
    query TEXT,
    support_type VARCHAR(255),
    retailer_id INTEGER,
    FOREIGN KEY (retailer_id) REFERENCES retailer(id)
);



CREATE TABLE transaction_history (
    transaction_id INTEGER NOT NULL PRIMARY KEY,
    description VARCHAR(255),
    amount FLOAT(53) NOT NULL,
    transaction_date DATE,
    transaction_type VARCHAR(255),
    retailer_id INTEGER,
    FOREIGN KEY (retailer_id) REFERENCES retailer(id)
);

CREATE TABLE activity (
    activity_id INTEGER NOT NULL PRIMARY KEY,
    date DATETIME(6),
    total_amount INTEGER,
    distributor_id INTEGER,
    retailer_id INTEGER,
    transaction_id INTEGER,
    FOREIGN KEY (distributor_id) REFERENCES distributor(dist_id),
    FOREIGN KEY (retailer_id) REFERENCES retailer(id),
    FOREIGN KEY (transaction_id) REFERENCES transaction_history(transaction_id)
);

CREATE TABLE ticket (
    ticket_id INTEGER NOT NULL PRIMARY KEY,
    date DATETIME(6),
    description TEXT,
    status BIT,
    distributor_id INTEGER,
    retailer_id INTEGER,
    transaction_id INTEGER,
    FOREIGN KEY (distributor_id) REFERENCES distributor(dist_id),
    FOREIGN KEY (retailer_id) REFERENCES retailer(id),
    FOREIGN KEY (transaction_id) REFERENCES transaction_history(transaction_id)
);`
);



module.exports = conn;