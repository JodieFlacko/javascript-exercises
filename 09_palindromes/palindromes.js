function removePunctuation(string){
    const array = string.split('');
    return array.filter(char => {
        return /^[A-Za-z0-9]+$/.test(char)});
}

const palindromes = function (str) {
    string_1 = removePunctuation(str).reverse().join('').toLowerCase();
    string_2 = removePunctuation(str).join('').toLowerCase();

    // /^[A-Za-z0-9]+$/.test(s) return true if s contains only the specified characters
    return string_1 === string_2;
};

// Do not edit below this line
module.exports = palindromes;
