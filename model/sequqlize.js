const {Sequelize} =require("sequelize");

//Database connection
const sequelize = new Sequelize('kt','postgres','Muruganantham@8778',{
    host:'localhost',
    dialect:'postgres'
});  


module.exports = sequelize;