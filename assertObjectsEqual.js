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
};
