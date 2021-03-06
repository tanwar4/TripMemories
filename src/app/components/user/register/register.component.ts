import { Component, OnInit ,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../../../services/user.service.client";
import {User} from "../../../model/user.model.client";
import {NgForm} from '@angular/forms';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  username:string;
  password:string;
  password2: string;
  errorFlag: boolean;
  dupFlag: boolean;
  errorMsg = 'Password does not match !';
  dupUserMsg = 'User Already Exists';
  newuser={};

  constructor(private router:Router,private userService:UserService, private sharedService:SharedService) {}

  register(){
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.password2 = this.registerForm.value.password2;
    if(this.password !== this.password2) {
      this.errorFlag= true;
      return;
    }



/*    this.userService.register(this.username,this.password)
      .subscribe((user:any)=>{
        console.log(user);
        this.sharedService.user=user;
        this.router.navigate(['profile']);
    });*/

    this.userService.findUserByUsername(this.username)
      .subscribe((user:any)=>{
        if(user){
          this.dupFlag = true;
        }

      },
      (error:any)=>{
        this.userService.register(this.username,this.password)
          .subscribe((user:any)=>{
            console.log(user);
            this.sharedService.user=user;
            this.router.navigate(['profile']);
          });
      });

  }
  ngOnInit() {
  }

}
