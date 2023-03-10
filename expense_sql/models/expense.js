const Sequelize=require('sequelize')
const sequelize=require('../util/database')
const exp=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    comment:Sequelize.STRING,
    catagory:Sequelize.STRING
})
module.exports=exp