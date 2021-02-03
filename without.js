const eqArrays = function(arr1, arr2) {
  if(arr1.length != arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
};

const asserArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1,arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const without = function(arr, removeVars) {
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(!removeVars.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const originalArray = [1,2,3,4,5,6,7,8,9,'a','b','3',"hello", 'HeLLo'];
console.log(`original Array: ${originalArray}`)
console.log(without(originalArray, [3,4,'3', 'hello']));





// This function should take in a source array and a itemsToRemove array. 
// It should return a new array with only those elements from source that 
// are not present in the itemsToRemove array.