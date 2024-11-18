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
        if(isNaN(args[i])){
            if(array.includes(args[i])) continue;
            else {
                args.splice(i, 1);
                i--;
            }
        }
        
        else{
            if (args[i] > array.length) {
                args.splice(i, 1);
                i--;
            }
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

function convertStringsToIndexes(){
    for(let i = 0; i < args.length; i++){
        if(typeof args[i] === "string"){
            args[i] = i + 1;
        }
    }
    return;
}

function keepDifferentTypeValues(){
    for(let i = 0; i < args.length; i++){
            if(!isNaN(+args[i])){
            if(typeof args[i] != typeof array[+args[i] - 1]) {
                args.splice(i, 1);
                i--;
            }
        }
    }
    return;
}

function removeIndexedItems(arr){
    for (let index of arr){
        array.splice(index, 1);
    }
}

function getIndexesWithMultipleArguments(){
    let indexes = [];
    for(let arg of args){
        if(checkMultipleOfTheSameValues()){
            indexes.concat(getMultipleValuesIndexes());
        }
        else    indexes.push(arg - 1);
    }
    return indexes;
}

// Use array and args which are global variables
removeNonPresentValues();
keepDifferentTypeValues();
convertStringsToIndexes();
if(args.length === 1){
    if(checkMultipleOfTheSameValues()){
        // Revert indexes order to allow splice looping
        let indexes = getMultipleValuesIndexes().sort().reverse();
        removeIndexedItems(indexes);
    }
    else    array.splice(args[0] - 1, 1); 
}    
else{
    indexes = getIndexesWithMultipleArguments().sort().reverse();
    removeIndexedItems(indexes);
}
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
