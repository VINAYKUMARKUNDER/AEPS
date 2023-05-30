

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fcRouters = require('./routers/fcController')
const DistributorRoutes = require('./routers/DistributorController');
const RetailerRoutes = require('./routers/RetailerController');
const ServiceRoutes = require('./routers/ServiceController');
const TicketRoutes = require('./routers/TicketController');
const Transaction_histRoutes = require('./routers/Transaction_historyController');
const SupportRoutes = require('./routers/SupportController');
const UserRouters = require('./routers/UserController');
const imageUploadRoutes = require('./routers/uploadImageController');
const {verifyToken} = require('./routers/Auth/AuthController')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/fc' ,fcRouters);
app.use('/api/v1/dist', verifyToken ,DistributorRoutes);
app.use('/api/v1/retailer', verifyToken ,RetailerRoutes);
app.use('/api/v1/service', verifyToken ,ServiceRoutes);
app.use('/api/v1/ticket', verifyToken ,TicketRoutes);
app.use('/api/v1/trans', verifyToken ,Transaction_histRoutes);
app.use('/api/v1/support', verifyToken ,SupportRoutes);
app.use('/api/v1/user',  UserRouters);
app.use('/api/v1/image', verifyToken , imageUploadRoutes);


app.use((err, req, res , next)=>{
        res.status(500).json({
            error: {
                status:500,
                massege:err.massege
            }
        })
})

app.listen(3000,()=>{
    console.log('port is running...');
});
