const express=require('express')
const cors=require('cors')
const allDetailsForExpense=require('./router/router')
const bodyparser=require('body-parser')
const sequelize=require('./models/expense')
const app=express()
app.use(cors())

app.use(bodyparser.json())

app.use(allDetailsForExpense)


sequelize.sync({force:false}).then(()=>{
    app.listen(3000)
}).catch(e=>console.log('error while creating table',e))

