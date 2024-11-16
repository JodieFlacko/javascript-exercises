const reverseString = function(word) {
    /*
    PSEUDOCODE
    1. Convert the string into an array
    2. Use reverse method on the array
    3. Convert the array into a string
    4. Return the reversed string
    */

    let string = word;
    let array = word.split('');
    array = array.reverse();
    string = array.join('');
    return string;
};

// Do not edit below this line
module.exports = reverseString;
