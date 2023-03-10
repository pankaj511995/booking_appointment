const express=require('express')
const cors=require('cors')
const sendrequest=require('./router/router')
const bodyparser=require('body-parser')
const sequelize=require('./models/book')
const app=express()
app.use(cors())
app.use(bodyparser.json())
app.use(sendrequest)


sequelize.sync({force:false}).then(()=>{
    app.listen(3000)
})

