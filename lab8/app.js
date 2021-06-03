var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
const configRoutes = require('./routes');
var app = express();

const static = express.static(__dirname + '/public');
app.use('/public', static);
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
configRoutes(app);

// app.get('/', function(req, res) {
//     res.render('string');
// });
// app.get('/results', function(req, res) {
//     res.render('results');
// });
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('server started on port' + app.get('port'));
});
