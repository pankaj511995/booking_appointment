const Sequelize=require('sequelize')
const sequelize=require('../util/database')
const book=sequelize.define('appointment',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.INTEGER
})
module.exports=book