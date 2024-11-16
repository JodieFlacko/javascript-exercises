const removeFromArray = function(array, ...args) {
/* 
PSEUDOCODE
1. Check if there are multiple arguments
2. If it only is one argument, remove the indexed item
3. If there are multiple arguments, remove all the indexed values
*/
if(args.length === 1)    array.splice(args[0] - 1, 1);
else{
    for (const arg of args){
        array.splice(arg - 1, 1);
    }
}
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
