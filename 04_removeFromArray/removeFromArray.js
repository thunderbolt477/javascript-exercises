const removeFromArray = function (arr, index) {
  const value = arr.indexOf(index);
  if (value > -1) {
    arr.splice(value, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
