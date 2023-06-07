const express = require('express');
const app = express();

app.get('/magic/:question', (req, res) => {
  const question = req.params.question

  const responses = [
    "It is certain you suck",
    "Without a doubt you might die",
    "Yes, definitely you will not get laid",
    "You may rely on it",
    "As I see it, you stoopid",
    "Reply hazy, try again im drunk",
    "Ask again later im bored",
    "Better not tell you now but you ugly",
    "Cannot predict now cause u a bitch",
    "Concentrate and ask again loser"
  ];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  res.send(`Question: ${question}<br>Response: ${randomResponse}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
