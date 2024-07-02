const calculator={
    result:0,
    add(value){
        this.result+=value
        return this
    },
    subtract(value){
        this.result-=value
        return this
    },
    multiply(value){
        this.result*=value
        return this
    },
    divide(value){
        this.result/=value
        return this
    }
}

const cal= calculator.add(10).subtract(3).multiply(100).divide(5)
console.log(cal.result)