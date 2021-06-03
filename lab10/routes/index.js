const privateRoutes = require('./private');
const userRoutes = require('./users');
const path = require('path');
const loginRoutes = require('./login');
const logoutRoutes = require('./logout');

const constructorMethod = (app) => {
  app.use('/', userRoutes);
  app.use('/private', privateRoutes);
  app.use('/login', loginRoutes);
  app.use('/logout', logoutRoutes);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
