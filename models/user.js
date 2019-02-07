var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}); 

module.exports = mongoose.model('User', UserSchema);
