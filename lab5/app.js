const express = require('express');
const app = express();
const configRoutes = require('./routes');
configRoutes(app);
const port = 4000;

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});
