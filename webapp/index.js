var express = require('express');
var app = express();
var config = require('./config.js');

app.get('/', function(req, res) {
	res.send("Hi there, I'm served from " + (config ? config.name : "unknown") + "!");
});

app.listen(80, function() {
	console.log('Example app listening on port 80!');
});