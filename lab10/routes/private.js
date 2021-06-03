const express = require('express');
const router = express.Router();
const login = require('./login');
const userinfo_ = require('../users');

async function find(un) {
  const list = userinfo_.list;
  user_info = {};
  for (var eachone of list) {
    if (eachone.Username == un) {
      user_info = eachone;
    }
  }
  return user_info;
}

router.get('/', async (req, res) => {
  un = req.session.AuthCookie.Username;
  user_info = await find(un);
  let statement = 'y';
  res.render('index', {
    statement: statement,
    user: user_info.FirstName + user_info.LastName,
    username: user_info.Username,
    FirstName: user_info.FirstName,
    LastName: user_info.LastName,
    Profession: user_info.Profession,
    Bio: user_info.Bio,
  });
});

module.exports = router;
