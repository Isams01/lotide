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
  for(let i = 0; i < letters.length; i++){
    if(result[letters[i]]){
      result[letters[i]] += 1;
    } else {
      result[letters[i]] = 1;
    }
  }
  return result;
};


console.log(countLetters('hhhb bbc'));