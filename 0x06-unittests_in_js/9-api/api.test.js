const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  /* eslint-disable jest/valid-expect, jest/prefer-expect-assertions, no-unused-expressions */
  /* eslint-disable jest/no-test-callback */
  it('should return correct results', (done) => {
    request('http://localhost:7865/', 'GET', (err, res, body) => {
      if (!err) {
        expect(res.statusCode).to.equal(200);
        expect(res.request.method).to.equal('GET');
        expect(res.request.port).to.equal('7865');
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  });
});

describe('cart page', () => {
  /* eslint-disable jest/valid-expect, jest/prefer-expect-assertions, no-unused-expressions */
  /* eslint-disable jest/no-test-callback */
  it('should return status 200 when id is a number', (done) => {
    request('http://localhost:7865/cart/12', 'GET', (err, res, body) => {
      if (!err) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      }
    });
  });

  it('should return status 404 when id is a not number', (done) => {
    request('http://localhost:7865/cart/hello', 'GET', (err, res, body) => {
      if (!err) {
        expect(res.statusCode).to.equal(404);
        done();
      }
    });
  });
});
