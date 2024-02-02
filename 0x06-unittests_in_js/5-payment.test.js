const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./5-payment');

describe('test cases for sendPaymentRequestToAPI function', () => {
  /* eslint-disable jest/valid-expect, jest/prefer-expect-assertions, no-unused-expressions */

  let logSpy;
  /* eslint-disable jest/no-hooks */
  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    sinon.restore();
  });

  it('should log The total is: 120', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(logSpy.firstCall.args[0]).to.equal('The total is: 120');
    expect(logSpy.calledOnce).to.be.true;
  });

  it('should log The total is: 20', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(logSpy.firstCall.args[0]).to.equal('The total is: 20');
    expect(logSpy.calledOnce).to.be.true;
  });
});
