var flat = function (arr, n) {
    let flatArr = [];
    
    arr.forEach((item) => {
        if (Array.isArray(item) && n > 0) {
            // Recursively flatten the array and reduce the depth by 1
            flatArr = flatArr.concat(flat(item, n - 1));
        } else {
            // Add non-array elements to flatArr
            flatArr.push(item);
        }
    });

    return flatArr;
};