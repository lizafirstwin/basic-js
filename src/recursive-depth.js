const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, depth = 1) {
    return array.find((item) => Array.isArray(item))
      ? this.calculateDepth(array.flat(1), depth + 1) : depth;
  }
};
