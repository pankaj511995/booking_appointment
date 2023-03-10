const addExpense=document.getElementById('addExpense')
const totalExpense=document.getElementById('total')
document.getElementById('submit').addEventListener('click', (e)=>{
    e.preventDefault()
    
        let obj={
            amount:document.getElementById('amount').value,
            comment:document.getElementById('comment').value,
            catagory:document.getElementById('catagory').value
         }
                               
        showOnScreen(obj,false)
    })
function showOnScreen(obj,onload){
    let li=document.createElement('li')
    li.appendChild(document.createTextNode(`${obj.amount} :-${obj.comment}  :-${obj.catagory}`))
    let btn=document.createElement('button')
    btn.appendChild(document.createTextNode('Delete'))
    let edit=document.createElement('button')
    edit.appendChild(document.createTextNode('Edit'))
    btn.className='delete'
    edit.className='edit'
    li.value=obj.amount
    li.appendChild(btn)
    li.appendChild(edit)
    
            if(!onload){
                axios.post(`http://localhost:3000/addexpense`,obj).then(e=>{
                    const id=JSON.parse(e.data).id
                    btn.value=id
                    edit.value=id
                    addExpense.appendChild(li) 
                    totalAmount(obj.amount)
                     }).catch(e=> {
                        console.log('error while adding')
                                })
                }else{
                    btn.value=obj.id
                    edit.value=obj.id
                    totalAmount(obj.amount)
                    addExpense.appendChild(li) 
                }
 }
   
function loading(){
    axios.get(`http://localhost:3000/allexpense`).then(e=>{
        JSON.parse(e.data).forEach(e=>showOnScreen(e,true))
    })
}
loading()

addExpense.addEventListener('click',async(e)=>{
    e.preventDefault()
    const delet=e.target.classList.contains('delete')
    const edit=e.target.classList.contains('edit')
    if(edit || delet){
        let li=e.target
        let s=e.target.parentElement 
      
        if(edit){
          await  axios.get(`http://localhost:3000/edit/${li.value}`).then(e=>{
          const arr=JSON.parse(e.data)[0] 
          document.getElementById('amount').value=arr.amount
            document.getElementById('comment').value=arr.comment
            document.getElementById('catagory').value=arr.catagory
          })
        }
        axios.get(`http://localhost:3000/delete/${li.value}`).then(()=>{
            addExpense.removeChild(li.parentElement)
            totalAmount(-s.value)
        })
    }
})

function totalAmount(amount){
    const a=Number(amount)
    if(!totalExpense.value){
        totalExpense.value=a
    }else{
        totalExpense.value=totalExpense.value+a
    }

    totalExpense.innerHTML=`total expense :-> ${totalExpense.value}`
}
