var flat = function (arr, n) {
    let flatArr = [];
    
    arr.forEach((item) => {
        if (Array.isArray(item) && n > 0) {
            // Recursively flatten the array and reduce the depth by 1
            flatArr = flatArr.concat(flat(item, n - 1));
            // we have used concat here not push as we have to combine arrays into one 
            //concat returns us the new array , whereas push changes the original array
            //push is used to merge non-array elements.
            // let num=[1,2,3] let nums=[4,5]
            //let number= []
            //number.push(num) //[[1,2,3]]
            //let num=[1,2,3]
// let n=[4,5]
// let number= []
// const a=number.concat(num,n)
// console.log(a)//[1,2,3,4,5]
        } else {
            // Add non-array elements to flatArr
            flatArr.push(item);
        }
    });

    return flatArr;
};