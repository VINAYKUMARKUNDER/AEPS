const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const fcRouters = require("../../module/FcModule/fcController");
const activityRoutes = require('../../module/Activity/ActivityController')
const DistributorRoutes = require("../../module/Distributor/DistributorController");
const RetailerRoutes = require("../../module/Retailer/RetailerController");
const ServiceRoutes = require("../../module/Service/ServiceController");
const TicketRoutes = require("../../module/Ticket/TicketController");
const TransactionHistoryRoutes = require("../../module/TransactionHistory/TransactionHistoryController");
const SupportRoutes = require("../../module/Support/SupportController");
const UserRouters = require("../../module/User/UserController");
const imageUploadRoutes = require("../../module/UploadImage/uploadImageController");


app.use("/api/v1/fc", fcRouters);
app.use("/api/v1/activity", activityRoutes);
app.use("/api/v1/dist", DistributorRoutes);
app.use("/api/v1/retailer", RetailerRoutes);
app.use("/api/v1/service",  ServiceRoutes);
app.use("/api/v1/ticket",  TicketRoutes);
app.use("/api/v1/trans",  TransactionHistoryRoutes);
app.use("/api/v1/support",  SupportRoutes);
app.use("/api/v1/user", UserRouters);
app.use("/api/v1/image",  imageUploadRoutes);

module.exports=app;
