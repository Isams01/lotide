const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('eqObjects', () => {
  it('should return true for opposite objects', () => {
    const ab = {a: 1, b: 2};
    const ba = {b:2, a:1};
    assert.isTrue(eqObjects(ab,ba));
  });
  it('should return false for objects of different sizes', () => {
    const ab = {a: 1, b: 2};
    const abc = {a:1,b:2,c:3};
    assert.isFalse(eqObjects(ab,abc));
  });
  it('should return false for objects with different datatypes', () => {
    const ab = {a: 1, b: 2};
    const abString = {a: "1", b: "2"};
    assert.isFalse(eqObjects(ab,abString));
  });
  it('should return True for values as arrays', () => {
    const arrAB = {a:["1", 2], b: 2, c:'ab'};
    const arrBA = {b: 2, a:["1", 2], c:'ab'};
    assert.isTrue(eqObjects(arrAB,arrBA));
  });
  it('should return False for values with arrays but different sizes', () => {
    const arrAB = {a:["1", 2], b: 2, c:'ab'};
    const arrC = {a: [1,2], b: [2,1]};
    assert.isFalse(eqObjects(arrAB,arrC));
  });
  it('should return False for values with arrays but different datatypes', () => {
    const arrCString = {a: ['1','2'], b: ['2','1']};
    const arrC = {a: [1,2], b: [2,1]};
    assert.isFalse(eqObjects(arrCString, arrC));
  });

})