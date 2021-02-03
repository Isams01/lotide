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
    for(let j = 0; j < removeVars.length; j++){
      if(removeVars[j] !== arr[i]){
        newArr.push(arr[i]);
      }
    }
  }
}

// This function should take in a source array and a itemsToRemove array. 
// It should return a new array with only those elements from source that 
// are not present in the itemsToRemove array.