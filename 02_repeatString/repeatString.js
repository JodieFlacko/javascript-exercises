const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }
    if (num === 0){
        return "";
    }
    let str = string;
    for (let i = 0; i < num - 1; i++){
        str += string;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
