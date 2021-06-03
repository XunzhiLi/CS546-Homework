const express = require('express');
const router = express.Router();
const data = require('../data');
const StringData = data.string;

// router.get('/', async function (req, res) {
// 	res.render('result', {
// 		title: 'The Palindrome Results!',
// 		condition: true
// 	});
// });

async function Judge(str) {
	str = str.toLowerCase()
	str = str.replace(/\s*/g,"")
	str = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\‘|\’|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
	console.log(str)
	len = str.length
	if(len==0){
		return false
	}
	l = 0
	r = len-1
	while(l<r){
		if(str[l]!=str[r]){
			return false
		}
		else{
			l+=1
			r-=1
		}
	}
	return true
}

router.post('/', async (req,res) => {
	input_string = req.body;
	const str = await StringData.add_String(input_string);
	a = str.st_
	let error = '';
	if (!a){
		error= 'You have not provided a string to check whether it is a palindrome string'
		res.status(400).render('string',{
			title: 'The Best Palindrome Checker in the World!',
			error:error,
			hasErrors: true,
		})
		return;
	}
	result = await Judge(a)
	if (result){
		res.render('result', {
			title: 'The Palindrome Results!',
			condition: true,
			str:a
		});
	}
	else{
		res.render('result', {
			title: 'The Palindrome Results!',
			condition: false,
			str:a
		})
	}
});
module.exports = router;
