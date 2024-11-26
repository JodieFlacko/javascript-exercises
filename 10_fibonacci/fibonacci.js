const fibonacci = function(x) {
    // Using recursion
    
    if(x < 0)   return 'OOPS';
    if(x == 0) return +x;
    let z = x - 1;
    if(z == 0)  return +x;
    return fibonacci(x - 1) + fibonacci(x - 2);
};

// Do not edit below this line
module.exports = fibonacci;
