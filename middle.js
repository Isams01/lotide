const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const asserArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const middle = function(array){
  if(array.length <= 2){
    return [];
  }
  const midIndex = Math.floor(array.length/2);
  let isEven = false;
  array.length%2 === 0 ? isEven = true : isEven = false;
  if(!isEven){
    return [array[midIndex]]
  } else {
    return [array[midIndex - 1], array[midIndex]]
  }
}

module.exports = middle;

