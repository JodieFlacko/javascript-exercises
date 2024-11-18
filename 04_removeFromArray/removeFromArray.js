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



function removeNonPresentValues(){
    for (let i = 0; i < args.length; i++){
        if (args[i] >= array.length || isNaN(+args[i])) {
            args.splice(i, 1);
            i--;
        }
    }
}

// Check for multiple of the same values
function checkMultipleOfTheSameValues(){
    const arr = new Set(array)
    // Set constructor does not include multiple of the same values
    if(arr.size === array.length) return false;
    return true;
}

function getMultipleValuesIndexes(){
    let indexes = [];
    for(let i = 0; i < args.length; i++){
        let index = args[i] - 1;
        for(let j = 0; j < array.length; j++){
            if(array[index] === array[j]){
                indexes.push(index);
            }
        }
    }
    return indexes;
}
// Use array and args which are global variables
removeNonPresentValues();

if(args.length === 1){
    if(checkMultipleOfTheSameValues()){
        let indexes = getMultipleValuesIndexes().sort().reverse();
        for (let index of indexes){
            array.splice(index, 1);
        }
    }
    else{
        array.splice(args[0] - 1, 1); 
    }
}    
else{
    let indexes = [];
    for(let arg of args){
        if(checkMultipleOfTheSameValues()){
            indexes = indexes.concat(getMultipleValuesIndexes());
        }
        else{
            indexes.push(arg - 1);
        }
    }
    indexes = indexes.sort().reverse();
    for(let index of indexes){
        array.splice(index, 1);
    }
}
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
