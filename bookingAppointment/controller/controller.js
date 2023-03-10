const Appointment=require('../models/book')
exports.getdetails=(req,res)=>{
Appointment.findAll().then(e=>res.json(e))
}
exports.deleteAppointment=(req,res)=>{
    console.log(req.params.id)
    Appointment.destroy({where:{id:req.params.id}}).then(()=>res.status(200).json({success:true}))
}
exports.editAppointment=(req,res)=>{
    Appointment.findAll({where:{id:req.params.id}}).then(e=>res.json(e)) 
}
exports.postdetails=(req,res)=>{
    const{name,email,phone}=req.body
    Appointment.create({name:name,email:email,phone:phone}).then(e=>{
        res.json(e)
    })
}