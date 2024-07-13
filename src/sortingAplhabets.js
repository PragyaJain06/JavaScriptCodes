let str="coderbyte"
function alphabeticalOrder(str){
   let strSplit= str.split('') 
    let res=strSplit.sort()
    return res.join('');
}

console.log(alphabeticalOrder(str))

// in case to sort strings simply write sort
// in case to sort numbers write a-b