const assertEqual = require('../assertEqual');
const head = require('../head');
const chai = require('chai');
const assert = chai.assert;

// ############ head tests ###################
describe('head.js', () => {
  it('should return 5 when given [5,6,7]', () => {
    assert.strictEqual(head([5,6,7]),5);
  })
  it('should return "Hello" when given ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]),"Hello");
  })
  it('should return undefined when given an empty array', () => {
    assert.strictEqual(head([]), undefined);
  })
  it('should return a single value when given an array of size 1', () => {
    assert.strictEqual(head([1]), 1);
  })
});