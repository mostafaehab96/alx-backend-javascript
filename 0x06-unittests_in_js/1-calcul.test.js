const assert = require('assert');
// eslint-disable-next-line
const calculateNumber = require('./1-calcul');

describe('calculateNumber Test', () => {
  /* eslint-disable jest/expect-expect,jest/prefer-expect-assertions */
  it('should return the correct sum of two numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 4.3, 5.7), 10);
  });

  it('should return the correct subtraction of two numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 10, 4), 6);
  });

  it('should return the correct division of two numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
  });

  it('should return "Error" when attempting to divide by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
  });

  it('should return the sum of two numbers if the type is invalid', () => {
    assert.strictEqual(calculateNumber('INVALID_TYPE', 3, 7), 10);
  });
});
/* eslint-enable */
