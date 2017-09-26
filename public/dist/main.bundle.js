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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_question_create_question_component__ = __webpack_require__("../../../../../src/app/create-question/create-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trivia_trivia_component__ = __webpack_require__("../../../../../src/app/trivia/trivia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'new_question', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__create_question_create_question_component__["a" /* CreateQuestionComponent */] },
    { path: 'lets_play', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__trivia_trivia_component__["a" /* TriviaComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['']\">Home</a>|\n<a [routerLink]=\"['new_question']\">Add Question</a>\n<router-outlet></router-outlet>"

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
        template: __webpack_require__("../../../../../src/app/app.component.html"),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_question_create_question_component__ = __webpack_require__("../../../../../src/app/create-question/create-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trivia_trivia_component__ = __webpack_require__("../../../../../src/app/trivia/trivia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // <--- Routing rules imported





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__create_question_create_question_component__["a" /* CreateQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__trivia_trivia_component__["a" /* TriviaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__shared_service__["a" /* SharedService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> New Question</h1>\r\n<!-- {{ newQuestion |  json }} -->\r\n<form (submit)='onSubmit()'>\r\n\t<p>Question</p>\r\n\t<input \r\n\ttype='textarea'\r\n\tname='question'\r\n\t[(ngModel)]='newQuestion.question'>\r\n\t<p>Correct Answer</p>\r\n\t<input \r\n\ttype='text'\r\n\tname='correct'\r\n\t[(ngModel)]='newQuestion.correct'>\r\n\t<p> Fake Answer 1</p>\r\n\t<input \r\n\ttype='text'\r\n\tname='fake1'\r\n\t[(ngModel)]='newQuestion.fake1'>\r\n\t<p> Fake Answer 2</p>\r\n\t<input\r\n\ttype='text'\r\n\tname='fake2'\r\n\t[(ngModel)]='newQuestion.fake2'>\r\n\t<input type='submit' value=\"Add Question\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateQuestionComponent = (function () {
    function CreateQuestionComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.newQuestion = {
            question: "",
            correct: "",
            fake1: "",
            fake2: ""
        };
    }
    CreateQuestionComponent.prototype.ngOnInit = function () {
    };
    CreateQuestionComponent.prototype.onSubmit = function () {
        if (this.newQuestion.question.length > 15 &&
            this.newQuestion.correct.length > 0 &&
            this.newQuestion.fake1.length > 0 &&
            this.newQuestion.fake2.length > 0) {
            this._sharedService.create(this.newQuestion);
            this.newQuestion = {
                question: "",
                correct: "",
                fake1: "",
                fake2: ""
            };
        }
    };
    return CreateQuestionComponent;
}());
CreateQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-question',
        template: __webpack_require__("../../../../../src/app/create-question/create-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-question/create-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _a || Object])
], CreateQuestionComponent);

var _a;
//# sourceMappingURL=create-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<!-- {{ listPlayers | json}} -->\n<form (submit)=\"onSubmit()\">\n\t<p style=\"display: inline-block;\">Name:</p>\n\t<input \n\ttype='text'\n\tname='user'\t\n\t[(ngModel)]='player.user'>\n\t<input type='submit' value='PLAY!'>\n</form>\n<p> Click the button to play</p>\n\n<div *ngFor='let player of listPlayers; let i = index'>\n\t<h2 style='display: inline-block;'>Player {{i+1}}:</h2> {{player.user}} <h2 style='display: inline-block;'> Result: </h2>{{player.result}}  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
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
    function HomeComponent(_sharedService, router) {
        this._sharedService = _sharedService;
        this.router = router;
        this.listPlayers = [];
        this.player = {
            user: ""
        };
        this.getContestants();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSubmit = function () {
        this._sharedService.contestant.name = this.player.user;
        this.router.navigate(['/lets_play']);
    };
    HomeComponent.prototype.getContestants = function () {
        var _this = this;
        this._sharedService.retrieveTrivias(function (trivias) {
            var temp = [];
            temp = trivias;
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].user) {
                    _this.listPlayers.push(temp[i]);
                }
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    function SharedService(_http) {
        this._http = _http;
        this.questionList = [];
        this.userList = [];
        this.contestant = {
            name: "",
            result: ""
        };
    }
    SharedService.prototype.create = function (add) {
        this._http.post('/new_question', add)
            .subscribe();
    };
    SharedService.prototype.addContestant = function (contestant) {
        this._http.post('/contestant', contestant)
            .subscribe();
    };
    SharedService.prototype.retrieveTrivias = function (callback) {
        var _this = this;
        this._http.get('/trivias')
            .subscribe(function (data) {
            // console.log(data);
            _this.questionList = data.json();
            // console.log(this.questionList);
            //implement a callback here to fix timing on home.comp
            callback(_this.questionList);
        });
    };
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SharedService);

var _a;
//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/trivia/trivia.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trivia/trivia.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p> Trivia Works</p> -->\n<!-- {{playQuestions | json}} -->\n<!-- {{playQuestionsfilter | json}} -->\n<h5> Hi {{answer.user}}</h5>\n<div>\n\t<form (submit)='onSubmit()'>\t\n\t\t<p>1. {{playQuestions[0].question}}</p>\n\t\t<p> A. {{playQuestions[0].correct}}</p>\n\t\t<p> B. {{playQuestions[0].fake1}}</p>\n\t\t<p> C. {{playQuestions[0].fake2}}</p><br>\n\n\t\t<p>2. {{playQuestions[1].question}}</p>\n\t\t<p> A. {{playQuestions[1].correct}}</p>\n\t\t<p> B. {{playQuestions[1].fake1}}</p>\n\t\t<p> C. {{playQuestions[1].fake2}}</p><br>\n\n\t\t<p>3. {{playQuestions[2].question}}</p>\n\t\t<p> A. {{playQuestions[2].correct}}</p>\n\t\t<p> B. {{playQuestions[2].fake1}}</p>\n\t\t<p> C. {{playQuestions[2].fake2}}</p><br>\n\n\t\t<input\n\t\ttype='text'\n\t\tname='attempt'\n\t\t[(ngModel)]='answer.attempt'>\n\t\t(answer in commas, ex. A,B,C)\n\t\t<input type='submit'>\n\t</form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/trivia/trivia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriviaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
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



var TriviaComponent = (function () {
    function TriviaComponent(_sharedService, router) {
        this._sharedService = _sharedService;
        this.router = router;
        this.playQuestionsfilter = [];
        this.playQuestions = [];
        this.answer = {
            attempt: "",
            user: this._sharedService.contestant.name,
            result: "",
        };
        // for(let i = 0; i < 3; i++){
        // 	this.playQuestions.push(this._sharedService.questionList[Math.floor(Math.random() * this._sharedService.questionList.length)])
        // }
        // console.log(this.playQuestions); //TESTING FRONT END WITH THIS
        this.getTrivias();
        // for(let i = 0; i < this.playQuestionsfilter.length; i++){
        // 	if(this.playQuestionsfilter[i].question){
        // 		this.playQuestions.push(this.playQuestionsfilter[i]);
        // 	}
    }
    TriviaComponent.prototype.ngOnInit = function () {
    };
    TriviaComponent.prototype.onSubmit = function () {
        // console.log('got here')
        if (this.answer.attempt === 'A,A,A') {
            this.answer.result = 'Success!';
            // console.log(this.answer.result);
        }
        else {
            this.answer.result = 'Failure!';
        }
        this._sharedService.addContestant(this.answer);
        this._sharedService.userList.push(this.answer);
        this.router.navigate(['']);
    };
    TriviaComponent.prototype.getTrivias = function () {
        var _this = this;
        this._sharedService.retrieveTrivias(function (trivias) {
            _this.playQuestionsfilter = trivias;
            for (var i = _this.playQuestionsfilter.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = _this.playQuestionsfilter[i];
                _this.playQuestionsfilter[i] = _this.playQuestionsfilter[j];
                _this.playQuestionsfilter[j] = temp;
            }
            // ^ above is to randomize the questions
            for (var i = 0; i < _this.playQuestionsfilter.length; i++) {
                if (_this.playQuestionsfilter[i].question) {
                    _this.playQuestions.push(_this.playQuestionsfilter[i]);
                }
            }
            // ^ above is to retrieve only questions from collectiosn to show in template
        });
    };
    return TriviaComponent;
}());
TriviaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-trivia',
        template: __webpack_require__("../../../../../src/app/trivia/trivia.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trivia/trivia.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], TriviaComponent);

var _a, _b;
//# sourceMappingURL=trivia.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map