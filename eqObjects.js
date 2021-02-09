const eqArrays = require('./eqArray');
  

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

module.exports = eqObjects;

