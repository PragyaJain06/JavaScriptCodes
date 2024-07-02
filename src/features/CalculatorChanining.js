class Calculator{
    constructor(value=0){
        this.result= value
    }
    add(value){
        this.result+=value;
        return this;
    }
    subtract(value){
        this.result-=value;
        return this;
    }
    multiply(value){
        this.result*=value;
        return this;
    }
    divide(value){
        if(value===0){
            throw new Error("Cannot be divisible by 0")
        }else{
            this.result/=value;
            return this;
        }
       
    }

}

const cal=new Calculator();
cal.add(10).subtract(2).multiply(100).divide(5)