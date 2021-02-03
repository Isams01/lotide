const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for(const key in object){
    if(object[key] === value){
      return key;
    }
  }
}

const sampleObject = {
  a: 1,
  b: 3,
  c: 3,
  show: "brooklyn 99",
  testing: "lighthouse in the house",
}

assertEqual(findKeyByValue(sampleObject, 'brooklyn 99'), 'show');
assertEqual(findKeyByValue(sampleObject, 3), 'b');
assertEqual(findKeyByValue(sampleObject, 1), 'a');
assertEqual(findKeyByValue(sampleObject, 'lighthouse in the house'), 'testing');