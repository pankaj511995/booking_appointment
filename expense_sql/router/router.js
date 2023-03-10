const express=require('express')
const controller=require('../controller/controller')
const router=express.Router()

router.get('/allexpense',controller.getAllExpenses)
router.post('/addexpense',controller.addExpense)
router.get('/delete/:id',controller.deleteExpense)
router.get('/edit/:id',controller.editexpense)

module.exports=router