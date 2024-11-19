const removeFromArray = function(array, ...args) {
    /* Filter method is an iterative method. It calls a provided callbackFn once for each
       element of the array. In this case, we run an arrow function, passing as parameter
       the current element being processed in the array. If callbackFn returns a truthy value
       the element is kept in the resulting array. 
    */
    const newArray = array.filter((item) => !args.includes(item)); 

    return newArray;
}
module.exports = removeFromArray;
