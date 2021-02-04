// Our map function will take in two arguments:

//     An array to map
//     A callback function

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

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1,arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const map = (array, cb) => {
  let results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);


