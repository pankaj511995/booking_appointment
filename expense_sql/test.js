let arr=[1,2,3,4,5]
let max=arr[0]
arr.forEach(e=>{
    if(max<e) max=e
})
console.log(max)