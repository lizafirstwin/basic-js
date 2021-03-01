const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr){
    let flag = 1;
    for(let item of arr){
      if(Array.isArray(item))	{
        flag++;
        calculateDepth(item);
      }
    }
    return flag;
  } 
};
