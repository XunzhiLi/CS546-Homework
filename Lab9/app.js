var express = require('express');
const configRoutes = require('./routes');
var app = express();
const path = require('path');
const static = express.static(__dirname + '/public');
app.use('/public', static);
configRoutes(app);
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('server started on port' + app.get('port'));
});
