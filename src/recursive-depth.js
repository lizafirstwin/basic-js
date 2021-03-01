const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr){
    return (arr instanceof Array ? arr.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, test(currentValue));
  }, 0) : -1) + 1;
  } 
};
