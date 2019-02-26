/************* Load Libraries ****************/
const runCmds  = require('./runCmd.js'); 
const express  = require('express')
const path     = require('path')
const port     = process.env.PORT || 5000
const app      = express()

/************* Send Data to Server ****************/
app.get('/express_backend', (req,res) => {
	//get data from interpreter 
	runCmds.runCmd().then( results => { 
		console.log(results);
		res.send({express: results}); commented for debugging
		//res.send(results); for debugging purposes only
	}).catch(err => {
		console.log("There was an error running exec: " , err);
	});
});

/************* Start Server for reactjs ****************/
const server = app.listen(port, () => {
	console.log(`Express running on PORT ${server.address().port}`);
});
