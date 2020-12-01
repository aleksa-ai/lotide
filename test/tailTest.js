const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for [1,2,3,4,5]", () => {
    assert.strictEqual(tail([1,2,3,4,5])[0], 2);
  })
});