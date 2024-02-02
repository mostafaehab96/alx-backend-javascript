const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  /* eslint-disable jest/valid-expect, jest/prefer-expect-assertions, no-unused-expressions */
  it('should return correct results', () => {
    request('http://localhost:7865', (err, res, body) => {
      if (!err) {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        expect(res.request.port).to.equal('7865');
      }
    });
  });
});
