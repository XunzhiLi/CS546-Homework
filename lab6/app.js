const express = require('express');
const app = express();
const configRoutes = require('./routes');
const data = require('./data');

app.use(express.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});

// albumData.addAlbum('good','lee',['1','2','3'])
