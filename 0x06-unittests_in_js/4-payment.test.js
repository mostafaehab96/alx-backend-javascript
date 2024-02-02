const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  /* eslint-disable jest/valid-expect, jest/prefer-expect-assertions, no-unused-expressions */
  it('should use Utils.calculateNumber to compute the sum', () => {
    const sendPaymentStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(sendPaymentStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.firstCall.args[0]).to.equal('The total is: 10');
  });
});
