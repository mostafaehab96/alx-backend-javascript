const { assert } = require('chai');
// eslint-disable-next-line import/extensions
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  // eslint-disable-next-line jest/expect-expect,jest/prefer-expect-assertions
  it('calculateNumberTest', () => {
    assert.equal(calculateNumber(1, 1), 2);
    assert.equal(calculateNumber(1.2, 2), 3);
    assert.equal(calculateNumber(1.5, 2), 4);
    assert.equal(calculateNumber(1.6, 2), 4);
    assert.equal(calculateNumber(1, 2.1), 3);
    assert.equal(calculateNumber(1.2, 2.3), 3);
    assert.equal(calculateNumber(1.5, 2.5), 5);
    assert.equal(calculateNumber(1.6, 2.6), 5);
  });
});
