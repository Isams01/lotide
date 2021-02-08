const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;

describe('tail', () => {
  it('should return [2,3] when given [1,2,3]', () => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  })
});


