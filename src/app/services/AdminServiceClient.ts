import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import 'rxjs/Rx';
import {UserService} from "./user.service.client";

@Injectable()
export class AdminServiceClient implements  CanActivate{
  constructor(private  userService:UserService){}

  canActivate(){
    return this.userService.isAdmin();
  }
}
