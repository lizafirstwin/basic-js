const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let main = [];
  let addition = [];
  let strAddition, newStr;
  if (!options.repeatTimes && !options.additionRepeatTimes) return str + options.addition;
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(options.addition);
    if (options.additionSeparator == undefined) strAddition = addition.join('|')
    else strAddition = addition.join(options.additionSeparator);
  }
  if(strAddition != undefined) str = str + strAddition;
  for (let i = 0; i < options.repeatTimes; i++) {
    main.push(str);
    if(options.separator == undefined) newStr = main.join('+');
		else newStr = main.join(options.separator);
  }
  return newStr;
};
