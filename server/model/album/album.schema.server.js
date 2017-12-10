/**
 * Created by tariq on 12/5/2017.
 */
var mongoose = require('mongoose');
var AlbumSchema = mongoose.Schema({
  AlbumId:{type:mongoose.Schema.Types.ObjectId, ref:'TripModel'},
  name:String,
  description:String
},{collection:'album'});

module.exports =  AlbumSchema;
