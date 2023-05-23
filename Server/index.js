

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
const UserRouters = require('./routers/UserController')




const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/fc',fcRouters);
app.use('/api/v1/dist',DistributorRoutes);
app.use('/api/v1/retailer',RetailerRoutes);
app.use('/api/v1/service',ServiceRoutes);
app.use('/api/v1/fc',fcRouters);
app.use('/api/v1/ticket',TicketRoutes);
app.use('/api/v1/trans',Transaction_histRoutes);
app.use('/api/v1/support',SupportRoutes);
app.use('/api/v1/user', UserRouters);


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
