import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import {TripService} from "../../../services/trip.service.client";
import {environment} from "../../../../environments/environment";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  userId:string;
  user:{};
  trip:{};
  name:string;
  tag:string;
  location:string;
  text:string;
  tripId:string;

  baseURL:string = environment.baseUrl;


  constructor(private route:ActivatedRoute,private router:Router, private tripService:TripService,
              private sharedService: SharedService) {
  }
  ngOnInit() {
    this.getUser();

    this.route.params.subscribe(params => {
      this.tripId= params['tid'];
    });
    if(this.tripId){
      this.tripService.findTripById(this.tripId)
        .subscribe((trip:any)=>{
         // this.tripId = trip._id;
          this.name= trip.name;
          this.tag = trip.tag;
          this.text = trip.text;
          this.location = trip.location;
        },(error:any)=>{});

    }

  }

  deleteTrip(){
    this.tripService.deleteTrip(this.tripId)
      .subscribe((trip:any)=>{
            this.router.navigate(['user','trips']);
      });
  }

  getUser(){
    //this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

}
