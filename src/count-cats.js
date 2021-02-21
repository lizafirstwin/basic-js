module.exports = function countCats(...arr) {
  arr = arr.flat(Infinity)
  let count = 0;
  for(let elem of arr){
    if(elem == "^^") count++;
  }
  return count;
};
