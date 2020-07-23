const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Aliens';
const app = express();

const alienRouter = require('./routes/aliens');
app.use('/aliens', alienRouter); // we are saying to access the alienRouter when the URL contains '/aliens'
app.use(express.json); // json data will be send as the body using postman

// connecting to the database for the specific URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connect = mongoose.connection;

// fires the even when the connection is made
connect.on('open', function () {
	console.log('connected to database...');
});

// starting the server (Note that this will run in postman only not on the local browsers)
app.listen(5000, () => {
	console.log('Server started...');
});
