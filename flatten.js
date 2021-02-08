const flatten = (arrays) => {
  let flattenedArray = [];
  arrays.forEach(element => {
    if(Array.isArray(element)){
      flattenedArray.push(...flatten(element)); // it works and I dont know why
    } else {
      flattenedArray.push(element);
      // console.log(element);
    }
  });
  return flattenedArray
};

module.exports = flatten;

