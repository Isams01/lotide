const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objectLength1 = Object.keys(object1).length;
  const objectLength2 = Object.keys(object2).length;
  if(objectLength1 === objectLength2){
    console.log('lengths match');
  }
};

const ab = {a: 1, b: 2}
const ba = {b:2, a:1}
const abString = {a: "1", b: "2"}

const abc = {a:1,b:2,c:3}

assertEqual(eqObjects(ab, ba),true); // true
assertEqual(eqObjects(ab, abc),false); // false
assertEqual(eqObjects(ab, abString),false); // false

