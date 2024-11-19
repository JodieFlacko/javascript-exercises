const convertToCelsius = function(temp) {
  // Conversion Formula
  temp = (temp - 32) * (5/9);
  // Round a number to 1 decimal place 
  if(!Number.isInteger(temp)) temp = Math.round(temp * 10) / 10;
  return temp;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * (9/5) + 32);
  // Round a number to 1 decimal place 
  if(!Number.isInteger(temp)) temp = Math.round(temp * 10) / 10;

  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
