const findKeyByValue = require('../findKeyByValue');
const chai = require('chai');
const assert = chai.assert;

describe('findKeyByValue', () => {
  it('should return b when given ({a:3,b:2,c:1},2)',() => {
    const input = {
      a: 3,
      b: 2,
      c: 1
    };
    const output = 'b';
    assert.deepEqual(findKeyByValue(input,2),output)
  })
})