const numbers=[1,2,3,4,5]


Array.prototype.sum= function(){
   return this.reduce((acc,curr)=>{
        return acc+curr;
    },0)
}
console.log(numbers.sum());