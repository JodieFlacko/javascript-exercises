const removeFromArray = function(array, index) {
/* 
PSEUDOCODE
1. Use splice method to remove and indexed element
*/
array.splice(index - 1, 1);

return array;
};

// Do not edit below this line
module.exports = removeFromArray;
