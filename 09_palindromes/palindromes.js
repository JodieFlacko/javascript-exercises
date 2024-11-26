function removePunctuation(array){
    const alphadigits = "abcdefghijklmnopqwyrstz0123456789";
    return array.filter(char => alphadigits.includes(char));
}

const palindromes = function (str) {
    let checkString = removePunctuation(str
                                        .toLowerCase()
                                        .split(''))
                                        .join('');
    let checkString2 = removePunctuation(str
                                        .toLowerCase()
                                        .split(''))
                                        .reverse()
                                        .join('');
    return checkString === checkString2;
};

// Do not edit below this line
module.exports = palindromes;
