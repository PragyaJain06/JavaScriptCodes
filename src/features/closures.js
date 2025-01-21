(function outerFunction(){
    const outerVar=5
    return function innerFunction(){
        console.log(outerVar)
    }
})()();