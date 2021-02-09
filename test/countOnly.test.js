const countOnly = require('../countOnly');
const chai = require('chai');
const assert = chai.assert;

describe('countOnly', () => {
  it('should return only count of names defined by true', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expected = {
      Fang: 2,
      Jason: 1
    }
    assert.deepEqual(result, expected)
  })
});
