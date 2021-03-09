const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let flag = 0;
  let arr = [];
  let newStr;
  if(!options.repeatTimes && !options.additionRepeatTimes) return str + options.addition;
  while(flag < options.additionRepeatTimes) {
  	str = str + options.addition;
    flag++;
  }
  flag = 0;
  while (flag < options.repeatTimes ) {
  	arr.push(str);
  	flag++;
    if(options.separator)  newStr = arr.join(options.separator);
    else newStr = arr.join('+')
  }
  return newStr;
};
