const Expense=require('../models/expense')

exports.getAllExpenses= async(req,res)=>{
    try{
      const exp=await  Expense.findAll()
      res.json(JSON.stringify(exp))

    }catch(err){
        res.status(400).json({message:'somwthing went wrong'})
        console.log('err while gating all expense')
    }
   
} 
exports.deleteExpense=async(req,res)=>{
  try{
    
    await Expense.destroy({where:{id:req.params.id}})
    res.status(200).json({success:true})
 
}catch(err){
    res.status(400).json({message:'somwthing went wrong'})
    console.log('error while deleting expense')
  }
   
}
exports.editexpense=async(req,res)=>{
    try{
       const expense= await Expense.findAll({where:{id:req.params.id}})
       res.json(JSON.stringify(expense)) 

    }catch(err){
        res.status(400).json({message:'somwthing went wrong'})
        console.log('error while editing item')
    }
   
}
exports.addExpense=async(req,res)=>{
    try{

    const{amount,comment,catagory}=req.body  
    if(amount.length===0|| comment.length===0){
        res.status(400).json({message:'enter all field'}) 
    }else{
        
       const expense=await Expense.create({amount:amount,comment:comment,catagory:catagory})
            res.json(JSON.stringify(expense))
    }
    
}catch(err){
    res.status(400).json({message:'somwthing went wrong'})
    console.log('error while adding ')
}
   
}