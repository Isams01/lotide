const ab = {a: 1, b: 2};
const ba = {b:2, a:1};
const abString = {a: "1", b: "2"};
const abc = {a:1,b:2,c:3};

const arrAB = {a:["1", 2], b: 2, c:'ab'};
const arrBA = {b: 2, a:["1", 2], c:'ab'};
const arrCString = {a: ['1','2'], b: ['2','1']};
const arrC = {a: [1,2], b: [2,1]};
const test1 = {a:[1,2], b:2};
const test2 = {a: 1, b: 2};
const test3 = {b: 2, a:[1,2]};

console.log('Testing basic data types');
assertEqual(eqObjects(ab, ba),true); // true
assertEqual(eqObjects(ab, abc),false); // false
assertEqual(eqObjects(ab, abString),false); // false
console.log('');
console.log('testing with arrays as values');
assertEqual(eqObjects(arrAB, arrBA),true); // true
assertEqual(eqObjects(arrAB, arrC),false); // false
assertEqual(eqObjects(arrBA, arrC),false); // false
assertEqual(eqObjects(arrCString, arrC),false); // false
assertEqual(eqObjects(test1, test2),false); // false
assertEqual(eqObjects(test2, test1),false); // false
assertEqual(eqObjects(test3, test1),true); // false