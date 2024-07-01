// Input: "hello*3"
// Output: Ifmmp*3
let input= "fun times!"
function letterChanges(str){
    const words=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let out=[]
    let noWord=[]
 for(i of str){
     for(let j=0; j<words.length;j++){
     if(words[j]===i){
         i= words[j+1]
         out.push(i)
         break;
    }else if(!words.includes(i)){
        noWord.push(i)
        break;
    }
    
 }

}
let output=[]
for(i of out){
    if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
      i= i.toUpperCase();
      output.push(i);
    }else{
        output.push(i);
    }
    

}
return output.concat(noWord).join("");

}
console.log(letterChanges(input))
//my approach for this