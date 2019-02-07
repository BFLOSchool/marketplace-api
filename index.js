const express = require('express')
const app = express()
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const bodyParser = require('body-parser');

mongoose.connect(config.database);

const User = require("./models/user");

var file = JSON.parse(fs.readFileSync('data.json'));
app.use(cors());
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello There!')
})

app.get('/users', function (req, res) {
  User.find({ }, function(err, users) {
    if (err) {
      res.status(400).send({message: err.message});
    } else {
      res.status(200).send({users: users});
    }
  })
})

app.post('/signup', function (req, res) {
  console.log(req.body)
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password
  });
  newUser.save(function(err) {
    if (!err) {
      res.status(200).send({message: "success"});
    } else {
      res.status(400).send({message: err.message});
    }
  });
})


app.get('/api/marketplace', function (req, res) {
  res.json(file)
})

app.listen(3000)
