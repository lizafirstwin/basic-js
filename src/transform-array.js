module.exports = function transform(arr)
{
  if(!Array.isArray(arr)) throw Error;
	let arr2 = [];
  for(let i = 0; i < arr.length; i++){		  	
   switch(arr[i]){
   	case  '--double-next': 
    	if(i == arr.length - 1) return arr2;
			else arr2.push(arr[i + 1]);
      break;
    case '--double-prev': 
    	if(i == 0) ;
      else arr2.push(arr[i - 1])
      break;
    case '--discard-prev': 
    	arr2.pop(arr[i]);
      break
    case '--discard-next':
      if(i == arr.length - 1) return arr2;
      if(arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') i += 2;
    	else i++;
    	break;
    default: arr2.push(arr[i]);
		}
  }
	return arr2;
};
