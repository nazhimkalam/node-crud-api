const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

// when dealing with databases you should know that the are Async await tasks( because it takes time to load )
router.get('/', async (req, res) => {
	try {
		// fetching data from the database
		const aliens = await Alien.find();

		// we are returning the data in a json format
		res.json(aliens);
	} catch (error) {
		console.log(error);
	}
});

// json data will be send as the body using postman (you can create views if your making an application else for testing purposes we can use views)
router.post('/', async (req, res) => {
	const alien = new Alien({
		name: req.body.name, // these data is send from postman body
		tech: req.body.tech, // these data is send from postman body
		sub: req.body.sub, // these data is send from postman body
	});

	try {
		const alien_01 = await alien.save();
		res.json(alien_01); // sending the data in json format
	} catch (error) {
		console.log(error);
	}
});

// getting data from a particular id
router.get('/:id', async (req, res) => {
	try {
		// fetching data from the database by a particular id
		const alien = await Alien.findById(req.params.id);

		// we are returning the data in a json format
		res.json(alien);
	} catch (error) {
		console.log(error);
	}
});

// patching using postman or (minor updates)
router.patch('/:id', async (req, res) => {
	try {
		// fetching data from the database by a particular id
		const alien = await Alien.findById(req.params.id);
		alien.sub = true; // this is the update

		const alien_01 = await alien.save(); // we save it again and it returns the result
		res.json(alien_01);

	} catch (error) {
		console.log(error);
	}
});

// delete using postman
router.delete('/:id', async (req, res) => {
	try {
		// fetching data from the database by a particular id
		const alien = await Alien.findById(req.params.id).remove();
		res.json(alien); // we are returning the data in a json format
		
	} catch (error) {
		console.log(error);
	}
});


module.exports = router;
