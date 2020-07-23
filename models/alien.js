// we have to create the model to save our data into the DB, or aks Designing the table of the DB
const mongoose = require('mongoose');

// creating the Schema (we are telling mongodb that we need a database with this structure)
const alienSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	tech: {
		type: String,
		required: true,
	},
	subscription: {
		type: Boolean,
		required: true,
		default: false,
	},
});

module.exports = mongoose.model('Alien', alienSchema);
