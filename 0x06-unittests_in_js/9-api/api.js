const express = require('express');

const app = express();

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!Number.isInteger(Number(id))) {
    return res.status(404).json({ error: 'Invalid id parameter, must be an integer' });
  }
  next();
};

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get(/^\/cart\/(\d+)$/, (req, res) => {
  const id = req.params[0];
  res.send(`Payment methods for cart :${id}`);
});
app.listen(7865, () => console.log('API available on localhost port 7865'));

module.exports = app;
