/**
 *   .
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {AuthGuard} from "./services/auth-guard.service";
import {FeedComponent} from "./components/feed/feed.component";
import {NewTripComponent} from "./components/trip/new-trip/new-trip.component";
import {ImageSearchComponent} from "./components/trip/image-search/image-search.component";
import {TripListComponent} from "./components/trip/trip-list/trip-list.component";
import {AdminUserListComponent} from "./components/admin-user-list/admin-user-list.component";
import {AdminServiceClient} from "./services/AdminServiceClient";



const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'feed', component: FeedComponent, canActivate:[AuthGuard]},


  {path: 'user/trips', component:TripListComponent, canActivate:[AuthGuard]},
  {path: 'user/newtrip', component: NewTripComponent, canActivate:[AuthGuard]},
  {path: 'user/newtrip/:tid', component: NewTripComponent, canActivate:[AuthGuard]},
  {path: 'user/image/search', component:ImageSearchComponent, canActivate:[AuthGuard]},

  {path: 'admin/user', component: AdminUserListComponent,canActivate:[AdminServiceClient]},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
