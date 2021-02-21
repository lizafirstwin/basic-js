module.exports = function createDreamTeam(arr) {
    
if(!Array.isArray(arr)) return false;
let arr2 = [];
for(let i = 0; i < arr.length; i++){
	if(typeof(arr[i]) === 'string'){
  arr[i] = arr[i].trim();
  	arr2.push(arr[i][0].toUpperCase());
  }
}
arr = arr2.sort().join('');
return arr;
};
