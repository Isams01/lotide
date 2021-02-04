const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // iterate through keys in one object
    for (const key in object1) {
      // first check if its an array
      if ( Array.isArray(object1[key]) ) {
        if ( !eqArrays(object1[key], object2[key]) ) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    // if it makes it through the object without returning false then they are equal
    return true;
  } else {
    return false;
  }
};

const ab = {a: 1, b: 2};
const ba = {b:2, a:1};
const abString = {a: "1", b: "2"};
const abc = {a:1,b:2,c:3};

const arrAB = {a:["1", 2], b: 2, c:'ab'};
const arrBA = {b: 2, a:["1", 2], c:'ab'};
const arrCString = {a: ['1','2'], b: ['2','1']};
const arrC = {a: [1,2], b: [2,1]};
const test1 = {a:[1,2], b:2};
const test2 = {a: 1, b: 2};
const test3 = {b: 2, a:[1,2]};

console.log('Testing basic data types');
assertEqual(eqObjects(ab, ba),true); // true
assertEqual(eqObjects(ab, abc),false); // false
assertEqual(eqObjects(ab, abString),false); // false
console.log('');
console.log('testing with arrays as values');
assertEqual(eqObjects(arrAB, arrBA),true); // true
assertEqual(eqObjects(arrAB, arrC),false); // false
assertEqual(eqObjects(arrBA, arrC),false); // false
assertEqual(eqObjects(arrCString, arrC),false); // false
assertEqual(eqObjects(test1, test2),false); // false
assertEqual(eqObjects(test2, test1),false); // false
assertEqual(eqObjects(test3, test1),true); // false

