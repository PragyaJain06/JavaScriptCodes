let variable=5
const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
         if(variable){
        resolve("promise is success1")
    }else{
        reject("not resol1ved")
    }
    },6000)
   
})
const p2= new Promise((resolve,reject)=>{
      setTimeout(()=>{
         if(!variable){
        resolve("promise is success2")
    }else{
        reject("not resolve2d")
    }
    },2000)
})

const p3= new Promise((resolve,reject)=>{
      setTimeout(()=>{
         if(variable<0){
        resolve("promise is success3")
    }else{
        reject("not resolv3ed")
    }
    },3000)
})




Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.log(err))