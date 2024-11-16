const removeFromArray = function(array, ...args) {
/* 
PSEUDOCODE
1. Check if there are multiple arguments
2. If it only is one argument, remove the indexed item
3. If there are multiple arguments 
* Removing them will change the initial index of the items in the original array. Solution: *
    sort items in args array
    put them in reverse
    remove all the indexed values with looping trough the args array
*/

function removeNonPresentValues(array, ...args){
    for (let i = 0; i < args.length; i++){
        if (args[i] >= array.length || isNaN(+args[i])) {
            args.splice(i, 1);
            i--;
        }
    }
}

removeNonPresentValues(array, args);
if(args.length === 1)    array.splice(args[0] - 1, 1);
else{
    args.sort().reverse();
    for (const arg of args){
        array.splice(arg - 1, 1);
    }
}
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
