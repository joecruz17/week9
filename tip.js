const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()


app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total;
    const tipPercentage = req.params.tipPercentage;
  
    const tipAmount = (total * tipPercentage) / 100;
  
    res.send(tipAmount.toString());
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });