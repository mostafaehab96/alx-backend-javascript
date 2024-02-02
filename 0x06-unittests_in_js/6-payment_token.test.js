const { expect } = require('chai');
const getPaymentTokenAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  /* eslint-disable jest/valid-expect, jest/prefer-expect-assertions, no-unused-expressions */

  /* eslint-disable jest/no-test-callback */
  it('should return data when parameter is true', (done) => {
    getPaymentTokenAPI(true)
      .then((data) => {
        expect(data.data).to.equal('Successful response from the API');
      });

    done();
  });
});
