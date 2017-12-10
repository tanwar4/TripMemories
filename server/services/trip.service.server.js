module.exports= function (app) {

  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../public/uploads'});

  app.post("/api/user/:userId/trip",createTrip);
  app.get("/api/user/:userId/trip" ,findAllTripsForUser);
  app.get("/api/trip/:tripId",findTripById);
  app.put("/api/trip/:tripId",updateTrip);
  app.delete("/api/trip/:tripId",deleteTrip);

  var tripModel = require('../model/trip/trip.model.server');


  app.post("/api/uploads",upload.single('myFile'),uploadFile);

  function uploadFile(req,res) {
    var tripId      = req.body.tripId;
    var myFile        = req.file;
    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;
    var userId = req.body.userId;
    var websiteId = req.body.webId;
    var pageId = req.body.pageId;
    var width  = req.body.width;

    var url = 'http://localhost:3100/uploads/' + filename;
    var domain = 'http://localhost:4200';
    if(process.env.MLAB_USERNAME_WEBDEV) {
      url = process.env.URL_PROD+'/uploads/'+ filename;
      domain =  process.env.URL_PROD;
    }

    var d = new Date();
    var trip  = {"creatorId":req.body.userId,"name":req.body.name,
      "date":d,"location":req.body.location,"tag":req.body.tag,"description":req.body.text,"url":url};


    if(tripId === '') {   // new image upload
      tripModel.createTrip(trip)
        .then(function (trip) {
          tripId = trip._id;
        });
    }
    else{     //image update
      tripModel.updateTrip(tripId,trip)
        .then(function (w) {
         // console.log("Image Updated");
        });
    }

   // var callbackUrl = domain+"/user/"+userId+"/listtrip";
    var callbackUrl = domain+"/feed";
    res.redirect(callbackUrl);
  }



  function findTripById(req,res){
    var tripId = req.params["tripId"];
    tripModel.findTripById(tripId)
      .then(function (trip) {
        if(trip){
          res.json(trip);
        }
        else{
          res.status(404).send({ error: "Trip not Found" });
        }
      });
  }

  function findAllTripsForUser(req,res) {
    var userId = req.params["userId"];
    tripModel.findAllTripsForUser(userId)
      .then(function (trip) {
        if(trip){
          res.json(trip);
        }
        else{
          res.status(404).send({ error: "Trip not Found" });
        }
      });
  }

  function createTrip(req,res){
    var userId = req.params["userId"];
    var trip = req.body;

    trip.creatorId= userId;
    tripModel.createTrip(trip)
      .then(function (trip) {
        res.json(trip);
      });
  }

  function updateTrip(req,res){
    var tripId = req.params["tripId"];
    var trip = req.body;

    tripModel.updateTrip(tripId,trip)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteTrip(req,res){
    var tripId = req.params["tripId"];
    tripModel.deleteTrip(tripId)
      .then(function (w) {
        res.json(w);
      },function (err) {
      });
  }

}
