const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/', async (req, res) => {
  if (req.session.AuthCookie) {
    res.redirect('/private');
  } else {
    // res.sendFile(path.resolve('./login.html'));
    res.render('login')
  }
});

module.exports = router;
