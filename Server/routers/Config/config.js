// const express = require("express");
// const bodyParser = require("body-parser");

// const fcRouters = require("./module/FcModule/fcController");
// const DistributorRoutes = require("./module/Distributor/DistributorController");
// const RetailerRoutes = require("./module/Retailer/RetailerController");
// const ServiceRoutes = require("./module/Service/ServiceController");
// const TicketRoutes = require("./module/Ticket/TicketController");
// const TransactionHistoryRoutes = require("./module/TransactionHistory/TransactionHistoryController");
// const SupportRoutes = require("./module/Support/SupportController");
// const UserRouters = require("./module/User/UserController");
// const imageUploadRoutes = require("./module/UploadImage/uploadImageController");
// const { verifyToken } = require("./Jwt/Auth/AuthController");

// const app = express();


// app.use(bodyParser.json());

// app.use("/api/v1/fc", fcRouters);
// app.use("/api/v1/dist", verifyToken, DistributorRoutes);
// app.use("/api/v1/retailer", verifyToken, RetailerRoutes);
// app.use("/api/v1/service", verifyToken, ServiceRoutes);
// app.use("/api/v1/ticket", verifyToken, TicketRoutes);
// app.use("/api/v1/trans", verifyToken, TransactionHistoryRoutes);
// app.use("/api/v1/support", verifyToken, SupportRoutes);
// app.use("/api/v1/user", UserRouters);
// app.use("/api/v1/image", verifyToken, imageUploadRoutes);

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     error: {
//       status: 500,
//       massege: err.massege,
//     },
//   });
// });

// app.listen(3000, () => {
//   console.log("port is running...");
// });
