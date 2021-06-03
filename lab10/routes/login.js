const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const userinfo_ = require('../users');
const saltRounds = 16;

async function compare(pwd, p) {
  let match_result = false;
  match_result = await bcrypt.compare(pwd, p);
  if (match_result) {
    console.log('The passwords match');
    return '1';
  } else {
    console.log('The passwords do not match');
  }
  return '2';
}

router.post('/', async function (req, res) {
  const user_log = req.body;
  usn = user_log.username;
  pwd = user_log.password;
  const list = userinfo_.list;
  for (var eachone of list) {
    if (usn == eachone.Username) {
      p = eachone.Password;
      match_result = await compare(pwd, p);
      if (match_result == '1') {
        req.session.AuthCookie = { Username: usn, password: pwd };
        res.redirect('./private');
        return;
      } else {
        res.status(401).render('login', {
          question: 'pwd'
        }
        )
        return;
      }
    }
  }
  res.status(401).render('login', {
    question: 'usn'
  })
});

module.exports = router;
