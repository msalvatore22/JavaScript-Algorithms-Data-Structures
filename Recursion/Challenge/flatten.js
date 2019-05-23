//write a recursive function that acceptns an array of arrays
//returns a new array will all values flattened

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

console.log(flatten([1, [2, [3, 4], [[5]]]]))