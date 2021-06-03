const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
	res.render('string', {
		title: 'The Best Palindrome Checker in the World!',

	});
});

module.exports = router;
