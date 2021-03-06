/**
 * Created by tariq on 11/8/2017.
 */
var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model("UserModel",UserSchema);
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUserName = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;

module.exports = UserModel;


function createUser(user){
  return UserModel.create(user);
}

function updateUser(userId,user){
/*  return UserModel.update({_id:userId}, {$set: {"firstName": user.firstName,
                                              "lastName": user.lastName}});*/
  return UserModel.findByIdAndUpdate(userId,user);
}

function findUserByUsername(user){
  return UserModel.findOne({username:user});
}

function findUserByCredentials(user,pwd){
  return UserModel.findOne({username:user,password:pwd});
}

function findAllUsers() {
  return UserModel.find(function (err,docs) {

  });
}

function deleteUser(userId){
  return UserModel.findByIdAndRemove(userId);
}

function findUserById(userId) {
  return UserModel.findOne({_id:userId});
}

