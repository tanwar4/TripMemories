module.exports= function (app) {

  app.get("/api/feed/:userId", findfeedsForUser);
  app.get("/api/feed", findTrendingFeed);


  var userModel = require('../model/user/user.model.server');
  var tripModel = require('../model/trip/trip.model.server');


  function findfeedsForUser(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId)
      .then(function (user) {
        if (user) {
          var ids = user.following;
          tripModel.feed(ids).then(function (feeds) {
            if (feeds) {
             
              res.json(feeds);
            }
            else{
              res.status(404).send({error: "Error in Feed"});
            }
          });
        }
        else {

          res.status(404).send({error: "User not Found"});
        }
      });

 /*   var comments =[{"author":"user1","datePublished":"12/5/2017",
      "comments":[{"auth":"Rihanna","commt":"awesome pic lorem ipsum"},
        {"auth":"Taylor","commt":"awesome pasdfasdfem ipsum"},
        {"auth":"Jennifer","commt":"awesome psfdsdf"}]},

      {"author":"user2","datePublished":"12/5/2017",
        "comments":[{"auth":"jon","commt":"awesome pic lorem ipsum"},
          {"auth":"marley","commt":"awesome pasdfasdfem ipsum"},
          {"auth":"bob","commt":"awesome psfdsdf"}]}];

     res.json(comments);*/
  }


  function findTrendingFeed(req,res){
    tripModel.trendingfeed().then(function (feeds) {
      if (feeds) {
        res.json(feeds);
      }
      else{
        res.status(404).send({error: "Error in Feed"});
      }
    });
  }
}
