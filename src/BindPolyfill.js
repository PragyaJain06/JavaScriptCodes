const p1={
    name:"pragya"
}
const p2={
    name:"preksha"
}

function printAge(age){
console.log(`my name is ${this.name} ${age} years old`)
}


// bind(obj, args) returns function(...args)

Function.prototype.myBind= function(obj={},...args){
   
   if(typeof this!=="function"){
       throw new Error("not possible")
   }
   obj.fn=this;
   return function(...args2){
        obj.fn(...args,...args2)
   }
   
}
const res=printAge.myBind(p1)
res(25);
