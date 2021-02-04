const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, cb) => {
  for (key in obj) {
    if(cb(obj[key])){
      return key;
    }
  }
};


// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'noma');

// const testObj = {
//   hello: 'world',
//   a: 2,
//   b: 3
// }

// assertEqual(findKey(testObj, x => x===2), 'a');

// const lodashTest = {
//   'barney':  { 'age': 36, 'active': true },
//   'fred':    { 'age': 40, 'active': false },
//   'pebbles': { 'age': 1,  'active': true }
// }

// assertEqual(findKey(lodashTest, x => x.active===true), 'barney');