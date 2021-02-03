// iterate through array of arrays and return single array
const flatten = (arrays) => {
  let flattenedArray = [];
  arrays.forEach(element => {
    element.forEach(subEl => {
      flattenedArray.push(subEl);
    });
  });
  return flattenedArray
};


const sample = [[1,2], [1,2,3], [3], [4,3,2,1]];
// should get back [1,2,1,2,3,3,4,3,2,1];

console.log(flatten(sample));

