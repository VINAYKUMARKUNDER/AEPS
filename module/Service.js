const { DataTypes } = require("sequelize");
const db = require("../database");

const Service= db.define("Service", 
    {
        service_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        about: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull:false
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        start_date: {
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
