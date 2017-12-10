/**
 * Created by tariq on 11/8/2017.
 */
var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  username:String,
  password:String,
  firstName:String,
  lastName:String,
  email:String,
  phone:String,
  location:String,
  role:{type:String,default:"user"},
  followers:[String],
  following:[String],
  facebook: {
    id:    String,
    token: String
  }

},{collection:'user'});

module.exports =  UserSchema;
