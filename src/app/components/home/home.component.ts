import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import {UserService} from "../../services/user.service.client";
import {SharedService} from "../../services/shared.service.client";
import {TripService} from "../../services/trip.service.client";
import {FeedService} from "../../services/feed.service.client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  feeds:any;
  userId:string;
  status:Boolean = false;

  constructor(private route:ActivatedRoute,private router:Router,private  userService:UserService ,
              private sharedService:SharedService,
              private feedService:FeedService,private sanitizer:DomSanitizer) {
  }

  ngOnInit() {
   // this.getUser();
    this.feedService.getTrendingFeeds()
      .subscribe((trip:any)=>{
        console.log(trip);
        this.feeds = trip;
        this.status = true;
      });

  }


  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
