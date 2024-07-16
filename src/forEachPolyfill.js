const arr=[1,2,3,4,5]
function cb(ele){
    console.log(ele)
}
Array.prototype.myForEach= function(cb){
    // console.log(this,"this") // [1,2,3,4,5]
    for(let i=0; i<this.length; i++){
        cb(this[i],i,this)
    }
}

arr.myForEach(cb)

//returns undefined it only performs side effects on each element of the array