const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(season){
  if(arguments.length == 0) return 'Unable to determine the time of year!';
  let month = season.getMonth();
  if(month == 0 || month == 1 ||  month == 11) return 'winter';
  if(month < 5 && month > 1) return 'spring';
  if(month < 8 && month > 4) return 'summer';
  if(month < 11 && month > 7) return 'fall';
  else return false;
  return 0;
};
