webpackJsonp([1,4],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEntry; });
var EventEntry = (function () {
    function EventEntry(date, events) {
        this.date = date;
        this.events = events;
    }
    EventEntry.prototype.allAreInactive = function () {
        var b = true;
        this.events.forEach(function (e) {
            if (e.isActive) {
                b = false;
            }
        });
        return b;
    };
    return EventEntry;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/event-entry.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = (function () {
    function EventService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.URL = 'http://zenith-society-nj-core.azurewebsites.net/api/events'; // URL to web api
        this.URL_ANON = 'http://zenith-society-nj-core.azurewebsites.net/api/events/anon';
        this.activities = new Map();
    }
    EventService.prototype.getEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this.tokenService.getToken());
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var events = this.http.get(this.tokenService.isLoggedIn() ? this.URL : this.URL_ANON, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        if (events == undefined) {
        }
        return events;
    };
    EventService.prototype.convertToEvents = function (input) {
        console.log(input);
        return null;
    };
    EventService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__token_service__["a" /* TokenService */]) === 'function' && _b) || Object])
    ], EventService);
    return EventService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/event.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Git/ZenithClientSite/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(tokenService) {
        this.tokenService = tokenService;
        this.title = 'Zenith Society';
    }
    AppComponent.prototype.logout = function () {
        this.tokenService.logOut();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(668),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__token_service__["a" /* TokenService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_view_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_entry_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__token_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__event_view_component__["a" /* EventViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__event_entry_component__["a" /* EventEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '', redirectTo: '/events', pathMatch: 'full'
                    },
                    {
                        path: 'events', component: __WEBPACK_IMPORTED_MODULE_7__event_view_component__["a" /* EventViewComponent */]
                    },
                    {
                        path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__register_component__["a" /* RegisterComponent */]
                    },
                    {
                        path: 'events/:id', component: __WEBPACK_IMPORTED_MODULE_7__event_view_component__["a" /* EventViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__token_service__["a" /* TokenService */]]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_11__token_service__["a" /* TokenService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_entry__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventEntryComponent = (function () {
    function EventEntryComponent(tokenService) {
        this.tokenService = tokenService;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__event_entry__["a" /* EventEntry */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__event_entry__["a" /* EventEntry */]) === 'function' && _a) || Object)
    ], EventEntryComponent.prototype, "entry", void 0);
    EventEntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'event-entry',
            template: __webpack_require__(669)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */]) === 'function' && _b) || Object])
    ], EventEntryComponent);
    return EventEntryComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/event-entry.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_entry__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventViewComponent = (function () {
    function EventViewComponent(eventservice, route, tokenService) {
        this.eventservice = eventservice;
        this.route = route;
        this.tokenService = tokenService;
    }
    EventViewComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventservice.getEvents().then(function (events) { return _this.events = events; }).then(function (e) { _this.getUniqueDatesForWeek(e); });
    };
    EventViewComponent.prototype.getUniqueDatesForWeek = function (events) {
        var _this = this;
        this.dates = [];
        this.convertStringsToDates();
        events.forEach(function (event) {
            if (!_this.dates.some(function (d) { return _this.convertDate(d) === _this.convertDate(event.eventFromDate); })) {
                _this.dates.push(event.eventFromDate);
            }
        });
        this.generateEntries();
    };
    EventViewComponent.prototype.convertStringsToDates = function () {
        this.events.forEach(function (e) {
            e.creationDate = new Date(e.creationDate);
            e.eventFromDate = new Date(e.eventFromDate);
            e.eventToDate = new Date(e.eventToDate);
        });
    };
    EventViewComponent.prototype.generateEntries = function () {
        var _this = this;
        this.entries = [];
        this.dates.forEach(function (date) {
            if (date.getTime() >= _this.changeDateBy(_this.getStartOfWeek(), (_this.id * 7) - 1).getTime()
                && date.getTime() < _this.changeDateBy(_this.getEndOfWeek(), (_this.id * 7)).getTime()) {
                _this.entries.push(new __WEBPACK_IMPORTED_MODULE_3__event_entry__["a" /* EventEntry */](date, _this.getActivitiesInDay(date)));
            }
        });
        this.entries.sort(function (a, b) {
            return a.date.getTime() - b.date.getTime();
        });
    };
    EventViewComponent.prototype.getActivitiesInDay = function (date) {
        var _this = this;
        var list = new Array();
        this.events.forEach(function (event) {
            if (_this.convertDate(event.eventFromDate) === _this.convertDate(date)) {
                list.push(event);
            }
        });
        return list;
    };
    EventViewComponent.prototype.convertDate = function (date) {
        var s = "";
        s = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString();
        return s;
    };
    EventViewComponent.prototype.changeDateBy = function (date, days) {
        date.setDate(date.getDate() + days);
        return date;
    };
    EventViewComponent.prototype.getStartOfWeek = function () {
        var date = new Date();
        var curDay = date.getDay();
        var diff = date.getDate() - curDay + (curDay == 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    };
    EventViewComponent.prototype.getEndOfWeek = function () {
        return this.changeDateBy(this.getStartOfWeek(), 6);
    };
    EventViewComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.tokenService.isLoggedIn();
        /*this.route.params
        .subscribe(param => {
            this.id = param['id'];
            if (this.id == undefined) {
                this.id = 0;
            }
            this.nextId = (this.id - 1);
            this.previousId = (Number(this.id) + 1);
        });*/
        this.id = 0;
        this.getEvents();
    };
    EventViewComponent.prototype.navForward = function () {
        this.id--;
        this.getEvents();
    };
    EventViewComponent.prototype.navBackward = function () {
        this.id++;
        this.getEvents();
    };
    EventViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'event-view',
            template: __webpack_require__(670),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__token_service__["a" /* TokenService */]) === 'function' && _c) || Object])
    ], EventViewComponent);
    return EventViewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/event-view.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.URL = 'http://zenith-society-nj-core.azurewebsites.net/connect/token/';
    }
    LoginComponent.prototype.onSubmit = function () { this.login(this.username, this.password); };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        var creds = 'username=' + username + '&password=' + password + '&grant_type=password';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.URL, creds, options)
            .toPromise()
            .then(function (r) {
            var user = r.json();
            _this.tokenService.setToken(user["access_token"]);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'login',
            template: __webpack_require__(671)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/login.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    function RegisterComponent(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.URL = 'http://zenith-society-nj-core.azurewebsites.net/Account/Register';
    }
    RegisterComponent.prototype.onSubmit = function () { this.register(this.username, this.password, this.email, this.firstname, this.lastname); };
    RegisterComponent.prototype.register = function (username, password, email, firstname, lastname) {
        var _this = this;
        var creds = 'username=' + username + '&password=' + password + '&confirmpassword=' + password + '&email=' + email + '&firstname=' + firstname + '&lastname=' + lastname;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.URL, creds, options)
            .toPromise()
            .then(function (r) {
            var user = r.json();
            _this.tokenService.setToken(user["access_token"]);
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'register',
            template: __webpack_require__(672)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/register.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Git/ZenithClientSite/src/environment.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenService = (function () {
    function TokenService() {
        this.TOKEN_NAME = "zenithToken";
    }
    TokenService.prototype.getToken = function () {
        var token = localStorage.getItem(this.TOKEN_NAME);
        if (token == undefined) {
            return "";
        }
        return token;
    };
    TokenService.prototype.setToken = function (token) {
        localStorage.setItem(this.TOKEN_NAME, token);
    };
    TokenService.prototype.isLoggedIn = function () {
        return this.getToken().length > 0;
    };
    TokenService.prototype.logOut = function () {
        localStorage.setItem(this.TOKEN_NAME, "");
    };
    TokenService.prototype.canActivate = function (route, state) {
        return this.isLoggedIn();
    };
    TokenService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], TokenService);
    return TokenService;
}());
//# sourceMappingURL=C:/Git/ZenithClientSite/src/token.service.js.map

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>\r\n    {{title}}\r\n  </h1>\r\n</div>\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span> \r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-\">\r\n        <li><a routerLink=\"/events\" routerLinkActive=\"active\">EVENTS</a></li>\r\n        <li><a *ngIf=\"!tokenService.isLoggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">LOGIN</a></li>\r\n        <li><a routerLink=\"/register\" routerLinkActive=\"active\">REGISTER</a></li>\r\n        <li><a *ngIf=\"tokenService.isLoggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"logout()\">LOGOUT</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<tr><p>{{entry.date | date: 'EEEE MMMM d, y'}}</p></tr>\r\n<tr *ngFor=\"let event of entry.events\">\r\n    <td><p>{{event.activity.activityDescription}}</p></td>\r\n    <td [hidden]=\"!tokenService.isLoggedIn() && !event.isActive\"><p>{{event.eventFromDate | date: 'hh:mm:a'}} - {{event.eventToDate | date: 'hh:mm:a'}}</p></td>\r\n</tr>"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class=\"form-account-heading\">Events</h1>    \r\n    <table class=\"table table-hover table-bordered\">\r\n        <tr *ngFor=\"let entry of entries\">\r\n            <event-entry [entry]=\"entry\" [hidden]=\"entry.allAreInactive() && !isLoggedIn\"></event-entry>\r\n        </tr>\r\n    </table>\r\n    <div class=\"col-md-12 text-center\">\r\n        <button class=\"btn btn-lg btn-danger\" (click)=\"navForward()\" *ngIf=\"isLoggedIn\"> </button>\r\n        <button class=\"btn btn-lg btn-danger\" (click)=\"navBackward()\" *ngIf=\"isLoggedIn\"> </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form class=\"form-account\" (ngSubmit)=\"onSubmit()\" [hidden]=\"tokenService.isLoggedIn()\">\r\n        <h1 class=\"form-account-heading text-muted\">Login</h1>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" name=\"username\" required=\"\" autofocus=\"\" />\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required=\"\" />\r\n        <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Login</button>\r\n    </form>\r\n    <h1 class=\"form-account-heading\" *ngIf=\"tokenService.isLoggedIn()\">You are logged in</h1>\r\n</div>"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form class=\"form-account\" (ngSubmit)=\"onSubmit()\">\r\n        <h1 class=\"form-account-heading text-muted\">Register</h1>\r\n        <label>Username: </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" name=\"username\" required />\r\n        <br />\r\n        <label>Password: </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required />\r\n        <br />\r\n        <label>Email: </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required />\r\n        <br />\r\n        <label>First Name: </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstname\" placeholder=\"Enter First Name\" name=\"firstname\" required />\r\n        <br />\r\n        <label>Last Name: </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastname\" placeholder=\"Enter Last Name\" name=\"lastname\" required />\r\n        <br />\r\n        <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\" >Register</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[690]);
//# sourceMappingURL=main.bundle.map