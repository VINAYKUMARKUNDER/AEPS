

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fcRouters = require('./routers/fcController')




const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/fc',fcRouters);


app.listen(3000,()=>{
    console.log('port is running...');
});
