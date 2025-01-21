const { DataTypes} = require('sequelize');
const sequelize = require('./sequqlize')



//Create table
const Employees =sequelize.define('Employees',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    number:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
    age :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    mail:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    branch:{
        type:DataTypes.STRING,
        allowNull:false
    },
    active:{
        type:DataTypes.STRING,
        allowNull:false
    }

});

//sync with database
sequelize.sync({alter:true})
.then(()=>{
    console.log("Employee table created successfully");
}).catch((err)=>{
    console.log("Unable to create table",err);
})

module.exports ={Employees};