/**
 * Created by tariq on 12/5/2017.
 */
var mongoose = require('mongoose');
var TripSchema = require('./trip.schema.server');
var TripModel = mongoose.model("TripModel",TripSchema);
TripModel.createTrip = createTrip;
TripModel.findAllTripsForUser = findAllTripsForUser;
TripModel.findTripById = findTripById;
TripModel.findTripByTag = findTripByTag;
TripModel.deleteTrip = deleteTrip;
TripModel.updateTrip = updateTrip;
TripModel.feed = feed;
TripModel.trendingfeed = trendingfeed;

module.exports = TripModel;


function createTrip(trip){
  return TripModel.create(trip);
}

function updateTrip(tripId, trip){
  return TripModel.findByIdAndUpdate(tripId,trip);
}

function deleteTrip(tripId){
  return TripModel.findByIdAndRemove(tripId);
}

function findAllTripsForUser(userId) {
  return TripModel.find({creatorId:userId});
}

function findTripById(tripId) {
  return TripModel.findOne({_id:tripId});
}

function findTripByTag(tag) {
  return TripModel.findOne({tag:tag});
}

function feed(ids){
    // var ids = ['512d5793abb900bf3e20d012', '512d5793abb900bf3e20d011'];
    //var obj_ids = ids.map(function(id) { return ObjectId(id); });
    //db.test.find({_id: {$in: obj_ids}});
    return TripModel.find({creatorId: {$in: ids}}).populate('creatorId').exec();
}

function trendingfeed(){
  return TripModel.find({}).populate('creatorId').exec();
}
