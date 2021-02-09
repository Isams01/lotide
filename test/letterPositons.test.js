const letterPositions = require('../letterPositions');
const chai = require('chai');
const assert = chai.assert;

describe('letterPossitions', () => {
  it('should return a: [0,1,2] when given "aaa"', () => {
    const input = 'aaa';
    const output = {a: [0,1,2]};

    assert.deepEqual(letterPositions(input), output);
  })

  it('should work with more complicated strings and ignore whitespace', () => {
    const input = 'hello world';
    const output = {
      h: [ 0 ],
      e: [ 1 ],
      l: [ 2, 3, 9 ],
      o: [ 4, 7 ],
      w: [ 6 ],
      r: [ 8 ],
      d: [ 10 ]
    };

    assert.deepEqual(letterPositions(input), output);
  })
})