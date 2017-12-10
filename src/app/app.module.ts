import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {UserService} from './services/user.service.client';

import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import {FlickrService} from "./services/flickr.service.client";
import {SharedService} from "./services/shared.service.client";
import {AuthGuard} from "./services/auth-guard.service";
import { FeedComponent } from './components/feed/feed.component';
import {FeedService} from "./services/feed.service.client";
import { NewTripComponent } from './components/trip/new-trip/new-trip.component';
import {TripService} from "./services/trip.service.client";
import {ImageSearchComponent } from './components/trip/image-search/image-search.component';
import { TripEditComponent } from './components/trip/trip-edit/trip-edit.component';
import { TripListComponent } from './components/trip/trip-list/trip-list.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import {AdminServiceClient} from "./services/AdminServiceClient";

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    FeedComponent,
    NewTripComponent,
    ImageSearchComponent,
    TripEditComponent,
    TripListComponent,
    AdminUserListComponent,
  ],
  imports:[
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
  ],
  // Client Side services here
  providers: [ TestService,UserService,
               FlickrService,SharedService,
                FeedService,TripService ,AdminServiceClient,AuthGuard],   
  bootstrap: [AppComponent]
})
export class AppModule { }
