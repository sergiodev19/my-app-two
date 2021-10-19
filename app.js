const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
        <h1> Express Demo App </h1>
        <h4> Message: Success </h4>
        <p> Version 3.3 </p>
        <p style="color:red;"> ${process.env.TEST_ENV} </p>
  `);
});

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 250
    },
    {
      productId: '103',
      price: 310
    },
  ]);
});

app.listen(port, () => {
  console.log(`Demo App is up and listening to port ${port}`);
});