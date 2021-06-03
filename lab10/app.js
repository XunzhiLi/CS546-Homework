var express = require('express');
const configRoutes = require('./routes');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

const path = require('path');
const session = require('express-session');
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.use(
  session({
    name: 'AuthCookie',
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(async (req, res, next) => {
  let = 0;
  if (!req.session.AuthCookie) {
    statement = 'Non-Authenticated User';
  } else {
    statement = 'Authenticated User';
  }
  console.log(
    new Date().toUTCString() +
    '-' +
    req.method +
    '-' +
    req.originalUrl +
    '-' +
    statement
  );
  next();
});
app.use('/private', async (req, res, next) => {
  if (!req.session.AuthCookie) {
    res.status(403).send('Have not log in ');
  } else {
    next();
  }
});

configRoutes(app);
app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});
