import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../../services/user.service.client";
import {Router} from '@angular/router';
import {User} from "../../../model/user.model.client";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:string;
  user:{username:""};
  isDataAvailable:boolean = false;

  constructor(private route:ActivatedRoute,private router:Router,private  userService:UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId)
        .subscribe(
            (user:any)=>{
              this.user = user;
              this.isDataAvailable=true;

            },
           (error: any) => {
             console.error("Error getting user");
             return Observable.throw(error);
            });
    });
  }

  update(){
      this.userService.updateUser(this.userId,this.user)
        .subscribe((user:any)=>{
           this.router.navigate(['/user/',this.userId]);
           },
          (error: any) => {
          });
  }

}
