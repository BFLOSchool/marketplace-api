var express = require('express')
var app = express()
var fs = require('fs');
var cors = require('cors');

var file = JSON.parse(fs.readFileSync('data.json'));

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello There!')
})

app.get('/api/marketplace', function (req, res) {
  res.json(file)
})

app.listen(3000)
