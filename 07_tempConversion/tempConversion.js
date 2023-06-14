const convertToCelsius = function(fahrenheit) {
  let celcius= (fahrenheit-32)* 5/9;
  const rounded_celcius= parseFloat(celcius.toFixed(1));
  return rounded_celcius;

};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius* 9/5 )+32;
  const rounded_fahrenheit = parseFloat(fahrenheit.toFixed(1));
  return rounded_fahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
