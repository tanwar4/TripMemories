/**
 * Created by tariq on 12/6/2017.
 */
var mongoose = require('mongoose');
var FeedSchema = mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  imageId:String,
  date:String,
  tag: String,
  description:String,
  comment:[String],
  totalLike:Number,
},{collection:'feed'});

module.exports =  FeedSchema;
