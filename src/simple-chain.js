const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
  	this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.arr.length) throw Error;
		this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
		this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join("~~");
    return str;
  }
};

module.exports = chainMaker;
