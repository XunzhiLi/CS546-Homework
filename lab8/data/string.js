const mongoCollections = require('../config/mongoCollections');
const input = mongoCollections.input;

let exportedMethods = {
	async get_stringtext(ID) {
		const stringCollection = await input();
		const post = await stringCollection.findOne({ _id: ID });
		return post;
	},

	async add_String(str) {
		str.string;
		const stringCollection = await input();
		let newstring = str;
		const insertInfo = await stringCollection.insertOne(newstring);
		if (insertInfo.insertedCount === 0) throw 'Could not add this string';
		const newId = insertInfo.insertedId;
		return await this.get_stringtext(newId);
	}
};
module.exports = exportedMethods;
