const middle = require('../middle');
const eqArray= require('../eqArray');
const chai = require('chai');
const assert = chai.assert;

describe('middle.js', () => {
  it('should return two numbers if the array is an even size', () => {
    assert.isTrue(eqArray(middle([1, 2, 3, 4, 5, 6]),[3,4]));
  })
  it('should return a single number if the array is an odd size', () => {
    assert.isTrue(eqArray(middle([1, 2, 3, 4, 5, 6, 7]),[4]));
  })
  it('should return an empty array if the 2 or less numbers are given', () => {
    assert.isTrue(eqArray(middle([1, 2]),[]));
  })

});