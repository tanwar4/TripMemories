import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../../services/user.service.client";
import {User} from "../../../model/user.model.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:string;
  user:{};

  constructor(private route:ActivatedRoute,private  userService:UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });

    this.user = this.userService.findUserById(this.userId);
  }

  update(){
      this.userService.updateUser(this.userId,this.user);
  }

}
