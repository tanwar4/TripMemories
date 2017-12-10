/**
 * Created by tariq on 12/5/2017.
 */
var mongoose = require('mongoose');
var TripSchema = mongoose.Schema({
  creatorId:{type:mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  name:String,
  date:Date,
  tag: String,
  url:String,
  location: String,
  description:String,
  comments:[{author:String,
            date:Date,
            comment:String}],
  totalLike:Number
},{collection:'trip'});

module.exports =  TripSchema;
