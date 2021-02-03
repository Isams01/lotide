const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let result = {};
  let noSpace = letters.replace(/\s/g, '');
  for(let i = 0; i < noSpace.length; i++){
    if(result[noSpace[i]]){
      result[noSpace[i]] += 1;
    } else {
      result[noSpace[i]] = 1;
    }
  }
  return result;
};
