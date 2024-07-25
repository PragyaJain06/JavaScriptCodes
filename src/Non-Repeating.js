//google ==>n=1 l, n=2 e
let str="google"
function inputStr(str,n){
   let out=[]
   let duplicates=[]//g o
   let unique= new Set(str)
   for(i of str){
       if(out.includes(i)){
           duplicates.push(i)
       }else{
           out.push(i)
       }
   }
  const res=out.filter((item)=>{
      return !duplicates.includes(item)
  })
  
  if(n>0){
    return res.join("").charAt(n-1)  
  }else{
      return str;
  }

} 

console.log(inputStr(str,1))