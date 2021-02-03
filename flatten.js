// iterate through array of arrays and return single array
const flatten = (arrays) => {
  let flattenedArray = [];
  arrays.forEach(element => {
    if(Array.isArray(element)){
      element.forEach(subEl => {
        flattenedArray.push(subEl);
      });
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray
};


const sample = [9,8,7,[1,2], [1,2,3], 3, [4,3,2,1],['a','b','c']];
// should get back [1,2,1,2,3,3,4,3,2,1];

console.log(flatten(sample));

