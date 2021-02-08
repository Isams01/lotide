const eqArray = require('./eqArray');

const assertArraysEqual = function(arr1, arr2) {
  if(eqArray(arr1,arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;