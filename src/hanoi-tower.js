const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let tower = {turns: 0, seconds: 0}
  tower.turns = (2 ** disksNumber) - 1;
  tower.seconds = Math.floor((tower.turns * 3600) / turnsSpeed);
	return tower;
};
