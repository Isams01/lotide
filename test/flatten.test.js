const flatten = require('../flatten.js');
const chai = require('chai');
const assert = chai.assert;

describe('flatten', () => {
  it('should return an array from a complex one', () => {
    const input = [9,8,7,[1,2], [1,2,3], 3, [4,3,2,1],['a','b','c']];
    const expected = [9,8,7,1,2,1,2,3,3,4,3,2,1,'a','b','c'];
    assert.deepEqual(flatten(input), expected);
  })
});


