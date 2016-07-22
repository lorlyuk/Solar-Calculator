var express = require('express');
var bodyParser = require("body-parser");
var solarModule = require('./models/module.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/result', function(req, res) {
	res.send(solarModule.getResult(req.body));
});

app.listen(3000, function () {
  console.log('Solar begin...');
});