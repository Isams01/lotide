const eqObjects = function(object1, object2) {
  const objectLength1 = Object.keys(object1).length;
  const objectLength2 = Object.keys(object2).length;
  if (objectLength1 === objectLength2) {
    // iterate through keys in one object
    for (const key in object1) {
      // first check if its an array
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key],object2[key])) {
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if(eqObjects(actual,expected)){
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

const ab = {a:1, b:2};
const ba = {b:2, a:1};

const abc = {a:1, b:2, c:3};
const cba = {c: '3', b:2, a:1};

assertObjectsEqual(ab,ba);
assertObjectsEqual(abc,cba);

