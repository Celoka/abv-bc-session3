module.exports =  {
findMissing: (arr1, arr2) => {
    let arr1_sum = arr1.reduce(function(prev, curr) {
        return prev + curr;
    });
    let arr2_sum = arr2.reduce(function(prev, curr) {
        return prev + curr;
    });
    
    if (arr1.length < arr2.length) return arr2_sum - arr1_sum;
    return arr1_sum - arr2_sum;
}
}