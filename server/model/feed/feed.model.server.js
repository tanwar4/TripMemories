/**
 * Created by tariq on 12/6/2017.
 */
var mongoose = require('mongoose');
var FeedSchema = require('./feed.schema.server');
var FeedModel = mongoose.model("FeedModel",FeedSchema);
FeedModel.findFeedsForUser = findFeedsForUser;
FeedModel.findTrendingFeed = findTrendingFeed;


module.exports = FeedModel;



function findFeedsForUser(userId,ids) {
 // var ids = ['512d5793abb900bf3e20d012', '512d5793abb900bf3e20d011'];
  var obj_ids = ids.map(function(id) { return ObjectId(id); });
  //db.test.find({_id: {$in: obj_ids}});
  return FeedModel.find({_id: {$in: obj_ids}});
}

function findTrendingFeed(userId) {
  return FeedModel.find({creatorId:userId});
}


