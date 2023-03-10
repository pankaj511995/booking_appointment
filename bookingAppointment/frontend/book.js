const addDetails=document.getElementById('addDetails')
document.getElementById('submit').addEventListener('click', (e)=>{
    e.preventDefault()
    
        let obj={
            name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            phone:document.getElementById('phone').value
         }
                               
        showOnScreen(obj,false)
    })
function showOnScreen(obj,onload){
    let li=document.createElement('li')
    li.appendChild(document.createTextNode(`${obj.name} :-${obj.email}  :-${obj.phone}`))
    let btn=document.createElement('button')
    btn.appendChild(document.createTextNode('Delete'))
    let edit=document.createElement('button')
    edit.appendChild(document.createTextNode('Edit'))
    btn.className='delete'
    edit.className='edit'
    li.appendChild(btn)
    li.appendChild(edit)
    addDetails.appendChild(li) 
            if(!onload){
                axios.post(`http://localhost:3000/details`,obj).then(e=>{
                    const id=e.data.id
                    btn.value=id
                    edit.value=id
                     }).catch(e=> {
                        console.log('error')
                                })
                }else{
                    btn.value=obj.id
                    edit.value=obj.id
                }
 }
   
function loading(){
    axios.get(`http://localhost:3000/details`).then(e=>{
        e.data.forEach(e=>showOnScreen(e,true))
    })
}
loading()

addDetails.addEventListener('click',async(e)=>{
    e.preventDefault()
    const delet=e.target.classList.contains('delete')
    const edit=e.target.classList.contains('edit')
    if(edit || delet){
        let li=e.target
        console.log(li.value)
        if(edit){
          await  axios.get(`http://localhost:3000/edit/${li.value}`).then(e=>{
          console.log(e.data)  
          document.getElementById('name').value=e.data[0].name
            document.getElementById('email').value=e.data[0].email
            document.getElementById('phone').value=e.data[0].phone
          })
        }
        axios.get(`http://localhost:3000/delete/${li.value}`).then(()=>{
            addDetails.removeChild(li.parentElement)
        })
    }
})