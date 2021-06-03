const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  req.session.destroy();
  let = statement = 'n';
  res.render('index', {
    statement: statement,
  });
});

module.exports = router;
