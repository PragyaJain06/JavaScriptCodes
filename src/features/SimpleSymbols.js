let str="f++d+"

function simpleSymbols(input){
    for(i in input){
      if((input.charCodeAt(i)>=65 && input.charCodeAt(i)<=90)||(input.charCodeAt(i)>=97 && input.charCodeAt(i)<=122)){
          if(input[i-1]==="+" && input[parseFloat(i)+1]==="+"){
              return true;
          }else{
              return false;
          }
      }
    }
    
}
console.log(simpleSymbols(str))