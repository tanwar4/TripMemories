webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_feed_service_client__ = __webpack_require__("../../../../../src/app/services/feed.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_trip_new_trip_new_trip_component__ = __webpack_require__("../../../../../src/app/components/trip/new-trip/new-trip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_trip_service_client__ = __webpack_require__("../../../../../src/app/services/trip.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_trip_image_search_image_search_component__ = __webpack_require__("../../../../../src/app/components/trip/image-search/image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_trip_trip_edit_trip_edit_component__ = __webpack_require__("../../../../../src/app/components/trip/trip-edit/trip-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_trip_trip_list_trip_list_component__ = __webpack_require__("../../../../../src/app/components/trip/trip-list/trip-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_AdminServiceClient__ = __webpack_require__("../../../../../src/app/services/AdminServiceClient.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_feed_feed_component__["a" /* FeedComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_trip_new_trip_new_trip_component__["a" /* NewTripComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_trip_image_search_image_search_component__["a" /* ImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_trip_trip_edit_trip_edit_component__["a" /* TripEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_trip_trip_list_trip_list_component__["a" /* TripListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* Routing */],
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_14__services_shared_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_17__services_feed_service_client__["a" /* FeedService */], __WEBPACK_IMPORTED_MODULE_19__services_trip_service_client__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_24__services_AdminServiceClient__["a" /* AdminServiceClient */], __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_trip_new_trip_new_trip_component__ = __webpack_require__("../../../../../src/app/components/trip/new-trip/new-trip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_trip_image_search_image_search_component__ = __webpack_require__("../../../../../src/app/components/trip/image-search/image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_trip_trip_list_trip_list_component__ = __webpack_require__("../../../../../src/app/components/trip/trip-list/trip-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_AdminServiceClient__ = __webpack_require__("../../../../../src/app/services/AdminServiceClient.ts");
/**
 *   .
 */













var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_7__components_feed_feed_component__["a" /* FeedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/trips', component: __WEBPACK_IMPORTED_MODULE_10__components_trip_trip_list_trip_list_component__["a" /* TripListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/newtrip', component: __WEBPACK_IMPORTED_MODULE_8__components_trip_new_trip_new_trip_component__["a" /* NewTripComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/newtrip/:tid', component: __WEBPACK_IMPORTED_MODULE_8__components_trip_new_trip_new_trip_component__["a" /* NewTripComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/image/search', component: __WEBPACK_IMPORTED_MODULE_9__components_trip_image_search_image_search_component__["a" /* ImageSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin/user', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_AdminServiceClient__["a" /* AdminServiceClient */]] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  margin-bottom: 5px;\r\n}\r\n.body{\r\n  padding-top: 70px;\r\n  padding-bottom: 70px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\" row navbar navbar-static-top navbar-default\">\n  <div class=\" col-sm-12 container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">TripsDiaries</a>\n    </div>\n    <ul class=\"inline nav navbar-nav navbar-user navbar-right\">\n      <li><a [routerLink]=\"['/feed']\"><span class=\"glyphicon glyphicon-home\"></span></a></li>\n      <li><a [routerLink]=\"['/user/','newtrip']\"><span class=\"glyphicon glyphicon-plus\"></span>  </a></li>\n      <li><a [routerLink]=\"['/profile']\"><span class=\"glyphicon glyphicon-user\"></span></a></li>\n      <li><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n<!-------------------------------->\n\n<div class=\"body container-fluid\">\n\n<div class=\"col-md-6 col-md-offset-3\">\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let u of users\">\n      <b>{{u.username}}</b>\n      <a (click)=\"deleteUser(u._id)\" *ngIf=\"u.role != 'ADMIN'\"><span class=\"pull-right glyphicon glyphicon-cog\"> Delete </span></a>\n    </li>\n  </ul>\n\n</div>\n</div>\n\n\n\n\n\n\n\n\n\n<!------------------------------->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-user-list/admin-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminUserListComponent = (function () {
    function AdminUserListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    AdminUserListComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (user) {
            _this.ngOnInit();
        });
    };
    return AdminUserListComponent;
}());
AdminUserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-list',
        template: __webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-user-list/admin-user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminUserListComponent);

var _a, _b;
//# sourceMappingURL=admin-user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  margin-bottom: 5px;\r\n}\r\n.comment-sec{\r\n  margin-bottom: 15px;\r\n  margin-top: 5px;\r\n\r\n}\r\n\r\n.img-feed{\r\n  background-color: white;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.dbd-feed{\r\n  background-color: whitesmoke;\r\n  margin-bottom: 25px;\r\n}\r\n.sub-text {\r\n  color:#aaa;\r\n  font-family:verdana;\r\n  font-size:11px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-static-top navbar-default \">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12 col-md-6 col-sm-6 navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">TripsDiaries</a>\n          </div>\n\n   <div  class=\"col-xs-12 col-md-6 col-sm-6\">\n      <ul class=\"inline nav navbar-nav  navbar-right\">\n        <a  class=\"navbar navbar-brand\" href=\"/admin/user\" [hidden]= \"user.role !=='ADMIN'\"> USERS</a>\n        <li><a [routerLink]=\"['/feed']\"><span class=\"glyphicon glyphicon-home\"></span></a></li>\n        <li><a [routerLink]=\"['/user/','newtrip']\"> <span class=\"glyphicon glyphicon-plus\"></span>  </a></li>\n        <li><a [routerLink]=\"['/profile']\"><span class=\"glyphicon glyphicon-user\"></span></a></li>\n        <li><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\n      </ul>\n   </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"body col-md-6 col-md-offset-3\">\n  <ul class=\"nav nav-tabs\">\n    <li ><a (click)=\"getUserFeeds()\">My Feeds</a></li>\n    <li ><a (click)=\"getTrendingFeeds()\">Trending</a></li>\n  </ul>\n\n  <div class=\"row img-feed\">\n\n    <!------------------------------------->\n\n    <div class=\"col-sm-12 dbd-feed\" *ngFor=\"let feed of feeds\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <img src=\"../../../assets/images/main.jpg\" class=\"img-circle\" style=\"max-width:20%;height: 40px;width: 40px\">\n          <span><b> {{feed.creatorId.username}}</b> shared a trip to  <b>{{feed.location}} </b></span>\n        </div>\n\n        <div class=\"col-sm-2 pull-right\" *ngIf=\"(user.following.indexOf(feed.creatorId._id) == -1) && (user._id != feed.creatorId._id)\">\n          <button (click)=\"follow(feed.creatorId._id)\" class=\" avt-btn btn btn-danger btn-block\"> Follow</button>\n\n        </div>\n\n\n      </div>\n\n      <div>\n        <img  [src]=\"sanitize(feed.url)\" width=\"100%\" height=\"100%  \">\n      </div>\n      <div class=\"row comment-sec\">\n        <div class=\"col-sm-12\">\n\n          <h5 class=\"comments-title\">\n          <a (click) = \"showHide=!showHide\"> <span class=\"bagde\">{{feed.comments.length}}</span>\n            Comments</a>\n\n          </h5>\n          <ul class=\"media-list comment-detail-list\" *ngIf=\"showHide\">\n            <li class=\"media\" *ngFor=\"let comment of feed.comments\">\n              <div>\n                <div class=\"media-left\">\n                  <a href=\"#\" class=\"author\">{{ comment.author }}</a><br />\n                  <time class=\"sub-text\">{{ comment.date | date:\"MM/dd/yyyy\" }}</time>\n                </div>\n                <div class=\"media-body\">\n                  <div class=\"comment-body\">\n                    <p>{{ comment.comment }}</p>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <form class=\"form-inline\" role=\"form\">\n            <div class=\"form-group\">\n              <input class=\"form-control\" [(ngModel)]='commt' name =\"commt\"\n                     type=\"text\" placeholder=\"Your comments\" />\n            </div>\n            <div class=\"form-group\">\n              <button (click)=\"comment(feed._id)\" class=\"btn btn-default\">Comment </button>\n            </div>\n          </form>\n\n        </div>\n\n\n      </div>\n\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feed_service_client__ = __webpack_require__("../../../../../src/app/services/feed.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_trip_service_client__ = __webpack_require__("../../../../../src/app/services/trip.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FeedComponent = (function () {
    function FeedComponent(route, router, userService, sharedService, feedService, tripService, sanitizer) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.feedService = feedService;
        this.tripService = tripService;
        this.sanitizer = sanitizer;
        this.showHide = false;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.updateFeed();
    };
    FeedComponent.prototype.updateFeed = function () {
        var _this = this;
        this.feedService.getUserFeeds(this.user)
            .subscribe(function (feed) {
            _this.feeds = feed;
        });
    };
    FeedComponent.prototype.getUser = function () {
        //this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    FeedComponent.prototype.comment = function (tripId) {
        var _this = this;
        var c = {
            author: this.user.username,
            date: new Date(),
            comment: this.commt
        };
        this.tripService.findTripById(tripId)
            .subscribe(function (trip) {
            trip.comments.push(c);
            _this.tripService.updateTrip(tripId, trip)
                .subscribe(function (trip) {
                // this.ngOnInit();
                _this.updateFeed();
                _this.commt = null;
            });
        });
    };
    FeedComponent.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    FeedComponent.prototype.follow = function (user2) {
        var _this = this;
        //if(this.user.following.indexOf(user2) != -1) {
        this.user.following.push(user2);
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            //this.router.navigate(['/feed']);
        });
        // }
    };
    FeedComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    FeedComponent.prototype.getTrendingFeeds = function () {
        var _this = this;
        this.feedService.getTrendingFeeds()
            .subscribe(function (feed) {
            _this.feeds = feed;
        });
    };
    FeedComponent.prototype.getUserFeeds = function () {
        var _this = this;
        this.feedService.getUserFeeds(this.user)
            .subscribe(function (feed) {
            _this.feeds = feed;
        });
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-feed',
        template: __webpack_require__("../../../../../src/app/components/feed/feed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/feed/feed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_feed_service_client__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_feed_service_client__["a" /* FeedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_trip_service_client__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_trip_service_client__["a" /* TripService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _g || Object])
], FeedComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  margin-bottom: 5px;\r\n}\r\n.db-image{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.center-block{\r\n  margin-top: 5px;\r\n  margin-bottom: 20px;\r\n}\r\n.img-feed{\r\n  background-color: rgba(252, 253, 237, 0.02);\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.dbd-feed{\r\n  background-color: whitesmoke;\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.avatar{\r\n  height:50px;\r\n}\r\n.avt-btn{\r\n  float: right;\r\n  width: 70px;\r\n  height: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-default\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Trips Diaries</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <button  [routerLink]=\"['/login']\" class=\"btn btn-success btn-block\">\r\n        Login\r\n      </button>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"body container-fluid\">\r\n  <div id=\"db-image\">\r\n  <img src=\"../../../assets/images/main.jpg\" width=\"100%\" height=\"450\">\r\n  </div>\r\n\r\n  <div class=\"center-block\">\r\n    <button id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-success center-block\">\r\n      Currently Trending....\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Main content Body -->\r\n  <div class=\"row img-feed\">\r\n    <div class=\"col-sm-6 \" *ngFor=\"let feed of feeds\">\r\n\r\n      <div class=\"row dbd-feed\">\r\n        <div class=\"col-sm-6\" >\r\n          <img src=\"../../../assets/images/main.jpg\" class=\"img-circle\" style=\"max-width:20%;height: 40px;width: 40px\">\r\n          <span><b> {{feed.creatorId.username}}</b> shared  a trip</span>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <button  [routerLink]=\"['/login']\" class=\" avt-btn btn btn-danger btn-block\"> Follow</button>\r\n        </div>\r\n      </div>\r\n    <div>\r\n      <img  [src]=\"sanitize(feed.url)\" width=\"100%\" height=\"100%  \">\r\n    </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Footer -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_feed_service_client__ = __webpack_require__("../../../../../src/app/services/feed.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(route, router, userService, sharedService, feedService, sanitizer) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.feedService = feedService;
        this.sanitizer = sanitizer;
        this.status = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getUser();
        this.feedService.getTrendingFeeds()
            .subscribe(function (trip) {
            console.log(trip);
            _this.feeds = trip;
            _this.status = true;
        });
    };
    HomeComponent.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_feed_service_client__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_feed_service_client__["a" /* FeedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _f || Object])
], HomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trip/image-search/image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  padding-top: 70px;\r\n  padding-bottom: 70px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trip/image-search/image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-static-top navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/feed']\"><b>TripsDiaries</b></a>\n    </div>\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        Search Images\n      </a>\n    </p>\n\n    <ul class=\"inline nav navbar-nav navbar-user navbar-right\">\n      <li><a [routerLink]=\"['/feed']\"><span class=\"glyphicon glyphicon-bell\"></span></a></li>\n      <li><a [routerLink]=\"['/user/',userId,'newtrip']\"> <span class=\"glyphicon glyphicon-plus\"></span>  </a></li>\n      <li><a [routerLink]=\"['/profile']\"><span class=\"glyphicon glyphicon-user\"></span></a></li>\n      <li><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n<div class=\"body container-fluid col-md-6 col-md-offset-3\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\" placeholder=\"search for images on Flickr\">\n      <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n           <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n      </span>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <p></p>\n    </div>\n  </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/trip/image-search/image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_trip_service_client__ = __webpack_require__("../../../../../src/app/services/trip.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageSearchComponent = (function () {
    // baseURL:string = environment.baseUrl;
    function ImageSearchComponent(route, router, flickrService, sharedService, tripService) {
        this.route = route;
        this.router = router;
        this.flickrService = flickrService;
        this.sharedService = sharedService;
        this.tripService = tripService;
        this.photos = [];
    }
    ImageSearchComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ImageSearchComponent.prototype.getUser = function () {
        //this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    ImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    ImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var trip = {
            creatorId: this.userId,
            description: photo.title,
            url: url
        };
        this.tripService.createTrip(this.userId, trip)
            .subscribe(function (data) {
            _this.router.navigate(['/feed']);
        });
    };
    return ImageSearchComponent;
}());
ImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-search',
        template: __webpack_require__("../../../../../src/app/components/trip/image-search/image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trip/image-search/image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_trip_service_client__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_trip_service_client__["a" /* TripService */]) === "function" && _e || Object])
], ImageSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trip/new-trip/new-trip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.comment-sec{\r\n  margin-bottom: 15px;\r\n  margin-top: 5px;\r\n\r\n}\r\n\r\n.img-feed{\r\n  background-color: white;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.dbd-feed{\r\n  background-color: whitesmoke;\r\n  margin-bottom: 25px;\r\n}\r\n.sub-text {\r\n  color:#aaa;\r\n  font-family:verdana;\r\n  font-size:11px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trip/new-trip/new-trip.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-static-top navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">TripsDiaries</a>\n    </div>\n\n    <ul class=\"inline nav navbar-nav navbar-user navbar-right\">\n      <li><a [routerLink]=\"['/feed']\"><span class=\"glyphicon glyphicon-bell\"></span></a></li>\n      <li><a [routerLink]=\"['/user/',userId,'newtrip']\"> <span class=\"glyphicon glyphicon-plus\"></span>  </a></li>\n      <li><a [routerLink]=\"['/profile']\"><span class=\"glyphicon glyphicon-user\"></span></a></li>\n      <li><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n<div class=\"body container-fluid col-md-6 col-md-offset-3\">\n  <form ngNoForm action=\"{{baseURL}}/api/uploads\" method=\"post\" enctype=\"multipart/form-data\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"text\">Description</label>\n      <input [(ngModel)]='text' name=\"text\"\n             type=\"text\" class=\"form-control\" id=\"text\" placeholder=\"info about image\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"tag\">Tags</label>\n      <input [(ngModel)]='tag' name=\"tag\"\n             type=\"text\" class=\"form-control\" id=\"tag\" placeholder=\"identify some tags\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"location\">Location</label>\n      <input [(ngModel)]='location' name=\"location\"\n             type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Identify the pic location\">\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"myFile\">\n        Upload\n      </label>\n      <input [(ngModel)]=\"upload\"\n             required\n             name=\"myFile\"\n             type=\"file\"\n             class=\"form-control\"\n             id=\"myFile\"\n             value=\"100%\">\n    </div>\n\n    <div class=\"form-group\">\n <!--     <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n      <input  name=\"webId\" value=\"{{webId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>-->\n      <input  name=\"tripId\" value=\"{{tripId}}\"   style=\"display: none\">\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <button type=\"submit\" class=\"form-control btn btn-primary\">\n        Upload Image\n      </button>\n    </div>\n\n\n    <a class=\"btn btn-danger btn-block \" (click)=\"deleteTrip()\">Delete</a>\n\n\n  </form>\n\n  <button type=\"submit\" class=\"form-control btn btn-primary\"\n          [routerLink]=\"['/user/','image','search']\">\n    Search Image\n\n\n  </button>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/trip/new-trip/new-trip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTripComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service_client__ = __webpack_require__("../../../../../src/app/services/trip.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewTripComponent = (function () {
    function NewTripComponent(route, router, tripService, sharedService) {
        this.route = route;
        this.router = router;
        this.tripService = tripService;
        this.sharedService = sharedService;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    NewTripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.route.params.subscribe(function (params) {
            _this.tripId = params['tid'];
        });
        if (this.tripId) {
            this.tripService.findTripById(this.tripId)
                .subscribe(function (trip) {
                // this.tripId = trip._id;
                _this.name = trip.name;
                _this.tag = trip.tag;
                _this.text = trip.text;
                _this.location = trip.location;
            }, function (error) { });
        }
    };
    NewTripComponent.prototype.deleteTrip = function () {
        var _this = this;
        this.tripService.deleteTrip(this.tripId)
            .subscribe(function (trip) {
            _this.router.navigate(['user', 'trips']);
        });
    };
    NewTripComponent.prototype.getUser = function () {
        //this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    return NewTripComponent;
}());
NewTripComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-trip',
        template: __webpack_require__("../../../../../src/app/components/trip/new-trip/new-trip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trip/new-trip/new-trip.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service_client__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trip_service_client__["a" /* TripService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], NewTripComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-trip.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trip/trip-edit/trip-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trip/trip-edit/trip-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  trip-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/trip/trip-edit/trip-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TripEditComponent = (function () {
    function TripEditComponent() {
    }
    TripEditComponent.prototype.ngOnInit = function () {
    };
    return TripEditComponent;
}());
TripEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-trip-edit',
        template: __webpack_require__("../../../../../src/app/components/trip/trip-edit/trip-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trip/trip-edit/trip-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TripEditComponent);

//# sourceMappingURL=trip-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/trip/trip-list/trip-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  margin-bottom: 5px;\r\n}\r\n.body{\r\n\r\n}\r\n\r\n\r\n.img-feed{\r\n  background-color: white;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.dbd-feed{\r\n  background-color: whitesmoke;\r\n}\r\n.sub-text {\r\n  color:#aaa;\r\n  font-family:verdana;\r\n  font-size:11px;\r\n}\r\n\r\n\r\nbody {\r\n  background: #F1F3FA;\r\n}\r\n\r\n/* Profile container */\r\n.profile {\r\n  background-color:#f5f5f5;\r\n}\r\n\r\n/* Profile sidebar */\r\n.profile-sidebar {\r\n  padding: 20px 0 10px 0;\r\n  background: #fff;\r\n}\r\n\r\n.profile-userpic img {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profile-usertitle-name {\r\n  color: #5a7391;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.profile-usertitle-job {\r\n  text-transform: uppercase;\r\n  color: #5b9bd1;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.profile-userbuttons {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.profile-userbuttons .btn {\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  padding: 6px 15px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.profile-userbuttons .btn:last-child {\r\n  margin-right: 0px;\r\n}\r\n\r\n.profile-usermenu {\r\n  margin-top: 30px;\r\n}\r\n\r\n.profile-usermenu ul li {\r\n  border-bottom: 1px solid #f0f4f7;\r\n}\r\n\r\n.profile-usermenu ul li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li a {\r\n  color: #93a3b5;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.profile-usermenu ul li a i {\r\n  margin-right: 8px;\r\n  font-size: 14px;\r\n}\r\n\r\n.profile-usermenu ul li a:hover {\r\n  background-color: #fafcfd;\r\n  color: #5b9bd1;\r\n}\r\n\r\n.profile-usermenu ul li.active {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li.active a {\r\n  color: #5b9bd1;\r\n  background-color: #f6f9fb;\r\n  border-left: 2px solid #5b9bd1;\r\n  margin-left: -2px;\r\n}\r\n\r\n/* Profile Content */\r\n.profile-content {\r\n  padding: 10px;\r\n  background: #fff;\r\n  min-height: 600px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trip/trip-list/trip-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\" row navbar navbar-static-top navbar-default\">\n  <div class=\" col-sm-12 container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">TripsDiaries</a>\n    </div>\n    <ul class=\"inline nav navbar-nav navbar-user navbar-right\">\n      <li><a [routerLink]=\"['/feed']\"><span class=\"glyphicon glyphicon-bell\"></span></a></li>\n      <li><a [routerLink]=\"['/user/','newtrip']\"><span class=\"glyphicon glyphicon-plus\"></span>  </a></li>\n      <li><a [routerLink]=\"['/profile']\"><span class=\"glyphicon glyphicon-user\"></span></a></li>\n      <li><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n<!-------------------------------->\n\n\n<div class=\"container\">\n  <div class=\"row profile\">\n    <div class=\"col-md-3\">\n      <div class=\"profile-sidebar\">\n        <!-- SIDEBAR USERPIC -->\n        <div class=\"profile-userpic\">\n          <img src=\"../../../assets/images/main.jpg\" class=\"img-responsive\">\n        </div>\n        <!-- END SIDEBAR USERPIC -->\n        <!-- SIDEBAR USER TITLE -->\n        <div class=\"profile-usertitle\">\n          <div class=\"profile-usertitle-name\">\n            {{user.username}}\n          </div>\n          <div class=\"profile-usertitle-job\">\n            {{user.location}}\n          </div>\n        </div>\n        <!-- END SIDEBAR USER TITLE -->\n        <!-- SIDEBAR BUTTONS -->\n        <div class=\"profile-userbuttons\">\n          <button type=\"button\" class=\"btn btn-success btn-sm\">Update Pic</button>\n        </div>\n        <!-- END SIDEBAR BUTTONS -->\n        <!-- SIDEBAR MENU -->\n        <div class=\"profile-usermenu\">\n          <ul class=\"nav\">\n            <li class=\"active\">\n              <a href=\"#\">\n                <i class=\"glyphicon glyphicon-home\"></i>\n                Overview </a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/profile']\">\n                <i class=\"glyphicon glyphicon-user\"></i>\n                Account Settings </a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/trips'] \">\n              <i class=\"glyphicon glyphicon-ok\"></i>\n              My Trips </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <i class=\"glyphicon glyphicon-flag\"></i>\n                Help </a>\n            </li>\n          </ul>\n        </div>\n        <!-- END MENU -->\n      </div>\n    </div>\n    <div  class=\"col-md-9\">\n        <div class=\"col-sm-6 dbd-feed\" *ngFor=\"let feed of feeds\">\n\n          <div>\n            <img  [src]=\"sanitize(feed.url)\" width=\"100%\" height=\"100%  \">\n          </div>\n          <div class=\"row\">\n            <button [routerLink]=\"['/user/','newtrip',feed._id]\" class=\" avt-btn btn btn-danger btn-block\"> Edit</button>\n          </div>\n\n        </div>\n\n    </div>\n  </div>\n</div>\n<br>\n<br>\n\n\n\n\n\n\n\n\n\n<!------------------------------->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/trip/trip-list/trip-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_trip_service_client__ = __webpack_require__("../../../../../src/app/services/trip.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TripListComponent = (function () {
    function TripListComponent(route, router, userService, sharedService, tripService, sanitizer) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.tripService = tripService;
        this.sanitizer = sanitizer;
    }
    TripListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.tripService.findTripByUser(this.userId)
            .subscribe(function (trip) {
            _this.feeds = trip;
        });
    };
    TripListComponent.prototype.getUser = function () {
        //this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    TripListComponent.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return TripListComponent;
}());
TripListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-trip-list',
        template: __webpack_require__("../../../../../src/app/components/trip/trip-list/trip-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/trip/trip-list/trip-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_trip_service_client__["a" /* TripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_trip_service_client__["a" /* TripService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _f || Object])
], TripListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=trip-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n.social-login{\r\n  text-align:center;\r\n  font-size:12px;\r\n}\r\n.social-login p{\r\n  margin:15px 0;\r\n}\r\n.social-login ul{\r\n  margin:0;\r\n  padding:0;\r\n  list-style-type:none;\r\n}\r\n.social-login ul li{\r\n  width:33%;\r\n  float:left;\r\n  clear:fix;\r\n}\r\n.social-login ul li a{\r\n  font-size:13px;\r\n  color:#fff;\r\n  text-decoration:none;\r\n  padding:10px 0;\r\n  display:block;\r\n}\r\n.social-login ul li:nth-child(1) a{\r\n  background:#3b5998;\r\n}\r\n.social-login ul li:nth-child(2) a{\r\n  background:#e74c3d;\r\n}\r\n.social-login ul li:nth-child(3) a{\r\n  background:#3698d9;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n  <h1>Login</h1>\r\n\r\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\r\n\r\n    <input   placeholder=\"username\"\r\n             name=\"username\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #username=\"ngModel\"/>\r\n   <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n   </span>\r\n\r\n    <input   placeholder=\"password\"\r\n             name=\"password\"\r\n             type=\"password\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #password=\"ngModel\"/>\r\n   <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n   </span>\r\n\r\n    <div class=\"form-group\">\r\n    <button class=\"btn btn-primary \"\r\n            type=\"submit\"\r\n            [disabled]=\"!f.valid\">Login</button>\r\n      <button [routerLink]=\"['/register']\"class=\"btn btn-success\">Register</button>\r\n\r\n    </div>\r\n    <div class=\"social-login\">\r\n      <p>- - - - - - - - - - - - - Sign In With - - - - - - - - - - - - - </p>\r\n      <ul>\r\n        <li><a href=\"{{baseURL}}/facebook/login\"><i class=\"fa fa-facebook\"></i> Facebook</a></li>\r\n        <li><a href=\"\"><i class=\"fa fa-google-plus\"></i> Google+</a></li>\r\n        <li><a href= \"\"><i class=\"fa fa-twitter\"></i> Twitter</a></li>\r\n      </ul>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.errorFlag = false;
            _this.sharedService.user = data;
            _this.router.navigate(['/feed']);
        }, function (error) {
            _this.errorFlag = true;
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  margin-bottom: 5px;\r\n}\r\n.body{\r\n  padding-top: 70px;\r\n  padding-bottom: 70px;\r\n}\r\n\r\n\r\n\r\n\r\n.comment-sec{\r\n  margin-bottom: 15px;\r\n  margin-top: 5px;\r\n\r\n}\r\n\r\n.img-feed{\r\n  background-color: white;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.dbd-feed{\r\n  background-color: whitesmoke;\r\n  margin-bottom: 25px;\r\n}\r\n.sub-text {\r\n  color:#aaa;\r\n  font-family:verdana;\r\n  font-size:11px;\r\n}\r\n\r\n\r\nbody {\r\n  background: #F1F3FA;\r\n}\r\n\r\n/* Profile container */\r\n.profile {\r\n  background-color:#f5f5f5;\r\n}\r\n\r\n/* Profile sidebar */\r\n.profile-sidebar {\r\n  padding: 20px 0 10px 0;\r\n  background: #fff;\r\n}\r\n\r\n.profile-userpic img {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profile-usertitle-name {\r\n  color: #5a7391;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.profile-usertitle-job {\r\n  text-transform: uppercase;\r\n  color: #5b9bd1;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.profile-userbuttons {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.profile-userbuttons .btn {\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  padding: 6px 15px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.profile-userbuttons .btn:last-child {\r\n  margin-right: 0px;\r\n}\r\n\r\n.profile-usermenu {\r\n  margin-top: 30px;\r\n}\r\n\r\n.profile-usermenu ul li {\r\n  border-bottom: 1px solid #f0f4f7;\r\n}\r\n\r\n.profile-usermenu ul li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li a {\r\n  color: #93a3b5;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.profile-usermenu ul li a i {\r\n  margin-right: 8px;\r\n  font-size: 14px;\r\n}\r\n\r\n.profile-usermenu ul li a:hover {\r\n  background-color: #fafcfd;\r\n  color: #5b9bd1;\r\n}\r\n\r\n.profile-usermenu ul li.active {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li.active a {\r\n  color: #5b9bd1;\r\n  background-color: #f6f9fb;\r\n  border-left: 2px solid #5b9bd1;\r\n  margin-left: -2px;\r\n}\r\n\r\n/* Profile Content */\r\n.profile-content {\r\n  padding: 10px;\r\n  background: #fff;\r\n  min-height: 600px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\" row navbar navbar-static-top navbar-default\">\r\n  <div class=\" col-sm-12 container\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">TripsDiaries</a>\r\n    </div>\r\n    <ul class=\"inline nav navbar-nav navbar-user navbar-right\">\r\n      <li><a [routerLink]=\"['/feed']\"><span class=\"glyphicon glyphicon-bell\"></span></a></li>\r\n      <li><a [routerLink]=\"['/user/','newtrip']\"><span class=\"glyphicon glyphicon-plus\"></span>  </a></li>\r\n      <li><a [routerLink]=\"['/profile']\"><span class=\"glyphicon glyphicon-user\"></span></a></li>\r\n      <li><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<!-------------------------------->\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row profile\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"profile-sidebar\">\r\n        <!-- SIDEBAR USERPIC -->\r\n        <div class=\"profile-userpic\">\r\n          <img src=\"../../../assets/images/main.jpg\" class=\"img-responsive\">\r\n        </div>\r\n        <!-- END SIDEBAR USERPIC -->\r\n        <!-- SIDEBAR USER TITLE -->\r\n        <div class=\"profile-usertitle\">\r\n          <div class=\"profile-usertitle-name\">\r\n            {{user.username}}\r\n          </div>\r\n          <div class=\"profile-usertitle-job\">\r\n            {{user.location}}\r\n          </div>\r\n        </div>\r\n        <!-- END SIDEBAR USER TITLE -->\r\n        <!-- SIDEBAR BUTTONS -->\r\n        <div class=\"profile-userbuttons\">\r\n          <button type=\"button\" class=\"btn btn-success btn-sm\">Update Pic</button>\r\n        </div>\r\n        <!-- END SIDEBAR BUTTONS -->\r\n        <!-- SIDEBAR MENU -->\r\n        <div class=\"profile-usermenu\">\r\n          <ul class=\"nav\">\r\n            <li class=\"active\">\r\n              <a href=\"#\">\r\n                <i class=\"glyphicon glyphicon-home\"></i>\r\n                Overview </a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/profile']\">\r\n                <i class=\"glyphicon glyphicon-user\"></i>\r\n                Account Settings </a>\r\n            </li>\r\n            <li>\r\n              <a  [routerLink]=\"['/user/','trips']\">\r\n                <i class=\"glyphicon glyphicon-ok\"></i>\r\n                My Trips </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"glyphicon glyphicon-flag\"></i>\r\n                Help </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <!-- END MENU -->\r\n      </div>\r\n    </div>\r\n    <div  class=\"col-md-9\">\r\n      <div class=\"profile-content\">\r\n        <div class=\"body col-md-6 col-md-offset-3\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Username</label>\r\n              <input [(ngModel)]=\"user.username\" name=\"username\"\r\n                     type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Alice\" >\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email address</label>\r\n              <input [(ngModel)]=\"user.email\" name=\"email\"\r\n                     type=\"email\" class=\"form-control\" id=\"email\" placeholder=alice@gmail.com>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"first-name\">First Name</label>\r\n              <input [(ngModel)]=\"user.firstName\" name=\"firstName\"\r\n                     type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=ALice>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"last-name\">Last Name</label>\r\n              <input [(ngModel)]=\"user.lastName\" name=\"lastName\"\r\n                     type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=WonderLand>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"location\">Location</label>\r\n              <input [(ngModel)]=\"user.location\" name=\"location\"\r\n                     type=\"text\" class=\"form-control\" id=\"location\" placeholder=WonderLand>\r\n            </div>\r\n\r\n            <a class=\"btn btn-success btn-block\"\r\n               (click)=\"update()\">Update Profile</a>\r\n          </form>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!------------------------------->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(route, router, userService, sharedService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.isDataAvailable = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        //this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            // this.router.navigate(['/user/',this.userId]);
            _this.ngOnInit();
        }, function (error) {
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n  <div *ngIf=\"dupFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{dupUserMsg}}\r\n  </div>\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n  <h1>Register</h1>\r\n\r\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\r\n\r\n    <input   placeholder=\"username\"\r\n             name=\"username\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #username=\"ngModel\"/>\r\n   <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n   </span>\r\n\r\n    <input   placeholder=\"password\"\r\n             name=\"password\"\r\n             type=\"password\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #password=\"ngModel\"/>\r\n   <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n   </span>\r\n\r\n    <input   placeholder=\"password\"\r\n             name=\"password2\"\r\n             type=\"password\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #password2=\"ngModel\"/>\r\n   <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n   </span>\r\n\r\n    <button class=\"btn btn-primary btn-block\"\r\n            type=\"submit\"\r\n            [disabled]=\"!f.valid\">Register</button>\r\n\r\n\r\n  </form>\r\n\r\n  <button [routerLink]=\"['/login']\"class=\"btn btn-danger btn-block\">Cancel</button>\r\n\r\n</div>\r\n\r\n<!--<div class=\"col-md-6 col-md-offset-3\">\r\n  <h2>Register</h2>\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" ngModel #firstName=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n      <label for=\"lastName\">Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" ngModel #lastName=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" ngModel #username=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" ngModel #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password2\" ngModel #password2=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n      <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n  </form>\r\n</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Password does not match !';
        this.dupUserMsg = 'User Already Exists';
        this.newuser = {};
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.password2 = this.registerForm.value.password2;
        if (this.password !== this.password2) {
            this.errorFlag = true;
            return;
        }
        /*    this.userService.register(this.username,this.password)
              .subscribe((user:any)=>{
                console.log(user);
                this.sharedService.user=user;
                this.router.navigate(['profile']);
            });*/
        this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            if (user) {
                _this.dupFlag = true;
            }
        }, function (error) {
            _this.userService.register(_this.username, _this.password)
                .subscribe(function (user) {
                console.log(user);
                _this.sharedService.user = user;
                _this.router.navigate(['profile']);
            });
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/AdminServiceClient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminServiceClient = (function () {
    function AdminServiceClient(userService) {
        this.userService = userService;
    }
    AdminServiceClient.prototype.canActivate = function () {
        return this.userService.isAdmin();
    };
    return AdminServiceClient;
}());
AdminServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AdminServiceClient);

var _a;
//# sourceMappingURL=AdminServiceClient.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by tariq on 11/21/2017.
 */



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/feed.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by tariq on 12/6/2017.
 */




var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
        this.domain = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    FeedService.prototype.getUserFeeds = function (user) {
        var url = this.domain + "/api/feed/" + user._id;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    FeedService.prototype.getTrendingFeeds = function () {
        var url = this.domain + "/api/feed";
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return FeedService;
}());
FeedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FeedService);

var _a;
//# sourceMappingURL=feed.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by tariq on 11/9/2017.
 */



var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = "afc3a349ce4a23b2b5e7cd58057ca057";
        this.secret = "84c708021b4df89b";
        this.urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.user = {};
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/trip.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by tariq on 12/6/2017.
 */




var TripService = (function () {
    function TripService(http) {
        this.http = http;
        this.domain = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    TripService.prototype.findTripById = function (tripId) {
        var url = this.domain + "/api/trip/" + tripId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    TripService.prototype.findTripByUser = function (userId) {
        var url = this.domain + "/api/user/" + userId + "/trip";
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    TripService.prototype.createTrip = function (userId, trip) {
        var url = this.domain + "/api/user/" + userId + "/trip";
        return this.http.post(url, trip)
            .map(function (response) {
            return response.json();
        });
    };
    TripService.prototype.updateTrip = function (tripId, trip) {
        var url = this.domain + "/api/trip/" + tripId;
        console.log("client   :  " + url);
        return this.http.put(url, trip)
            .map(function (response) {
            return response.json();
        });
    };
    TripService.prototype.deleteTrip = function (tripId) {
        var url = this.domain + "/api/trip/" + tripId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return TripService;
}());
TripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TripService);

var _a;
//# sourceMappingURL=trip.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.domain = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.domain + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.domain + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.domain + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.domain + '/api/register', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.domain + "/api/user/" + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.domain + "/api/user?username=" + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.domain + "/api/user/";
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.domain + "/api/user/" + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findAllUsers = function () {
        var url = this.domain + "/api/admin/user";
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.isAdmin = function () {
        var _this = this;
        var url = this.domain + "/api/admin/isAdmin";
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (response) {
            var user = response.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.domain + "/api/user/" + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://trips-diaries.herokuapp.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map