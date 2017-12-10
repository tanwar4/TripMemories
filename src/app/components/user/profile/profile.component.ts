import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../../services/user.service.client";
import {Router} from '@angular/router';
import {User} from "../../../model/user.model.client";
import {Observable} from "rxjs/Observable";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:string;
  user:{};
  isDataAvailable:boolean = false;

  constructor(private route:ActivatedRoute,private router:Router,private  userService:UserService ,
              private sharedService:SharedService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    //this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

  update(){
      this.userService.updateUser(this.userId,this.user)
        .subscribe((user:any)=>{
          // this.router.navigate(['/user/',this.userId]);
          this.ngOnInit();
           },
          (error: any) => {
          });
  }


  logout(){
    this.userService.logout()
      .subscribe((data:any)=>{
        this.router.navigate(['/login']);
      });
  }

}
