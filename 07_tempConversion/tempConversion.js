const convertToCelsius = function (tempF) {
  let conversion = (tempF - 32) * (5 / 9);
  return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function (tempC) {
  let conversion = (tempC * 9) / 5 + 32;
  return Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
