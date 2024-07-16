const arr=[1,2,3,4,5]

Array.prototype.myMap= function(cb){
    let res=[]
    for(let i=0; i<this.length;i++){
        res.push(cb(this[i],i,this))
    }
    console.log(res,"res")
    return res;
}
const result= arr.myMap((ele)=>ele*2)
console.log(result)