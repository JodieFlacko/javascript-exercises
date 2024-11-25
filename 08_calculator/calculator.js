const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  return array.reduce((total, item) =>{
    return total + item;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((total, item) =>{
    return total * item;
  })
};

const power = function(num, power) {
  let result = 1;  
  for(let i = 0; i < power; i++){
      result *= num;
    }
    return result;
};

const factorial = function(n) {
  if(n === 0) return 1;
  for(let x = n - 1; x > 0; x--){
    n *= x;
  }
  return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
