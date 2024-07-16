const p1={
    name:"pragya"
}
const p2={
    name:"preksha"
}

function printAge(age){
console.log(`my name is ${this.name} ${age} years old`)
}


// call(obj, args)

Function.prototype.myApply= function(obj={},...args){
   const p1={
    name:"pragya"
}
const p2={
    name:"preksha"
}

function printAge(age){
console.log(`my name is ${this.name} ${age} years old`)
}


// apply(obj, args)

Function.prototype.myApply= function(obj={},...args){
   if(typeof this!=="function"){
    throw new Error("not possible")
   }
   if(!Array.isArray(...args)){
       throw new Error("not possible")
   }
   obj.fn=this;
    obj.fn(...args)
}
printAge.myApply(p1,[25])

   if(!Array.isArray(...args)){
       throw new Error("not possible")
   }
   obj.fn=this;
    obj.fn(...args)
}
printAge.myApply(p1,[25])
