const chai = require('chai');

const { expect } = chai;
// eslint-disable-next-line
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
  /* eslint-disable jest/valid-expect, jest/prefer-expect-assertions */
  it('should return the correct sum of two numbers', () => {
    expect(calculateNumber('SUM', 4.3, 5.7)).to.equal(10);
  });

  it('should return the correct subtraction of two numbers', () => {
    expect(calculateNumber('SUBTRACT', 10, 4)).to.equal(6);
  });

  it('should return the correct division of two numbers', () => {
    expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
  });

  it('should return "Error" when attempting to divide by zero', () => {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
  });

  it('should return the sum of two numbers if the type is invalid', () => {
    expect(calculateNumber('INVALID_TYPE', 3, 7)).to.equal(10);
  });
});
