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

describe('available payments test', () => {
  it('should return the right object', (done) => {
    request('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
      if (!err) {
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(body).to.deep.equal(expected);
        done();
      }
    });
  });
});

describe('login test', () => {
  it('should log the username', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'Betty',
      },
    };
    request.post(options, (err, res, body) => {
      if (!err) {
        expect(body).to.equal('Welcome Betty');
      }
      done();
    });
  });
});
