const input_Routes = require('./input');
const result_Routes = require('./result');
const path = require('path');

const constructorMethod = app => {
	app.use('/', input_Routes);
	app.use('/result', result_Routes);
	app.use('*', (req, res) => {
		res.status(404).json({ error: 'Not found' });
	});
};

module.exports = constructorMethod;
