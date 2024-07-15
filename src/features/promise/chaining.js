let variable=5
const p1= new Promise((resolve,reject)=>{
    if(!variable){
        resolve("promise is success")
    }else{
        reject("not resolved")
    }
})

p1.then((msg)=>console.log(msg)).catch((err)=>console.log(err))