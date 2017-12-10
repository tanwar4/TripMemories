import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {FlickrService} from "../../../services/flickr.service.client";
import {TripService} from "../../../services/trip.service.client";
import {SharedService} from "../../../services/shared.service.client";



@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  userId:string;
  user:{};
  tripId:string;
  trip:{};
  url:string;
  widgetId:string;
  upload:string;
  widget:any;
  photos:any[]=[];
  searchText:string;
  // baseURL:string = environment.baseUrl;

  constructor(private route:ActivatedRoute,private router:Router, private flickrService:FlickrService,
              private sharedService:SharedService , private  tripService:TripService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    //this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const trip = {
      creatorId:this.userId,
      description: photo.title,
      url: url
    };
    this.tripService.createTrip(this.userId,trip)
      .subscribe((data:any) => {
        this.router.navigate(['/feed']);
      });
  }

}
