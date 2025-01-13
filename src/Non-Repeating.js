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













APPROACH 2

const str = "geeksforgeeks"; // Example string

function nonRepeating(str, n) {
    let result = {}; 

    
    for (let char of str) {
        result[char] = (result[char] || 0) + 1;
    }

    const nonRepeatingChars = Object.keys(result).filter(char => result[char] === 1);

  
    return nonRepeatingChars[n - 1] || null;
}
