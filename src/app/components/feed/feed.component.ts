import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {SharedService} from "../../services/shared.service.client";
import {UserService} from "../../services/user.service.client";
import {FeedService} from "../../services/feed.service.client";
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import {TripService} from "../../services/trip.service.client";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  user:any;
  feeds:any;
  userId:string;
  commt:string;
  showHide:Boolean = false;

  constructor(private route:ActivatedRoute,private router:Router,private  userService:UserService ,
              private sharedService:SharedService,private feedService:FeedService,
              private tripService:TripService,private sanitizer:DomSanitizer) {
  }

  ngOnInit() {

      this.getUser();
       this.updateFeed();

  }
   updateFeed(){
     this.feedService.getUserFeeds(this.user)
       .subscribe((feed)=>{
         this.feeds = feed;
       });
   }
  getUser(){
    //this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

  comment(tripId:string){
    const c = {
      author:this.user.username,
      date: new Date(),
      comment:this.commt
    };
    this.tripService.findTripById(tripId)
      .subscribe((trip:any)=>{
             trip.comments.push(c);
             this.tripService.updateTrip(tripId,trip)
               .subscribe((trip:any)=>{
                // this.ngOnInit();
                 this.updateFeed();
                 this.commt = null;
               });
    });

  }
  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  follow(user2:string){
    //if(this.user.following.indexOf(user2) != -1) {
      this.user.following.push(user2);
      this.userService.updateUser(this.userId, this.user)
        .subscribe((user:any)=> {
          this.sharedService.user = user;
          //this.router.navigate(['/feed']);
        });
   // }
  }

  logout(){
    this.userService.logout()
      .subscribe((data:any)=>{
        this.router.navigate(['/login']);
      });
  }

  getTrendingFeeds(){
    this.feedService.getTrendingFeeds()
      .subscribe((feed)=>{
        this.feeds = feed;
      });
  }

  getUserFeeds(){
    this.feedService.getUserFeeds(this.user)
      .subscribe((feed)=>{
        this.feeds = feed;
      });
  }

}
