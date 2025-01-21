//polyfill for call method

const { type } = require("@testing-library/user-event/dist/type");


const p1={
    name:"pragya"
}
const p2={
    name:"preksha"
}

function printAge(age){
    console.log(`my name is ${this.name} and I'm ${age} years old`)
}


// call(obj, args)

Function.prototype.myCall= function(obj={},...args){
    if(typeof this!=="function"){
        throw new Error("not possible")
    }
   obj.fn=this;
    obj.fn(...args)
}
printAge.myCall(p1,25)