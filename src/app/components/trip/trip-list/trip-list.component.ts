import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import {SharedService} from "../../../services/shared.service.client";
import {UserService} from "../../../services/user.service.client";
import {TripService} from "../../../services/trip.service.client";


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  user:any;
  feeds:any;
  userId:string;

  constructor(private route:ActivatedRoute,private router:Router,private  userService:UserService ,
              private sharedService:SharedService,
              private tripService:TripService,private sanitizer:DomSanitizer) {
  }

  ngOnInit() {
    this.getUser();
    this.tripService.findTripByUser(this.userId)
      .subscribe((trip:any)=>{
         this.feeds = trip;
      });

  }

  getUser(){
    //this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
