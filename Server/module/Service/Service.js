const { DataTypes } = require("sequelize");
const db = require("../../database");

const Service= db.define("Service", 
    {
        serviceId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        about: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull:false
        },
        serviceName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull:false
        }


    }, 
    {
     tableName: 'Service',
     timestamps : false  
    }
    );

    module.exports=Service;
