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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let  noSpace = sentence.replace(/\s/g, ''); 
  for(let i = 0; i < noSpace.length; i++){
    if(result[noSpace[i]]){
      result[noSpace[i]].push(i);
    } else {
      result[noSpace[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('hello world'));
