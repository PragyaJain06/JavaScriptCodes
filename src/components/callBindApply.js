const user1={
    name:"pragya",
    age:25,
    about:function(music, hobby){
        console.log(`my name is ${this.name} and age is ${this.age} loves ${music} and does ${hobby}`)
    }
}

const user2={
    name:"gul",
    age:23
}

const myfun=user1.about.bind(user2,"dance","arijit")
console.log(myfun())