const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

console.log(findKeyByValue({a:3, b:2}, 2));

module.exports = findKeyByValue;