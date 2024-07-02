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



//best approach for it
let str1= "zheLLZo! worldz!"
let str2=""
let str3=""

function letterUpperCase(){
    for(let i in str1){
    if((str1.charCodeAt(i)>=65 && str1.charCodeAt(i)<=90) || (str1.charCodeAt(i)>=97 && str1.charCodeAt(i)<=122)){
       if(str1.charCodeAt(i)===90){
           str2+= String.fromCharCode(65)
       }else if(str1.charCodeAt(i)===122){
           str2+= String.fromCharCode(97)
       }else{
            str2+=String.fromCharCode(str1.charCodeAt(i)+1)
       }
        

    }else{
       str2+=str1[i]
    }
    
    let vowels=["a","e","o",'i','u']
    if(vowels.includes(str2[i])){
        str3+=str2[i].toUpperCase();
    }else{
        str3+=str2[i]
    }
}
return str3;
}

console.log(letterUpperCase())

