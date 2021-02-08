const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');
const chai = require('chai');
const assert = chai.assert;

describe('eqArray', () =>{
  it('should return true when two arrays are equal', () =>{
    assert.isTrue(eqArray([1,2,3],[1,2,3]));
  });
  it('should return false when two arrays are not the same', () => {
    assert.isFalse(eqArray([3,2,1], [1,2,3]));
  });
  it('should return false when the arrays are different lengths', () => {
    assert.isFalse(eqArray([3,2,1,0], [3,2,1]));
  });
})
