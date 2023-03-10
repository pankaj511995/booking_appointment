const express=require('express')
const controller=require('../controller/controller')
const router=express.Router()

router.get('/details',controller.getdetails)
router.post('/details',controller.postdetails)
router.get('/delete/:id',controller.deleteAppointment)
router.get('/edit/:id',controller.editAppointment)

module.exports=router