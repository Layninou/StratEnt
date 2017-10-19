webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.index{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 4fr 1fr;\r\n      grid-template-columns: 1fr 4fr 1fr;\r\n  -ms-grid-rows: 12vh 80vh;\r\n      grid-template-rows: 12vh 80vh;\r\n  grid-template-areas: \"title title title\"\r\n                       \"router router navigator\";\r\n}\r\n\r\n.header{\r\n  grid-area: title;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.router{\r\n  grid-area: router;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.navigator{\r\n  grid-area: navigator;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/**********************************************************/\r\n\r\n.header{\r\n  position: relative;\r\n  text-align: center;\r\n  box-shadow: 1px 1px 3px #808080;\r\n}\r\n.header h1{\r\n  padding: 0px;\r\n  font-size: 48px;\r\n  margin: 12px 0px 0px 0px;\r\n}\r\n.session{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.session p{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.language{\r\n  width: 25%;\r\n  position: absolute;\r\n  margin: 12px;\r\n  right: 0px;\r\n  top: 0px;\r\n  text-align: right;\r\n}\r\n.language div{\r\n  display: inline-block;\r\n  margin: 2px;\r\n}\r\n/**********************************************************/\r\n\r\n.router{\r\n  padding: 15px 10px;\r\n}\r\n\r\n/**********************************************************/\r\n\r\n.navigator nav{\r\n  position: fixed;\r\n  top: 15%;\r\n  padding: 10px 10px;\r\n  margin-left: 25px;\r\n  max-height: 70vh;\r\n  overflow: auto;\r\n\r\n  box-shadow: 1px 1px 3px #808080;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  opacity: 0;\r\n}\r\n\r\nnav a{\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\nnav a:link {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\nnav a:visited {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\nnav a:active {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\nnav a:hover {\r\n  color: #808080;\r\n  text-decoration: none;\r\n}\r\n\r\n.label{\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n.company-label{\r\n  font-weight: bold;\r\n}\r\n\r\n/**************************************************************/\r\n.company-label{\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n}\r\n.company-label:active{\r\n  cursor: -webkit-grabbing;\r\n  cursor: grabbing;\r\n}\r\n.hide{\r\n  height: 0px;\r\n  font-size: 0px;\r\n}\r\n.seen{\r\n  height: auto;\r\n  font-size: auto;\r\n}\r\n\r\n/**********************************************************/\r\n.language div:hover{\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n}\r\n.language div:active{\r\n  cursor: -webkit-grabbing;\r\n  cursor: grabbing;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"index\">\r\n\r\n  <div class=\"header\">\r\n\r\n    <h1>StratEnt</h1>\r\n    <div *ngIf=\"authentification\" class=\"session\">\r\n      <p>\r\n        <span>{{ user.author }}</span> {{ language.principalHaderSession }} <span>{{ user.date }}</span> {{ language.principalHeaderPlace }} <span>{{ user.place }}</span>\r\n      </p>\r\n    </div>\r\n    <div class=\"language\">\r\n      <div class=\"fr\" (click)=\"changeLang('fr')\"><img src=\"../assets/flag_FR.png\" alt=\"fr\"></div>\r\n      <div class=\"en\" (click)=\"changeLang('en')\"><img src=\"../assets/flag_EN.png\" alt=\"en\"></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"authentification\" class=\"navigator\">\r\n    <nav>\r\n      <a class=\"label\" routerLink='/newproject'>{{ language.principalNavigatorIntroduction }}</a> <br> <br>\r\n\r\n      <div class=\"label\"> {{ language.principalNavigatorCompanies }} </div>\r\n      <div class=\"companies-nav\" *ngFor=\"let company of companyList | async; let i = index\">\r\n\r\n        <label class=\"company-label\"\r\n               (click)=\"toggleNav(i)\">{{ company.name }}</label> <br>\r\n\r\n        <div [class.hide]=\"!boolCompany[i]\" [class.seen]=\"boolCompany[i]\">\r\n\r\n          <a [routerLink]=\"['/choice', i]\"\r\n             (click)=\"shareCompanyAndRound(company)\"> {{ language.principalNavigatorCompaniesDecision }}</a> <br>\r\n\r\n          <a *ngIf=\"company.result\"\r\n            [routerLink]=\"['/situation',i]\"\r\n            (click)=\"shareCompanyAndRound(company)\">\r\n            {{ language.principalNavigatorCompaniesSituation }}\r\n          </a> <br>\r\n\r\n          <a *ngIf=\"company.result\"\r\n            [routerLink]=\"['/compatability',i]\"\r\n            (click)=\"shareCompanyAndRound(company)\">\r\n            {{ language.principalNavigatorCompaniesComptability }}\r\n          </a> <br>\r\n\r\n          <a *ngIf=\"company.result\"\r\n            [routerLink]=\"['/flux',i]\"\r\n            (click)=\"shareCompanyAndRound(company)\">\r\n            {{ language.principalNavigatorCompaniesFlux }}\r\n          </a> <br>\r\n\r\n          <a *ngIf=\"company.result\"\r\n            [routerLink]=\"['/studies',i]\"\r\n            (click)=\"shareCompanyAndRound(company)\">\r\n            {{ language.principalNavigatorCompaniesStudies }}\r\n          </a> <br>\r\n\r\n        </div>\r\n\r\n      <br>\r\n      </div>\r\n\r\n      <div class=\"label\"><a routerLink=\"/result\" (click)=\"shareGame()\">{{ language.principalNavigatorPeriode }}</a></div>\r\n\r\n      <br>\r\n\r\n      <div class=\"label\"><a routerLink=\"/authentification\" (click)=\"logOut()\">{{ language.principalNavigatorLog }}</a></div>\r\n\r\n    </nav>\r\n  </div>\r\n\r\n  <div class=\"router\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_init_Game_const__ = __webpack_require__("../../../../../src/app/constant/init-Game.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_languages_french_const__ = __webpack_require__("../../../../../src/app/language/languages/french.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_result_service__ = __webpack_require__("../../../../../src/app/service/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__firebase_db_firebase_service__ = __webpack_require__("../../../../../src/app/firebase/db-firebase.service.ts");
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


//Constant

//Language


//Firebase


//Service



//Firebase Service

var AppComponent = (function () {
    function AppComponent(dbLink, route, router, servDb, servDecision, servAuth, servResult, servLang, afAuth) {
        var _this = this;
        this.dbLink = dbLink;
        this.route = route;
        this.router = router;
        this.servDb = servDb;
        this.servDecision = servDecision;
        this.servAuth = servAuth;
        this.servResult = servResult;
        this.servLang = servLang;
        this.afAuth = afAuth;
        var anyGame;
        this.router.navigate(['./authentification']);
        //to find the round
        this.round = -1;
        this.syncGame = __WEBPACK_IMPORTED_MODULE_2__constant_init_Game_const__["a" /* NULL_GAME */];
        this.user = { author: "", place: "", date: "" };
        this.language = __WEBPACK_IMPORTED_MODULE_3__language_languages_french_const__["a" /* FRENCH */];
        servLang.getLanguage().subscribe(function (lang) {
            _this.language = lang;
        });
        afAuth.authState.subscribe(function (user) {
            _this.currentUser = user;
            _this.boolCompany = [];
            if (user !== undefined) {
                if (user !== null) {
                    _this.game = dbLink.list(user.uid);
                    anyGame = dbLink.object(user.uid);
                    _this.companyList = _this.dbLink.list(user.uid + '/teams');
                    _this.servAuth.getUser().subscribe(function (userProp) {
                        _this.user = userProp;
                    });
                    _this.game.subscribe(function (snapshots) {
                        snapshots.map(function (snap) {
                            if (snap.$key === "round") {
                                _this.round = snap.$value;
                            }
                        });
                    });
                    anyGame.subscribe(function (snapshots) {
                        _this.protoGame = snapshots;
                    });
                    _this.servAuth.getAuth().subscribe(function (authBool) {
                        _this.authentification = authBool;
                    });
                    Object.keys(_this.companyList).map(function () { return _this.boolCompany.push(false); });
                }
            }
        });
    }
    //END CONSTRUCTOR
    AppComponent.prototype.hasAuthentified = function (event) {
        this.authentification = event;
    };
    AppComponent.prototype.shareCompanyAndRound = function (company) {
        this.servDecision.shareCompany(company);
        this.servDecision.shareRound(this.round);
        this.shareGame();
    };
    AppComponent.prototype.shareGame = function () {
        this.syncGame = this.servResult.transformGame(this.protoGame);
        this.servResult.pushGame(this.syncGame);
    };
    AppComponent.prototype.toggleNav = function (i) {
        this.boolCompany[i] = !this.boolCompany[i];
    };
    AppComponent.prototype.changeLang = function (lang) {
        this.servLang.setLanguage(lang);
    };
    AppComponent.prototype.logOut = function () {
        this.servAuth.logOutAuth();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_10__firebase_db_firebase_service__["a" /* DbFirebaseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__firebase_db_firebase_service__["a" /* DbFirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__firebase_db_firebase_service__["a" /* DbFirebaseService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_decisions_service__["a" /* DecisionsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__service_result_service__["a" /* ResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_result_service__["a" /* ResultService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__language_language_service__["a" /* LanguageService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _j || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_app_routing_module__ = __webpack_require__("../../../../../src/app/routes/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_environment__ = __webpack_require__("../../../../../src/app/firebase/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentification_authentification_component__ = __webpack_require__("../../../../../src/app/authentification/authentification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_result_create_result_component__ = __webpack_require__("../../../../../src/app/create-result/create-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__initialization_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__initialization_game_initialization_game_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/game-initialization/game-initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__initialization_scenario_initialization_scenario_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/scenario-initialization/scenario-initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__initialization_politics_initialization_politics_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/politics-initialization/politics-initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__initialization_company_initialization_company_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/company-initialization/company-initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__initialization_product_initialization_product_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/product-initialization/product-initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__initialization_affinities_initialization_affinities_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/affinities-initialization/affinities-initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__initialization_studies_initialization_studies_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/studies-initialization/studies-initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__company_company_finances_company_finances_component__ = __webpack_require__("../../../../../src/app/company/company-finances/company-finances.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__company_company_machinery_company_machinery_component__ = __webpack_require__("../../../../../src/app/company/company-machinery/company-machinery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__company_company_fabrication_company_fabrication_component__ = __webpack_require__("../../../../../src/app/company/company-fabrication/company-fabrication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__company_company_marketing_company_marketing_component__ = __webpack_require__("../../../../../src/app/company/company-marketing/company-marketing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__company_company_remuneration_company_remuneration_component__ = __webpack_require__("../../../../../src/app/company/company-remuneration/company-remuneration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__company_company_management_company_management_component__ = __webpack_require__("../../../../../src/app/company/company-management/company-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__company_company_studies_company_studies_component__ = __webpack_require__("../../../../../src/app/company/company-studies/company-studies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__company_company_clearing_company_clearing_component__ = __webpack_require__("../../../../../src/app/company/company-clearing/company-clearing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__company_company_submission_company_submission_component__ = __webpack_require__("../../../../../src/app/company/company-submission/company-submission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__comptability_comptability_component__ = __webpack_require__("../../../../../src/app/comptability/comptability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__situation_situation_component__ = __webpack_require__("../../../../../src/app/situation/situation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__results_results_structure_results_structure_component__ = __webpack_require__("../../../../../src/app/results/results-structure/results-structure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__results_results_exploitation_results_exploitation_component__ = __webpack_require__("../../../../../src/app/results/results-exploitation/results-exploitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__results_results_selling_results_selling_component__ = __webpack_require__("../../../../../src/app/results/results-selling/results-selling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__results_results_productions_results_productions_component__ = __webpack_require__("../../../../../src/app/results/results-productions/results-productions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__results_results_charge_results_charge_component__ = __webpack_require__("../../../../../src/app/results/results-charge/results-charge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__results_results_financial_results_financial_component__ = __webpack_require__("../../../../../src/app/results/results-financial/results-financial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__results_results_final_results_final_component__ = __webpack_require__("../../../../../src/app/results/results-final/results-final.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__studies_studies_component__ = __webpack_require__("../../../../../src/app/studies/studies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__studies_studies_product_studies_product_component__ = __webpack_require__("../../../../../src/app/studies/studies-product/studies-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__studies_studies_market_studies_market_component__ = __webpack_require__("../../../../../src/app/studies/studies-market/studies-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__studies_studies_concurrence_studies_concurrence_component__ = __webpack_require__("../../../../../src/app/studies/studies-concurrence/studies-concurrence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__studies_studies_structure_studies_structure_component__ = __webpack_require__("../../../../../src/app/studies/studies-structure/studies-structure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__studies_studies_selling_studies_selling_component__ = __webpack_require__("../../../../../src/app/studies/studies-selling/studies-selling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__studies_studies_performance_studies_performance_component__ = __webpack_require__("../../../../../src/app/studies/studies-performance/studies-performance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__flux_flux_component__ = __webpack_require__("../../../../../src/app/flux/flux.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__flux_asset_asset_component__ = __webpack_require__("../../../../../src/app/flux/asset/asset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__flux_liability_liability_component__ = __webpack_require__("../../../../../src/app/flux/liability/liability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__service_result_service__ = __webpack_require__("../../../../../src/app/service/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__service_modelization_service__ = __webpack_require__("../../../../../src/app/service/modelization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__service_calculus_service__ = __webpack_require__("../../../../../src/app/service/calculus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__firebase_auth_firebase_service__ = __webpack_require__("../../../../../src/app/firebase/auth-firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__firebase_db_firebase_service__ = __webpack_require__("../../../../../src/app/firebase/db-firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pipe_round_at_2_pipe__ = __webpack_require__("../../../../../src/app/pipe/round-at-2.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pipe_round_at_0_pipe__ = __webpack_require__("../../../../../src/app/pipe/round-at-0.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pipe_percent_pipe__ = __webpack_require__("../../../../../src/app/pipe/percent.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Routes

//Firebase




//Component









































//Services






//Firebase Service


//Pipe



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__initialization_initialization_component__["a" /* InitializationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__initialization_game_initialization_game_initialization_component__["a" /* GameInitializationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__initialization_scenario_initialization_scenario_initialization_component__["a" /* ScenarioInitializationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__initialization_politics_initialization_politics_initialization_component__["a" /* PoliticsInitializationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__initialization_company_initialization_company_initialization_component__["a" /* CompanyInitializationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__initialization_product_initialization_product_initialization_component__["a" /* ProductInitializationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__initialization_affinities_initialization_affinities_initialization_component__["a" /* AffinitiesInitializationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__initialization_studies_initialization_studies_initialization_component__["a" /* StudiesInitializationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_20__company_company_finances_company_finances_component__["a" /* CompanyFinancesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__company_company_machinery_company_machinery_component__["a" /* CompanyMachineryComponent */],
            __WEBPACK_IMPORTED_MODULE_22__company_company_fabrication_company_fabrication_component__["a" /* CompanyFabricationComponent */],
            __WEBPACK_IMPORTED_MODULE_23__company_company_marketing_company_marketing_component__["a" /* CompanyMarketingComponent */],
            __WEBPACK_IMPORTED_MODULE_24__company_company_remuneration_company_remuneration_component__["a" /* CompanyRemunerationComponent */],
            __WEBPACK_IMPORTED_MODULE_25__company_company_management_company_management_component__["a" /* CompanyManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_26__company_company_studies_company_studies_component__["a" /* CompanyStudiesComponent */],
            __WEBPACK_IMPORTED_MODULE_27__company_company_clearing_company_clearing_component__["a" /* CompanyClearingComponent */],
            __WEBPACK_IMPORTED_MODULE_28__company_company_submission_company_submission_component__["a" /* CompanySubmissionComponent */],
            __WEBPACK_IMPORTED_MODULE_31__results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_32__results_results_structure_results_structure_component__["a" /* ResultsStructureComponent */],
            __WEBPACK_IMPORTED_MODULE_33__results_results_exploitation_results_exploitation_component__["a" /* ResultsExploitationComponent */],
            __WEBPACK_IMPORTED_MODULE_34__results_results_selling_results_selling_component__["a" /* ResultsSellingComponent */],
            __WEBPACK_IMPORTED_MODULE_35__results_results_productions_results_productions_component__["a" /* ResultsProductionsComponent */],
            __WEBPACK_IMPORTED_MODULE_36__results_results_charge_results_charge_component__["a" /* ResultsChargeComponent */],
            __WEBPACK_IMPORTED_MODULE_37__results_results_financial_results_financial_component__["a" /* ResultsFinancialComponent */],
            __WEBPACK_IMPORTED_MODULE_38__results_results_final_results_final_component__["a" /* ResultsFinalComponent */],
            __WEBPACK_IMPORTED_MODULE_46__flux_flux_component__["a" /* FluxComponent */],
            __WEBPACK_IMPORTED_MODULE_47__flux_asset_asset_component__["a" /* AssetComponent */],
            __WEBPACK_IMPORTED_MODULE_48__flux_liability_liability_component__["a" /* LiabilityComponent */],
            __WEBPACK_IMPORTED_MODULE_39__studies_studies_component__["a" /* StudiesComponent */],
            __WEBPACK_IMPORTED_MODULE_40__studies_studies_product_studies_product_component__["a" /* StudiesProductComponent */],
            __WEBPACK_IMPORTED_MODULE_41__studies_studies_market_studies_market_component__["a" /* StudiesMarketComponent */],
            __WEBPACK_IMPORTED_MODULE_42__studies_studies_concurrence_studies_concurrence_component__["a" /* StudiesConcurrenceComponent */],
            __WEBPACK_IMPORTED_MODULE_43__studies_studies_structure_studies_structure_component__["a" /* StudiesStructureComponent */],
            __WEBPACK_IMPORTED_MODULE_44__studies_studies_selling_studies_selling_component__["a" /* StudiesSellingComponent */],
            __WEBPACK_IMPORTED_MODULE_45__studies_studies_performance_studies_performance_component__["a" /* StudiesPerformanceComponent */],
            __WEBPACK_IMPORTED_MODULE_29__comptability_comptability_component__["a" /* ComptabilityComponent */],
            __WEBPACK_IMPORTED_MODULE_30__situation_situation_component__["a" /* SituationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__authentification_authentification_component__["a" /* AuthentificationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__create_result_create_result_component__["a" /* CreateResultComponent */],
            //Pipe
            __WEBPACK_IMPORTED_MODULE_57__pipe_round_at_2_pipe__["a" /* RoundAt2Pipe */],
            __WEBPACK_IMPORTED_MODULE_58__pipe_round_at_0_pipe__["a" /* RoundAt0Pipe */],
            __WEBPACK_IMPORTED_MODULE_59__pipe_percent_pipe__["a" /* PercentPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__routes_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__firebase_environment__["a" /* Environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_49__service_decisions_service__["a" /* DecisionsService */],
            __WEBPACK_IMPORTED_MODULE_50__service_result_service__["a" /* ResultService */],
            __WEBPACK_IMPORTED_MODULE_51__service_modelization_service__["a" /* ModelizationService */],
            __WEBPACK_IMPORTED_MODULE_52__service_calculus_service__["a" /* CalculusService */],
            __WEBPACK_IMPORTED_MODULE_53__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_54__language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_55__firebase_auth_firebase_service__["a" /* AuthFirebaseService */],
            __WEBPACK_IMPORTED_MODULE_56__firebase_db_firebase_service__["a" /* DbFirebaseService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentification/authentification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*********************** GENERAL ********************************/\r\n.article{\r\n  position: relative;\r\n  margin-top: 10%;\r\n  margin-left: 10%;\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n.article::after{\r\n  position: static;\r\n}\r\n.form{\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n.form-block{\r\n  margin: 5px 5px;\r\n  text-align: center;\r\n}\r\ninput{\r\n  text-align: center;\r\n}\r\n\r\n/************************* BUTTON ******************************/\r\n\r\nbutton{\r\n  padding: 5px 25px;\r\n  background: none;\r\n  border: solid 2px black;\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n button:active{\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n button:hover{\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n/************************** INPUT ******************************/\r\n\r\ninput{\r\n  background: none;\r\n  color: black;\r\n  font-size: 20px;\r\n\r\n  border: none;\r\n  border-bottom: solid 2px black;\r\n  padding-bottom: 0px;\r\n}\r\ninput:focus, input:active{\r\n  outline: none;\r\n}\r\n\r\n.form-input{\r\n  position: relative;\r\n  padding: 0px 7px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nlabel{\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  font-style: italic;\r\n  font-size: 20px;\r\n  color: #808080;\r\n  pointer-events: none;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n\r\n/************************** Animation ******************************/\r\n\r\n/*TODO: reduire et monter les labels quand clic*/\r\n.label-up{\r\n  font-size: 10px;\r\n  -webkit-transform: translate(-50%,-15px);\r\n          transform: translate(-50%,-15px);\r\n}\r\n.label-up:hover{\r\n  font-size: 5px;\r\n}\r\n\r\n.transform{\r\n\r\n}\r\n\r\n/************************** Other Session ******************************/\r\n\r\n.user-list{\r\n  text-align: center;\r\n}\r\n.user-list p{\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n\r\n.user{\r\n  display: inline-block;\r\n  font-size: 18px;\r\n  padding: 5px 10px;\r\n  margin: 5px;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n.user div{\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentification/authentification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article\">\r\n\r\n  <div class=\"authentification\" *ngIf=\"!auth\">\r\n\r\n    <div class=\"form\">\r\n\r\n      <div class=\"form-block form-input\">\r\n        <label [class.label-up]=\"authorBool\">{{ lang.authName }}</label>\r\n        <input [(ngModel)]=\"author\" (focus)=\"animatorClick()\" (focusout)=\"animatorUnclick()\">\r\n      </div>\r\n\r\n      <div class=\"form-block form-input\">\r\n        <label [class.label-up]=\"placeBool\">{{ lang.authPlace }}</label>\r\n        <input [(ngModel)]=\"place\" (focus)=\"placeClick()\"  (focusout)=\"placeUnclick()\">\r\n      </div>\r\n\r\n      <div class=\"form-block form-input\">\r\n        <label [class.label-up]=\"dateBool\">{{ lang.authDate }}</label>\r\n        <input [(ngModel)]=\"date\" (focus)=\"dateClick()\"  (focusout)=\"dateUnclick()\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-block create-button\">\r\n      <button (click)=\"createAuth()\">{{ lang.authButton }}</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"user-list\" *ngIf=\"!auth\">\r\n\r\n    <p>{{ lang.authOther }}</p>\r\n\r\n    <div class=\"user\" *ngFor=\"let user of users\" (click)=\"logAuth(user)\">\r\n\r\n      <div> <span>{{ user.author }}</span> </div>\r\n      <div> <span>{{ user.place }}</span>  </div>\r\n      <div> <span>{{ user.date }}</span>   </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authentification/authentification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Firebase

var AuthentificationComponent = (function () {
    function AuthentificationComponent(authServ, langServ) {
        var _this = this;
        this.authServ = authServ;
        this.langServ = langServ;
        authServ.getUsers().subscribe(function (users) { return _this.users = users; });
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
        this.authorBool = false;
        this.placeBool = false;
        this.dateBool = false;
    }
    AuthentificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServ.getAuth().subscribe(function (authBool) { return _this.auth = authBool; });
    };
    AuthentificationComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    AuthentificationComponent.prototype.createAuth = function () {
        var _this = this;
        if (this.author === undefined || this.author === "") {
            console.error("you need an author to create a session");
            return;
        }
        if (this.place === undefined || this.place === "") {
            console.error("you need a place to create a session");
            return;
        }
        if (this.date === undefined || this.date === "") {
            console.error("you need a date to create a session");
            return;
        }
        var nameUser = this.author + "_" + this.place + "_" + this.date + "_" + "@notamail.com";
        this.authServ.createAuth(nameUser);
        setTimeout(function () {
            _this.authServ.getAuth();
            setTimeout(function () {
                _this.authServ.addUser(_this.author, _this.place, _this.date);
            }, 700);
        }, 500);
    };
    AuthentificationComponent.prototype.logAuth = function (user) {
        var _this = this;
        var nameUser = user.author + "_" + user.place + "_" + user.date + "_" + "@notamail.com";
        this.authServ.loginAuth(nameUser);
        setTimeout(function () {
            _this.authServ.getAuth();
        }, 500);
    };
    //Animation Input
    AuthentificationComponent.prototype.animatorClick = function () {
        this.authorBool = true;
    };
    AuthentificationComponent.prototype.animatorUnclick = function () {
        if (this.author === "" || this.author === undefined) {
            this.authorBool = false;
        }
    };
    AuthentificationComponent.prototype.placeClick = function () {
        this.placeBool = true;
    };
    AuthentificationComponent.prototype.placeUnclick = function () {
        if (this.place === "" || this.place === undefined) {
            this.placeBool = false;
        }
    };
    AuthentificationComponent.prototype.dateClick = function () {
        this.dateBool = true;
    };
    AuthentificationComponent.prototype.dateUnclick = function () {
        if (this.date === "" || this.date === undefined) {
            this.dateBool = false;
        }
    };
    return AuthentificationComponent;
}());
AuthentificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-authentification',
        template: __webpack_require__("../../../../../src/app/authentification/authentification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentification/authentification.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _b || Object])
], AuthentificationComponent);

var _a, _b;
//# sourceMappingURL=authentification.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-clearing/company-clearing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clearing{\r\n  display: inline-block;\r\n  border-radius: 12px;\r\n  padding: 10px 15px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  width: 40%;\r\n  vertical-align: top;\r\n}\r\n\r\n.clearing-label{\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n  text-align: left;\r\n}\r\n.clearing-input{\r\n  display: inline-block;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.clearing{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n.clearing p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.clearing-label div,\r\n.clearing-input div{\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-clearing/company-clearing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearing\">\r\n\r\n  <p>{{ lang.decStorageTitle }}</p>\r\n\r\n  <div class=\"clearing-label\">\r\n    <div><label>{{ lang.decStorageNames }} :</label></div>\r\n    <div><label>{{ lang.decStorageQuantity }} :</label></div>\r\n  </div>\r\n\r\n  <div class=\"clearing-input\" *ngFor=\"let product of products; let i = index;\">\r\n    <div><span>{{ lang.decStorageName }} {{ i + 1 }}</span></div>\r\n    <div><input type=\"number\" [(ngModel)]=\"liquidation[i]\" (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-clearing/company-clearing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyClearingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyClearingComponent = (function () {
    function CompanyClearingComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.liquidationOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanyClearingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.liquidation = [];
        //No need to change init, always 0 everywhere
        this.products.map(function () { return _this.liquidation.push(0); });
        this.liquidationOutput.emit(this.liquidation);
    };
    CompanyClearingComponent.prototype.changement = function () {
        this.liquidationOutput.emit(this.liquidation);
    };
    return CompanyClearingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyClearingComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyClearingComponent.prototype, "liquidation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('liquidation'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], CompanyClearingComponent.prototype, "liquidationOutput", void 0);
CompanyClearingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-clearing',
        template: __webpack_require__("../../../../../src/app/company/company-clearing/company-clearing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-clearing/company-clearing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _b || Object])
], CompanyClearingComponent);

var _a, _b;
//# sourceMappingURL=company-clearing.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-fabrication/company-fabrication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fabrication{\r\n  display: inline-block;\r\n  border-radius: 12px;\r\n  padding: 10px 15px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  width: 30%;\r\n  min-width: 50vw;\r\n}\r\n\r\n.all{\r\n  margin: 0px auto;\r\n}\r\n.fabrication-label{\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n  text-align: left;\r\n}\r\n.fabrication-input{\r\n  margin-top: 0.5px;\r\n  display: inline-block;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.fabrication{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n.fabrication p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n/****************************************/\r\n\r\n.fabrication-label div,\r\n.fabrication-input div{\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-fabrication/company-fabrication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fabrication\">\r\n\r\n  <p>{{ lang.decFabricationTitle }}</p>\r\n\r\n  <div class=\"all\">\r\n\r\n    <div class=\"fabrication-label\">\r\n      <div><label>{{ lang.decFabricationNames }} :</label></div>\r\n      <div><label>{{ lang.decFabricationProduction }} :</label></div>\r\n      <div><label>{{ lang.decFabricationMachinery }} :</label></div>\r\n      <div><label>{{ lang.decFabricationProductor }} :</label></div>\r\n    </div>\r\n\r\n    <div class=\"fabrication-input\" *ngFor=\"let product of products; let i = index;\">\r\n      <div><span>{{ lang.decFabricationName }} {{ i + 1 }}</span></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"production.production[i]\"         (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"production.affectedMachine[i]\"    (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"production.affectedProductor[i]\"  (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-fabrication/company-fabrication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_decision_production__ = __webpack_require__("../../../../../src/app/objects/decision/production.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyFabricationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Objects

//Services

var CompanyFabricationComponent = (function () {
    function CompanyFabricationComponent(decServ, langServ) {
        var _this = this;
        this.decServ = decServ;
        this.langServ = langServ;
        this.productionOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    //TODO: si product non null, remplir avec ancienne data à l'init
    CompanyFabricationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products.map(function () {
            _this.production.production.push(0);
            _this.production.affectedMachine.push(0);
            _this.production.affectedProductor.push(0);
        });
    };
    CompanyFabricationComponent.prototype.changement = function () {
        this.productionOutput.emit(this.production);
        var numberProductor = 0;
        this.production.affectedProductor.map(function (number) { return numberProductor += number; });
        this.decServ.changeProductor(numberProductor);
    };
    return CompanyFabricationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyFabricationComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_decision_production__["a" /* Production */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_decision_production__["a" /* Production */]) === "function" && _a || Object)
], CompanyFabricationComponent.prototype, "production", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('production'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], CompanyFabricationComponent.prototype, "productionOutput", void 0);
CompanyFabricationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-fabrication',
        template: __webpack_require__("../../../../../src/app/company/company-fabrication/company-fabrication.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-fabrication/company-fabrication.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], CompanyFabricationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=company-fabrication.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-finances/company-finances.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".financial-structure{\r\n  display: inline-block;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  width: 60%;\r\n}\r\n\r\n.all{\r\n  margin: 5px auto;\r\n}\r\n.financial-label{\r\n  display: inline-block;\r\n  text-align: left;\r\n}\r\n.financial-input{\r\n  display: inline-block;\r\n}\r\n\r\n/*****************************************/\r\n\r\n.financial-label div{\r\n  margin: 5px 7px;\r\n}\r\n.financial-input div{\r\n  margin: 5px 7px;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/*****************************************/\r\n\r\n.financial-structure{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n\r\n.financial-structure p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 1px;\r\n  font-size: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-finances/company-finances.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"financial-structure\">\r\n\r\n  <p>{{ lang.decFinancialStructureTitle }}</p>\r\n\r\n  <div class=\"all\">\r\n\r\n    <div class=\"financial-label\">\r\n      <div><label>{{ lang.decFinancialStructureVarCap }} (+/-):</label></div>\r\n      <div><label>{{ lang.decFinancialStructureDistribution }} :</label></div>\r\n      <div><label>{{ lang.decFinancialStructureVarBorrow }} (+/-):</label></div>\r\n      <div><label>{{ lang.decFinancialStructureSubvention }} :</label></div>\r\n      <div><label>{{ lang.decFinancialStructureEx }} (+/-):</label></div>\r\n    </div>\r\n\r\n    <div class=\"financial-input\">\r\n      <div><input type=\"number\" [(ngModel)]=\"financial.variateCaptial\"  (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"financial.distribution\"    (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"financial.variateLoaning\"  (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"financial.subventions\"     (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"financial.exonerate\"       (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-finances/company-finances.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_decision_financial__ = __webpack_require__("../../../../../src/app/objects/decision/financial.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyFinancesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Services

//Objects

var CompanyFinancesComponent = (function () {
    function CompanyFinancesComponent(decision, langServ) {
        var _this = this;
        this.decision = decision;
        this.langServ = langServ;
        this.financialOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanyFinancesComponent.prototype.ngOnInit = function () {
    };
    CompanyFinancesComponent.prototype.changement = function () {
        this.financialOutput.emit(this.financial);
    };
    return CompanyFinancesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__objects_decision_financial__["a" /* FinancialDecision */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__objects_decision_financial__["a" /* FinancialDecision */]) === "function" && _a || Object)
], CompanyFinancesComponent.prototype, "financial", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])("financial-decision"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], CompanyFinancesComponent.prototype, "financialOutput", void 0);
CompanyFinancesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-finances',
        template: __webpack_require__("../../../../../src/app/company/company-finances/company-finances.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-finances/company-finances.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], CompanyFinancesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=company-finances.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-machinery/company-machinery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".machinery{\r\n  display: inline-block;\r\n  border-radius: 12px;\r\n  padding: 10px 15px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  width: 30%;\r\n  min-width: 400px;\r\n}\r\n\r\n.machinery-label{\r\n  display: inline-block;\r\n  margin-left: 8%;\r\n  margin-bottom: 10px;\r\n  margin-right: 5px;\r\n  text-align: left;\r\n}\r\n.machinery-input{\r\n  margin-top: 0.5px;\r\n  display: inline-block;\r\n}\r\n\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/*****************************************/\r\n\r\n.machinery{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n\r\n.machinery p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n/****************************************/\r\n.machinery-label div,\r\n.machinery-input div{\r\n  margin: 5px;\r\n}\r\n\r\n\r\n/****************************************/\r\n.hidden{\r\n  opacity: 0;\r\n}\r\n.exist-machine{\r\n  font-weight: bold;\r\n}\r\n.add-machine{\r\n  opacity: 1;\r\n  color: green;\r\n}\r\n.del-machine{\r\n  opacity: 1;\r\n  color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-machinery/company-machinery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"machinery\">\r\n\r\n  <p>{{ lang.decMachineryTitle }}</p>\r\n\r\n  <div class=\"all\">\r\n\r\n    <div class=\"machinery-label\">\r\n      <div><label>{{ lang.decMachineryNumber }}</label></div>\r\n      <div><label>{{ lang.decMachineryAdd }} :</label></div>\r\n      <div><label>{{ lang.decMachineryDel }} :</label></div>\r\n      <div><label>{{ lang.decMachineryRepair }} (%):</label></div>\r\n    </div>\r\n\r\n    <div class=\"machinery-input\">\r\n      <div>\r\n        <label class=\"exist-machine\">{{ machineNumber }}</label>\r\n        <label class =\"hidden\" [class.add-machine]=\"isVisible(machinery.buyMachine)\"> + ( {{ machinery.buyMachine }} )</label>\r\n        <label class =\"hidden\" [class.del-machine]=\"isVisible(machinery.sellMachine)\"> - ( {{ machinery.sellMachine }} )</label>\r\n      </div>\r\n      <div><input type=\"number\" [(ngModel)]=\"machinery.buyMachine\"   (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"machinery.sellMachine\"  (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"machinery.maintenance\"  (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-machinery/company-machinery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_decision_machine_flux__ = __webpack_require__("../../../../../src/app/objects/decision/machine-flux.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyMachineryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Services

//Objects

var CompanyMachineryComponent = (function () {
    function CompanyMachineryComponent(decision, langServ) {
        var _this = this;
        this.decision = decision;
        this.langServ = langServ;
        this.machineryOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        decision.getNumberMachine().subscribe(function (machinery) {
            _this.machineNumber = machinery;
        });
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanyMachineryComponent.prototype.ngOnInit = function () {
    };
    CompanyMachineryComponent.prototype.changement = function () {
        this.machineryOutput.emit(this.machinery);
    };
    CompanyMachineryComponent.prototype.isVisible = function (n) {
        if (n > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return CompanyMachineryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__objects_decision_machine_flux__["a" /* MachineFlux */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__objects_decision_machine_flux__["a" /* MachineFlux */]) === "function" && _a || Object)
], CompanyMachineryComponent.prototype, "machinery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('machinery'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], CompanyMachineryComponent.prototype, "machineryOutput", void 0);
CompanyMachineryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-machinery',
        template: __webpack_require__("../../../../../src/app/company/company-machinery/company-machinery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-machinery/company-machinery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], CompanyMachineryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=company-machinery.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-management/company-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".management{\r\n  display: inline-block;\r\n  border-radius: 12px;\r\n  padding: 10px 15px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  width: 90%;\r\n}\r\n\r\n.management-type{\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n  text-align: left;\r\n}\r\n.management-label{\r\n  display: inline-block;\r\n}\r\n.management-input{\r\n  display: inline-block;\r\n  margin-left: 5px;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.management{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n.management p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n/****************************************************/\r\n.management-type{\r\n  margin: 5px 5px;\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n}\r\n.management-type p{\r\n  border-radius: 12px 12px 0px 0px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.management-label div,\r\n.management-input div{\r\n  margin: 5px;\r\n}\r\n\r\n/****************************************/\r\n.hidden{\r\n  opacity: 0;\r\n}\r\n.already-employee{\r\n  font-weight: bold;\r\n}\r\n.add-employee{\r\n  opacity: 1;\r\n  color: green;\r\n}\r\n.del-employee{\r\n  opacity: 1;\r\n  color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-management/company-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"management\">\r\n\r\n  <p>{{ lang.decEmployeesTitle }}</p>\r\n\r\n  <div class=\"management-type\" *ngFor=\"let employee of hireFire; let i = index\">\r\n\r\n    <p>\r\n      <!-- TYPE PRODUCTOR -->\r\n      <span *ngIf=\"employee.type === 'Productor'\">\r\n        {{ lang.decEmployeesProductor }} :\r\n        <span class=\"already-employee\"> {{ numberEmployee.productor }} </span>\r\n        <span class =\"hidden\" [class.add-employee]=\"isVisible(employee.hire)\"> + ( {{ employee.hire }} ) </span>\r\n        <span class =\"hidden\" [class.del-employee]=\"isVisible(employee.fire)\"> - ( {{ employee.fire }} ) </span>\r\n      </span>\r\n\r\n      <!-- TYPE SELOOR -->\r\n      <span *ngIf=\"employee.type === 'Sellor'\">\r\n        {{ lang.decEmployeesSellor }} :\r\n      <span class=\"already-employee\"> {{ numberEmployee.sellor }} </span>\r\n      <span class =\"hidden\" [class.add-employee]=\"isVisible(employee.hire)\"> + ( {{ employee.hire }} ) </span>\r\n      <span class =\"hidden\" [class.del-employee]=\"isVisible(employee.fire)\"> - ( {{ employee.fire }} ) </span>\r\n      </span>\r\n\r\n      <!-- TYPE MANAGER -->\r\n      <span *ngIf=\"employee.type === 'Manager'\">\r\n        {{ lang.decEmployeesManager }} :\r\n      <span class=\"already-employee\"> {{ numberEmployee.manager }} </span>\r\n      <span class =\"hidden\" [class.add-employee]=\"isVisible(employee.hire)\"> + ( {{ employee.hire }} ) </span>\r\n      <span class =\"hidden\" [class.del-employee]=\"isVisible(employee.fire)\"> - ( {{ employee.fire }} ) </span>\r\n      </span>\r\n    </p>\r\n\r\n    <div class=\"management-label\">\r\n      <div><label>{{ lang.decEmployeesHire }} :</label></div>\r\n      <div><label>{{ lang.decEmployeesFire }} :</label></div>\r\n    </div>\r\n\r\n    <div class=\"management-input\">\r\n      <div><input type=\"number\" [(ngModel)]=\"employee.hire\" (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n      <div><input type=\"number\" [(ngModel)]=\"employee.fire\" (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n    </div>\r\n\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-management/company-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Service

var CompanyManagementComponent = (function () {
    function CompanyManagementComponent(decServ, langServ) {
        var _this = this;
        this.decServ = decServ;
        this.langServ = langServ;
        this.hireFireOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.decServ.getEmployee().subscribe(function (employee) {
            _this.numberEmployee = employee;
        });
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanyManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hireFire = [];
        this.employees.map(function (employee) { return _this.hireFire.push({
            type: employee.type,
            hire: 0,
            fire: 0
        }); });
        this.decServ.getHire().subscribe(function (obj) {
            _this.hireFire.map(function (employee) {
                if (employee.type === "Productor") {
                    if (obj.productor > 0) {
                        employee.hire = obj.productor;
                        employee.fire = 0;
                    }
                    else if (obj.productor < 0) {
                        employee.hire = 0;
                        employee.fire = obj.productor;
                    }
                    else {
                        employee.hire = 0;
                        employee.fire = 0;
                    }
                }
                if (employee.type === "Sellor") {
                    if (obj.sellor > 0) {
                        employee.hire = obj.sellor;
                        employee.fire = 0;
                    }
                    else if (obj.sellor < 0) {
                        employee.hire = 0;
                        employee.fire = obj.sellor;
                    }
                    else {
                        employee.hire = 0;
                        employee.fire = 0;
                    }
                }
                if (employee.type === "Manager") {
                    if (obj.manager > 0) {
                        employee.hire = obj.manager;
                        employee.fire = 0;
                    }
                    else if (obj.manager < 0) {
                        employee.hire = 0;
                        employee.fire = obj.manager;
                    }
                    else {
                        employee.hire = 0;
                        employee.fire = 0;
                    }
                }
            });
        });
        this.hireFireOutput.emit(this.hireFire);
    };
    CompanyManagementComponent.prototype.changement = function () {
        this.hireFireOutput.emit(this.hireFire);
    };
    CompanyManagementComponent.prototype.isVisible = function (n) {
        if (n > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return CompanyManagementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyManagementComponent.prototype, "employees", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyManagementComponent.prototype, "hireFire", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('hire-fire'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], CompanyManagementComponent.prototype, "hireFireOutput", void 0);
CompanyManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-management',
        template: __webpack_require__("../../../../../src/app/company/company-management/company-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-management/company-management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], CompanyManagementComponent);

var _a, _b, _c;
//# sourceMappingURL=company-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-marketing/company-marketing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".marketing{\r\n  display: inline-block;\r\n  border-radius: 12px;\r\n  padding: 10px 15px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  width: 30%;\r\n  min-width: 50vw;\r\n}\r\n\r\n.all{\r\n  margin: 0px auto;\r\n}\r\n.marketing-label{\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n  text-align: left;\r\n}\r\n.marketing-input{\r\n  margin-top: 0.5px;\r\n  display: inline-block;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.marketing{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n.marketing p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.marketing-label div,\r\n.marketing-input div{\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-marketing/company-marketing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"marketing\">\r\n\r\n  <p>{{ lang.decMarketingTitle }}</p>\r\n\r\n  <div class=\"marketing-label\">\r\n    <div><label>{{ lang.decMarketingType }} :</label></div>\r\n    <div class=\"marketing-label-product\" *ngFor=\"let item of largerAttracts.attracts\">\r\n      <div><label>{{ item.name }} :</label></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"marketing-input\" *ngFor=\"let product of products; let iProd = index;\">\r\n    <div><span>{{ lang.decMarketingName }} {{ iProd + 1 }}</span></div>\r\n    <div class=\"marketing-input-product\" *ngFor=\"let item of product.attracts; let iAttract = index;\">\r\n      <div><input type=\"number\" [(ngModel)]=\"marketings[iAttract].decision[iProd]\" (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-marketing/company-marketing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyMarketingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Service

var CompanyMarketingComponent = (function () {
    function CompanyMarketingComponent(decServ, langServ) {
        var _this = this;
        this.decServ = decServ;
        this.langServ = langServ;
        this.marketingOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanyMarketingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketings = [];
        //Max attract that will display
        this.largerAttracts = this.decServ.foundLargerProduct(this.products);
        //init marketing
        this.largerAttracts.attracts.map(function (attract) {
            _this.marketings.push({
                type: attract.type,
                decision: []
            });
        });
        this.products.map(function () { return _this.marketings.map(function (mark) { return mark.decision.push(0); }); });
        this.marketingOutput.emit(this.marketings);
    };
    CompanyMarketingComponent.prototype.changement = function () {
        var _this = this;
        this.marketingOutput.emit(this.marketings);
        var numberSellor = 0;
        this.products.map(function (product, iProd) {
            product.attracts.map(function (attract, iAttract) {
                if (attract.name === "Force de Vente") {
                    numberSellor += _this.marketings[iAttract].decision[iProd];
                }
            });
        });
        this.decServ.changeSellor(numberSellor);
    };
    return CompanyMarketingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyMarketingComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyMarketingComponent.prototype, "marketings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('marketings'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], CompanyMarketingComponent.prototype, "marketingOutput", void 0);
CompanyMarketingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-marketing',
        template: __webpack_require__("../../../../../src/app/company/company-marketing/company-marketing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-marketing/company-marketing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], CompanyMarketingComponent);

var _a, _b, _c;
//# sourceMappingURL=company-marketing.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-remuneration/company-remuneration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".remuneration{\r\n  display: inline-block;\r\n  border-radius: 12px;\r\n  padding: 10px 15px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  width: 50%;\r\n}\r\n\r\n.remuneration-label{\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n  text-align: left;\r\n}\r\n.remuneration-input{\r\n  margin-top: 0.5px;\r\n  display: inline-block;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.remuneration{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n.remuneration p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.remuneration-label div,\r\n.remuneration-input div{\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-remuneration/company-remuneration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"remuneration\">\r\n\r\n  <p>{{ lang.decRemunerationTitle }}</p>\r\n\r\n  <div class=\"remuneration-label\">\r\n    <div><label>{{ lang.decRemunerationSalary }} :</label></div>\r\n    <div><label>{{ lang.decRemunerationCommission }} (%):</label></div>\r\n    <div><label>{{ lang.decRemunerationBudget }} (%):</label></div>\r\n  </div>\r\n\r\n  <div class=\"remuneration-input\">\r\n    <div><input type=\"number\" [(ngModel)]=\"remuneration.wageIndex\"        (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n    <div><input type=\"number\" [(ngModel)]=\"remuneration.commission\"       (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n    <div><input type=\"number\" [(ngModel)]=\"remuneration.formationBudget\"  (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-remuneration/company-remuneration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_decision_remuneration__ = __webpack_require__("../../../../../src/app/objects/decision/remuneration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyRemunerationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Objects

var CompanyRemunerationComponent = (function () {
    function CompanyRemunerationComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.machineryOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanyRemunerationComponent.prototype.ngOnInit = function () {
    };
    CompanyRemunerationComponent.prototype.changement = function () {
        this.machineryOutput.emit(this.remuneration);
    };
    return CompanyRemunerationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_decision_remuneration__["a" /* Remuneration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_decision_remuneration__["a" /* Remuneration */]) === "function" && _a || Object)
], CompanyRemunerationComponent.prototype, "remuneration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('remuneration'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], CompanyRemunerationComponent.prototype, "machineryOutput", void 0);
CompanyRemunerationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-remuneration',
        template: __webpack_require__("../../../../../src/app/company/company-remuneration/company-remuneration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-remuneration/company-remuneration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], CompanyRemunerationComponent);

var _a, _b, _c;
//# sourceMappingURL=company-remuneration.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-studies/company-studies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".studies{\r\n  position: relative;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.price-studies{\r\n  margin: 5px;\r\n}\r\n.product-studies{\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n}\r\n.concurrence-studies{\r\n  display: inline-block;\r\n}\r\n.evaluation-studies{\r\n  display: inline-block;\r\n}\r\n\r\n/******************************************************************/\r\n\r\n.product-studies{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 10px 15px;\r\n  margin: 5px 10px;\r\n  text-align: left;\r\n  vertical-align: top;\r\n}\r\n.concurrence-studies{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 10px 15px;\r\n  margin: 5px 10px;\r\n  text-align: left;\r\n  vertical-align: top;\r\n}\r\n.evaluation-studies{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 10px 15px;\r\n  margin: 5px 10px;\r\n  text-align: left;\r\n  vertical-align: top;\r\n}\r\n\r\n/******************************************************************/\r\n\r\n.price-studies{\r\n  font-size: 25px;\r\n}\r\n\r\n/******************************************************************/\r\n.product-studies div,\r\n.concurrence-studies div,\r\n.evaluation-studies div{\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-studies/company-studies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"studies\">\r\n\r\n  <div class=\"product-studies\">\r\n    <div *ngFor=\"let product of products; let i = index\">\r\n      <label><input type=\"checkbox\" [(ngModel)]=\"studies.productStudies[i]\" (change)=\"changement()\">{{ lang.decStudiesProduct }} {{ i + 1 }}</label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"concurrence-studies\">\r\n    <div><label><input type=\"checkbox\" [(ngModel)]=\"studies.market\" (change)=\"changement()\">{{ lang.decStudiesMarketPart }}</label></div>\r\n    <div><label><input type=\"checkbox\" [(ngModel)]=\"studies.result\" (change)=\"changement()\">{{ lang.decStudiesResult }}</label></div>\r\n    <div><label><input type=\"checkbox\" [(ngModel)]=\"studies.finance\" (change)=\"changement()\">{{ lang.decStudiesFinancialStructure }}</label></div>\r\n  </div>\r\n\r\n  <div class=\"evaluation-studies\">\r\n    <div><label><input type=\"checkbox\" [(ngModel)]=\"studies.situation\" (change)=\"changement()\">{{ lang.decStudiesMarketSituation }}</label></div>\r\n    <div><label><input type=\"checkbox\" [(ngModel)]=\"studies.performance\" (change)=\"changement()\">{{ lang.decStudiesPerformance }}</label></div>\r\n  </div>\r\n\r\n  <div class=\"price-studies\">\r\n    <div>Montant: {{ montant }}</div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-studies/company-studies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_decision_studies__ = __webpack_require__("../../../../../src/app/objects/decision/studies.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyStudiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyStudiesComponent = (function () {
    function CompanyStudiesComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.studiesOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanyStudiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.montant = 0;
        this.products.map(function () { return _this.studies.productStudies.push(false); });
    };
    CompanyStudiesComponent.prototype.changement = function () {
        this.studiesOutput.emit(this.studies);
    };
    return CompanyStudiesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyStudiesComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_decision_studies__["a" /* Studies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_decision_studies__["a" /* Studies */]) === "function" && _a || Object)
], CompanyStudiesComponent.prototype, "studies", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('studies'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], CompanyStudiesComponent.prototype, "studiesOutput", void 0);
CompanyStudiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-studies',
        template: __webpack_require__("../../../../../src/app/company/company-studies/company-studies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-studies/company-studies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], CompanyStudiesComponent);

var _a, _b, _c;
//# sourceMappingURL=company-studies.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-submission/company-submission.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".submission{\r\n  display: inline-block;\r\n  border-radius: 12px;\r\n  padding: 10px 15px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n  width: 55%;\r\n}\r\n\r\n.submission-label{\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n  text-align: left;\r\n}\r\n.submission-input{\r\n  display: inline-block;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.submission{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n.submission p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n/****************************************************/\r\n\r\n.submission-label div,\r\n.submission-input div{\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-submission/company-submission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"submission\">\r\n\r\n  <p>{{ lang.decExceptionalFabricationTitle }}</p>\r\n\r\n  <div class=\"submission-label\">\r\n    <div><label>{{ lang.decExceptionalFabricationNames }} :</label></div>\r\n    <div><label>{{ lang.decExceptionalFabricationQuantity }} :</label></div>\r\n    <div><label>{{ lang.decExceptionalFabricationPrice }} :</label></div>\r\n  </div>\r\n\r\n  <div class=\"submission-input\" *ngFor=\"let product of products; let i = index;\">\r\n    <div><span>{{ lang.decExceptionalFabricationName }} {{ i +1 }}</span></div>\r\n    <div><input type=\"number\" [(ngModel)]=\"submission.exceptionnalSelling[i]\" (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n    <div><input type=\"number\" [(ngModel)]=\"submission.exceptionnalPrice[i]\"   (change)=\"changement()\" (keyup)=\"changement()\"></div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company-submission/company-submission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_decision_exceptionnal__ = __webpack_require__("../../../../../src/app/objects/decision/exceptionnal.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanySubmissionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanySubmissionComponent = (function () {
    function CompanySubmissionComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.subOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanySubmissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products.map(function () {
            _this.submission.exceptionnalSelling.push(0);
            _this.submission.exceptionnalPrice.push(0);
        });
    };
    CompanySubmissionComponent.prototype.changement = function () {
        this.subOutput.emit(this.submission);
    };
    return CompanySubmissionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanySubmissionComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_decision_exceptionnal__["a" /* Exceptionnal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_decision_exceptionnal__["a" /* Exceptionnal */]) === "function" && _a || Object)
], CompanySubmissionComponent.prototype, "submission", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('submission'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], CompanySubmissionComponent.prototype, "subOutput", void 0);
CompanySubmissionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-submission',
        template: __webpack_require__("../../../../../src/app/company/company-submission/company-submission.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-submission/company-submission.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], CompanySubmissionComponent);

var _a, _b, _c;
//# sourceMappingURL=company-submission.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".decision>div{\r\n  font-size: 18px;\r\n  padding: 10px;\r\n  overflow: auto;\r\n}\r\n\r\n/*************************PRESENTATION****************************/\r\n\r\n.show{\r\n  border: none;\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n.show h1{\r\n  margin: 0px;\r\n}\r\n.show h3{\r\n  margin: 0px;\r\n}\r\n\r\n/**********************GENERAL ARTICLES********************************/\r\n\r\n.article-decision{\r\n  margin: 10px 10px;\r\n  padding: 0px !important;\r\n  /*border: 2px solid black;*/\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n}\r\n\r\n.article-decision p{\r\n  padding: 0px;\r\n  margin: 0px;\r\n  background: #808080;\r\n  text-align: center;\r\n  font-size: 25px;\r\n}\r\n\r\n/****************************SAVE**************************/\r\n\r\n.save-decision{\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n\r\nbutton{\r\n  padding: 5px 25px;\r\n  background: none;\r\n  border: solid 2px black;\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n button:active{\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n button:hover{\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n/****************************GENERAL DECISION**************************/\r\n\r\n.general-decision{\r\n  width: 98%;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n/****************************PRODUCT DECISION**************************/\r\n\r\n.product-decision{\r\n  width: 98%;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n.product-decision div{\r\n  clear: both;\r\n  margin: 0px auto;\r\n}\r\n\r\n/****************************HUMAN DECISION**************************/\r\n\r\n.human-ressources-decision{\r\n\r\n}\r\n\r\n/****************************STUDIES DECISION**************************/\r\n\r\n.market-decision{\r\n\r\n}\r\n\r\n/****************************EXCEPTIONAL DECISION**************************/\r\n\r\n.exceptional-decision{\r\n  width: 98%;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n.exceptional-decision div{\r\n  clear: both;\r\n  margin: 0px auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- It is the component of each company, where they make their decisions -->\r\n<!-- TODO: pour la création de ce composant il faut une Company et un Game -->\r\n<div class=\"decision\">\r\n\r\n  <div class=\"show\">\r\n    <h1>{{ lang.decTitle }}</h1>\r\n    <h3>{{ lang.decCompanyName }}: {{ company.name}}</h3>\r\n    <h3>{{ lang.decPeriode }}: {{ round }}</h3>\r\n  </div>\r\n\r\n  <div class=\"article-decision general-decision\">\r\n    <p>{{ lang.decGeneralDecision }}</p>\r\n    <company-finances  [financial]=\"companyDecision.financialDecision\" (financial-decision)=\"financialDecision($event)\"></company-finances>\r\n    <company-machinery [machinery]=\"companyDecision.machineFlux\"       (machinery)=\"machineryDecision($event)\"></company-machinery>\r\n  </div>\r\n\r\n  <div class=\"article-decision product-decision\">\r\n    <p>{{ lang.decProduct }}</p>\r\n    <company-fabrication [products]=\"company.companyProduct\"  [production]=\"companyDecision.productionDecision\" (production)=\"productionDecision($event)\"></company-fabrication>\r\n    <br>\r\n    <company-marketing   [products]=\"company.companyProduct\"  [marketings]=\"companyDecision.marketingDecision\"  (marketings)=\"marketingDecision($event)\"></company-marketing>\r\n  </div>\r\n\r\n  <div class=\"article-decision human-ressources-decision\">\r\n    <p>{{ lang.decHR }}</p>\r\n    <company-remuneration [remuneration]=\"companyDecision.remuneration\" (remuneration)=\"remunerationDecision($event)\"></company-remuneration>\r\n    <company-management   [employees]=\"employees\" [hireFire]=\"companyDecision.hireFire\" (hire-fire)=\"encadrementDecision($event)\"></company-management>\r\n  </div>\r\n\r\n  <div class=\"article-decision market-decision\">\r\n    <p>{{ lang.decStudiesTitle }}</p>\r\n    <company-studies [products]=\"company.companyProduct\" [studies]=\"companyDecision.studies\" (studies)=\"studiesDecision($event)\"></company-studies>\r\n  </div>\r\n\r\n  <div class=\"article-decision exceptional-decision\">\r\n    <p>{{ lang.decExceptionalTitle }}</p>\r\n    <company-clearing   [products]=\"company.companyProduct\" [liquidation]=\"companyDecision.liquidation\" (liquidation)=\"liquidationDecision($event)\"></company-clearing>\r\n    <company-submission [products]=\"company.companyProduct\" [submission]=\"companyDecision.exceptionnal\" (submission)=\"exceptionnalDecision($event)\"></company-submission>\r\n  </div>\r\n\r\n  <div class=\"save-decision\">\r\n    <button type=\"button\" (click)=\"saveDecision()\">{{ lang.decButton }}</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constant_test_const__ = __webpack_require__("../../../../../src/app/constant/test.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant_init_decision_const__ = __webpack_require__("../../../../../src/app/constant/init-decision.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Firebase


//Service

//Here to do some test


var CompanyComponent = (function () {
    function CompanyComponent(decision, dbLink, langServ, route, router, afAuth) {
        var _this = this;
        this.decision = decision;
        this.dbLink = dbLink;
        this.langServ = langServ;
        this.route = route;
        this.router = router;
        this.afAuth = afAuth;
        this.round = 15;
        this.company = __WEBPACK_IMPORTED_MODULE_6__constant_test_const__["a" /* TEST_COMPANY */];
        //TODO: add a reference to the all employee in decision
        this.employees = [
            { type: "Productor", salary: 0 },
            { type: "Sellor", salary: 0 },
            { type: "Manager", salary: 0 }
        ];
        this.companyDecision = __WEBPACK_IMPORTED_MODULE_7__constant_init_decision_const__["a" /* DECISION */];
        //TODO: regler le cas de non définition
        this.companyDecision.exceptionnal = { exceptionnalSelling: [], exceptionnalPrice: [] };
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
        afAuth.authState.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.teamId = +param['id'];
            var teamShare = "team" + _this.teamId;
            _this.company = _this.decision.updateCompany(_this.teamId);
            _this.round = _this.decision.getRound() + 1;
            _this.decision.setNumberMachine(_this.teamId);
            _this.decision.setEmployee(_this.teamId);
            _this.companyDecision = __WEBPACK_IMPORTED_MODULE_7__constant_init_decision_const__["a" /* DECISION */];
            if (_this.company.decision !== undefined) {
                if (_this.company.decision.financialDecision !== undefined) {
                    _this.companyDecision.financialDecision = _this.company.decision.financialDecision;
                }
                if (_this.company.decision.machineFlux !== undefined) {
                    _this.companyDecision.machineFlux = _this.company.decision.machineFlux;
                }
                if (_this.company.decision.productionDecision !== undefined) {
                    _this.companyDecision.productionDecision = _this.company.decision.productionDecision;
                }
                if (_this.company.decision.marketingDecision !== undefined) {
                    _this.companyDecision.marketingDecision = _this.company.decision.marketingDecision;
                }
                if (_this.company.decision.remuneration !== undefined) {
                    _this.companyDecision.remuneration = _this.company.decision.remuneration;
                }
                //this.companyDecision.hireFire = this.company.decision.hireFire;
                if (_this.company.decision.studies !== undefined) {
                    _this.companyDecision.studies = _this.company.decision.studies;
                }
                //this.companyDecision.liquidation = this.company.decision.liquidation;
                //this.companyDecision.exceptionnal = this.company.decision.exceptionnal;
            }
        });
    };
    CompanyComponent.prototype.financialDecision = function (event) {
        this.companyDecision.financialDecision = event;
    };
    CompanyComponent.prototype.machineryDecision = function (event) {
        this.companyDecision.machineFlux = event;
    };
    CompanyComponent.prototype.productionDecision = function (event) {
        this.companyDecision.productionDecision = event;
    };
    CompanyComponent.prototype.marketingDecision = function (event) {
        this.companyDecision.marketingDecision = event;
    };
    CompanyComponent.prototype.remunerationDecision = function (event) {
        this.companyDecision.remuneration = event;
    };
    CompanyComponent.prototype.encadrementDecision = function (event) {
        this.companyDecision.hireFire = event;
    };
    CompanyComponent.prototype.studiesDecision = function (event) {
        this.companyDecision.studies = event;
    };
    CompanyComponent.prototype.liquidationDecision = function (event) {
        this.companyDecision.liquidation = event;
    };
    CompanyComponent.prototype.exceptionnalDecision = function (event) {
        this.companyDecision.exceptionnal = event;
    };
    CompanyComponent.prototype.saveDecision = function () {
        // console.log(this.company.name + " a decide:");
        // console.log(this.companyDecision);
        var pass = "team" + this.teamId;
        if (this.currentUser !== undefined) {
            if (this.currentUser !== null) {
                var company = this.dbLink.object(this.currentUser.uid + '/teams/' + pass + "/decision");
                company.set(this.companyDecision);
                //TODO: increment decision. So we need to verifie if all tema has a decision.
                var dec = this.dbLink.object('/' + this.currentUser.uid + '/hasDecide');
                dec.update((_a = {}, _a[pass] = true, _a));
            }
        }
        var _a;
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__("../../../../../src/app/company/company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_decisions_service__["a" /* DecisionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _f || Object])
], CompanyComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/comptability/comptability.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".result{\r\n  width: 100%;\r\n  overflow: auto;\r\n  margin-bottom: 10px;\r\n}\r\n.results-show{\r\n  margin-bottom: 12px;\r\n}\r\n.results-show div{\r\n  text-align: center;\r\n}\r\n\r\n.results-periode div{\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n.periode{\r\n  margin: 5px;\r\n}\r\n.periode h3{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.periode-result div{\r\n  display: inline-block;\r\n  float: left;\r\n  text-align: center;\r\n  margin: 1px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\n/******************************************************************/\r\n\r\nh1,\r\nh3{\r\n  margin: 0px;\r\n}\r\n\r\n.flux-periode{\r\n  overflow: auto;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/******************************************************************/\r\n\r\n.periode-result div:hover{\r\n  background: #808080;\r\n}\r\n.choosed{\r\n  background: #808080;\r\n}\r\n\r\n/******************************************************************/\r\n.periode{\r\n  margin-bottom: 10px;\r\n}\r\n.results{\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comptability/comptability.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"result comptability\">\r\n\r\n  <div class=\"results-show\">\r\n    <div><h1>{{ lang.comptaTitle }}</h1></div>\r\n    <div><h3>{{ lang.comptaCompany }}:  {{ company.name }}</h3></div>\r\n  </div>\r\n\r\n  <div class=\"results-periode\">\r\n\r\n    <div class=\"periode\">\r\n      <h3>{{ lang.comptaPeriode }}: </h3>\r\n    </div>\r\n    <div class=\"periode periode-result\" *ngIf=\"company.result\">\r\n      <div *ngFor=\"let item of listPeriode; let i = index\" (click)=\"changePeriode(i)\" [class.choosed]=\"boolPeriode[i]\">\r\n        <span>{{ i + 1 }}</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"results-article\" *ngIf=\"periode !== undefined\">\r\n\r\n    <div class=\"results results-productions\">\r\n      <results-productions [company]=\"company\" [periode]=\"periode\"></results-productions>\r\n    </div>\r\n\r\n    <div class=\"results results-charge\">\r\n      <results-charge [company]=\"company\" [periode]=\"periode\"></results-charge>\r\n    </div>\r\n\r\n    <div class=\"results results-financial\">\r\n      <results-financial [company]=\"company\" [periode]=\"periode\"></results-financial>\r\n    </div>\r\n\r\n    <div class=\"results results-final\">\r\n      <results-final [company]=\"company\" [periode]=\"periode\"></results-final>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/comptability/comptability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant_test_const__ = __webpack_require__("../../../../../src/app/constant/test.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComptabilityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Service

//Constant

var ComptabilityComponent = (function () {
    function ComptabilityComponent(route, router, decision, langServ) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.decision = decision;
        this.langServ = langServ;
        this.company = __WEBPACK_IMPORTED_MODULE_4__constant_test_const__["a" /* TEST_COMPANY */];
        this.employeesTest = [
            { type: "Productor", salary: 0 },
            { type: "Sellor", salary: 0 },
            { type: "Manager", salary: 0 }
        ];
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ComptabilityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.teamId = +param['id'];
            _this.listPeriode = [];
            _this.boolPeriode = [];
            var teamShare = "team" + _this.teamId;
            _this.company = _this.decision.updateCompany(_this.teamId);
            _this.round = _this.decision.getRound() + 1;
            _this.periode = _this.decision.getRound() - 1;
            Object.keys(_this.company.result).map(function (key) {
                _this.listPeriode.push(_this.company.result[key]);
                _this.boolPeriode.push(false);
            });
            _this.boolPeriode[_this.boolPeriode.length - 1] = true;
        });
    };
    ComptabilityComponent.prototype.ngOnChanges = function (change) {
        this.ngOnInit();
    };
    ComptabilityComponent.prototype.changePeriode = function (n) {
        var _this = this;
        this.periode = n;
        this.boolPeriode.map(function (elt, i) { return _this.boolPeriode[i] = false; });
        this.boolPeriode[n] = true;
    };
    return ComptabilityComponent;
}());
ComptabilityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-comptability',
        template: __webpack_require__("../../../../../src/app/comptability/comptability.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comptability/comptability.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], ComptabilityComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=comptability.component.js.map

/***/ }),

/***/ "../../../../../src/app/constant/init-Game.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__politics_const__ = __webpack_require__("../../../../../src/app/constant/politics.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__studies_const__ = __webpack_require__("../../../../../src/app/constant/studies.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NULL_GAME; });


var NULL_GAME = {
    round: 0,
    teams: [],
    allProduct: [],
    politic: __WEBPACK_IMPORTED_MODULE_0__politics_const__["a" /* POLITIC */],
    studies: __WEBPACK_IMPORTED_MODULE_1__studies_const__["a" /* STUDIES */]
};
//# sourceMappingURL=init-Game.const.js.map

/***/ }),

/***/ "../../../../../src/app/constant/init-decision.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DECISION; });
var DECISION = {
    //General Decision (Financial and Machine)
    financialDecision: {
        variateCaptial: 0,
        distribution: 0,
        variateLoaning: 0,
        subventions: 0,
        exonerate: 0
    },
    machineFlux: {
        buyMachine: 0,
        sellMachine: 0,
        maintenance: 0,
    },
    //Product Decision (Fabrication and Marketing)
    productionDecision: {
        production: [],
        affectedMachine: [],
        affectedProductor: [],
    },
    marketingDecision: [],
    //Human Ressources (Remuneration and HireFire)
    remuneration: {
        wageIndex: 0,
        commission: 0,
        formationBudget: 0,
    },
    hireFire: [],
    //Studies
    studies: {
        productStudies: [],
        market: false,
        result: false,
        finance: false,
        situation: false,
        performance: false,
    },
    //Exceptionnal Decision (Stock and Soumissions)
    liquidation: [],
};
//# sourceMappingURL=init-decision.const.js.map

/***/ }),

/***/ "../../../../../src/app/constant/politics.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POLITIC; });
var POLITIC = {
    //Over Pricing
    overtimePercent: 0,
    overheadPercent: 0,
    //Salary
    firePricePourcent: 0,
    hirePricePourcent: 0,
    minimalTraining: 0,
    typeOfEmployees: [
        {
            type: "Productor",
            salary: 0
        },
        {
            type: "Sellor",
            salary: 0
        },
        {
            type: "Manager",
            salary: 0
        }
    ],
    managerRatio: 0,
    //Financial Decision
    loaning: 0,
    overdraft: 0,
    unauthorizedOverdraft: 0,
    overdraftAmountPercent: 0,
    placement: 0,
    VAT: 0,
    IT: 0,
    supplierCredits: 0,
    //Production
    machineProduction: 0,
    productorProduction: 0,
    //Machinery
    machineryType: {
        productCapacity: 0,
        price: 0,
        amortization: 0,
        repairPrice: 0,
        disturbed: false,
    },
    //General Cost
    generalCost: {
        stockage: 0,
        fixedPrice: 0,
        immbilizationTranche: 0,
        supplementTranche: 0,
        insurance: 0,
    },
};
//# sourceMappingURL=politics.const.js.map

/***/ }),

/***/ "../../../../../src/app/constant/studies.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STUDIES; });
var STUDIES = {
    productStudies: [],
    marketStudies: 0,
    concurrenceStudies: 0,
    structureStudies: 0,
    sellingStudies: 0,
    performanceStudies: 0
};
//# sourceMappingURL=studies.const.js.map

/***/ }),

/***/ "../../../../../src/app/constant/test.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TEST_COMPANY; });
var TEST_COMPANY = {
    name: "companie test",
    socialCapital: 1500000,
    nbMachine: 10,
    companyMachinery: [
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
        { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false }
    ],
    companyProduct: [
        {
            minPrice: 8.5, maxPrice: 20, productTime: 0.05,
            potentialSell: 250000, unitaryCost: 4, typeEvolution: "B",
            nbAttracts: 6,
            attracts: [
                { name: "Prix", sensibility: 40, type: "a" },
                { name: "Publicity", sensibility: 25, type: "a" },
                { name: "Force de Vente", sensibility: 12.5, type: "a" },
                { name: "Action Commercial", sensibility: 12.5, type: "a" },
                { name: "Recherche en Qualité", sensibility: 5, type: "a" },
                { name: "Credit Client", sensibility: 5, type: "a" }
            ],
            loyalty: 40
        },
        {
            minPrice: 200, maxPrice: 400, productTime: 1.5,
            potentialSell: 18000, unitaryCost: 0, typeEvolution: "B",
            nbAttracts: 6,
            attracts: [
                { name: "Prix", sensibility: 40, type: "a" },
                { name: "Publicity", sensibility: 25, type: "a" },
                { name: "Force de Vente", sensibility: 12.5, type: "a" },
                { name: "Action Commercial", sensibility: 12.5, type: "a" },
                { name: "Recherche en Qualité", sensibility: 5, type: "a" },
                { name: "Credit Client", sensibility: 5, type: "a" }
            ],
            loyalty: 50
        }
    ],
    employeesList: []
};
//# sourceMappingURL=test.const.js.map

/***/ }),

/***/ "../../../../../src/app/create-result/create-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article{\r\n  position: relative;\r\n  margin-top: 10%;\r\n  margin-left: 25%;\r\n  width: 70%;\r\n  text-align: center;\r\n}\r\n\r\n/**********************************************************************/\r\n\r\nbutton{\r\n  padding: 5px 25px;\r\n  background: none;\r\n  border: solid 2px black;\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n .is-able:active{\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n .is-able:hover{\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\nbutton:disabled,\r\nbutton[disabled]{\r\n  border: solid 2px #808080;\r\n  color: #808080;\r\n  font-size: 20px;\r\n}\r\n\r\n/**********************************************************************/\r\n\r\n.team{\r\n  font-size: 18px;\r\n  margin: 5px;\r\n  padding: 5px 10px;\r\n  display: inline-block;\r\n}\r\n\r\n.has-decide{\r\n  background-color: #66FF66;\r\n  padding: 10px 15px;\r\n  border: 1px solid #66FF66;\r\n  border-radius: 15px;\r\n}\r\n\r\n.hasnt-decide{\r\n  background-color: #FF3333;\r\n  padding: 10px 15px;\r\n  border: 1px solid #FF3333;\r\n  border-radius: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-result/create-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article\">\r\n\r\n  <div class=\"team\" *ngFor=\"let name of teamsName; let iTeam = index\">\r\n    <div [class.has-decide]=\"teamsBool[teamsKey[iTeam]]\" [class.hasnt-decide]=\"!teamsBool[teamsKey[iTeam]]\">\r\n      {{ name }}\r\n    </div>\r\n  </div>\r\n\r\n  <h1>{{ lang.periodeChangeCreation }}</h1>\r\n  <h3>{{ lang.periodeChangeRound }}: {{ round + 1}}</h3>\r\n\r\n  <button [class.is-able]=\"!disability\" [disabled]=\"disability\" (click)=\"createResult()\"> {{ lang.periodeChangeButton }} </button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/create-result/create-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_init_Game_const__ = __webpack_require__("../../../../../src/app/constant/init-Game.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_result_service__ = __webpack_require__("../../../../../src/app/service/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebase_db_firebase_service__ = __webpack_require__("../../../../../src/app/firebase/db-firebase.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Constant

//Service

//Firebase

var CreateResultComponent = (function () {
    function CreateResultComponent(rServ, dbLink, langServ) {
        var _this = this;
        this.rServ = rServ;
        this.dbLink = dbLink;
        this.langServ = langServ;
        this.disability = true;
        this.game = __WEBPACK_IMPORTED_MODULE_2__constant_init_Game_const__["a" /* NULL_GAME */];
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CreateResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numberTeam = 0;
        var numberDec = 0;
        this.game = this.rServ.getGame();
        this.round = this.rServ.getRound();
        console.log("the game in the change periode component");
        console.log(this.game);
        //Teams
        this.teamsKey = [];
        this.teamsName = [];
        Object.keys(this.game.teams).map(function (key) {
            numberTeam++;
            _this.teamsName.push(_this.game.teams[key].name);
            _this.teamsKey.push(key);
        });
        this.teamsBool = this.teamsKey.reduce(function (o, key) {
            return Object.assign(o, (_a = {}, _a[key] = false, _a));
            var _a;
        }, {});
        //Disability on/off and Who has decide
        if (this.game.nbDecision !== undefined) {
            Object.keys(this.game.nbDecision).map(function (boolDec) {
                if (_this.teamsBool.hasOwnProperty(boolDec)) {
                    _this.teamsBool[boolDec] = true;
                }
                numberDec++;
            });
        }
        if (numberTeam === numberDec) {
            this.disability = !this.disability;
        }
    };
    CreateResultComponent.prototype.ngOnChanges = function (change) {
        this.ngOnInit();
    };
    CreateResultComponent.prototype.createResult = function () {
        var _this = this;
        //TODO: stop console when it's work
        console.log("this is the game: ");
        console.log(this.game);
        console.log("round is: " + this.game.round);
        //TODO: add decision to result and push the new employee in the teams
        console.log(" ");
        console.log("BUYER PART:");
        console.log(" ");
        console.log("Creation of a potential selling by products: ");
        var noderesult = "result" + this.game.round;
        var potentials = this.rServ.createTheoricalPotential(this.game);
        potentials = potentials.map(function (potential) { return _this.rServ.exponentialEvolution(potential, _this.game.round); });
        this.dbLink.updateObjectInFirebaseWithUrl({ potentialSell: potentials }, noderesult);
        console.log(potentials);
        console.log("Creation of a effective selling by products: ");
        var realPotentials = this.rServ.createRealPotential(potentials);
        this.dbLink.updateObjectInFirebaseWithUrl({ effectiveSell: realPotentials }, noderesult);
        console.log(realPotentials);
        console.log(" ");
        console.log("MODELIZATION PART: ");
        console.log(" ");
        console.log("init of the teams:");
        this.rServ.initNumberTeam(this.game);
        console.log(" ");
        console.log("repart the market:");
        var market = this.rServ.initAllTeamsOrdinatix(this.game);
        console.log(" ");
        console.log("save the market:");
        console.log(market);
        this.dbLink.updateObjectInFirebaseWithUrl({ market: market }, noderesult);
        market.map(function (mar) { return console.table(mar); });
        console.log(" ");
        console.log("repart the selling");
        var repartition = this.rServ.repartBuyer(market, realPotentials);
        console.table(repartition);
        console.log(" ");
        console.log("we must hire and fire employees");
        var hireFireList = this.rServ.createAllHireFire(this.game);
        console.log("les nouvelles listes d'employees: ");
        console.log(hireFireList);
        hireFireList.map(function (hireFire, indexTeam) {
            var teamIndex = "team" + indexTeam + "/employeesList";
            console.log(teamIndex);
            console.log(hireFire);
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamIndex] = hireFire, _a), "teams");
            var _a;
        });
        console.log(" ");
        console.log("NOW: we will make the situations, charges, exploitations,... of all Company");
        //Situations
        var situationPack = this.rServ.makeAllSituations(repartition, this.game);
        //Choices
        var choicesPack = this.rServ.makeChoices(this.game);
        //Exploitations
        var exploitationPack = this.rServ.makeAllExploitations(repartition, this.game);
        var allExploitationPack = this.rServ.makeAllTotalExploitations(exploitationPack, this.game);
        //Charges
        var chargesPack = this.rServ.makeAllCharges(repartition, this.game);
        var allChargesPack = this.rServ.makeAllTotalCharges(chargesPack, this.game);
        //Finances
        var financesPack = this.rServ.makeAllFinance(this.game);
        //Exceptional
        var exceptionalPack = this.rServ.makeAllExceptional(this.game);
        //Exercices
        var exercicePack = this.rServ.makeAllExercice(this.game, allExploitationPack, allChargesPack);
        //Resort
        var teamSituations = this.rServ.resortSituations(this.game, situationPack);
        var teamExploitations = this.rServ.resortExploitations(this.game, exploitationPack);
        var teamCharges = this.rServ.resortCharges(this.game, chargesPack);
        //Structure
        var turnovers = this.rServ.getAllTurnover(teamSituations);
        console.log(" ");
        var structuresPack = this.rServ.makeAllStructure(this.game, teamSituations, turnovers, allExploitationPack);
        console.log("structures:");
        console.log(structuresPack);
        //Flux
        var fluxPack = this.rServ.makeAllFlux(this.game, allExploitationPack, structuresPack, exercicePack);
        //Machinery
        var machineryList = this.rServ.createAllNewMachinery(this.game);
        machineryList.map(function (machinery, indexTeam) {
            var teamIndex = "team" + indexTeam + "/companyMachinery";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamIndex] = machinery, _a), "teams");
            var _a;
        });
        console.log(" ");
        console.log("CREATION OF THE SITUATIONS: ");
        console.log(" ");
        // situationPack.map( (situations, index) => {
        //   console.log(" ");
        //   console.log("situations pour le produit " + index);
        //   console.table(situations);
        // });
        console.log(" ");
        console.log("CREATION OF THE EXPLOITATIONS: ");
        console.log(" ");
        exploitationPack.map(function (exploitations, index) {
            console.log(" ");
            console.log("exploitations pour le produit " + index);
            console.table(exploitations);
        });
        console.log(" ");
        console.log("CREATION OF THE CHARGES: ");
        console.log(" ");
        chargesPack.map(function (charges, index) {
            console.log(" ");
            console.log("charges pour le produit " + index);
            console.table(charges);
        });
        console.log(" ");
        console.log("CREATION OF THE ALL EXPLOITATION: ");
        console.table(allExploitationPack);
        console.log(" ");
        console.log("CREATION OF THE ALL CHARGES: ");
        console.table(allChargesPack);
        //TODO: make that a service, prépare to push in the database
        console.log(" ");
        console.log("team structures");
        console.log(structuresPack);
        structuresPack.map(function (structure, index) {
            console.log(" ");
            console.log("structure pour l'équipe " + index);
            console.log(structure);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/structure";
            var teamIndex = "team" + index + "/result/" + indexResult + "/structure";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = structure, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamIndex] = structure, _b), "teams");
            var _a, _b;
        });
        console.log(" ");
        console.log("team situations");
        console.log(teamSituations);
        teamSituations.map(function (situations, index) {
            console.log(" ");
            console.log("situations pour l'équipe " + index);
            console.table(situations);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/situation";
            var teamIndex = "team" + index + "/result/" + indexResult + "/situation";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = situations, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamIndex] = situations, _b), "teams");
            var _a, _b;
        });
        console.log(" ");
        console.log("team choices");
        console.log(choicesPack);
        choicesPack.map(function (choice, index) {
            console.log(" ");
            console.log("choix pour l'équipe " + index);
            console.table(choice);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/choice";
            var teamIndex = "team" + index + "/result/" + indexResult + "/choice";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = choice, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamIndex] = choice, _b), "teams");
            var _a, _b;
        });
        console.log(" ");
        console.log("team exploitations");
        console.log(teamExploitations);
        teamExploitations.map(function (exploitations, index) {
            console.log(" ");
            console.log("exploitations pour l'équipe " + index);
            console.table(exploitations);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/exploitation";
            var teamIndex = "team" + index + "/result/" + indexResult + "/exploitation";
            var teamAllIndex = "team" + index + "/result/" + indexResult + "/exploitation/all";
            var teamResultAllIndex = "team" + index + "/exploitation/all";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = exploitations, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamResultAllIndex] = allExploitationPack[index], _b), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_c = {}, _c[teamIndex] = exploitations, _c), "teams");
            _this.dbLink.updateObjectInFirebaseWithUrl((_d = {}, _d[teamAllIndex] = allExploitationPack[index], _d), "teams");
            var _a, _b, _c, _d;
        });
        console.log(" ");
        console.log("team charges");
        console.log(teamCharges);
        teamCharges.map(function (charges, index) {
            console.log(" ");
            console.log("charges pour l'équipe " + index);
            console.table(charges);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/charge";
            var teamIndex = "team" + index + "/result/" + indexResult + "/charge";
            var teamAllIndex = "team" + index + "/result/" + indexResult + "/charge/all";
            var teamResultAllIndex = "team" + index + "/charge/all";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = charges, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamResultAllIndex] = allChargesPack[index], _b), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_c = {}, _c[teamIndex] = charges, _c), "teams");
            _this.dbLink.updateObjectInFirebaseWithUrl((_d = {}, _d[teamAllIndex] = allChargesPack[index], _d), "teams");
            var _a, _b, _c, _d;
        });
        console.log(" ");
        console.log("team finances");
        console.log(financesPack);
        financesPack.map(function (finance, index) {
            console.log(" ");
            console.log("finance pour l'équipe " + index);
            console.table(finance);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/finance";
            var teamIndex = "team" + index + "/result/" + indexResult + "/finance";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = finance, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamIndex] = finance, _b), "teams");
            var _a, _b;
        });
        console.log(" ");
        console.log("team exceptional");
        console.log(exceptionalPack);
        exceptionalPack.map(function (exceptional, index) {
            console.log(" ");
            console.log("exceptional pour l'équipe " + index);
            console.table(exceptional);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/exceptional";
            var teamIndex = "team" + index + "/result/" + indexResult + "/exceptional";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = exceptional, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamIndex] = exceptional, _b), "teams");
            var _a, _b;
        });
        console.log(" ");
        console.log("team result exercice");
        console.log(exercicePack);
        exercicePack.map(function (exercice, index) {
            console.log(" ");
            console.log("exercice pour l'équipe " + index);
            console.table(exercice);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/exercice";
            var teamIndex = "team" + index + "/result/" + indexResult + "/exercice";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = exercice, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamIndex] = exercice, _b), "teams");
            var _a, _b;
        });
        console.log(" ");
        console.log("team flux");
        console.log(fluxPack);
        fluxPack.map(function (flux, index) {
            console.log(" ");
            console.log("flux pour l'équipe " + index);
            console.table(flux);
            //TODO: Attention Round
            var indexResult = "result" + _this.game.round;
            var teamResultIndex = "team" + index + "/flux";
            var teamIndex = "team" + index + "/result/" + indexResult + "/flux";
            _this.dbLink.updateObjectInFirebaseWithUrl((_a = {}, _a[teamResultIndex] = flux, _a), indexResult);
            _this.dbLink.updateObjectInFirebaseWithUrl((_b = {}, _b[teamIndex] = flux, _b), "teams");
            var _a, _b;
        });
        // remove all decision
        this.dbLink.deleteHasDecide();
        this.dbLink.incrementRound(this.game.round);
        this.round++;
        Object.keys(this.teamsBool).map(function (key) { return _this.teamsBool[key] = false; });
        this.disability = !this.disability;
        //change the game
        this.dbLink.changeGame();
        this.rServ.nullTheDecision();
        this.game = this.rServ.getGame();
        console.log(this.game);
    };
    return CreateResultComponent;
}());
CreateResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-create-result',
        template: __webpack_require__("../../../../../src/app/create-result/create-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-result/create-result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_result_service__["a" /* ResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_result_service__["a" /* ResultService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__firebase_db_firebase_service__["a" /* DbFirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__firebase_db_firebase_service__["a" /* DbFirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], CreateResultComponent);

var _a, _b, _c;
//# sourceMappingURL=create-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/firebase/auth-firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthFirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Do not import from 'firebase' as you'll lose the tree shaking benefits
var AuthFirebaseService = (function () {
    function AuthFirebaseService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.authState = afAuth.authState;
        afAuth.authState.subscribe(function (user) { return _this.currentUser = user; });
    }
    Object.defineProperty(AuthFirebaseService.prototype, "authenticated", {
        /*
       *
       * Certificate the authentification
       * @return {boolean} the current user
       * @author: Layninou
       *
       */
        get: function () {
            return this.currentUser !== null;
        },
        enumerable: true,
        configurable: true
    });
    /*
    *
    * This sign in with pop with mail
    * @return {firebase.Promise<any>} it is the authentification signature
    * @author: Layninou
    *
    */
    AuthFirebaseService.prototype.signInWithMail = function (user, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(user, password)
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    /*
     *
     * Create sign in with pop with mail
     * @return {firebase.Promise<any>} it is the authentification signature
     * @author: Layninou
     *
     */
    AuthFirebaseService.prototype.createUserWithMail = function (user, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user, password)
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    /*
     *
     * This sign in with pop with google
     * @return {firebase.Promise<any>} it is the authentification signature
     * @author: Layninou
     *
     */
    AuthFirebaseService.prototype.signInWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    /*
    *
    * This logOut the user
    * @author: Layninou
    *
    */
    AuthFirebaseService.prototype.signInWithFacebook = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
    };
    /*
     *
     * This logOut the user
     * @author: Layninou
     *
     */
    AuthFirebaseService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    /*
     *
     * give the uid
     * @author: Layninou
     *
     */
    AuthFirebaseService.prototype.displayName = function () {
        if (this.currentUser !== undefined) {
            if (this.currentUser !== null) {
                return this.currentUser.uid;
            }
            else {
                return 'test';
            }
        }
    };
    return AuthFirebaseService;
}());
AuthFirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthFirebaseService);

var _a;
//# sourceMappingURL=auth-firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/firebase/db-firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_result_service__ = __webpack_require__("../../../../../src/app/service/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbFirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Game Service



var DbFirebaseService = (function () {
    function DbFirebaseService(db, afAuth, rServ) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.rServ = rServ;
        afAuth.authState.subscribe(function (user) {
            _this.currentUser = user;
            if (user !== undefined) {
                if (user !== null) {
                    _this.listRef = db.list(_this.currentUser.uid);
                    _this.objectRef = db.object(_this.currentUser.uid);
                }
            }
        });
    }
    DbFirebaseService.prototype.setObjectInFirebase = function (o) {
        this.objectRef.set(o);
    };
    DbFirebaseService.prototype.setObjectInFirebaseWithUrl = function (o, url) {
        var objectPlace = this.db.object('/' + this.currentUser.uid + '/' + url);
        objectPlace.set(o);
    };
    DbFirebaseService.prototype.updateObjectInFirebaseWithUrl = function (o, url) {
        var objectPlace = this.db.object('/' + this.currentUser.uid + '/' + url);
        objectPlace.update(o);
    };
    DbFirebaseService.prototype.setStringInFirebase = function (o) {
        this.objectRef.set(o);
    };
    DbFirebaseService.prototype.setNumberInFirebase = function (o) {
        this.objectRef.set(o);
    };
    DbFirebaseService.prototype.updateObjectInFirebase = function (o) {
        this.objectRef.update(o);
    };
    DbFirebaseService.prototype.deletObjectInFirebase = function (url) {
        var itemObservable = this.db.object('/' + this.currentUser.uid + '/' + url);
        itemObservable.remove();
    };
    //SPEC stratent
    DbFirebaseService.prototype.deleteHasDecide = function () {
        var itemObservable = this.db.object('/' + this.currentUser.uid + '/hasDecide');
        itemObservable.remove();
    };
    DbFirebaseService.prototype.incrementRound = function (round) {
        var itemObservable = this.db.object('/' + this.currentUser.uid);
        itemObservable.update({ round: round + 1 });
    };
    DbFirebaseService.prototype.createUser = function (key, o) {
        var itemObservable = this.db.object('/users');
        var object = (_a = {}, _a[key] = o, _a);
        itemObservable.update(object);
        var _a;
    };
    DbFirebaseService.prototype.getUserList = function () {
        return this.db.list("/users");
    };
    DbFirebaseService.prototype.getUser = function () {
        return this.db.object("/users/" + this.currentUser.uid);
    };
    //END SPEC
    DbFirebaseService.prototype.getObjectInFirebase = function (url) {
        return this.db.object(url);
    };
    DbFirebaseService.prototype.getListInFirebase = function (url) {
        return this.db.list(url, { preserveSnapshot: true });
    };
    //Game Service
    DbFirebaseService.prototype.getRound = function (link) {
        link.subscribe(function (snapshots) {
            snapshots.map(function (snap) {
                if (snap.$key === "round") {
                    return snap.$value;
                }
            });
        });
    };
    DbFirebaseService.prototype.getTeams = function (link) {
        var answer = [];
        link.subscribe(function (snapshots) {
            snapshots.map(function (snap) {
                if (snap.$key === "teams") {
                    answer.push(snap.$value);
                }
            });
            return answer;
        });
    };
    DbFirebaseService.prototype.changeGame = function () {
        var _this = this;
        this.objectRef = this.db.object(this.currentUser.uid);
        this.objectRef.subscribe(function (game) {
            return _this.rServ.transformGame(game);
        });
    };
    return DbFirebaseService;
}());
DbFirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_result_service__["a" /* ResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_result_service__["a" /* ResultService */]) === "function" && _c || Object])
], DbFirebaseService);

var _a, _b, _c;
//# sourceMappingURL=db-firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/firebase/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
var Environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBd9fJun5w7-7dWfngEOh5n7Vlvfdw-2c4",
        authDomain: "strateent.firebaseapp.com",
        databaseURL: "https://strateent.firebaseio.com",
        projectId: "strateent",
        storageBucket: "strateent.appspot.com",
        messagingSenderId: "429907847095"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/app/flux/asset/asset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actif{\r\n  width: 98%;\r\n\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 25px;\r\n  margin: 5px;\r\n\r\n  display: -ms-grid;\r\n\r\n  display: grid;\r\n  -ms-grid-columns: 100%;\r\n      grid-template-columns: 100%;\r\n  -ms-grid-rows: 5% 45% 45% 10%;\r\n      grid-template-rows: 5% 45% 45% 10%;\r\n  grid-row-gap: 15px;\r\n  grid-template-areas:\r\n            \"title\"\r\n            \"immobilization\"\r\n            \"circulation\"\r\n            \"total\";\r\n}\r\n\r\n.block{\r\n  overflow: auto;\r\n  padding-left: 15px;\r\n  border: 0.5px solid black;\r\n  border-radius: 15px;\r\n}\r\n\r\n.title{\r\n  grid-area: title;\r\n  height: 100%;\r\n\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  border-radius: 25px 25px 0px 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  text-align: center;\r\n}\r\n.immobilised-actif{\r\n  grid-area: immobilization;\r\n  height: 100%;\r\n  margin: 10px 15px;\r\n}\r\n.ciculated-actif{\r\n  grid-area: circulation;\r\n  height: 100%;\r\n  margin: 10px 15px;\r\n}\r\n.total-actif{\r\n  grid-area: total;\r\n  text-align: center;\r\n  border: none;\r\n  margin: 10px 15px;\r\n}\r\n\r\n/*********************************************************/\r\n\r\n.article{\r\n  width: 100%;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n.result-article{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.actif-label{\r\n  float: left;\r\n  width: 30%;\r\n  margin: auto 5px;\r\n}\r\n.actif-first{\r\n  float: left;\r\n  width: 30%;\r\n  margin: auto 5px;\r\n}\r\n.actif-total{\r\n  float: left;\r\n  width: 30%;\r\n  margin: auto 5px;\r\n}\r\n\r\n\r\n.actif-label{\r\n  border: 2px solid black;\r\n  background: grey;\r\n}\r\n.actif-first{\r\n  border: 1px solid black;\r\n}\r\n.actif-total{\r\n  border: 1px solid black;\r\n}\r\n.space-only{\r\n  border: none;\r\n  background: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flux/asset/asset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"actif\">\r\n\r\n  <p class=\"title\">{{ lang.fluxAssetsTitle }}</p>\r\n\r\n  <div class=\"block immobilised-actif\">\r\n\r\n    <p>{{ lang.fluxAssetsImmo }}</p>\r\n\r\n    <div class=\"article\">\r\n\r\n      <div class=\"actif-label\">\r\n        <div><label>{{ lang.fluxAssetsImmoTools }}</label></div>\r\n        <div><label>{{ lang.fluxAssetsImmoAmortization }}</label></div>\r\n      </div>\r\n\r\n      <div class=\"actif-first\">\r\n        <div><label>{{ asset.tools | roundAt2 }}</label></div>\r\n        <div><label>{{ asset.amortizement | roundAt2 }}</label></div>\r\n      </div>\r\n\r\n      <div class=\"actif-total space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"result-article\">\r\n\r\n      <div class=\"actif-label space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n      <div class=\"actif-first space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n      <div class=\"actif-total\">\r\n        <div>{{ asset.immobilisation | roundAt2 }}</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"block ciculated-actif\">\r\n\r\n    <p>{{ lang.fluxAssetsMove }}</p>\r\n\r\n    <div class=\"article\">\r\n\r\n      <div class=\"actif-label\">\r\n        <div><label>{{ lang.fluxAssetsMoveStorage }}</label></div>\r\n        <div><label>{{ lang.fluxAssetsMoveClient }}</label></div>\r\n        <div><label>{{ lang.fluxAssetsMoveBank }}</label></div>\r\n      </div>\r\n\r\n      <div class=\"actif-first\">\r\n        <div><label>{{ asset.stockage | roundAt2 }}</label></div>\r\n        <div><label>{{ asset.clients | roundAt2 }}</label></div>\r\n        <div><label>{{ asset.bank | roundAt2 }}</label></div>\r\n      </div>\r\n\r\n      <div class=\"actif-total space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n        <div><label>&nbsp;</label></div>\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"result-article\">\r\n\r\n      <div class=\"actif-label space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n      <div class=\"actif-first space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n      <div class=\"actif-total\">\r\n        <div>{{ asset.circulization | roundAt2 }}</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"block total-actif\">\r\n\r\n    <div class=\"actif-label\">\r\n      <div><label>{{ lang.fluxAssetsTotal }}</label></div>\r\n    </div>\r\n\r\n    <div class=\"actif-first space-only\">\r\n      <div><label>&nbsp;</label></div>\r\n    </div>\r\n\r\n    <div class=\"actif-total\">\r\n      <div>{{ asset.totalAssets | roundAt2 }}</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/flux/asset/asset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssetComponent = (function () {
    function AssetComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    AssetComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resultPeriode = "result" + this.periode;
        Object.keys(this.company.result).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.asset = _this.company.result[keyResult].flux;
            }
        });
    };
    AssetComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return AssetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], AssetComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], AssetComponent.prototype, "periode", void 0);
AssetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'asset',
        template: __webpack_require__("../../../../../src/app/flux/asset/asset.component.html"),
        styles: [__webpack_require__("../../../../../src/app/flux/asset/asset.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], AssetComponent);

var _a;
//# sourceMappingURL=asset.component.js.map

/***/ }),

/***/ "../../../../../src/app/flux/flux.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flux{\r\n  width: 100%;\r\n  overflow: auto;\r\n  margin-bottom: 10px;\r\n}\r\n.flux-show{\r\n  margin-bottom: 12px;\r\n}\r\n.flux-show div{\r\n  text-align: center;\r\n}\r\n\r\n.flux-periode div{\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n.periode{\r\n  margin: 5px;\r\n}\r\n.periode h3{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.periode-result div{\r\n  display: inline-block;\r\n  float: left;\r\n  text-align: center;\r\n  margin: 1px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid black;\r\n\r\n}\r\n\r\n/******************************************************************/\r\n\r\nh1,\r\nh3{\r\n  margin: 0px;\r\n}\r\n\r\n.flux-periode{\r\n  overflow: auto;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/******************************************************************/\r\n\r\n.periode-result div:hover{\r\n  background: #808080;\r\n}\r\n.choosed{\r\n  background: #808080;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flux/flux.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"result flux\">\r\n\r\n  <div class=\"flux-show\">\r\n    <div><h1>{{ lang.fluxTitle }}</h1></div>\r\n    <div><h3>{{ lang.fluxCompany }}:  {{ company.name }}</h3></div>\r\n  </div>\r\n\r\n  <div class=\"flux-periode\">\r\n\r\n    <div class=\"periode\">\r\n      <h3>{{ lang.fluxPeriode }}: </h3>\r\n    </div>\r\n    <div class=\"periode periode-result\" *ngIf=\"company.result\">\r\n      <div *ngFor=\"let item of listPeriode; let i = index\" (click)=\"changePeriode(i)\" [class.choosed]=\"boolPeriode[i]\">\r\n        <span>{{ i + 1 }}</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"flux-article\" *ngIf=\"periode !== undefined\">\r\n\r\n    <div class=\"flux flux-asset\">\r\n      <asset [company]=\"company\" [periode]=\"periode\"></asset>\r\n    </div>\r\n\r\n    <div class=\"flux flux-liability\">\r\n      <liability [company]=\"company\" [periode]=\"periode\"></liability>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/flux/flux.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant_test_const__ = __webpack_require__("../../../../../src/app/constant/test.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FluxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Service

//Constant

var FluxComponent = (function () {
    function FluxComponent(route, router, decision, langServ) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.decision = decision;
        this.langServ = langServ;
        this.company = __WEBPACK_IMPORTED_MODULE_4__constant_test_const__["a" /* TEST_COMPANY */];
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    FluxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.teamId = +param['id'];
            var teamShare = "team" + _this.teamId;
            _this.listPeriode = [];
            _this.boolPeriode = [];
            _this.company = _this.decision.updateCompany(_this.teamId);
            _this.round = _this.decision.getRound() + 1;
            _this.periode = _this.decision.getRound() - 1;
            Object.keys(_this.company.result).map(function (key) {
                _this.listPeriode.push(_this.company.result[key]);
                _this.boolPeriode.push(false);
            });
            _this.boolPeriode[_this.boolPeriode.length - 1] = true;
        });
    };
    FluxComponent.prototype.changePeriode = function (n) {
        var _this = this;
        this.periode = n;
        this.boolPeriode.map(function (elt, i) { return _this.boolPeriode[i] = false; });
        this.boolPeriode[n] = true;
    };
    return FluxComponent;
}());
FluxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-flux',
        template: __webpack_require__("../../../../../src/app/flux/flux.component.html"),
        styles: [__webpack_require__("../../../../../src/app/flux/flux.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], FluxComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flux.component.js.map

/***/ }),

/***/ "../../../../../src/app/flux/liability/liability.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".liability{\r\n  width: 98%;\r\n\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 25px;\r\n  margin: 5px;\r\n\r\n  display: -ms-grid;\r\n\r\n  display: grid;\r\n  -ms-grid-columns: 100%;\r\n      grid-template-columns: 100%;\r\n  -ms-grid-rows: 5% 45% 45% 10%;\r\n      grid-template-rows: 5% 45% 45% 10%;\r\n  grid-row-gap: 15px;\r\n  grid-template-areas:\r\n            \"title\"\r\n            \"own\"\r\n            \"loaning\"\r\n            \"total\";\r\n}\r\n\r\n.block{\r\n  overflow: auto;\r\n  padding-left: 15px;\r\n  border: 0.5px solid black;\r\n  border-radius: 15px;\r\n}\r\n\r\n.title{\r\n  grid-area: title;\r\n  height: 100%;\r\n\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  border-radius: 25px 25px 0px 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  text-align: center;\r\n}\r\n.own-liability{\r\n  grid-area: own;\r\n  height: 100%;\r\n  margin: 10px 15px;\r\n}\r\n.loaning-liability{\r\n  grid-area: loaning;\r\n  height: 100%;\r\n  margin: 10px 15px;\r\n}\r\n.total-liability{\r\n  grid-area: total;\r\n  text-align: center;\r\n  border: none;\r\n  margin: 10px 15px;\r\n}\r\n\r\n/*********************************************************/\r\n\r\n.article{\r\n  width: 100%;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n.result-article{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.liability-label{\r\n  float: left;\r\n  width: 30%;\r\n  margin: auto 5px;\r\n}\r\n.liability-first{\r\n  float: left;\r\n  width: 30%;\r\n  margin: auto 5px;\r\n}\r\n.liability-total{\r\n  float: left;\r\n  width: 30%;\r\n  margin: auto 5px;\r\n}\r\n\r\n\r\n.liability-label{\r\n  border: 2px solid black;\r\n  background: grey;\r\n}\r\n.liability-first{\r\n  border: 1px solid black;\r\n}\r\n.liability-total{\r\n  border: 1px solid black;\r\n}\r\n.space-only{\r\n  border: none;\r\n  background: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flux/liability/liability.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"liability\">\r\n\r\n  <p class=\"title\">{{ lang.fluxLiabilitiesTitle }}</p>\r\n\r\n  <div class=\"block own-liability\">\r\n\r\n    <p>{{ lang.fluxLiabilitiesImmo }}</p>\r\n\r\n    <div class=\"article\">\r\n\r\n      <div class=\"liability-label\">\r\n        <div><label>{{ lang.fluxLiabilitiesImmoCapital }}</label></div>\r\n        <div><label>{{ lang.fluxLiabilitiesImmoReserve }}</label></div>\r\n        <div><label>{{ lang.fluxLiabilitiesImmoResult }}</label></div>\r\n      </div>\r\n\r\n      <div class=\"liability-first\">\r\n        <div><label>{{ liability.socialCapital | roundAt2 }}</label></div>\r\n        <div><label>{{ liability.reserve | roundAt2 }}</label></div>\r\n        <div><label>{{ liability.exercice | roundAt2 }}</label></div>\r\n      </div>\r\n\r\n      <div class=\"liability-total space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n        <div><label>&nbsp;</label></div>\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"result-article\">\r\n\r\n      <div class=\"liability-label space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n      <div class=\"liability-first space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n      <div class=\"liability-total\">\r\n        <div>{{ liability.ownRessource | roundAt2 }}</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"block loaning-liability\">\r\n\r\n    <p>{{ lang.fluxLiabilitiesMove }}</p>\r\n\r\n    <div class=\"article\">\r\n\r\n      <div class=\"liability-label\">\r\n        <div><label>{{ lang.fluxLiabilitiesMoveBorrow }}</label></div>\r\n        <div><label>{{ lang.fluxLiabilitiesMoveBank }}</label></div>\r\n        <div><label>{{ lang.fluxLiabilitiesMoveProvider }}</label></div>\r\n        <div><label>{{ lang.fluxLiabilitiesMoveDebt }}</label></div>\r\n      </div>\r\n\r\n      <div class=\"liability-first\">\r\n        <div><label>{{ liability.borrow | roundAt2 }}</label></div>\r\n        <div><label>{{ liability.bankLoans | roundAt2 }}</label></div>\r\n        <div><label>{{ liability.provider | roundAt2 }}</label></div>\r\n        <div><label>{{ liability.taxDebts | roundAt2 }}</label></div>\r\n      </div>\r\n\r\n      <div class=\"liability-total space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n        <div><label>&nbsp;</label></div>\r\n        <div><label>&nbsp;</label></div>\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"result-article\">\r\n\r\n      <div class=\"liability-label space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n      <div class=\"liability-first space-only\">\r\n        <div><label>&nbsp;</label></div>\r\n      </div>\r\n\r\n      <div class=\"liability-total\">\r\n        <div>{{ liability.borrowRessource | roundAt2 }}</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"total-liability\">\r\n\r\n    <div class=\"liability-label\">\r\n      <div><label>{{ lang.fluxLiabilitiesTotal }}</label></div>\r\n    </div>\r\n\r\n    <div class=\"liability-first space-only\">\r\n      <div><label>&nbsp;</label></div>\r\n    </div>\r\n\r\n    <div class=\"liability-total\">\r\n      <div>{{ liability.totalLiabilities | roundAt2 }}</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/flux/liability/liability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiabilityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiabilityComponent = (function () {
    function LiabilityComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    LiabilityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resultPeriode = "result" + this.periode;
        Object.keys(this.company.result).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.liability = _this.company.result[keyResult].flux;
            }
        });
    };
    LiabilityComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return LiabilityComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], LiabilityComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], LiabilityComponent.prototype, "periode", void 0);
LiabilityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'liability',
        template: __webpack_require__("../../../../../src/app/flux/liability/liability.component.html"),
        styles: [__webpack_require__("../../../../../src/app/flux/liability/liability.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], LiabilityComponent);

var _a;
//# sourceMappingURL=liability.component.js.map

/***/ }),

/***/ "../../../../../src/app/initialization/affinities-initialization/affinities-initialization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".affinities{\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 12px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n\r\n  font-size: 18px;\r\n}\r\n\r\n.affinities h3{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  text-align: center;\r\n}\r\n\r\n.affinities-data{\r\n  float: left;\r\n  padding: 10px 15px;\r\n  width: 65%;\r\n  border-right: 0.5px solid #808080;\r\n}\r\n.affinities-graph{\r\n  float: left;\r\n  width: 30%;\r\n  padding: 10px 15px;\r\n  border-left: 0.5px solid #808080;\r\n}\r\n\r\n.affinities-type{\r\n  overflow: auto;\r\n}\r\n.affinities-label{\r\n  float: left;\r\n  margin: 5px;\r\n}\r\n.affinities-inputs{\r\n  float: left;\r\n  margin: 5px;\r\n}\r\n\r\n/**************************** Canvas **********************************/\r\n.chart{\r\n  width: 400px;\r\n  height: 200px;\r\n}\r\ncanvas{\r\n  background-color: none;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initialization/affinities-initialization/affinities-initialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"affinities\" *ngFor=\"let product of products; let iProd = index\">\r\n\r\n  <h3>{{ lang.initAffinityTitle }} {{ iProd + 1}}</h3>\r\n\r\n  <div class=\"affinities-data\">\r\n    <p>\r\n      <label>{{ lang.initAffinityNumber }}: </label>\r\n      <input type=\"number\" [(ngModel)]=\"product.nbAttracts\" (keyup)=\"initAttract(product.nbAttracts, product)\" (change)=\"createPie(product, iProd)\">\r\n    </p>\r\n\r\n    <div class=\"affinities-type\">\r\n\r\n      <div class=\"affinities-label\">\r\n        <div><label>{{ lang.initAffinityName }}: </label></div>\r\n        <div><label>{{ lang.initAffinityWeight }} (%): </label></div>\r\n        <div><label>{{ lang.initAffinityType }}: </label></div>\r\n      </div>\r\n\r\n      <div class=\"affinities-inputs\" *ngFor=\"let attract of product.attracts\">\r\n        <div><input type=\"text\" [(ngModel)]=\"attract.name\"></div>\r\n        <div><input type=\"number\" [(ngModel)]=\"attract.sensibility\"></div>\r\n        <!-- <div><input type=\"text\" [(ngModel)]=\"attract.type\"></div> -->\r\n        <div><select [(ngModel)]=\"attract.type\">\r\n          <option value=\"price\">{{ lang.initAffinityTypePrice }}</option>\r\n          <option value=\"publicity\">{{ lang.initAffinityTypePrice }}</option>\r\n          <option value=\"research\">{{ lang.initAffinityTypeRD }}</option>\r\n          <option value=\"credit\">{{ lang.initAffinityTypeCredit }}</option>\r\n          <option value=\"sellorForce\">{{ lang.initAffinityTypeSellor }}</option>\r\n          <option value=\"marketing\">{{ lang.initAffinityTypeMarketing }}</option>\r\n        </select></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <p>\r\n      <label>{{ lang.initAffinityFidelity }} :</label>\r\n      <input type=\"number\" [(ngModel)]=\"product.loyalty\">\r\n    </p>\r\n\r\n  </div>\r\n\r\n  <div class=\"affinities-graph\">\r\n    <div class=\"chart\">\r\n      <!-- Graph In The Canvas -->\r\n      <canvas [attr.id]=\"'pieChartAffinity' + iProd\"></canvas>\r\n    </div>\r\n    <div>\r\n      <span>{{ lang.initAffinityFidelity }} : </span> {{ product.loyalty }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/initialization/affinities-initialization/affinities-initialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__ = __webpack_require__("../../../../../src/app/service/initialization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_pie_chart_service__ = __webpack_require__("../../../../../src/app/service/pie-chart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffinitiesInitializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Service


var AffinitiesInitializationComponent = (function () {
    function AffinitiesInitializationComponent(initService, pieService, langServ) {
        var _this = this;
        this.initService = initService;
        this.pieService = pieService;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    AffinitiesInitializationComponent.prototype.ngOnInit = function () {
    };
    AffinitiesInitializationComponent.prototype.ngOnChanges = function (change) {
        var _this = this;
        setTimeout(function () {
            _this.products.map(function (product, index) {
                _this.createPie(product, index);
            });
        }, 300);
    };
    AffinitiesInitializationComponent.prototype.initAttract = function (n, prod) {
        this.initService.setProductNumberAttract(n, prod);
        prod.attracts = this.initService.initAttract(n);
    };
    AffinitiesInitializationComponent.prototype.createPie = function (product, indexProduct) {
        var canvasName = "pieChartAffinity" + indexProduct;
        var canvasSensibility = document.getElementById(canvasName);
        var canvasCtx = canvasSensibility.getContext("2d");
        var datalist = [];
        var datalabel = [];
        Object.keys(product.attracts).map(function (key) {
            datalabel.push(product.attracts[key].name);
            datalist.push(product.attracts[key].sensibility);
        });
        this.pieService.pieChart(canvasCtx, canvasSensibility.width, canvasSensibility.height, datalist, datalabel);
    };
    return AffinitiesInitializationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], AffinitiesInitializationComponent.prototype, "products", void 0);
AffinitiesInitializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'affinities-initialization',
        template: __webpack_require__("../../../../../src/app/initialization/affinities-initialization/affinities-initialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initialization/affinities-initialization/affinities-initialization.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_pie_chart_service__["a" /* PieChartService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__["a" /* InitializationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__["a" /* InitializationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_pie_chart_service__["a" /* PieChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_pie_chart_service__["a" /* PieChartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], AffinitiesInitializationComponent);

var _a, _b, _c;
//# sourceMappingURL=affinities-initialization.component.js.map

/***/ }),

/***/ "../../../../../src/app/initialization/company-initialization/company-initialization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".companies{\r\n  overflow: auto;\r\n\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 12px;\r\n  margin: 5px;\r\n\r\n  font-size: 18px;\r\n}\r\n\r\n.companies p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  text-align: center;\r\n}\r\n\r\n.all{\r\n  padding: 10px 15px;\r\n}\r\n\r\n/**************************/\r\n.company-labels{\r\n  float: left;\r\n  margin: 7.5px;\r\n}\r\n.company-all{\r\n  float: left;\r\n  margin: 7.5px;\r\n}\r\n.company-each{\r\n  float: left;\r\n  margin: 7.5px;\r\n}\r\n\r\n/**************************/\r\n.company-labels>div:nth-child(1){\r\n  margin-bottom: 5px;\r\n}\r\n.company-all>div:nth-child(1){\r\n  margin-bottom: 5px;\r\n}\r\n.company-each>div:nth-child(1){\r\n  margin-bottom: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initialization/company-initialization/company-initialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"companies\">\r\n\r\n  <p>{{ lang.initCompaniesTitle }}</p>\r\n\r\n  <div class=\"all\">\r\n\r\n  <!-- All Companies -->\r\n  <div>\r\n    <!-- Company Labels -->\r\n    <div class=\"company-labels\">\r\n      <div>\r\n        <label>{{ lang.initCompaniesName }} :</label>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initCompaniesCapital }} :</label>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initCompaniesMachinery }} :</label>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Company Inputs -->\r\n    <div class=\"company-all\">\r\n      <div>\r\n        <label *ngIf=\"allCompanies.name === 'All Company'\">{{ lang.initCompaniesAll }}</label>\r\n      </div>\r\n      <div>\r\n        <input type=\"number\" [(ngModel)]=\"allCompanies.socialCapital\" (ngModelChange)=\"initAllSocialCapital()\"/>\r\n      </div>\r\n      <div>\r\n        <input type=\"number\" [(ngModel)]=\"allCompanies.nbMachine\" (ngModelChange)=\"initAllNumberMachine()\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Each Company -->\r\n  <div class=\"company-each\" *ngFor=\"let company of companies; let i = index\">\r\n    <div>\r\n      <input type=\"string\" [(ngModel)]=\"company.name\" placeholder=\"{{lang.initCompaniesNamePlaceholder}} {{i + 1}}\"/>\r\n      <!-- <label>Entreprise {{i + 1}}</label> -->\r\n    </div>\r\n    <div>\r\n      <input type=\"number\" [(ngModel)]=\"company.socialCapital\"/>\r\n    </div>\r\n    <div>\r\n      <input type=\"number\" [(ngModel)]=\"company.nbMachine\"/>\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/initialization/company-initialization/company-initialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_company__ = __webpack_require__("../../../../../src/app/objects/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__ = __webpack_require__("../../../../../src/app/service/initialization.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyInitializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Object

//Service

var CompanyInitializationComponent = (function () {
    function CompanyInitializationComponent(initService, langServ) {
        var _this = this;
        this.initService = initService;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    CompanyInitializationComponent.prototype.ngOnInit = function () {
        this.initService.setAllCompanyNumberMachine(this.allCompanies.nbMachine, this.companies);
        this.initService.setAllCompanySocialCapital(this.allCompanies.socialCapital, this.companies);
        this.initService.initCompaniesName(this.companies);
    };
    CompanyInitializationComponent.prototype.ngOnChanges = function () {
        this.initService.setAllCompanyNumberMachine(this.allCompanies.nbMachine, this.companies);
        this.initService.setAllCompanySocialCapital(this.allCompanies.socialCapital, this.companies);
        this.initService.initCompaniesName(this.companies);
    };
    CompanyInitializationComponent.prototype.initAllSocialCapital = function () {
        this.initService.setAllCompanySocialCapital(this.allCompanies.socialCapital, this.companies);
    };
    CompanyInitializationComponent.prototype.initAllNumberMachine = function () {
        this.initService.setAllCompanyNumberMachine(this.allCompanies.nbMachine, this.companies);
    };
    return CompanyInitializationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_company__["a" /* Company */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_company__["a" /* Company */]) === "function" && _a || Object)
], CompanyInitializationComponent.prototype, "allCompanies", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], CompanyInitializationComponent.prototype, "companies", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], CompanyInitializationComponent.prototype, "changeNb", void 0);
CompanyInitializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'company-initialization',
        template: __webpack_require__("../../../../../src/app/initialization/company-initialization/company-initialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initialization/company-initialization/company-initialization.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__["a" /* InitializationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__["a" /* InitializationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], CompanyInitializationComponent);

var _a, _b, _c;
//# sourceMappingURL=company-initialization.component.js.map

/***/ }),

/***/ "../../../../../src/app/initialization/game-initialization/game-initialization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game{\r\n  display: inline-block;\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  width: 40vw;\r\n\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 12px;\r\n\r\n\r\n  text-align: center;\r\n  margin-bottom: 2.5px;\r\n}\r\n\r\n.game p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n}\r\n\r\n/*************************************************************/\r\n.choice div{\r\n  display: inline-block;\r\n  margin: 2.5px;\r\n  text-align: left;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initialization/game-initialization/game-initialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"game\">\r\n\r\n  <p>{{ lang.initGameTitle }}</p>\r\n\r\n  <div class=\"choice\">\r\n    <div class=\"label\"><label>{{ lang.initGameCompany }}</label></div>\r\n    <div class=\"input\"><input type=\"number\" [(ngModel)]=\"init.nbCompany\" (change)=\"initCompanies()\" (keyup)=\"initCompanies()\"/></div>\r\n  </div>\r\n\r\n  <div class=\"choice\">\r\n    <div class=\"label\"><label>{{ lang.initGameProduct }}</label></div>\r\n    <div class=\"input\"><input type=\"number\" [(ngModel)]=\"init.nbProducts\" (change)=\"initProducts()\" (keyupe)=\"initProducts()\"/></div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/initialization/game-initialization/game-initialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_initialization__ = __webpack_require__("../../../../../src/app/objects/initialization.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__ = __webpack_require__("../../../../../src/app/service/initialization.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameInitializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Object

//Service

var GameInitializationComponent = (function () {
    function GameInitializationComponent(initService, langServ) {
        var _this = this;
        this.initService = initService;
        this.langServ = langServ;
        this.outputProducts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.outputCompanies = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    //We init to null because the parent init everything
    GameInitializationComponent.prototype.ngOnInit = function () {
        this.products = [];
        this.companies = [];
    };
    GameInitializationComponent.prototype.initProducts = function () {
        this.products = this.initService.initProducts(this.init.nbProducts);
        this.outputProducts.emit(this.products);
    };
    GameInitializationComponent.prototype.initCompanies = function () {
        this.companies = this.initService.initCompanies(this.init.nbCompany);
        this.outputCompanies.emit(this.companies);
    };
    return GameInitializationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_initialization__["a" /* Initialization */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_initialization__["a" /* Initialization */]) === "function" && _a || Object)
], GameInitializationComponent.prototype, "init", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('update-product'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], GameInitializationComponent.prototype, "outputProducts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('update-companie'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _c || Object)
], GameInitializationComponent.prototype, "outputCompanies", void 0);
GameInitializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'game-initialization',
        template: __webpack_require__("../../../../../src/app/initialization/game-initialization/game-initialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initialization/game-initialization/game-initialization.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__["a" /* InitializationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__["a" /* InitializationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _e || Object])
], GameInitializationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=game-initialization.component.js.map

/***/ }),

/***/ "../../../../../src/app/initialization/initialization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".init{\r\n  padding: 0px;\r\n  margin: 0px;\r\n  width: 100%;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n\r\n.game-about{\r\n  overflow: auto;\r\n  margin: 10px 0px;\r\n}\r\n\r\n.general-init{\r\n  text-align: center;\r\n}\r\n\r\n.final{\r\n  text-align: center;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.final button{\r\n  padding: 5px 25px;\r\n  margin: 5px;\r\n\r\n  background: none;\r\n  border: solid 2px black;\r\n  color: black;\r\n\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n}\r\n.final button:active{\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n.final button:hover{\r\n  color: white;\r\n  background-color: black;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initialization/initialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"init\">\r\n\r\n  <h1>{{ lang.initTitle }}</h1>\r\n\r\n  <div class=\"game-about general-init\">\r\n    <!-- Game Initialization -->\r\n    <game-initialization [init]=\"init\" (update-product)=\"initProducts($event)\" (update-companie)=\"initCompanies($event)\"></game-initialization>\r\n    <!-- All Game Scenario Save -->\r\n    <scenario-initialization (products)=\"initProducts($event)\" (game)=\"initGame($event)\"\r\n                             (capital)=\"initAllSocialCapital($event)\" (machines)=\"initAllNumberMachine($event)\"></scenario-initialization>\r\n  </div>\r\n\r\n  <!-- Define the companies ressources for the game -->\r\n  <div class=\"game-about\">\r\n    <company-initialization [allCompanies]=\"allCompanies\" [companies]=companies [changeNb]=\"allCompanies.socialCapital\"></company-initialization>\r\n  </div>\r\n\r\n  <!-- Politics during the game -->\r\n  <div class=\"game-about\">\r\n    <politics-initialization [politics]=\"politics\"></politics-initialization>\r\n  </div>\r\n\r\n  <!-- Define the products composant -->\r\n  <div class=\"game-about\">\r\n    <product-initialization [products]=\"products\"></product-initialization>\r\n  </div>\r\n  <!-- Define the diversification of attraction for the clients -->\r\n  <div class=\"game-about\">\r\n    <affinities-initialization [products]=\"products\"></affinities-initialization>\r\n  </div>\r\n\r\n  <div class=\"game-about\">\r\n    <studies-initialization [products]=\"products\" [studies]=\"studies\"></studies-initialization>\r\n  </div>\r\n\r\n  <div class=\"final\">\r\n    <button type=\"button\" (click)=\"createTheGame()\">{{ lang.initButton }}</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/initialization/initialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__ = __webpack_require__("../../../../../src/app/service/initialization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_db_firebase_service__ = __webpack_require__("../../../../../src/app/firebase/db-firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant_politics_const__ = __webpack_require__("../../../../../src/app/constant/politics.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant_studies_const__ = __webpack_require__("../../../../../src/app/constant/studies.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Service

//Firebase

//Constante


var InitializationComponent = (function () {
    function InitializationComponent(initService, langServ, dbLink) {
        var _this = this;
        this.initService = initService;
        this.langServ = langServ;
        this.dbLink = dbLink;
        this.init = { nbCompany: 4, nbProducts: 2 };
        this.products = this.initService.initProducts(this.init.nbProducts);
        this.companies = this.initService.initCompanies(this.init.nbCompany);
        this.allCompanies = { name: "All Company", nbMachine: 0, socialCapital: 0, companyMachinery: [], companyProduct: [], employeesList: [] };
        this.politics = __WEBPACK_IMPORTED_MODULE_4__constant_politics_const__["a" /* POLITIC */];
        this.studies = __WEBPACK_IMPORTED_MODULE_5__constant_studies_const__["a" /* STUDIES */];
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    InitializationComponent.prototype.ngOnInit = function () {
    };
    InitializationComponent.prototype.initProducts = function (event) {
        this.products = event;
        this.init.nbProducts = this.products.length;
    };
    InitializationComponent.prototype.initCompanies = function (event) {
        this.companies = event;
    };
    InitializationComponent.prototype.initAllSocialCapital = function (event) {
        this.allCompanies.socialCapital = event;
    };
    InitializationComponent.prototype.initAllNumberMachine = function (event) {
        this.allCompanies.nbMachine = event;
    };
    InitializationComponent.prototype.initGame = function (event) {
        this.game = event;
        this.politics = this.game.politic;
        this.products = this.game.allProduct;
        this.studies = this.game.studies;
    };
    InitializationComponent.prototype.createTheGame = function () {
        var _this = this;
        //Initialization of the game
        var teams = this.initService.populateTeams(this.companies, this.products, this.politics);
        this.newGame = this.initService.createGame(teams, this.products, this.politics, this.studies);
        //the add round
        this.dbLink.setObjectInFirebaseWithUrl({ round: 0 }, "");
        teams.map(function (team, index) {
            _this.dbLink.setObjectInFirebaseWithUrl(team, "teams/team" + index);
        });
        this.dbLink.setObjectInFirebaseWithUrl(this.newGame.politic, "politic");
        this.newGame.allProduct.map(function (product, index) {
            _this.dbLink.setObjectInFirebaseWithUrl(product, "product/product" + index);
        });
        this.dbLink.setObjectInFirebaseWithUrl(this.newGame.studies, "studies");
    };
    return InitializationComponent;
}());
InitializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-initialization',
        template: __webpack_require__("../../../../../src/app/initialization/initialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initialization/initialization.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_initialization_service__["a" /* InitializationService */], __WEBPACK_IMPORTED_MODULE_3__firebase_db_firebase_service__["a" /* DbFirebaseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__["a" /* InitializationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__["a" /* InitializationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__firebase_db_firebase_service__["a" /* DbFirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__firebase_db_firebase_service__["a" /* DbFirebaseService */]) === "function" && _c || Object])
], InitializationComponent);

var _a, _b, _c;
//# sourceMappingURL=initialization.component.js.map

/***/ }),

/***/ "../../../../../src/app/initialization/politics-initialization/politics-initialization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".politics{\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 12px;\r\n  margin: 5px;\r\n\r\n  font-size: 18px;\r\n}\r\n.all{\r\n  padding: 10px 15px;\r\n}\r\n\r\n.politics p{\r\n  margin-left: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.politics h3{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  border-radius: 12px 12px 0px 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  text-align: center;\r\n}\r\n\r\n/************OVER PRICING*****************/\r\n.politics-overprice{\r\n\r\n}\r\n\r\n/********SALARY*********/\r\n.politics-salary{\r\n  width: 98%;\r\n}\r\n.employees{\r\n  width: 50%;\r\n  float: left;\r\n}\r\n.cout-employees{\r\n  width: 40%;\r\n  float: left;\r\n}\r\n\r\n/********FINANCES************/\r\n.politics-finances{\r\n  width: 98%;\r\n}\r\n.finances-part-one{\r\n  width: 50%;\r\n  float: left;\r\n}\r\n.finances-part-two{\r\n  width: 40%;\r\n  float: left;\r\n}\r\n\r\n/***********PRODUCT***************/\r\n.politics-product{\r\n  width: 98%;\r\n}\r\n.politics-production{\r\n  width: 50%;\r\n  float: left;\r\n}\r\n.politics-machinery{\r\n  width: 40%;\r\n  float: left;\r\n}\r\n\r\n\r\n/************COST*****************/\r\n.politics-cost{\r\n  width: 98%;\r\n}\r\n.politics-cost-one{\r\n  width: 30%;\r\n  float: left;\r\n}\r\n.politics-cost-two{\r\n  width: 35%;\r\n  float: left;\r\n}\r\n.politics-cost-three{\r\n  width: 30%;\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initialization/politics-initialization/politics-initialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"politics\">\r\n  <h3>{{ lang.initPoliticTitle }}</h3>\r\n\r\n  <div class=\"all\">\r\n\r\n  <!-- Over Pricing -->\r\n  <table class=\"box politics-overprice\">\r\n    <p>{{ lang.initPoliticSupp }}</p>\r\n    <div>\r\n      <label>{{ lang.initPoliticSuppTime }} (%): </label>\r\n      <span><input type=\"number\" [(ngModel)]=\"politics.overtimePercent\"/></span>\r\n    </div>\r\n    <div>\r\n      <label>{{ lang.initPoliticSuppCost }} (%): </label>\r\n      <span><input type=\"number\" [(ngModel)]=\"politics.overheadPercent\"/></span>\r\n    </div>\r\n  </table>\r\n\r\n  <!-- Salary -->\r\n  <table class=\"box politics-salary\">\r\n    <p>{{ lang.initPoliticSalary }}</p>\r\n    <!-- Kind Of Employees and Prices -->\r\n    <div class=\"employees\">\r\n      <div *ngFor=\"let employee of politics.typeOfEmployees\">\r\n        <label *ngIf=\"employee.type === 'Productor' \"> {{ lang.initPoliticSalaryProductor }} </label>\r\n        <label *ngIf=\"employee.type === 'Sellor' \"> {{ lang.initPoliticSalarySellor }} </label>\r\n        <label *ngIf=\"employee.type === 'Manager' \"> {{ lang.initPoliticSalaryManager }} </label>\r\n        <span><input type=\"number\" [(ngModel)]=\"employee.salary\"></span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cout-employees\">\r\n      <div>\r\n        <label>{{ lang.initPoliticSalaryFire }} (%): </label>\r\n        <span><input type=\"number\" [(ngModel)]=\"politics.firePricePourcent\"/></span>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticSalaryHire }} (%): </label>\r\n        <span><input type=\"number\" [(ngModel)]=\"politics.hirePricePourcent\"/></span>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticSalaryFormation }} (%): </label>\r\n        <span><input type=\"number\" [(ngModel)]=\"politics.minimalTraining\"/></span>\r\n      </div>\r\n    </div>\r\n  </table>\r\n\r\n  <!-- Finances -->\r\n  <table class=\"box politics-finances\">\r\n\r\n    <p>{{ lang.initPoliticRate }}(%)</p>\r\n    <div class=\"finances-part-one\">\r\n      <div>\r\n        <label>{{ lang.initPoliticRateBorrowing }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.loaning\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticRateOverdraft }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.overdraft\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticRateNonOverdraft }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.unauthorizedOverdraft\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticRateAuthorization }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.overdraftAmountPercent\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"finances-part-two\">\r\n      <div>\r\n        <label>{{ lang.initPoliticRatePlacement }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.placement\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticRateVAT }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.VAT\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticRateTax }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.IT\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticRateCredit }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.supplierCredits\"/>\r\n      </div>\r\n    </div>\r\n\r\n  </table>\r\n\r\n  <table class=\"box politics-product\">\r\n\r\n    <!-- Production -->\r\n    <div class=\"politics-production\">\r\n      <p>{{ lang.initPoliticCapacity }}</p>\r\n      <div>\r\n        <label>{{ lang.initPoliticCapacityMachinery }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.machineProduction\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticCapacityProductor }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.productorProduction\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Machinery -->\r\n    <div class=\"politics-machinery\">\r\n      <p>{{ lang.initPoliticMachinery }}</p>\r\n      <div>\r\n        <label>{{ lang.initPoliticMachineryPrice }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.machineryType.price\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticMachineryAmortization }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.machineryType.amortization\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticMachineryReparation }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.machineryType.repairPrice\"/>\r\n      </div>\r\n    </div>\r\n\r\n  </table>\r\n\r\n  <!-- General Cost -->\r\n  <table class=\"box politics-cost\">\r\n    <p>{{ lang.initPoliticCost }}</p>\r\n    <div class=\"politics-cost-one\">\r\n      <div>\r\n        <label>{{ lang.initPoliticCostStockage }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.generalCost.stockage\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticCostFix }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.generalCost.fixedPrice\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"politics-cost-two\">\r\n      <div>\r\n        <label>{{ lang.initPoliticCostSlice }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.generalCost.immbilizationTranche\"/>\r\n      </div>\r\n      <div>\r\n        <label>{{ lang.initPoliticCostSupp }}: </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.generalCost.supplementTranche\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"politics-cost-three\">\r\n      <div>\r\n        <label>{{ lang.initPoliticCostInsurance }} (%): </label>\r\n        <input type=\"number\" [(ngModel)]=\"politics.generalCost.insurance\"/>\r\n      </div>\r\n    </div>\r\n  </table>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/initialization/politics-initialization/politics-initialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_politic__ = __webpack_require__("../../../../../src/app/objects/politic.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticsInitializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Object

var PoliticsInitializationComponent = (function () {
    function PoliticsInitializationComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    PoliticsInitializationComponent.prototype.ngOnInit = function () {
    };
    return PoliticsInitializationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_politic__["a" /* Politic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_politic__["a" /* Politic */]) === "function" && _a || Object)
], PoliticsInitializationComponent.prototype, "politics", void 0);
PoliticsInitializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'politics-initialization',
        template: __webpack_require__("../../../../../src/app/initialization/politics-initialization/politics-initialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initialization/politics-initialization/politics-initialization.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _b || Object])
], PoliticsInitializationComponent);

var _a, _b;
//# sourceMappingURL=politics-initialization.component.js.map

/***/ }),

/***/ "../../../../../src/app/initialization/product-initialization/product-initialization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products{\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 12px;\r\n  margin: 5px;\r\n  overflow: auto;\r\n\r\n  font-size: 18px;\r\n}\r\n\r\n.products p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  text-align: center;\r\n}\r\n.all{\r\n  padding: 10px 15px;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n/***********************/\r\n.products-label{\r\n  float: left;\r\n  margin: 5px;\r\n}\r\n.products-output{\r\n  float: left;\r\n  margin: 5px;\r\n}\r\n\r\n/***********************/\r\n.products-label>div:nth-child(1){\r\n  margin-bottom: 5px;\r\n}\r\n.products-output>div:nth-child(1){\r\n  margin-bottom: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initialization/product-initialization/product-initialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"products\">\r\n\r\n  <p>{{ lang.initProductTitle }}</p>\r\n\r\n<div class=\"all\">\r\n\r\n  <div class=\"products-label\">\r\n    <div>\r\n      <label>{{ lang.initProductNames }}: </label>\r\n    </div>\r\n    <div>\r\n      <label>{{ lang.initProductPotential }}: </label>\r\n    </div>\r\n    <div>\r\n      <label>{{ lang.initProductEvolution }}: </label>\r\n    </div>\r\n    <div>\r\n      <label>{{ lang.initProductTime }}: </label>\r\n    </div>\r\n    <div>\r\n      <label>{{ lang.initProductCost }}: </label>\r\n    </div>\r\n    <div>\r\n      <label>{{ lang.initProductMin }}: </label>\r\n    </div>\r\n    <div>\r\n      <label>{{ lang.initProductMax }}: </label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"products-output\" *ngFor=\"let product of products; let i = index\">\r\n    <div>\r\n      <label>{{ lang.initProductName }} {{i + 1}}</label>\r\n    </div>\r\n    <div>\r\n      <input type=\"number\" [(ngModel)]=\"product.potentialSell\"/>\r\n    </div>\r\n    <div>\r\n      <!-- <input type=\"string\" [(ngModel)]=\"product.typeEvolution\"/> -->\r\n      <select [(ngModel)]=\"product.typeEvolution\">\r\n        <option value=\"c/d\">{{ lang.initProductEvolutionCD }}</option>\r\n        <option value=\"exponential\">{{ lang.initProductEvolutionExpo }}</option>\r\n        <option value=\"random\">{{ lang.initProductEvolutionRandom }}</option>\r\n        <option value=\"totallyRandom\">{{ lang.initProductEvolutionTotalRandom }}</option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <input type=\"number\" [(ngModel)]=\"product.productTime\"/>\r\n    </div>\r\n    <div>\r\n      <input type=\"number\" [(ngModel)]=\"product.unitaryCost\"/>\r\n    </div>\r\n    <div>\r\n      <input type=\"number\" [(ngModel)]=\"product.minPrice\"/>\r\n    </div>\r\n    <div>\r\n      <input type=\"number\" [(ngModel)]=\"product.maxPrice\"/>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/initialization/product-initialization/product-initialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInitializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductInitializationComponent = (function () {
    function ProductInitializationComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ProductInitializationComponent.prototype.ngOnInit = function () {
    };
    return ProductInitializationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], ProductInitializationComponent.prototype, "products", void 0);
ProductInitializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'product-initialization',
        template: __webpack_require__("../../../../../src/app/initialization/product-initialization/product-initialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initialization/product-initialization/product-initialization.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], ProductInitializationComponent);

var _a;
//# sourceMappingURL=product-initialization.component.js.map

/***/ }),

/***/ "../../../../../src/app/initialization/scenario-initialization/scenario-initialization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scenario{\r\n  display: inline-block;\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  width: 30vw;\r\n\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 12px;\r\n\r\n  text-align: center;\r\n  margin-bottom: 2.5px;\r\n}\r\n\r\n.scenario p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n}\r\n\r\n.scenario-buttons{\r\n  margin: 5px;\r\n}\r\n\r\n/****************************************************************/\r\n\r\nbutton{\r\n  display: inline-block;\r\n  z-index: 2;\r\n  padding: 5px 25px;\r\n  margin: 5px;\r\n\r\n  background: none;\r\n  border: solid 2px #808080;\r\n  color: #808080;\r\n\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n}\r\n button:active{\r\n  color: white;\r\n  background-color: #808080;\r\n  transition: all 500ms ease-in-out;\r\n  -webkit-transform: translate(2px,2px);\r\n          transform: translate(2px,2px);\r\n}\r\n button:hover{\r\n  color: white;\r\n  background-color: #808080;\r\n  transition: all 500ms ease-in-out;\r\n  -webkit-transform: translate(2px,2px);\r\n          transform: translate(2px,2px);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initialization/scenario-initialization/scenario-initialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scenario\">\r\n  <p>{{ lang.initScenarioTitle }}</p>\r\n  <div class=\"scenario-buttons\">\r\n    <div class=\"scenario-button\">\r\n      <button type=\"button\" (click)=\"gameOrdinatix()\">Ordinatix</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/initialization/scenario-initialization/scenario-initialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__ = __webpack_require__("../../../../../src/app/service/initialization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scenario_Ordinatix__ = __webpack_require__("../../../../../src/app/scenario/Ordinatix.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenarioInitializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Service

//Constant

var ScenarioInitializationComponent = (function () {
    function ScenarioInitializationComponent(initService, langServ) {
        var _this = this;
        this.initService = initService;
        this.langServ = langServ;
        this.gameChoose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.productsNumber = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.capital = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.nbMachine = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ScenarioInitializationComponent.prototype.ngOnInit = function () {
    };
    ScenarioInitializationComponent.prototype.gameOrdinatix = function () {
        this.game = __WEBPACK_IMPORTED_MODULE_3__scenario_Ordinatix__["a" /* ORDINATIX */];
        this.products = this.initService.initProducts(__WEBPACK_IMPORTED_MODULE_3__scenario_Ordinatix__["a" /* ORDINATIX */].allProduct.length);
        this.capital.emit(1500000);
        this.nbMachine.emit(10);
        this.productsNumber.emit(this.products);
        this.gameChoose.emit(this.game);
    };
    return ScenarioInitializationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('game'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], ScenarioInitializationComponent.prototype, "gameChoose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('products'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], ScenarioInitializationComponent.prototype, "productsNumber", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('capital'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _c || Object)
], ScenarioInitializationComponent.prototype, "capital", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('machines'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _d || Object)
], ScenarioInitializationComponent.prototype, "nbMachine", void 0);
ScenarioInitializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'scenario-initialization',
        template: __webpack_require__("../../../../../src/app/initialization/scenario-initialization/scenario-initialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initialization/scenario-initialization/scenario-initialization.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__["a" /* InitializationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_initialization_service__["a" /* InitializationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _f || Object])
], ScenarioInitializationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=scenario-initialization.component.js.map

/***/ }),

/***/ "../../../../../src/app/initialization/studies-initialization/studies-initialization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".studies{\r\n  box-shadow: 1px 1px 5px #808080;\r\n  border-radius: 12px;\r\n  overflow: auto;\r\n  margin: 5px;\r\n}\r\n.all{\r\n  padding: 10px 15px;\r\n}\r\n.studies p{\r\n  background: #808080;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  text-align: center;\r\n}\r\ninput{\r\n  text-align: right;\r\n}\r\n\r\n.product-studies{\r\n  float: left;\r\n  width: 30%;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border-radius: 12px;\r\n}\r\n.product-studies div{\r\n  margin: 2.5px;\r\n}\r\n\r\n.concurrence-studies{\r\n  float: left;\r\n  width: 30%;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border-radius: 12px;\r\n}\r\n.concurrence-studies div{\r\n  margin: 2.5px;\r\n}\r\n\r\n.evaluation-studies{\r\n  float: left;\r\n  width: 30%;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border-radius: 12px;\r\n}\r\n.evaluation-studies div{\r\n  margin: 2.5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initialization/studies-initialization/studies-initialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"studies\">\r\n\r\n  <p>{{ lang.initStudiesTitle }}</p>\r\n\r\n<div class=\"all\">\r\n\r\n  <div class=\"product-studies\">\r\n    <div *ngFor=\"let product of products; let i = index\">\r\n      <label>{{ lang.initStudiesProduct }} {{ i + 1 }} : </label>\r\n      <input type=\"number\" [(ngModel)]=\"studies.productStudies[i]\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"concurrence-studies\">\r\n    <div><label>{{ lang.initStudiesPart }} : </label><input type=\"number\" [(ngModel)]=\"studies.marketStudies\"></div>\r\n    <div><label>{{ lang.initStudiesResult }} : </label><input type=\"number\" [(ngModel)]=\"studies.concurrenceStudies\"></div>\r\n    <div><label>{{ lang.initStudiesStructure }} : </label><input type=\"number\" [(ngModel)]=\"studies.structureStudies\"></div>\r\n  </div>\r\n\r\n  <div class=\"evaluation-studies\">\r\n    <div><label>{{ lang.initStudiesMarket }} : </label><input type=\"number\" [(ngModel)]=\"studies.sellingStudies\"></div>\r\n    <div><label>{{ lang.initStudiesPerformance }} : </label><input type=\"number\" [(ngModel)]=\"studies.performanceStudies\"></div>\r\n  </div>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/initialization/studies-initialization/studies-initialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_studies__ = __webpack_require__("../../../../../src/app/objects/studies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__ = __webpack_require__("../../../../../src/app/service/initialization.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesInitializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Service

var StudiesInitializationComponent = (function () {
    function StudiesInitializationComponent(initService, langServ) {
        var _this = this;
        this.initService = initService;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    StudiesInitializationComponent.prototype.ngOnInit = function () {
    };
    return StudiesInitializationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], StudiesInitializationComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_studies__["a" /* Studies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_studies__["a" /* Studies */]) === "function" && _a || Object)
], StudiesInitializationComponent.prototype, "studies", void 0);
StudiesInitializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'studies-initialization',
        template: __webpack_require__("../../../../../src/app/initialization/studies-initialization/studies-initialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initialization/studies-initialization/studies-initialization.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__["a" /* InitializationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_initialization_service__["a" /* InitializationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], StudiesInitializationComponent);

var _a, _b, _c;
//# sourceMappingURL=studies-initialization.component.js.map

/***/ }),

/***/ "../../../../../src/app/language/language.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__languages_french_const__ = __webpack_require__("../../../../../src/app/language/languages/french.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languages_english_const__ = __webpack_require__("../../../../../src/app/language/languages/english.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Languages Constant


var LanguageService = (function () {
    function LanguageService() {
        this.language = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.languages = new Array();
        this.languages['fr'] = __WEBPACK_IMPORTED_MODULE_1__languages_french_const__["a" /* FRENCH */];
        this.languages['en'] = __WEBPACK_IMPORTED_MODULE_2__languages_english_const__["a" /* ENGLISH */];
        this.languageChoose = this.languages['fr'];
        this.language.emit(this.languageChoose);
    }
    LanguageService.prototype.setLanguage = function (lang) {
        this.languageChoose = this.languages[lang];
        this.language.emit(this.languageChoose);
    };
    LanguageService.prototype.getLanguage = function () {
        return this.language;
    };
    LanguageService.prototype.getLanguageConstructor = function () {
        return this.languageChoose;
    };
    return LanguageService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('language'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], LanguageService.prototype, "language", void 0);
LanguageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LanguageService);

var _a;
//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ "../../../../../src/app/language/languages/english.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENGLISH; });
var ENGLISH = {
    //Principale
    //header
    principalHeaderTitle: "0",
    principalHaderSession: "session",
    principalHeaderPlace: "at",
    //navigator
    principalNavigatorIntroduction: "Initialization",
    principalNavigatorCompanies: "Companies:",
    principalNavigatorCompaniesName: "Company",
    principalNavigatorCompaniesDecision: "Decision",
    principalNavigatorCompaniesSituation: "Situation",
    principalNavigatorCompaniesComptability: "Comptability",
    principalNavigatorCompaniesFlux: "Flux",
    principalNavigatorCompaniesStudies: "Studies",
    principalNavigatorPeriode: "Change Periode",
    principalNavigatorLog: "Log Out",
    //Authentification
    authName: "Animator",
    authPlace: "Place",
    authDate: "Date",
    authButton: "Create",
    authOther: "Other Sessions",
    //Initialization
    initTitle: "Initialization of the Simulation",
    initButton: "Start the simulation",
    //game
    initGameTitle: "Game",
    initGameCompany: "Number of Teams",
    initGameProduct: "Number of Products",
    //scenario
    initScenarioTitle: "Scenario",
    //Companies
    initCompaniesTitle: "Companies",
    initCompaniesName: "Name of the Company",
    initCompaniesCapital: "Social Capital",
    initCompaniesMachinery: "Machinery",
    initCompaniesAll: "All Companies",
    initCompaniesNamePlaceholder: "Company",
    //politic
    initPoliticTitle: "Politics in the Simulation",
    initPoliticSupp: "Extra",
    initPoliticSuppTime: "Overtime",
    initPoliticSuppCost: "Overcost",
    initPoliticSalary: "Salary",
    initPoliticSalaryProductor: "Productor",
    initPoliticSalarySellor: "Seller",
    initPoliticSalaryManager: "Manager",
    initPoliticSalaryHire: "Hire Cost",
    initPoliticSalaryFire: "Fire Cost",
    initPoliticSalaryFormation: "Formation Cost",
    initPoliticRate: "Rate",
    initPoliticRateBorrowing: "Borrowing",
    initPoliticRateOverdraft: "Overdraft",
    initPoliticRateNonOverdraft: "Unauthorized Overdraft",
    initPoliticRateAuthorization: "Overdraft Amount",
    initPoliticRatePlacement: "Placement",
    initPoliticRateVAT: "VAT",
    initPoliticRateTax: "Society Tax",
    initPoliticRateCredit: "Supplier Credit",
    initPoliticCapacity: "Production Capacity",
    initPoliticCapacityMachinery: "Possible Production Hours per Machine",
    initPoliticCapacityProductor: "Possible Production Hours per Productor",
    initPoliticMachinery: "Machine Type",
    initPoliticMachineryPrice: "Machine Price",
    initPoliticMachineryAmortization: "Amortization",
    initPoliticMachineryReparation: "Repair Cost",
    initPoliticCost: "General Cost",
    initPoliticCostStockage: "Storage Cost",
    initPoliticCostFix: "Fix Cost",
    initPoliticCostSlice: "Immobilization Slice",
    initPoliticCostSupp: "Add Cost per Slice",
    initPoliticCostInsurance: "Insurance Cost",
    //product
    initProductTitle: "Products",
    initProductNames: "Products",
    initProductName: "Product",
    initProductPotential: "Potential Demand per Company",
    initProductEvolution: "Evolution of the Demand",
    initProductEvolutionCD: "Increasing / Decreasing",
    initProductEvolutionExpo: "Exponential",
    initProductEvolutionRandom: "Random",
    initProductEvolutionTotalRandom: "Totally Random",
    initProductTime: "Production Time",
    initProductCost: "Unit Price of Production",
    initProductMin: "Minimum Price of Selling",
    initProductMax: "Maximum Price of Selling",
    //affinity
    initAffinityTitle: "Affinity of the Product",
    initAffinityNumber: "Number of Weight",
    initAffinityName: "Affinity Name",
    initAffinityWeight: "Weight",
    initAffinityType: "Type",
    initAffinityTypePrice: "Price",
    initAffinityTypePublicity: "Publicity",
    initAffinityTypeRD: "Research and Development",
    initAffinityTypeCredit: "Credit",
    initAffinityTypeSellor: "Seller Force",
    initAffinityTypeMarketing: "Commercial Action",
    initAffinityFidelity: "Fidelity",
    //Studies
    initStudiesTitle: "Studies",
    initStudiesProduct: "product",
    initStudiesPart: "Market Part",
    initStudiesResult: "Result",
    initStudiesStructure: "Financial Structure",
    initStudiesMarket: "Market Situation",
    initStudiesPerformance: "Enterprise Performance",
    //Decision
    decTitle: "Decision",
    decCompanyName: "Company",
    decPeriode: "Round",
    decButton: "Save Change",
    //Decision General
    decGeneralDecision: "General Decisions",
    //Financial Structure
    decFinancialStructureTitle: "Financial Structure",
    decFinancialStructureVarCap: "Assets Variation",
    decFinancialStructureDistribution: "Distributions",
    decFinancialStructureVarBorrow: "Borrowing Variation",
    decFinancialStructureSubvention: "Subventions",
    decFinancialStructureEx: "External Products or Charges",
    //Machinery
    decMachineryTitle: "Machinery",
    decMachineryNumber: "Machine Number",
    decMachineryAdd: "Buy",
    decMachineryDel: "Sell",
    decMachineryRepair: "Maintenance",
    //Decision Product
    decProduct: "Product Decisions",
    //Fabrication
    decFabricationTitle: "Manufacturing",
    decFabricationNames: "Product Name",
    decFabricationName: "Product",
    decFabricationProduction: "Production",
    decFabricationMachinery: "Affected Machine",
    decFabricationProductor: "Affected Productor",
    //Marketing
    decMarketingTitle: "Commercialization",
    decMarketingType: "Product Type",
    decMarketingName: "Product",
    decMarketingPrice: "Price",
    decMarketingPublicity: "Publicity",
    decMarketingSellor: "Seller Force",
    decMarketingAction: "Marketing Action",
    decMarketingRD: "Recherhce and Development",
    decMarketingCredit: "Client Credit",
    //Decision Human Ressource
    decHR: "Human Ressource",
    //Remuneration
    decRemunerationTitle: "Remuneration",
    decRemunerationSalary: "Wage Index",
    decRemunerationCommission: "Sellers Commissions",
    decRemunerationBudget: "Budget Formation",
    //Employees
    decEmployeesTitle: "Staff",
    decEmployeesProductor: "Productor",
    decEmployeesSellor: "Seller",
    decEmployeesManager: "Manager",
    decEmployeesHire: "Hire",
    decEmployeesFire: "Fire",
    //Decision Studies
    decStudiesTitle: "Market Studies",
    decStudiesProduct: "Product",
    decStudiesMarketPart: "Market Part",
    decStudiesResult: "Result",
    decStudiesFinancialStructure: "Financial Structure",
    decStudiesMarketSituation: "Market Situation",
    decStudiesPerformance: "Company Performance",
    //Decision Exceptionnal
    decExceptionalTitle: "Exceptionnal Decisions",
    //Storage
    decStorageTitle: "Clearance",
    decStorageNames: "Product Name",
    decStorageName: "Product",
    decStorageQuantity: "Quantity",
    //Exceptionnal
    decExceptionalFabricationTitle: "Exceptionnal Selling",
    decExceptionalFabricationNames: "Product Name",
    decExceptionalFabricationName: "Product",
    decExceptionalFabricationQuantity: "Quantity",
    decExceptionalFabricationPrice: "Price",
    //Situation
    situTitle: "Situation",
    situCompany: "Company",
    situPeriode: "Round",
    //Situation Structure
    situStructureTitle: "Company Structure",
    situStructureOldPeriode: "Old Round",
    situStructureNewPeriode: "New Round",
    situStructureCapacity: "Production Capacity (hours)",
    situStructureNumber: "Number of Products",
    situStructureStorage: "Stock (value)",
    situStructureProductor: "Productor Workforce",
    situStructureSellor: "Vendor Workforce",
    situStructureManager: "Manager Workforce",
    situStructureDebt: "Client Debt",
    situStructureBreakdown: "Breakdown",
    situStructureStrike: "Strike",
    //Situation Decision
    situDecisionTitle: "Exploitation Decision",
    situDecisionName: "Product",
    situDecisionAffected: "Affected Machines",
    situDecisionPercentAffected: "Percent of Affected Machines",
    situDecisionProductor: "Afftected Productors",
    situDecisionProduction: "Planned Production",
    situDecisionFabricationTime: "Fabrication Time",
    situDecisionPrice: "Price",
    situDecisionPublicity: "Publicity",
    situDecisionSellor: "Seller Force",
    situDecisionAction: "Marketing Action",
    situDecisionRD: "Recherche and Development",
    situDecisionCredit: "Credit",
    //Situation Result
    situResultTitle: "Results",
    situResultName: "Product",
    situResultRealProduction: "Real Production",
    situResultUseMachine: "Machines uses",
    situResultOvertime: "Overtime",
    situResultSellNormal: "Normal Selling (quantity)",
    situResultSellStorage: "Clearing Selling (quantity)",
    situResultSellSpecial: "Special Selling (quantity)",
    situResultTurnover: "Turnover",
    situResultMarketPart: "Market Part",
    situResultStorageQuantity: "Storage (quantity)",
    situResultStorageValue: "Storage (value)",
    //Comptability
    comptaTitle: "Comptability",
    comptaCompany: "Company",
    comptaPeriode: "Round",
    //Comptability Storage
    comptaStorageTitle: "Exploitation Produce",
    comptaStorageName: "Product",
    comptaStorageTotal: "Total",
    comptaStorageSoldNormal: "Normal Selling",
    comptaStorageSoldStorage: "Clearing Selling",
    comptaStorageSoldSpecial: "Special Selling",
    comptaStorageStorageValue: "Storage Value",
    comptaStorageSubvention: "Subventions",
    //Comptability Charges
    comptaChargesTitle: "Exploitation Charges",
    comptaChargesName: "Product",
    comptaChargesTotal: "Total",
    comptaChargesConso: "Consumption of Material",
    comptaChargesWorkforce: "Direct Workforce",
    comptaChargesRD: "Recherche and Development",
    comptaChargesPublicity: "Publicity",
    comptaChargesActionMarketing: "Marketing Action",
    comptaChargesSellorRemuneration: "Vendeur Remuneration",
    comptaChargesStorageCost: "Storage Cost",
    comptaChargesDotation: "Amortization Dotation",
    comptaChargesRemuneration: "Management Remuneration",
    comptaChargesHireCost: "Hire Cost",
    comptaChargesFireCost: "Fire Cost",
    comptaChargesFormationCost: "Formation Cost",
    comptaChargesFixCostProduction: "Fix Cost of Production",
    comptaChargesRepairCost: "Repair Cost",
    comptaChargesServicing: "Servicing",
    comptaChargesInsurance: "Insurance Premium",
    comptaChargesStudiesCost: "Studies Cost",
    //Comptability Financial
    comptaFinancialTitle: "Financial Result",
    comptaFinancialProduct: "Financial Products",
    comptaFinancialCharges: "Financial Charges",
    //Comptability Final
    comptaFinalTitle: "Result",
    comptaFinalExploitation: "Exploitation Result",
    comptaFinalFinance: "Fiancial Result",
    comptaFinalExceptionnalProduct: "Exceptionnal Result (product)",
    comptaFinalExceptionnalCharges: "Exceptionnal Result (charge)",
    comptaFinalInsurance: "Insurance Refund",
    comptaFinalBeforeTax: "Result before Taxes",
    comptaFinalTax: "Society Tax",
    comptaFinalNetResult: "Net Result",
    //Flux
    fluxTitle: "Flux",
    fluxCompany: "Company",
    fluxPeriode: "Round",
    //Flux Assets
    fluxAssetsTitle: "Assets",
    fluxAssetsImmo: "Fixed Assets",
    fluxAssetsImmoTools: "Tools",
    fluxAssetsImmoAmortization: "Amortization",
    fluxAssetsMove: "Flowed Assets",
    fluxAssetsMoveStorage: "Storage",
    fluxAssetsMoveClient: "Client",
    fluxAssetsMoveBank: "Bank",
    fluxAssetsTotal: "Total Assets",
    //Flux Liabilities
    fluxLiabilitiesTitle: "Liabilities",
    fluxLiabilitiesImmo: "Fixed Liabilities",
    fluxLiabilitiesImmoCapital: "Share Capital",
    fluxLiabilitiesImmoReserve: "Supply",
    fluxLiabilitiesImmoResult: "Result of the Round",
    fluxLiabilitiesMove: "Flowed Liabilities",
    fluxLiabilitiesMoveBorrow: "Borrowing",
    fluxLiabilitiesMoveBank: "Bank",
    fluxLiabilitiesMoveProvider: "Provider",
    fluxLiabilitiesMoveDebt: "Fiscal Debt",
    fluxLiabilitiesTotal: "Total Liabilities",
    //Studies
    studiesTitle: "Studies",
    studiesCompany: "Company",
    studiesPeriode: "Round",
    //Studies Product
    studiesProductTitle: "Competitor Politics on the Product",
    studiesProductPrice: "Price",
    studiesProductPublicity: "Publicity",
    studiesProductAction: "Marketing Action",
    studiesProductSellor: "Vendor",
    studiesProductCredit: "Credit",
    //Studies Market Part
    studiesMPTitle: "Market Parts of the Concurrence",
    studiesMPProd: "Product",
    //Studies Concurrence
    studiesConcuTitle: "Concurrence Results",
    studiesConcuFiscal: "Fiscal Result",
    studiesConcuNet: "Net Result",
    studiesConcuProduct: "Product",
    studiesConcuTurnover: "Turnover",
    //Studies Structures
    studiesStructTitle: "Structure of the Companies",
    studiesStructCapital: "Share Capital",
    studiesStructImmo: "Immobilization",
    studiesStructStorage: "Storage Value",
    studiesStructInDebt: "Indebtedness",
    studiesStructOverdraft: "Overdraft",
    studiesStructOvertimeProd: "Overtime (%) of Product",
    //Studies Market Situation
    studiesMSTitle: "Situation of the Market",
    studiesMSPotential: "Potential Demand",
    studiesMSEffective: "Effective Demand",
    //Studies Performance
    studiesPerformanceTitle: "Company Performance",
    studiesPerformanceNameProduct: "Product",
    studiesPerformancePrice: "Price",
    studiesPerformancePublicity: "Publicity",
    studiesPerformanceAction: "Marketing Action",
    studiesPerformanceSellor: "Sellor Workforce",
    studiesPerformanceCredit: "Credit",
    //Periode Changement
    periodeChangeCreation: "Create Result",
    periodeChangeRound: "This simulation is at round",
    periodeChangeButton: "Change Round"
};
//# sourceMappingURL=english.const.js.map

/***/ }),

/***/ "../../../../../src/app/language/languages/french.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRENCH; });
var FRENCH = {
    //Principale
    //header
    principalHeaderTitle: "0",
    principalHaderSession: "session",
    principalHeaderPlace: "à",
    //navigator
    principalNavigatorIntroduction: "Initialisation",
    principalNavigatorCompanies: "Entreprises:",
    principalNavigatorCompaniesName: "Entreprise",
    principalNavigatorCompaniesDecision: "Décision",
    principalNavigatorCompaniesSituation: "Situation",
    principalNavigatorCompaniesComptability: "Comptabilité",
    principalNavigatorCompaniesFlux: "Bilan",
    principalNavigatorCompaniesStudies: "Etudes",
    principalNavigatorPeriode: "Changer de Période",
    principalNavigatorLog: "Fermer la Session",
    //Authentification
    authName: "Animateur",
    authPlace: "Lieu",
    authDate: "Date",
    authButton: "Créer",
    authOther: "Autres Sessions",
    //Initialization
    initTitle: "Initialisation de la Simulation",
    initButton: "Lancer la simulation",
    //game
    initGameTitle: "Jeu",
    initGameCompany: "Nombre d'Entreprises",
    initGameProduct: "Nombre de Produits",
    //scenario
    initScenarioTitle: "Scénario",
    //Companies
    initCompaniesTitle: "Entreprises",
    initCompaniesName: "Nom de l'Entreprise",
    initCompaniesCapital: "Capital Social",
    initCompaniesMachinery: "Nombre de Machine",
    initCompaniesAll: "Toutes les Entreprises",
    initCompaniesNamePlaceholder: "Entreprise",
    //politic
    initPoliticTitle: "Politique de la Simulation",
    initPoliticSupp: "Suppléments",
    initPoliticSuppTime: "Heures Supplémentaires",
    initPoliticSuppCost: "Surcoût",
    initPoliticSalary: "Salaires",
    initPoliticSalaryProductor: "Producteur",
    initPoliticSalarySellor: "Vendeur",
    initPoliticSalaryManager: "Cadre",
    initPoliticSalaryHire: "Coût du licenciement",
    initPoliticSalaryFire: "Coût d'embauche",
    initPoliticSalaryFormation: "Formation minimal",
    initPoliticRate: "Taux",
    initPoliticRateBorrowing: "Emprunt",
    initPoliticRateOverdraft: "Découvert Authorisé",
    initPoliticRateNonOverdraft: "Découvert Non Authorisé",
    initPoliticRateAuthorization: "Montant du Découvert Authorisé",
    initPoliticRatePlacement: "Placement",
    initPoliticRateVAT: "TVA",
    initPoliticRateTax: "Impots Sociétés",
    initPoliticRateCredit: "Crédit Fournisseurs",
    initPoliticCapacity: "Capacité de Production",
    initPoliticCapacityMachinery: "Heures Possible de Production par Machine",
    initPoliticCapacityProductor: "Heures Possible de Production par Producteur",
    initPoliticMachinery: "Type de Machine",
    initPoliticMachineryPrice: "Prix d'une Machine",
    initPoliticMachineryAmortization: "Amortissement d'une Machine",
    initPoliticMachineryReparation: "Prix de réparation d'une Machine",
    initPoliticCost: "Coûts Généraux",
    initPoliticCostStockage: "Prix du Stockage",
    initPoliticCostFix: "Coûts Fixes",
    initPoliticCostSlice: "Tranches d'immobilisation",
    initPoliticCostSupp: "Supplément de coûts fixe par tranche",
    initPoliticCostInsurance: "Prix de l'assurance",
    //product
    initProductTitle: "Produits",
    initProductNames: "Produits",
    initProductName: "Produit",
    initProductPotential: "Demande Potentiel par Entreprise",
    initProductEvolution: "Evolution de la demande",
    initProductEvolutionCD: "Croissante / Décroissante",
    initProductEvolutionExpo: "Exponentielle",
    initProductEvolutionRandom: "Aléatoire",
    initProductEvolutionTotalRandom: "Totalement Aléatoire",
    initProductTime: "Temps de Production",
    initProductCost: "Prix Unitaire de production",
    initProductMin: "Prix Minimum de vente",
    initProductMax: "Prix Maximum de vente",
    //affinity
    initAffinityTitle: "Affinité du Produit",
    initAffinityNumber: "Nombre de poids sensibilisant le consommateur",
    initAffinityName: "Nom de l'affinité",
    initAffinityWeight: "Importance",
    initAffinityType: "Type",
    initAffinityTypePrice: "Prix",
    initAffinityTypePublicity: "Publicité",
    initAffinityTypeRD: "Recherche et Développement",
    initAffinityTypeCredit: "Crédit",
    initAffinityTypeSellor: "Force de Vente",
    initAffinityTypeMarketing: "Action Commercial",
    initAffinityFidelity: "Fidélité",
    //Studies
    initStudiesTitle: "Etudes",
    initStudiesProduct: "produit",
    initStudiesPart: "Parts de Marché",
    initStudiesResult: "Résultats",
    initStudiesStructure: "Structure Financière",
    initStudiesMarket: "Situation du marché",
    initStudiesPerformance: "Performance de l'Entreprise",
    //Decision
    decTitle: "Décision",
    decCompanyName: "Entreprise",
    decPeriode: "Période",
    decButton: "Sauvegarder la Décision",
    //Decision General
    decGeneralDecision: "Décisions Générales",
    //Financial Structure
    decFinancialStructureTitle: "Structure Financière",
    decFinancialStructureVarCap: "Variation de Capital",
    decFinancialStructureDistribution: "Distributions",
    decFinancialStructureVarBorrow: "Variation d'emprunt",
    decFinancialStructureSubvention: "Subventions",
    decFinancialStructureEx: "Produits ou Charges Ex",
    //Machinery
    decMachineryTitle: "Machinerie",
    decMachineryNumber: "Nombre de Machines",
    decMachineryAdd: "Achats",
    decMachineryDel: "Ventes",
    decMachineryRepair: "Entretien",
    //Decision Product
    decProduct: "Décisions Produits",
    //Fabrication
    decFabricationTitle: "Fabrication",
    decFabricationNames: "Nom du Produit",
    decFabricationName: "Produit",
    decFabricationProduction: "Production",
    decFabricationMachinery: "Machines Affectées",
    decFabricationProductor: "Producteurs Affectés",
    //Marketing
    decMarketingTitle: "Commercialisation",
    decMarketingType: "Type de Produit",
    decMarketingName: "Produit",
    decMarketingPrice: "Prix",
    decMarketingPublicity: "Publicité",
    decMarketingSellor: "Force de Vente",
    decMarketingAction: "Action Commercial",
    decMarketingRD: "Recherche et Developpement",
    decMarketingCredit: "Crédit Client",
    //Decision Human Ressource
    decHR: "Ressources Humaines",
    //Remuneration
    decRemunerationTitle: "Rémunération",
    decRemunerationSalary: "Indice des salaires",
    decRemunerationCommission: "Commissions aux vendeurs",
    decRemunerationBudget: "Budget Formation",
    //Employees
    decEmployeesTitle: "Employees",
    decEmployeesProductor: "Producteurs",
    decEmployeesSellor: "Vendeurs",
    decEmployeesManager: "Cadres",
    decEmployeesHire: "Embauche",
    decEmployeesFire: "Licenciement",
    //Decision Studies
    decStudiesTitle: "Etudes de Marchés",
    decStudiesProduct: "Produit",
    decStudiesMarketPart: "Part de Marché",
    decStudiesResult: "Résultats",
    decStudiesFinancialStructure: "Structure Financière",
    decStudiesMarketSituation: "Situation du Marché",
    decStudiesPerformance: "Performance de l'entreprise",
    //Decision Exceptionnal
    decExceptionalTitle: "Décisions Exceptionnelles",
    //Storage
    decStorageTitle: "Liquidation des stocks",
    decStorageNames: "Nom du Produit",
    decStorageName: "Produit",
    decStorageQuantity: "Quantité",
    //Exceptionnal
    decExceptionalFabricationTitle: "Fabrication Exceptionnelle",
    decExceptionalFabricationNames: "Nom du Produit",
    decExceptionalFabricationName: "Produit",
    decExceptionalFabricationQuantity: "Quantité",
    decExceptionalFabricationPrice: "Prix",
    //Situation
    situTitle: "Situation",
    situCompany: "Entreprise",
    situPeriode: "Période",
    //Situation Structure
    situStructureTitle: "Structure de l'Entreprise",
    situStructureOldPeriode: "Fin de la période précédante",
    situStructureNewPeriode: "Fin de cette période",
    situStructureCapacity: "Capacité productive (heures)",
    situStructureNumber: "Nombre de produits",
    situStructureStorage: "Stock (en valeur)",
    situStructureProductor: "Effectifs: Producteurs",
    situStructureSellor: "Effectifs: Vendeurs",
    situStructureManager: "Effectifs: Cadre",
    situStructureDebt: "Créances Clients",
    situStructureBreakdown: "Pannes",
    situStructureStrike: "Grèves",
    //Situation Decision
    situDecisionTitle: "Décisions d'Exploitation",
    situDecisionName: "Produit",
    situDecisionAffected: "Machines Affectées",
    situDecisionPercentAffected: "Pourcentage de Machines Affectées",
    situDecisionProductor: "Producteurs Affectés",
    situDecisionProduction: "Production Prévue",
    situDecisionFabricationTime: "Temps de Fabrication du composant",
    situDecisionPrice: "Prix",
    situDecisionPublicity: "Publicité",
    situDecisionSellor: "Force de Vente",
    situDecisionAction: "Action Commercial",
    situDecisionRD: "Recherche en Qualité",
    situDecisionCredit: "Crédit Client",
    //Situation Result
    situResultTitle: "Résultats",
    situResultName: "Produit",
    situResultRealProduction: "Production Réelle",
    situResultUseMachine: "Taux d'utilisation machines",
    situResultOvertime: "Heures Supplémentaires",
    situResultSellNormal: "Ventes Normales (quantité)",
    situResultSellStorage: "Ventes Soldées (quantité)",
    situResultSellSpecial: "Ventes Speciales (quantité)",
    situResultTurnover: "Chiffre d'affaires",
    situResultMarketPart: "Parts de marché",
    situResultStorageQuantity: "Stock (quantité)",
    situResultStorageValue: "Stock (valeur)",
    //Comptability
    comptaTitle: "Comptes de Résultats",
    comptaCompany: "Entreprise",
    comptaPeriode: "Période",
    //Comptability Storage
    comptaStorageTitle: "Produits d'Exploitation",
    comptaStorageName: "Produit",
    comptaStorageTotal: "Total",
    comptaStorageSoldNormal: "Production vendue",
    comptaStorageSoldStorage: "Production soldée",
    comptaStorageSoldSpecial: "Production offre spéciale",
    comptaStorageStorageValue: "Production stockée",
    comptaStorageSubvention: "Subventions",
    //Comptability Charges
    comptaChargesTitle: "Charges d'Exploitation",
    comptaChargesName: "Produit",
    comptaChargesTotal: "Total",
    comptaChargesConso: "Consommation matières",
    comptaChargesWorkforce: "Main d'Oeuvre Directe",
    comptaChargesRD: "Coût de la qualité",
    comptaChargesPublicity: "Publicité",
    comptaChargesActionMarketing: "Action Commerciale",
    comptaChargesSellorRemuneration: "Rémunération de la Force de Vente",
    comptaChargesStorageCost: "Coût de Stockage",
    comptaChargesDotation: "Dotation aux amortissements",
    comptaChargesRemuneration: "Rémunération de l'encadrement",
    comptaChargesHireCost: "Coût d'embauche",
    comptaChargesFireCost: "Coût de licenciement",
    comptaChargesFormationCost: "Coût de formation",
    comptaChargesFixCostProduction: "Coût fixes de production",
    comptaChargesRepairCost: "Coût des réparations",
    comptaChargesServicing: "Coût d'entretien des machines",
    comptaChargesInsurance: "Primes d'assurances",
    comptaChargesStudiesCost: "Coût des études",
    //Comptability Financial
    comptaFinancialTitle: "Résultats Financiers",
    comptaFinancialProduct: "Produits Financiers",
    comptaFinancialCharges: "Charge Financières",
    //Comptability Final
    comptaFinalTitle: "Résultats",
    comptaFinalExploitation: "Résultats d'Exploitation",
    comptaFinalFinance: "Résultats Financiers",
    comptaFinalExceptionnalProduct: "Résultats Exceptionnels (produits)",
    comptaFinalExceptionnalCharges: "Résultats Exceptionnels (charges)",
    comptaFinalInsurance: "Remboursement assurances",
    comptaFinalBeforeTax: "Résultats avant impôts",
    comptaFinalTax: "impôt sur les sociétés",
    comptaFinalNetResult: "Résultats Net",
    //Flux
    fluxTitle: "Bilan",
    fluxCompany: "Entreprise",
    fluxPeriode: "Période",
    //Flux Assets
    fluxAssetsTitle: "Emplois Principaux (Actif)",
    fluxAssetsImmo: "Actif Immobilisé",
    fluxAssetsImmoTools: "Outillage",
    fluxAssetsImmoAmortization: "Amortissement",
    fluxAssetsMove: "Actif Circulant",
    fluxAssetsMoveStorage: "Stock Produits Finis",
    fluxAssetsMoveClient: "Clients",
    fluxAssetsMoveBank: "Banque",
    fluxAssetsTotal: "Total de l'Actif",
    //Flux Liabilities
    fluxLiabilitiesTitle: "Finances par (Passif)",
    fluxLiabilitiesImmo: "Ressources Immobilisé",
    fluxLiabilitiesImmoCapital: "Capital Social",
    fluxLiabilitiesImmoReserve: "Reserves / Report",
    fluxLiabilitiesImmoResult: "Résultats de l'exercice",
    fluxLiabilitiesMove: "Ressources Circulant",
    fluxLiabilitiesMoveBorrow: "Emprunts",
    fluxLiabilitiesMoveBank: "Concours Bancaires",
    fluxLiabilitiesMoveProvider: "Fournisseurs",
    fluxLiabilitiesMoveDebt: "Dettes Fiscales",
    fluxLiabilitiesTotal: "Total du Passif",
    //Studies
    studiesTitle: "Etudes",
    studiesCompany: "Entreprise",
    studiesPeriode: "Période",
    //Studies Product
    studiesProductTitle: "Politiques des Concurrents sur le Produit",
    studiesProductPrice: "Prix",
    studiesProductPublicity: "Publicité",
    studiesProductAction: "Action Commerciale",
    studiesProductSellor: "Force de Vente",
    studiesProductCredit: "Crédit Client",
    //Studies Market Part
    studiesMPTitle: "Parts de marché des concurrents sur les produits",
    studiesMPProd: "Produit",
    //Studies Concurrence
    studiesConcuTitle: "Résultats des concurrents",
    studiesConcuFiscal: "Résultat Fiscal",
    studiesConcuNet: "Résultat Net",
    studiesConcuProduct: "Produit",
    studiesConcuTurnover: "CA",
    //Studies Structures
    studiesStructTitle: "Structure des entreprises concurrentes",
    studiesStructCapital: "Capital Propre",
    studiesStructImmo: "immobilisation",
    studiesStructStorage: "Valeur des Stocks",
    studiesStructInDebt: "Endettement",
    studiesStructOverdraft: "Découvert",
    studiesStructOvertimeProd: "HS (%) Produit",
    //Studies Market Situation
    studiesMSTitle: "Situation du marché",
    studiesMSPotential: "Demande Potentielle",
    studiesMSEffective: "Demande Effective",
    //Studies Performance
    studiesPerformanceTitle: "Performance de l'entreprise",
    studiesPerformanceNameProduct: "Produit",
    studiesPerformancePrice: "Prix",
    studiesPerformancePublicity: "Publicité",
    studiesPerformanceAction: "Action Commerciale",
    studiesPerformanceSellor: "Force de Vente",
    studiesPerformanceCredit: "Crédit",
    //Periode Changement
    periodeChangeCreation: "Création de Résultats",
    periodeChangeRound: "Cette Simulation est à la période",
    periodeChangeButton: "Changer de Période"
};
//# sourceMappingURL=french.const.js.map

/***/ }),

/***/ "../../../../../src/app/objects/attract.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attract; });
var Attract = (function () {
    function Attract() {
    }
    return Attract;
}());

//# sourceMappingURL=attract.js.map

/***/ }),

/***/ "../../../../../src/app/objects/company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ "../../../../../src/app/objects/decision/exceptionnal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exceptionnal; });
var Exceptionnal = (function () {
    function Exceptionnal() {
    }
    return Exceptionnal;
}());

//# sourceMappingURL=exceptionnal.js.map

/***/ }),

/***/ "../../../../../src/app/objects/decision/financial.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancialDecision; });
var FinancialDecision = (function () {
    function FinancialDecision() {
    }
    return FinancialDecision;
}());

//# sourceMappingURL=financial.js.map

/***/ }),

/***/ "../../../../../src/app/objects/decision/machine-flux.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineFlux; });
var MachineFlux = (function () {
    function MachineFlux() {
    }
    return MachineFlux;
}());

//# sourceMappingURL=machine-flux.js.map

/***/ }),

/***/ "../../../../../src/app/objects/decision/production.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Production; });
var Production = (function () {
    function Production() {
    }
    return Production;
}());

//# sourceMappingURL=production.js.map

/***/ }),

/***/ "../../../../../src/app/objects/decision/remuneration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Remuneration; });
var Remuneration = (function () {
    function Remuneration() {
    }
    return Remuneration;
}());

//# sourceMappingURL=remuneration.js.map

/***/ }),

/***/ "../../../../../src/app/objects/decision/studies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Studies; });
var Studies = (function () {
    function Studies() {
    }
    return Studies;
}());

//# sourceMappingURL=studies.js.map

/***/ }),

/***/ "../../../../../src/app/objects/initialization.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Initialization; });
var Initialization = (function () {
    function Initialization() {
    }
    return Initialization;
}());

//# sourceMappingURL=initialization.js.map

/***/ }),

/***/ "../../../../../src/app/objects/politic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Politic; });
var Politic = (function () {
    function Politic() {
    }
    return Politic;
}());

//# sourceMappingURL=politic.js.map

/***/ }),

/***/ "../../../../../src/app/objects/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/objects/studies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Studies; });
var Studies = (function () {
    function Studies() {
    }
    return Studies;
}());

//# sourceMappingURL=studies.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/percent.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PercentPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PercentPipe = (function () {
    function PercentPipe() {
    }
    PercentPipe.prototype.transform = function (input) {
        if (input > 100) {
            return 100;
        }
        if (input < 0) {
            return 0;
        }
        return input;
    };
    return PercentPipe;
}());
PercentPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'percent'
    })
], PercentPipe);

//# sourceMappingURL=percent.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/round-at-0.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundAt0Pipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundAt0Pipe = (function () {
    function RoundAt0Pipe() {
    }
    RoundAt0Pipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    return RoundAt0Pipe;
}());
RoundAt0Pipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'roundAt0'
    })
], RoundAt0Pipe);

//# sourceMappingURL=round-at-0.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/round-at-2.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundAt2Pipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundAt2Pipe = (function () {
    function RoundAt2Pipe() {
    }
    RoundAt2Pipe.prototype.transform = function (input) {
        var int = input * 100;
        var roundat2 = Math.round(int);
        var result = roundat2 / 100;
        return result;
    };
    return RoundAt2Pipe;
}());
RoundAt2Pipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'roundAt2'
    })
], RoundAt2Pipe);

//# sourceMappingURL=round-at-2.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/results/results-charge/results-charge.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".charge{\r\n  display: inline-block;\r\n  width: 99%;\r\n}\r\n.block{\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.charge-label,\r\n.charge-result,\r\n.charge-total,\r\n.all-product{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.charge-label{\r\n  width: 30%;\r\n  text-align: left;\r\n}\r\n.all-product{\r\n  width: 50%;\r\n}\r\n.charge-result{\r\n  width: 25%;\r\n}\r\n.charge-total{\r\n  width: 10%;\r\n}\r\n/************************************/\r\n\r\n.charge{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  overflow: auto;\r\n  padding: 0px;\r\n}\r\n.charge p{\r\n  background: #808080;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  margin-bottom: 0x;\r\n  font-size: 25px;\r\n}\r\n\r\n/************************************/\r\n.block{\r\n  margin-bottom: 5px;\r\n}\r\n.charge-label div,\r\n.charge-result div,\r\n.charge-total div{\r\n  padding: 2px 5px;\r\n  margin: 2.5px 10px;\r\n  border: 0.5px solid black;\r\n}\r\n\r\n.charge-label div{\r\n  background: #808080;\r\n}\r\n.charge-result div:nth-child(1),\r\n.charge-total div:nth-child(1){\r\n  background: #808080;\r\n}\r\n.charge-label div:nth-child(1){\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n/************************************/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results-charge/results-charge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"charge\">\r\n\r\n  <p class=\"title\">{{ lang.comptaChargesTitle }}</p>\r\n\r\n  <div class=\"block\">\r\n\r\n    <div class=\"charge-label\">\r\n      <div><label>&nbsp;</label></div>\r\n\r\n      <div><label>{{ lang.comptaChargesConso }}</label></div>\r\n      <div><label>{{ lang.comptaChargesWorkforce }}</label></div>\r\n      <div><label>{{ lang.comptaChargesRD }}</label></div>\r\n      <div><label>{{ lang.comptaChargesPublicity }}</label></div>\r\n      <div><label>{{ lang.comptaChargesActionMarketing }}</label></div>\r\n      <div><label>{{ lang.comptaChargesSellorRemuneration }}</label></div>\r\n      <div><label>{{ lang.comptaChargesStorageCost }}</label></div>\r\n      <div><label>{{ lang.comptaChargesDotation }}</label></div>\r\n\r\n      <div><label>{{ lang.comptaChargesRemuneration }}</label></div>\r\n      <div><label>{{ lang.comptaChargesHireCost }}</label></div>\r\n      <div><label>{{ lang.comptaChargesFireCost }}</label></div>\r\n      <div><label>{{ lang.comptaChargesFormationCost }}</label></div>\r\n      <div><label>{{ lang.comptaChargesFixCostProduction }}</label></div>\r\n      <div><label>{{ lang.comptaChargesRepairCost }}</label></div>\r\n      <div><label>{{ lang.comptaChargesServicing }}</label></div>\r\n      <div><label>{{ lang.comptaChargesInsurance }}</label></div>\r\n      <div><label>{{ lang.comptaChargesStudiesCost }}</label></div>\r\n    </div>\r\n\r\n    <!-- TODO: Service de résultats -->\r\n    <div class=\"all-product\">\r\n\r\n    <div class=\"charge-result\" *ngFor=\"let product of company.companyProduct; let iProd = index\">\r\n      <div><label> {{ lang.comptaChargesName }} {{ iProd + 1 }}</label></div>\r\n\r\n      <div><label> {{ charges[iProd].materialConso | roundAt2 }} </label></div>\r\n      <div><label> {{ charges[iProd].directLabour | roundAt2 }} </label></div>\r\n      <div><label> {{ charges[iProd].qualityCost | roundAt2 }} </label></div>\r\n      <div><label> {{ charges[iProd].publicityCost | roundAt2 }} </label></div>\r\n      <div><label> {{ charges[iProd].marketingCost | roundAt2 }} </label></div>\r\n      <div><label> {{ charges[iProd].sellerLabour | roundAt2 }} </label></div>\r\n      <div><label> {{ charges[iProd].stockCost | roundAt2 }} </label></div>\r\n      <div><label> {{ charges[iProd].amortissementDot | roundAt2 }} </label></div>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"charge-total\">\r\n      <div><label>{{ lang.comptaChargesTotal }}</label></div>\r\n\r\n      <div><label> {{ chargesTotal.materialConso | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.directLabour | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.qualityCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.publicityCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.marketingCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.sellerLabour | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.stockCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.amortissementDot | roundAt2 }} </label></div>\r\n\r\n      <div><label> {{ chargesTotal.managerCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.hireCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.fireCost | roundAt2 }} </label></div>  <!-- {{ chargesTotal.fireCost | roundAt2 }} -->\r\n      <div><label> {{ chargesTotal.formationCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.productionFixCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.reparationCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.servicingCost | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.assuranceBonus | roundAt2 }} </label></div>\r\n      <div><label> {{ chargesTotal.studiesCost | roundAt2 }} </label></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"block final\">\r\n\r\n    <div class=\"charge-label\">\r\n      <div><label>&nbsp;</label></div>\r\n    </div>\r\n\r\n  <div class=\"all-product\">\r\n\r\n    <div class=\"charge-result\" *ngFor=\"let product of company.companyProduct; let iProd = index\">\r\n      <div><label>{{ sumCharges[iProd] | roundAt2 }}</label></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n    <div class=\"charge-total\">\r\n      <div><label>{{ sumChargesTotal | roundAt2 }}</label></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/results/results-charge/results-charge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsChargeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Service

var ResultsChargeComponent = (function () {
    function ResultsChargeComponent(decision, langServ) {
        var _this = this;
        this.decision = decision;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ResultsChargeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.charges = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.company.result).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                Object.keys(_this.company.result[keyResult].charge).map(function (key) {
                    if (key == "all") {
                        _this.chargesTotal = _this.company.result[keyResult].charge[key];
                    }
                    else {
                        _this.charges.push(_this.company.result[keyResult].charge[key]);
                    }
                });
            }
        });
        this.sumCharges = [];
        this.charges.map(function (charge, iProd) {
            var sumCharge = _this.charges[iProd].materialConso;
            sumCharge += _this.charges[iProd].directLabour;
            sumCharge += _this.charges[iProd].qualityCost;
            sumCharge += _this.charges[iProd].publicityCost;
            sumCharge += _this.charges[iProd].marketingCost;
            sumCharge += _this.charges[iProd].sellerLabour;
            sumCharge += _this.charges[iProd].stockCost;
            sumCharge += _this.charges[iProd].amortissementDot;
            _this.sumCharges.push(sumCharge);
        });
        this.sumChargesTotal = 0;
        Object.keys(this.chargesTotal).map(function (key) {
            _this.sumChargesTotal += _this.chargesTotal[key];
        });
    };
    ResultsChargeComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return ResultsChargeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ResultsChargeComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], ResultsChargeComponent.prototype, "periode", void 0);
ResultsChargeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'results-charge',
        template: __webpack_require__("../../../../../src/app/results/results-charge/results-charge.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results-charge/results-charge.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_decisions_service__["a" /* DecisionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _b || Object])
], ResultsChargeComponent);

var _a, _b;
//# sourceMappingURL=results-charge.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results-exploitation/results-exploitation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".exploitation{\r\n  display: inline-block;\r\n  width: 99%;\r\n}\r\n.block{\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.exploitation-label,\r\n.exploitation-result,\r\n.exploitation-total,\r\n.all-product{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.exploitation-label{\r\n  width: 30%;\r\n  text-align: left;\r\n}\r\n.all-product{\r\n  width: 50%;\r\n}\r\n.exploitation-result{\r\n  width: 25%;\r\n}\r\n.exploitation-total{\r\n  width: 10%;\r\n}\r\n/************************************/\r\n\r\n.exploitation{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  overflow: auto;\r\n  padding: 0px;\r\n}\r\n.exploitation p{\r\n  background: #808080;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  margin-bottom: 0x;\r\n  font-size: 25px;\r\n}\r\n\r\n/************************************/\r\n.block{\r\n  margin-bottom: 5px;\r\n}\r\n.exploitation-label div,\r\n.exploitation-result div,\r\n.exploitation-total div{\r\n  padding: 2px 5px;\r\n  margin: 2.5px 10px;\r\n  border: 0.5px solid black;\r\n}\r\n\r\n.exploitation-label div{\r\n  background: #808080;\r\n}\r\n.exploitation-result div:nth-child(1),\r\n.exploitation-total div:nth-child(1){\r\n  background: #808080;\r\n}\r\n.exploitation-label div:nth-child(1){\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n/************************************/\r\n.exploitation-result div{\r\n  text-align: right;\r\n}\r\n.exploitation-result div:nth-child(1){\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results-exploitation/results-exploitation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"exploitation\">\r\n\r\n  <p>{{ lang.situDecisionTitle }}</p>\r\n\r\n  <div class=\"exploitation-label\">\r\n    <div><label>&nbsp;</label></div>\r\n    <div><label>{{ lang.situDecisionAffected }}</label></div>\r\n    <div><label>{{ lang.situDecisionPercentAffected }}</label></div>\r\n    <div><label>{{ lang.situDecisionProductor }}</label></div>\r\n    <div><label>{{ lang.situDecisionProduction }}</label></div>\r\n    <div><label>{{ lang.situDecisionFabricationTime }}</label></div>\r\n    <div *ngFor=\"let attract of largerAttracts.attracts\"><label>{{ attract.name }}</label></div>\r\n  </div>\r\n\r\n  <!-- TODO: les attarction doivent venir d'un objet de décision -->\r\n  <div class=\"exploitation-result\" *ngFor=\"let product of company.companyProduct; let iProd = index\">\r\n    <div><label> {{ lang.situDecisionName }} {{ iProd + 1 }} </label></div>\r\n    <div><label> {{ exploitation[iProd].affectedMachine }} </label></div>\r\n    <div><label> {{ exploitation[iProd].purcentMachine | roundAt2 }} </label></div>\r\n    <div><label> {{ exploitation[iProd].affectedProductor }} </label></div>\r\n    <div><label> {{ exploitation[iProd].productionPlanned }} </label></div>\r\n    <div><label> {{ exploitation[iProd].fabricationTime | roundAt2 }}</label></div>\r\n    <div *ngFor=\"let dec of decisionsMarketing\">\r\n      <label *ngIf=\"dec.type === 'price' \">       {{ exploitation[iProd].priceDecision }} </label>\r\n      <label *ngIf=\"dec.type === 'publicity' \">   {{ exploitation[iProd].publicityDecision }} </label>\r\n      <label *ngIf=\"dec.type === 'sellorForce' \"> {{ exploitation[iProd].sellorAffected }} </label>\r\n      <label *ngIf=\"dec.type === 'marketing' \">   {{ exploitation[iProd].marketingAction }} </label>\r\n      <label *ngIf=\"dec.type === 'research' \">    {{ exploitation[iProd].qualityDecision }} </label>\r\n      <label *ngIf=\"dec.type === 'credit' \">      {{ exploitation[iProd].clientCredit }} </label>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/results/results-exploitation/results-exploitation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_company__ = __webpack_require__("../../../../../src/app/objects/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsExploitationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Objects

//Service

var ResultsExploitationComponent = (function () {
    function ResultsExploitationComponent(decision, langServ) {
        var _this = this;
        this.decision = decision;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ResultsExploitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //largerAttracts
        this.largerAttracts = this.decision.foundLargerProduct(this.company.companyProduct);
        this.decisionsMarketing = [];
        Object.keys(this.company.decision.marketingDecision).map(function (key) { return _this.decisionsMarketing.push(_this.company.decision.marketingDecision[key]); });
        //Exploitation
        this.exploitation = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.company.result).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                Object.keys(_this.company.result[keyResult].choice).map(function (key) {
                    _this.exploitation.push(_this.company.result[keyResult].choice[key]);
                });
            }
        });
    };
    ResultsExploitationComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return ResultsExploitationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__objects_company__["a" /* Company */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__objects_company__["a" /* Company */]) === "function" && _a || Object)
], ResultsExploitationComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], ResultsExploitationComponent.prototype, "periode", void 0);
ResultsExploitationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'results-exploitation',
        template: __webpack_require__("../../../../../src/app/results/results-exploitation/results-exploitation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results-exploitation/results-exploitation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], ResultsExploitationComponent);

var _a, _b, _c;
//# sourceMappingURL=results-exploitation.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results-final/results-final.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comptability{\r\n  display: inline-block;\r\n  width: 99%;\r\n}\r\n.block{\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.comptability-label,\r\n.comptability-first,\r\n.comptability-second,\r\n.all-product{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.comptability-label{\r\n  width: 30%;\r\n  text-align: left;\r\n}\r\n.comptability-first{\r\n  width: 50%;\r\n}\r\n.comptability-second{\r\n  width: 10%;\r\n}\r\n/************************************/\r\n\r\n.comptability{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  overflow: auto;\r\n  padding: 0px;\r\n}\r\n.comptability p{\r\n  background: #808080;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  margin-bottom: 0x;\r\n  font-size: 25px;\r\n}\r\n\r\n/************************************/\r\n.block{\r\n  margin-bottom: 5px;\r\n}\r\n.comptability-label div,\r\n.comptability-first div,\r\n.comptability-second div{\r\n  padding: 2px 5px;\r\n  margin: 2.5px 10px;\r\n  border: 0.5px solid black;\r\n}\r\n\r\n.comptability-label div{\r\n  background: #808080;\r\n}\r\n\r\n/************************************/\r\n.comptability-first div{\r\n  width: 20%;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: 0px;\r\n}\r\n.space{\r\n  border: none !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results-final/results-final.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Faire le service bon sens -->\r\n<div class=\"comptability\">\r\n\r\n  <p>{{ lang.comptaFinalTitle }}</p>\r\n\r\n  <div class=\"block\">\r\n\r\n    <div class=\"comptability-label\">\r\n      <div><label>{{ lang.comptaFinalExploitation }}</label></div>\r\n      <div><label>{{ lang.comptaFinalFinance }}</label></div>\r\n      <div><label>{{ lang.comptaFinalExceptionnalProduct }}</label></div>\r\n      <div><label>{{ lang.comptaFinalExceptionnalCharges }}</label></div>\r\n      <div><label>{{ lang.comptaFinalInsurance }}</label></div>\r\n    </div>\r\n\r\n    <div class=\"comptability-first\">\r\n      <!-- The Blank One are here to make the space -->\r\n      <div class=\"space\">&nbsp;</div>\r\n      <div class=\"space\">&nbsp;</div>\r\n      <div>{{ exceptional.exceptionalCharges | roundAt2 }}</div>\r\n      <div>{{ exceptional.exceptionalProduct | roundAt2 }}</div>\r\n      <div class=\"space\">&nbsp;</div>\r\n    </div>\r\n\r\n    <div class=\"comptability-second\">\r\n      <div>{{ exercice.exerciceExercie | roundAt2 }}</div>\r\n      <div>{{ exercice.exerciceFinance | roundAt2 }}</div> <!-- TODO: exercice finances -->\r\n      <div class=\"space\">&nbsp;</div>\r\n      <div>{{ exceptional.result }}</div>\r\n      <div>{{ exercice.exerciceRefund | roundAt2 }}</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"block\">\r\n\r\n    <div class=\"comptability-label\">\r\n      <div><label>{{ lang.comptaFinalBeforeTax }}</label></div>\r\n      <div><label>{{ lang.comptaFinalTax }}</label></div>\r\n    </div>\r\n\r\n    <div class=\"comptability-first\">\r\n      <!-- The Blank One are here to make the space -->\r\n      <div class=\"space\">&nbsp;</div>\r\n      <div class=\"space\">&nbsp;</div>\r\n    </div>\r\n\r\n    <div class=\"comptability-second\">\r\n      <div>{{ exercice.exerciceNet | roundAt2 }}</div>\r\n      <div>{{ exercice.exerciceTax | roundAt2 }}</div> <!-- TODO: exercice finances -->\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"block\">\r\n\r\n    <div class=\"comptability-label\">\r\n      <div><label>{{ lang.comptaFinalNetResult }}</label></div>\r\n    </div>\r\n\r\n    <div class=\"comptability-first\">\r\n      <!-- The Blank One are here to make the space -->\r\n      <div class=\"space\">&nbsp;</div>\r\n    </div>\r\n\r\n    <div class=\"comptability-second\">\r\n      <div>{{ exercice.exerciceWithTax | roundAt2 }}</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/results/results-final/results-final.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsFinalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsFinalComponent = (function () {
    function ResultsFinalComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ResultsFinalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exceptional = [];
        this.exercice = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.company.result).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.exceptional = _this.company.result[keyResult].exceptional;
                _this.exercice = _this.company.result[keyResult].exercice;
            }
        });
    };
    ResultsFinalComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return ResultsFinalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ResultsFinalComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], ResultsFinalComponent.prototype, "periode", void 0);
ResultsFinalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'results-final',
        template: __webpack_require__("../../../../../src/app/results/results-final/results-final.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results-final/results-final.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], ResultsFinalComponent);

var _a;
//# sourceMappingURL=results-final.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results-financial/results-financial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".finance{\r\n  display: inline-block;\r\n  width: 99%;\r\n}\r\n.block{\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.finance-label,\r\n.finance-first,\r\n.finance-second,\r\n.all-product{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.finance-label{\r\n  width: 30%;\r\n  text-align: left;\r\n}\r\n.finance-first{\r\n  width: 50%;\r\n}\r\n.finance-second{\r\n  width: 10%;\r\n}\r\n/************************************/\r\n\r\n.finance{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  overflow: auto;\r\n  padding: 0px;\r\n}\r\n.finance p{\r\n  background: #808080;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  margin-bottom: 0x;\r\n  font-size: 25px;\r\n}\r\n\r\n/************************************/\r\n.block{\r\n  margin-bottom: 5px;\r\n}\r\n.finance-label div,\r\n.finance-first div,\r\n.finance-second div{\r\n  padding: 2px 5px;\r\n  margin: 2.5px 10px;\r\n  border: 0.5px solid black;\r\n}\r\n\r\n.finance-label div{\r\n  background: #808080;\r\n}\r\n\r\n/************************************/\r\n.finance-first div{\r\n  width: 20%;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: 0px;\r\n}\r\n.space{\r\n  border: none !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results-financial/results-financial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"finance\">\r\n\r\n  <p>{{ lang.comptaFinancialTitle }}</p>\r\n\r\n  <div class=\"block\">\r\n\r\n    <div class=\"finance-label\">\r\n      <div><label>{{ lang.comptaFinancialProduct }}</label></div>\r\n      <div><label>{{ lang.comptaFinancialCharges }}</label></div>\r\n    </div>\r\n\r\n    <div class=\"finance-first\">\r\n      <div>{{ finances.financeCharges }}</div>\r\n      <div>{{ finances.financeProducts }}</div>\r\n    </div>\r\n\r\n    <div class=\"finance-second\">\r\n      <div class=\"space\"><label>&nbsp;</label></div>\r\n      <div>{{ finances.result }}</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/results/results-financial/results-financial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsFinancialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsFinancialComponent = (function () {
    function ResultsFinancialComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ResultsFinancialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.finances = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.company.result).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.finances = _this.company.result[keyResult].finance;
            }
        });
    };
    ResultsFinancialComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return ResultsFinancialComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ResultsFinancialComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], ResultsFinancialComponent.prototype, "periode", void 0);
ResultsFinancialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'results-financial',
        template: __webpack_require__("../../../../../src/app/results/results-financial/results-financial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results-financial/results-financial.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], ResultsFinancialComponent);

var _a;
//# sourceMappingURL=results-financial.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results-productions/results-productions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".productions{\r\n  display: inline-block;\r\n  width: 99%;\r\n}\r\n.block{\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.productions-label,\r\n.productions-result,\r\n.productions-total,\r\n.all-product{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.productions-label{\r\n  width: 30%;\r\n  text-align: left;\r\n}\r\n.all-product{\r\n  width: 50%;\r\n}\r\n.productions-result{\r\n  width: 25%;\r\n}\r\n.productions-total{\r\n  width: 10%;\r\n}\r\n/************************************/\r\n\r\n.productions{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  overflow: auto;\r\n  padding: 0px;\r\n}\r\n.productions p{\r\n  background: #808080;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  margin-bottom: 0x;\r\n  font-size: 25px;\r\n}\r\n\r\n/************************************/\r\n.block{\r\n  margin-bottom: 5px;\r\n}\r\n.productions-label div,\r\n.productions-result div,\r\n.productions-total div{\r\n  padding: 2px 5px;\r\n  margin: 2.5px 10px;\r\n  border: 0.5px solid black;\r\n}\r\n\r\n.productions-label div{\r\n  background: #808080;\r\n}\r\n.productions-result div:nth-child(1),\r\n.productions-total div:nth-child(1){\r\n  background: #808080;\r\n}\r\n.productions-label div:nth-child(1){\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n/************************************/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results-productions/results-productions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"productions\">\r\n\r\n  <p>{{ lang.comptaStorageTitle }}</p>\r\n\r\n  <div class=\"block\">\r\n\r\n    <div class=\"productions-label\">\r\n      <div><label>&nbsp;</label></div>\r\n      <div><label>{{ lang.comptaStorageSoldNormal }}</label></div>\r\n      <div><label>{{ lang.comptaStorageSoldStorage }}</label></div>\r\n      <div><label>{{ lang.comptaStorageSoldSpecial }}</label></div>\r\n      <div><label>{{ lang.comptaStorageStorageValue }}</label></div>\r\n      <div><label>{{ lang.comptaStorageSubvention }}</label></div>\r\n    </div>\r\n\r\n    <div class=\"all-product\">\r\n    <!-- TODO: Service de résultats -->\r\n    <div class=\"productions-result\" *ngFor=\"let product of company.companyProduct; let iProd = index\">\r\n      <div><label> {{ lang.comptaStorageName }} {{ iProd + 1 }}</label></div>\r\n      <div><label> {{ exploitations[iProd].sellingNormalValue | roundAt2 }} </label></div>\r\n      <div><label> {{ exploitations[iProd].sellingClearValue | roundAt2 }} </label></div>\r\n      <div><label> {{ exploitations[iProd].sellingSpecialValue | roundAt2 }} </label></div>\r\n      <div><label> {{ exploitations[iProd].stockValue | roundAt2 }}</label></div>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"productions-total\">\r\n      <div><label>{{ lang.comptaStorageTotal }}</label></div>\r\n      <div><label> {{ exploitationTotal.sellingNormalValue | roundAt2 }} </label></div>\r\n      <div><label> {{ exploitationTotal.sellingClearValue | roundAt2 }} </label></div>\r\n      <div><label> {{ exploitationTotal.sellingSpecialValue | roundAt2 }} </label></div>\r\n      <div><label> {{ exploitationTotal.stockValue | roundAt2 }} </label></div>\r\n      <div><label> {{ exploitationTotal.subvention | roundAt2 }} </label></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"block\">\r\n\r\n    <div class=\"productions-label\">\r\n      <div><label>&nbsp;</label></div>\r\n    </div>\r\n\r\n    <div class=\"all-product\">\r\n    <div class=\"productions-result\" *ngFor=\"let product of company.companyProduct; let iProd = index\">\r\n      <div><label>{{ sumExploitations[iProd] | roundAt2 }}</label></div>\r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"productions-total\">\r\n      <div><label>{{ sumAllExploitations | roundAt2 }}</label></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/results/results-productions/results-productions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsProductionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsProductionsComponent = (function () {
    function ResultsProductionsComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ResultsProductionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exploitations = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.company.result).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                Object.keys(_this.company.result[keyResult].exploitation).map(function (key) {
                    if (key == "all") {
                        _this.exploitationTotal = _this.company.result[keyResult].exploitation[key];
                    }
                    else {
                        _this.exploitations.push(_this.company.result[keyResult].exploitation[key]);
                    }
                });
            }
        });
        this.sumExploitations = [];
        this.exploitations.map(function (exploitation, iProd) {
            var sumExploitation = _this.exploitations[iProd].sellingNormalValue;
            sumExploitation += _this.exploitations[iProd].sellingClearValue;
            sumExploitation += _this.exploitations[iProd].sellingSpecialValue;
            sumExploitation += _this.exploitations[iProd].stockValue;
            _this.sumExploitations.push(sumExploitation);
        });
        this.sumAllExploitations = 0;
        Object.keys(this.exploitationTotal).map(function (key) {
            _this.sumAllExploitations += _this.exploitationTotal[key];
        });
    };
    ResultsProductionsComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return ResultsProductionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ResultsProductionsComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], ResultsProductionsComponent.prototype, "periode", void 0);
ResultsProductionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'results-productions',
        template: __webpack_require__("../../../../../src/app/results/results-productions/results-productions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results-productions/results-productions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], ResultsProductionsComponent);

var _a;
//# sourceMappingURL=results-productions.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results-selling/results-selling.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selling{\r\n  display: inline-block;\r\n  width: 99%;\r\n}\r\n.block{\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.selling-label,\r\n.selling-result,\r\n.selling-total,\r\n.all-product{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.selling-label{\r\n  width: 30%;\r\n  text-align: left;\r\n}\r\n.all-product{\r\n  width: 50%;\r\n}\r\n.selling-result{\r\n  width: 25%;\r\n}\r\n.selling-total{\r\n  width: 10%;\r\n}\r\n/************************************/\r\n\r\n.selling{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  overflow: auto;\r\n  padding: 0px;\r\n}\r\n.selling p{\r\n  background: #808080;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  margin-bottom: 0x;\r\n  font-size: 25px;\r\n}\r\n\r\n/************************************/\r\n.block{\r\n  margin-bottom: 5px;\r\n}\r\n.selling-label div,\r\n.selling-result div,\r\n.selling-total div{\r\n  padding: 2px 5px;\r\n  margin: 2.5px 10px;\r\n  border: 0.5px solid black;\r\n}\r\n\r\n.selling-label div{\r\n  background: #808080;\r\n}\r\n.selling-result div:nth-child(1),\r\n.selling-total div:nth-child(1){\r\n  background: #808080;\r\n}\r\n.selling-label div:nth-child(1){\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n/************************************/\r\n.selling-result div{\r\n  text-align: right;\r\n}\r\n.selling-result div:nth-child(1){\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results-selling/results-selling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selling\">\r\n\r\n  <p>{{ lang.situResultTitle }}</p>\r\n\r\n  <div class=\"selling-label\">\r\n    <div><label>&nbsp;</label></div>\r\n    <div><label>{{ lang.situResultRealProduction }}</label></div>\r\n    <div><label>{{ lang.situResultUseMachine }}</label></div>\r\n    <div><label>{{ lang.situResultOvertime }} (%)</label></div>\r\n    <div><label>{{ lang.situResultSellNormal }}</label></div>\r\n    <div><label>{{ lang.situResultSellStorage }}</label></div>\r\n    <div><label>{{ lang.situResultSellSpecial }}</label></div>\r\n    <div><label>{{ lang.situResultTurnover }}</label></div>\r\n    <div><label>{{ lang.situResultMarketPart }}</label></div>\r\n    <div><label>{{ lang.situResultStorageQuantity }}</label></div>\r\n    <div><label>{{ lang.situResultStorageValue }}</label></div>\r\n    <!-- <div><label>Temps de fabrication futur</label></div> -->\r\n  </div>\r\n\r\n  <!-- TODO: Service de résultats -->\r\n  <div class=\"selling-result\" *ngFor=\"let product of company.companyProduct; let iProd = index\">\r\n    <div><label> {{ lang.situResultName }} {{ iProd + 1 }}</label></div>\r\n    <div><label> {{ situations[iProd].realProduction | roundAt2 }} </label></div>\r\n    <div><label> {{ situations[iProd].machinePercent | roundAt0 | percent }} </label></div>\r\n    <div><label> {{ situations[iProd].overtime | roundAt2 }} </label></div>\r\n    <div><label> {{ situations[iProd].sellingNormal | roundAt2 }} </label></div>\r\n    <div><label> {{ situations[iProd].sellingClear | roundAt2 }} </label></div>\r\n    <div><label> {{ situations[iProd].sellingExceptionnal | roundAt2 }} </label></div>\r\n    <div><label> {{ situations[iProd].sellingValue | roundAt2 }} </label></div>\r\n    <div><label> {{ situations[iProd].marketPart | roundAt2 }} </label></div>\r\n    <div><label> {{ situations[iProd].stock | roundAt2 }} </label></div>\r\n    <div><label> {{ situations[iProd].stockValue | roundAt2 }} </label></div>\r\n    <!-- <div><label> FABBRICATION FUTUR </label></div> -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/results/results-selling/results-selling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsSellingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsSellingComponent = (function () {
    function ResultsSellingComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ResultsSellingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.situations = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.company.result).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                Object.keys(_this.company.result[keyResult].situation).map(function (key) { return _this.situations.push(_this.company.result[keyResult].situation[key]); });
            }
        });
    };
    ResultsSellingComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return ResultsSellingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ResultsSellingComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], ResultsSellingComponent.prototype, "periode", void 0);
ResultsSellingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'results-selling',
        template: __webpack_require__("../../../../../src/app/results/results-selling/results-selling.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results-selling/results-selling.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], ResultsSellingComponent);

var _a;
//# sourceMappingURL=results-selling.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results-structure/results-structure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".structure{\r\n  display: inline-block;\r\n  width: 99%;\r\n}\r\n.block{\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.structure-label,\r\n.structure-old-period,\r\n.structure-new-period,\r\n.all-product{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.structure-label{\r\n  width: 30%;\r\n  text-align: left;\r\n}\r\n.all-product{\r\n  width: 50%;\r\n}\r\n.structure-old-period{\r\n  width: 25%;\r\n}\r\n.structure-new-period{\r\n  width: 25%;\r\n}\r\n/************************************/\r\n\r\n.structure{\r\n  border-radius: 12px;\r\n  box-shadow: 1px 1px 5px #808080;\r\n  overflow: auto;\r\n  padding: 0px;\r\n}\r\n.structure p{\r\n  background: #808080;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  margin-bottom: 0x;\r\n  font-size: 25px;\r\n}\r\n\r\n/************************************/\r\n.block{\r\n  margin-bottom: 5px;\r\n}\r\n.structure-label div,\r\n.structure-old-period div,\r\n.structure-new-period div{\r\n  padding: 2px 5px;\r\n  margin: 2.5px 10px;\r\n  border: 0.5px solid black;\r\n}\r\n\r\n.structure-label div{\r\n  background: #808080;\r\n}\r\n.structure-old-period div:nth-child(1),\r\n.structure-new-period div:nth-child(1){\r\n  background: #808080;\r\n}\r\n.structure-label div:nth-child(1){\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n/************************************/\r\n.structure-new-period div,\r\n.structure-old-period div{\r\n  text-align: right;\r\n}\r\n.structure-new-period div:nth-child(1),\r\n.structure-old-period div:nth-child(1){\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results-structure/results-structure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"structure\">\r\n\r\n  <p>{{ lang.situStructureTitle }}</p>\r\n\r\n  <div class=\"structure-label\">\r\n    <div><label>&nbsp;</label></div>\r\n    <div><label>{{ lang.situStructureCapacity }}</label></div>\r\n    <div><label>{{ lang.situStructureNumber }}</label></div>\r\n    <div><label>{{ lang.situStructureStorage }}</label></div>\r\n    <div><label>{{ lang.situStructureProductor }}</label></div>\r\n    <div><label>{{ lang.situStructureSellor }}</label></div>\r\n    <div><label>{{ lang.situStructureManager }}</label></div>\r\n    <div><label>{{ lang.situStructureDebt }}</label></div>\r\n    <div><label>{{ lang.situStructureBreakdown }}</label></div>\r\n    <div><label>{{ lang.situStructureStrike }}</label></div>\r\n  </div>\r\n\r\n  <div class=\"structure-old-period\">\r\n    <div><label>{{ lang.situStructureOldPeriode }}</label></div>\r\n    <div>{{ oldStructure.capacityProduction | roundAt2 }}</div>\r\n    <div>{{ oldStructure.numberProduct | roundAt2 }}</div>\r\n    <div>{{ oldStructure.stockValue | roundAt2 }}</div>\r\n    <div>{{ oldStructure.numberProductor | roundAt2 }}</div>\r\n    <div>{{ oldStructure.numberSellor | roundAt2 }}</div>\r\n    <div>{{ oldStructure.numberManager | roundAt2 }}</div>\r\n    <div>{{ oldStructure.debtClient | roundAt2 }}</div>\r\n    <div>{{ oldStructure.disturbed | roundAt2 }}</div>\r\n    <div>{{ oldStructure.strike | roundAt2 }}</div>\r\n  </div>\r\n\r\n  <div class=\"structure-new-period\">\r\n    <div><label>{{ lang.situStructureNewPeriode }}</label></div>\r\n    <div>{{ newStructure.capacityProduction | roundAt2 }}</div>\r\n    <div>{{ newStructure.numberProduct | roundAt2 }}</div>\r\n    <div>{{ newStructure.stockValue | roundAt2 }}</div>\r\n    <div>{{ newStructure.numberProductor | roundAt2 }}</div>\r\n    <div>{{ newStructure.numberSellor | roundAt2 }}</div>\r\n    <div>{{ newStructure.numberManager | roundAt2 }}</div>\r\n    <div>{{ newStructure.debtClient | roundAt2 }}</div>\r\n    <div>{{ newStructure.disturbed | roundAt2 }}</div>\r\n    <div>{{ newStructure.strike | roundAt2 }}</div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/results/results-structure/results-structure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsStructureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsStructureComponent = (function () {
    function ResultsStructureComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    ResultsStructureComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.periode !== 0) {
            var resultPeriode = "result" + this.periode;
            var oldResultPeriode = "result" + (this.periode - 1);
            Object.keys(this.company.result).map(function (key) {
                if (key === resultPeriode) {
                    _this.newStructure = _this.company.result[key].structure;
                }
                if (key === oldResultPeriode) {
                    _this.oldStructure = _this.company.result[key].structure;
                }
            });
        }
        else {
            var resultPeriode = "result" + this.periode;
            var oldResultPeriode = "result" + (this.periode - 1);
            Object.keys(this.company.result).map(function (key) {
                if (key === resultPeriode) {
                    _this.newStructure = _this.company.result[key].structure;
                }
            });
            this.oldStructure = {
                capacityProduction: 0,
                numberProduct: 0,
                stockValue: 0,
                numberProductor: 0,
                numberSellor: 0,
                numberManager: 0,
                debtClient: 0,
                disturbed: 0,
                strike: 0,
            };
        }
    };
    ResultsStructureComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    return ResultsStructureComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ResultsStructureComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], ResultsStructureComponent.prototype, "periode", void 0);
ResultsStructureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'results-structure',
        template: __webpack_require__("../../../../../src/app/results/results-structure/results-structure.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results-structure/results-structure.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], ResultsStructureComponent);

var _a;
//# sourceMappingURL=results-structure.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".result{\r\n  font-size: 18px;\r\n}\r\n\r\n.results{\r\n  width: 97%;\r\n  border: 2px solid black;\r\n  border-radius: 12px;\r\n  padding: 10px 15px;\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Mettre une entreprise -->\r\n<div class=\"result situation\">\r\n\r\n  <div class=\"results-show\">\r\n    <div><span>Entreprise:  {{ testCompany.name }}</span></div>\r\n    <div><span>Periode: </span></div>\r\n    <div><span>Situation</span></div>\r\n  </div>\r\n\r\n  <div class=\"results results-structure\">\r\n    <results-structure [company]=\"testCompany\"></results-structure>\r\n  </div>\r\n\r\n  <div class=\"results results-exploitation\">\r\n    <results-exploitation [company]=\"testCompany\"></results-exploitation>\r\n  </div>\r\n\r\n  <div class=\"results results-selling\">\r\n    <results-selling [company]=\"testCompany\"></results-selling>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"result comptability\">\r\n\r\n  <div class=\"results-show\">\r\n    <div><span>Entreprise:  {{ testCompany.name }}</span></div>\r\n    <div><span>Periode: </span></div>\r\n    <div><span>Comptes de Résultats</span></div>\r\n  </div>\r\n\r\n  <div class=\"results results-productions\">\r\n    <results-productions [company]=\"testCompany\"></results-productions>\r\n  </div>\r\n\r\n  <div class=\"results results-charge\">\r\n    <results-charge [company]=\"testCompany\"></results-charge>\r\n  </div>\r\n\r\n  <div class=\"results results-financial\">\r\n    <results-financial></results-financial>\r\n  </div>\r\n\r\n  <div class=\"results results-final\">\r\n    <results-final></results-final>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_test_const__ = __webpack_require__("../../../../../src/app/constant/test.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.testCompany = __WEBPACK_IMPORTED_MODULE_1__constant_test_const__["a" /* TEST_COMPANY */];
        this.employeesTest = [
            { type: "Producteur", salary: 0 },
            { type: "Vendeur", salary: 0 },
            { type: "Cadre", salary: 0 }
        ];
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResultsComponent);

//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentification_authentification_component__ = __webpack_require__("../../../../../src/app/authentification/authentification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initialization_initialization_component__ = __webpack_require__("../../../../../src/app/initialization/initialization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_result_create_result_component__ = __webpack_require__("../../../../../src/app/create-result/create-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comptability_comptability_component__ = __webpack_require__("../../../../../src/app/comptability/comptability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__situation_situation_component__ = __webpack_require__("../../../../../src/app/situation/situation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flux_flux_component__ = __webpack_require__("../../../../../src/app/flux/flux.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__studies_studies_component__ = __webpack_require__("../../../../../src/app/studies/studies.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/authentification', pathMatch: 'full' },
    // { path: '**', redirectTo: '/authentification', pathMatch: 'full' },
    { path: 'authentification', component: __WEBPACK_IMPORTED_MODULE_2__authentification_authentification_component__["a" /* AuthentificationComponent */] },
    { path: 'newproject', component: __WEBPACK_IMPORTED_MODULE_3__initialization_initialization_component__["a" /* InitializationComponent */] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_4__create_result_create_result_component__["a" /* CreateResultComponent */] },
    { path: 'choice/:id', component: __WEBPACK_IMPORTED_MODULE_5__company_company_component__["a" /* CompanyComponent */] },
    { path: 'situation/:id', component: __WEBPACK_IMPORTED_MODULE_7__situation_situation_component__["a" /* SituationComponent */] },
    { path: 'compatability/:id', component: __WEBPACK_IMPORTED_MODULE_6__comptability_comptability_component__["a" /* ComptabilityComponent */] },
    { path: 'flux/:id', component: __WEBPACK_IMPORTED_MODULE_8__flux_flux_component__["a" /* FluxComponent */] },
    { path: 'studies/:id', component: __WEBPACK_IMPORTED_MODULE_9__studies_studies_component__["a" /* StudiesComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/scenario/Ordinatix.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORDINATIX; });
var ORDINATIX = {
    round: 0,
    teams: [],
    //The products in the game
    allProduct: [
        {
            minPrice: 8.5, maxPrice: 20, productTime: 0.05,
            potentialSell: 250000, unitaryCost: 4, typeEvolution: "c/d",
            nbAttracts: 6,
            attracts: [
                { name: "Prix", sensibility: 40, type: "price" },
                { name: "Publicite", sensibility: 25, type: "publicity" },
                { name: "Force de Vente", sensibility: 12.5, type: "sellorForce" },
                { name: "Action Commercial", sensibility: 12.5, type: "marketing" },
                { name: "Recherche en Qualité", sensibility: 5, type: "research" },
                { name: "Credit Client", sensibility: 5, type: "credit" }
            ],
            loyalty: 40
        },
        {
            minPrice: 200, maxPrice: 400, productTime: 1.5,
            potentialSell: 18000, unitaryCost: 120, typeEvolution: "exponential",
            nbAttracts: 6,
            attracts: [
                { name: "Prix", sensibility: 10, type: "price" },
                { name: "Publicite", sensibility: 20, type: "publicity" },
                { name: "Force de Vente", sensibility: 10, type: "sellorForce" },
                { name: "Action Commercial", sensibility: 10, type: "marketing" },
                { name: "Recherche en Qualité", sensibility: 20, type: "research" },
                { name: "Credit Client", sensibility: 30, type: "credit" }
            ],
            loyalty: 50
        }
    ],
    //The politic of the game
    politic: {
        //Over Pricing
        overtimePercent: 20,
        overheadPercent: 25,
        //Salary
        firePricePourcent: 75,
        hirePricePourcent: 50,
        minimalTraining: 1.6,
        typeOfEmployees: [
            {
                type: "Productor",
                salary: 45000
            },
            {
                type: "Sellor",
                salary: 54000
            },
            {
                type: "Manager",
                salary: 105000
            }
        ],
        managerRatio: 10,
        //Financial Decision
        loaning: 6,
        overdraft: 7,
        unauthorizedOverdraft: 10,
        overdraftAmountPercent: 50,
        placement: 2,
        VAT: 20,
        IT: 33.33,
        supplierCredits: 60,
        //Production
        machineProduction: 2500,
        productorProduction: 2000,
        //Machinery
        machineryType: {
            productCapacity: 2500,
            price: 150000,
            amortization: 5,
            repairPrice: 500,
            disturbed: false,
        },
        //General Cost
        generalCost: {
            stockage: 1.5,
            fixedPrice: 750000,
            immbilizationTranche: 300000,
            supplementTranche: 15000,
            insurance: 3,
        },
    },
    //Studies
    studies: {
        productStudies: [10000, 10000],
        marketStudies: 3000,
        concurrenceStudies: 3000,
        structureStudies: 3000,
        sellingStudies: 8000,
        performanceStudies: 3000,
    }
};
//# sourceMappingURL=Ordinatix.js.map

/***/ }),

/***/ "../../../../../src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_auth_firebase_service__ = __webpack_require__("../../../../../src/app/firebase/auth-firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_db_firebase_service__ = __webpack_require__("../../../../../src/app/firebase/db-firebase.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase


var AuthService = (function () {
    function AuthService(fireAuth, fireDb) {
        this.fireAuth = fireAuth;
        this.fireDb = fireDb;
        this.auth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.authBool = false;
        this.falsePassword = "ThePassword";
    }
    AuthService.prototype.getAuth = function () {
        var _this = this;
        setTimeout(function () { _this.isAuth(); }, 500);
        return this.auth;
    };
    AuthService.prototype.getUsers = function () {
        return this.fireDb.getUserList();
    };
    AuthService.prototype.getUser = function () {
        if (this.fireAuth.authenticated) {
            return this.fireDb.getUser();
        }
    };
    AuthService.prototype.isAuth = function () {
        if (this.fireAuth.displayName() === 'test') {
            this.authBool = false;
        }
        if (this.fireAuth.displayName() !== 'test') {
            this.authBool = true;
        }
        this.auth.emit(this.authBool);
    };
    AuthService.prototype.createAuth = function (user, password) {
        // if(password !== undefined){
        //   this.fireAuth.createUserWithMail(user, password);
        // } else {
        //   this.fireAuth.createUserWithMail(user, this.falsePassword);
        // }
        this.fireAuth.createUserWithMail(user, this.falsePassword);
    };
    AuthService.prototype.loginAuth = function (user, password) {
        // if(password !== undefined){
        //   this.fireAuth.signInWithMail(user, password);
        // } else {
        //   this.fireAuth.signInWithMail(user, this.falsePassword);
        // }
        this.fireAuth.signInWithMail(user, this.falsePassword);
    };
    AuthService.prototype.logOutAuth = function () {
        this.fireAuth.signOut();
        this.getAuth();
    };
    /*
    *
    * Add the user pseudo to the user group
    * @author: Layninou
    *
    */
    AuthService.prototype.addUser = function (author, place, date) {
        if (this.fireAuth.authenticated) {
            var newKey = this.fireAuth.displayName();
            this.fireDb.createUser(newKey, { author: author, place: place, date: date });
        }
    };
    return AuthService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('auth'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], AuthService.prototype, "auth", void 0);
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__firebase_auth_firebase_service__["a" /* AuthFirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__firebase_auth_firebase_service__["a" /* AuthFirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__firebase_db_firebase_service__["a" /* DbFirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__firebase_db_firebase_service__["a" /* DbFirebaseService */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/calculus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
* This service manage all result calculus
* @service
* @author: layninou
*/
var CalculusService = (function () {
    function CalculusService() {
    }
    /*
    * create the result of debt by the credit give
    * @param {number[]} turnover, it is the turnovers of a team
    * @param {Decision} dec, the decision of a team
    * @param {number} indexProduct, the product with compute about
    * return {number} the debt of the client about this product
    * @author: layninou
    */
    CalculusService.prototype.calculDebt = function (turnover, dec, indexProduct) {
        var debt = 0;
        dec.marketingDecision.map(function (market) {
            if (market.type === "credit") {
                debt = turnover[indexProduct] * (0.01 * market.decision[indexProduct]);
            }
        });
        return Math.round(debt);
    };
    /*
    * create the result of machine affected in percent
    * @param {Company} company, it is the team we compute about
    * @param {Decision} dec, the decision of a team
    * @param {number} indexProduct, the product with compute about
    * return {number} the machine ercent about this product
    * @author: layninou
    */
    CalculusService.prototype.calculAffectedMachinePercent = function (company, dec, indexProduct) {
        var affected = 0;
        if (company.companyMachinery.length == 0) {
            return 0;
        }
        affected = dec.productionDecision.affectedMachine[indexProduct] / company.companyMachinery.length;
        return affected;
    };
    /*
    * create the result of product possible per machine
    * @param {Product} product, it is the product we compute about
    * @param {Company} company, it is the team we compute about
    * @param {Decision} dec, the decision of a team
    * @param {number} index, the product with compute about
    * return {number} the product possible per machine about this product
    * @author: layninou
    */
    CalculusService.prototype.calculProductPossibleMachine = function (product, company, dec, index) {
        //TODO: redo to be specific about the machine use
        var production = 0;
        for (var it = 0; it < dec.productionDecision.affectedMachine[index]; it++) {
            production += company.companyMachinery[it].productCapacity / product.productTime;
        }
        return Math.round(production);
    };
    /*
    * create the result of product possible per productor
    * @param {Politic} pol, the politic of the game
    * @param {Decision} dec, the decision of a team
    * @param {number} index, the product with compute about
    * return {number} the product possible per productor about this product
    * @author: layninou
    */
    CalculusService.prototype.calculProductPossibleProductor = function (pol, dec, index) {
        var production = 0;
        production = pol.productorProduction * dec.productionDecision.affectedProductor[index];
        return production;
    };
    /*
    * create the result of time to fabrique
    * @param {Product} product, it is the product we compute about
    * @param {Decision} dec, the decision of a team
    * @param {number} index, the product with compute about
    * return {number} the time of product about this product
    * @author: layninou
    */
    CalculusService.prototype.calculTotalFabricationTime = function (prod, dec, index) {
        var fabricationTime = 0;
        fabricationTime = dec.productionDecision.production[index] * prod.productTime;
        return fabricationTime;
    };
    /*
    * create the result of time per machine
    * @param {Company} company, it is the team we compute about
    * @param {Product} product, it is the product we compute about
    * @param {Decision} dec, the decision of a team
    * @param {number} index, the product with compute about
    * return {number} the time of machine about this product
    * @author: layninou
    */
    CalculusService.prototype.calculUseMachine = function (company, prod, dec, index) {
        if (this.calculProductPossibleMachine(prod, company, dec, index) === 0) {
            return 0;
        }
        var percent = this.calculTotalFabricationTime(prod, dec, index) / (this.calculProductPossibleMachine(prod, company, dec, index) * prod.productTime);
        return percent;
    };
    /*
    * calcul of the overtime
    * @param {Politic} pol, the politic of the game
    * @param {Product} product, it is the product we compute about
    * @param {Decision} dec, the decision of a team
    * @param {number} index, the product with compute about
    * return {number} the overtime about this product
    * @author: layninou
    */
    CalculusService.prototype.calculOvertime = function (pol, prod, dec, index) {
        if (this.calculProductPossibleProductor(pol, dec, index) === 0) {
            return 0;
        }
        var percent = this.calculTotalFabricationTime(prod, dec, index) / this.calculProductPossibleProductor(pol, dec, index);
        return percent;
    };
    //Calculus Turnover
    CalculusService.prototype.calculEaringsNormal = function (selling, price) {
        return selling * price;
    };
    CalculusService.prototype.calculTurnover = function (selling, price) {
        var turnover = this.calculEaringsNormal(selling, price);
        return turnover;
    };
    CalculusService.prototype.calculMarketShare = function (turnovers, indexTeam) {
        var totalMarket = 0;
        turnovers.map(function (turnover) { return totalMarket += turnover; });
        if (totalMarket === 0) {
            return 0;
        }
        return turnovers[indexTeam] / totalMarket;
    };
    //Stockage
    CalculusService.prototype.hasStock = function (buyer, production) {
        if (buyer < production) {
            return true;
        }
        return false;
    };
    CalculusService.prototype.hasInsatisfaction = function (buyer, production) {
        if (buyer > production) {
            return true;
        }
        return false;
    };
    CalculusService.prototype.insatisfactionCreate = function (buyer, production) {
        return buyer - production;
    };
    CalculusService.prototype.stockCreate = function (buyer, production) {
        return production - buyer;
    };
    CalculusService.prototype.stockValue = function (stock, directCost) {
        return stock * directCost;
    };
    //Calculus Cost
    CalculusService.prototype.productorCost = function (productorNumber, pol) {
        var salary = 0;
        //TODO: Changer dans l'init la façon de creer un producteur pour que ça soit un "productor" et changer ici après
        pol.typeOfEmployees.map(function (employee) {
            if (employee.type === "Productor") {
                salary = employee.salary;
            }
        });
        return salary * productorNumber;
    };
    CalculusService.prototype.sellorSalary = function (sellorNumber, pol) {
        var salary = 0;
        //TODO: same than up
        pol.typeOfEmployees.map(function (employee) {
            if (employee.type === "Sellor") {
                salary = employee.salary;
            }
        });
        return salary * sellorNumber;
    };
    CalculusService.prototype.managerSalary = function (managerNumber, pol) {
        var salary = 0;
        //TODO: same than up
        pol.typeOfEmployees.map(function (employee) {
            if (employee.type === "Manager") {
                salary = employee.salary;
            }
        });
        return salary * managerNumber;
    };
    CalculusService.prototype.sellorCommission = function (dec, selling) {
        var bonus = 0;
        bonus = selling * dec.remuneration.commission;
        return bonus;
    };
    CalculusService.prototype.sellorCost = function (pol, dec, sellorNumber, selling) {
        var cost = 0;
        cost = this.sellorSalary(sellorNumber, pol) + this.sellorCommission(dec, selling);
        return cost;
    };
    //TODO: function
    CalculusService.prototype.calculStockageCost = function () {
        var cost = 0;
        return cost;
    };
    CalculusService.prototype.calculHireCost = function (pol, dec) {
        var cost = 0;
        var salariesHire = 0;
        //TODO: regler à initiation les hireFires
        dec.hireFire.map(function (hireFire) {
            if (hireFire.type === "Productor") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Productor") {
                        salariesHire += hireFire.hire * employee.salary;
                    }
                });
            }
            if (hireFire.type === "Sellor") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Sellor") {
                        salariesHire += hireFire.hire * employee.salary;
                    }
                });
            }
            if (hireFire.type === "Manager") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Manager") {
                        salariesHire += hireFire.hire * employee.salary;
                    }
                });
            }
        });
        cost = salariesHire * (0.01 * pol.hirePricePourcent);
        return cost;
    };
    CalculusService.prototype.calculFireCost = function (pol, dec) {
        var cost = 0;
        var salariesFire = 0;
        //TODO: regler à initiation les hireFires
        dec.hireFire.map(function (hireFire) {
            if (hireFire.type === "Producteur") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Producteur") {
                        salariesFire += hireFire.fire * employee.salary;
                    }
                });
            }
            if (hireFire.type === "Sellor") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Sellor") {
                        salariesFire += hireFire.fire * employee.salary;
                    }
                });
            }
            if (hireFire.type === "Manager") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Manager") {
                        salariesFire += hireFire.fire * employee.salary;
                    }
                });
            }
        });
        cost = salariesFire * (0.01 * pol.firePricePourcent);
        return cost;
    };
    CalculusService.prototype.calculFormationCost = function (pol, dec) {
        var cost = 0;
        var salariesHire = 0;
        //TODO: regler à initiation les hireFires
        dec.hireFire.map(function (hireFire) {
            if (hireFire.type === "Producteur") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Producteur") {
                        salariesHire += hireFire.hire * employee.salary;
                    }
                });
            }
            if (hireFire.type === "Sellor") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Sellor") {
                        salariesHire += hireFire.hire * employee.salary;
                    }
                });
            }
            if (hireFire.type === "Manager") {
                pol.typeOfEmployees.map(function (employee) {
                    if (employee.type === "Manager") {
                        salariesHire += hireFire.hire * employee.salary;
                    }
                });
            }
        });
        //TODO: refaire avec decision qui import
        cost = salariesHire * (0.01 * pol.minimalTraining);
        return cost;
    };
    //We don't care about the real production, but the hypothetic one because you buy matter for the hypothetic production
    CalculusService.prototype.calculConsmomationProduct = function (product, pol, dec, indexProduct) {
        var consommation = 0;
        consommation = product.unitaryCost * dec.productionDecision.production[indexProduct];
        return consommation;
    };
    CalculusService.prototype.calculConsomation = function (products, pol, dec) {
        var _this = this;
        var consommation = 0;
        products.map(function (product, indexProd) {
            consommation += _this.calculConsmomationProduct(product, pol, dec, indexProd);
        });
        return consommation;
    };
    //TODO: refaire avce outillage.
    CalculusService.prototype.calculAllDotationAmortissement = function (company, pol) {
        var dotation = 0;
        //TODO: Error
        var maxAmort = pol.machineryType.amortization;
        var prixAmort = pol.machineryType.price / maxAmort;
        var nbMachineAmort = 0;
        company.companyMachinery.map(function (machine) {
            if (machine.amortization >= 0) {
                nbMachineAmort++;
            }
        });
        dotation = nbMachineAmort * prixAmort;
        return dotation;
    };
    //TODO: error
    CalculusService.prototype.calculProductDotationAmortissement = function (company, pol, dec, indexProd) {
        var dotation = 0;
        var maxAmort = pol.machineryType.amortization;
        var prixAmort = pol.machineryType.price / maxAmort;
        var nbMachineAmort = 0;
        company.companyMachinery.map(function (machine, index) {
            if (index <= dec.productionDecision.affectedMachine[indexProd]) {
                if (machine.amortization >= 0) {
                    nbMachineAmort++;
                }
            }
        });
        dotation = nbMachineAmort * prixAmort;
        return dotation;
    };
    CalculusService.prototype.calculDirectCost = function (company, product, pol, dec, indexProduct, realProduction) {
        var directCost = 0;
        var matterConso = this.calculConsmomationProduct(product, pol, dec, indexProduct);
        var productorCost = this.productorCost(dec.productionDecision.affectedProductor[0], pol);
        var dotation = this.calculProductDotationAmortissement(company, pol, dec, indexProduct);
        directCost = (matterConso + productorCost + dotation) / realProduction;
        return directCost;
    };
    CalculusService.prototype.calculFixedCost = function (pol, nbMachine) {
        var fixedCost = 0;
        fixedCost += pol.generalCost.fixedPrice;
        //TODO: test math round here
        // TODO: prepare new tranches
        var tranches = Math.round(nbMachine / 2);
        var costTranches = tranches * pol.generalCost.supplementTranche;
        return fixedCost;
    };
    CalculusService.prototype.calculStockProductionValue = function (company, product, pol, dec, indexProduct, realProduction, stockQuantity) {
        var stockValue = 0;
        stockValue = stockQuantity * this.calculDirectCost(company, product, pol, dec, indexProduct, realProduction);
        return stockValue;
    };
    return CalculusService;
}());
CalculusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CalculusService);

//# sourceMappingURL=calculus.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/decisions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecisionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase


var DecisionsService = (function () {
    function DecisionsService(dbLink, afAuth) {
        var _this = this;
        this.dbLink = dbLink;
        this.afAuth = afAuth;
        this.hireFire = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.employees = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.machinery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.listHire = { productor: 0, sellor: 0, manager: 0 };
        this.employeeCompany = { productor: 0, sellor: 0, manager: 0 };
        afAuth.authState.subscribe(function (user) {
            _this.currentUser = user;
            if (user !== undefined) {
                if (user !== null) {
                    var companyList = _this.dbLink.list(user.uid + '/teams');
                    _this.allCompany = new Array();
                    _this.listMachinery = new Array();
                    _this.listEmployee = new Array();
                    companyList.subscribe(function (snapshots) {
                        return snapshots.map(function (company, indexCompany) {
                            var numberProductor = 0;
                            var numberSellor = 0;
                            var numberManager = 0;
                            if (company.employeesList !== undefined) {
                                company.employeesList.map(function (employee, index) {
                                    if (employee.type === "Productor") {
                                        numberProductor++;
                                    }
                                    if (employee.type === "Sellor") {
                                        numberSellor++;
                                    }
                                    if (employee.type === "Manager") {
                                        numberManager++;
                                    }
                                });
                            }
                            _this.allCompany[indexCompany] = (company);
                            _this.listMachinery[indexCompany] = (company.companyMachinery.length);
                            _this.listEmployee[indexCompany] = ({
                                productor: numberProductor,
                                sellor: numberSellor,
                                manager: numberManager
                            });
                        });
                    });
                }
            }
        });
    }
    DecisionsService.prototype.getAllCompany = function () {
        if (this.currentUser !== undefined) {
            if (this.currentUser !== null) {
                return this.dbLink.list(this.currentUser.uid + '/teams');
            }
        }
    };
    DecisionsService.prototype.foundLargerProduct = function (prod) {
        var maxProd = prod[0];
        prod.map(function (product) {
            if (product.attracts.length > maxProd.attracts.length) {
                maxProd = product;
            }
        });
        return maxProd;
    };
    DecisionsService.prototype.shareCompany = function (event) {
        this.companyShared = event;
    };
    DecisionsService.prototype.getCompany = function () {
        return this.companyShared;
    };
    DecisionsService.prototype.updateCompany = function (id) {
        return this.allCompany[id];
    };
    DecisionsService.prototype.shareRound = function (event) {
        this.roundGame = event;
    };
    DecisionsService.prototype.getRound = function () {
        return this.roundGame;
    };
    //Hire Fire
    DecisionsService.prototype.getHire = function () {
        return this.hireFire;
    };
    DecisionsService.prototype.changeHire = function (answer) {
        this.hireFire.emit(answer);
    };
    DecisionsService.prototype.changeProductor = function (n) {
        this.listHire.productor = n - this.employeeCompany['productor'];
        this.changeHire(this.listHire);
    };
    DecisionsService.prototype.changeSellor = function (n) {
        this.listHire.sellor = n - this.employeeCompany['sellor'];
        this.changeHire(this.listHire);
    };
    DecisionsService.prototype.changeManager = function (n) {
        this.listHire.manager = n - this.employeeCompany['manager'];
        this.changeHire(this.listHire);
    };
    DecisionsService.prototype.setEmployee = function (index) {
        this.getProductor(index);
        this.getSellor(index);
        this.getManager(index);
        this.employees.emit(this.listEmployee[index]);
    };
    DecisionsService.prototype.getEmployee = function () {
        return this.employees;
    };
    DecisionsService.prototype.getProductor = function (index) {
        this.employeeCompany['productor'] = this.listEmployee[index]['productor'];
        return this.listEmployee[index]['productor'];
    };
    DecisionsService.prototype.getSellor = function (index) {
        this.employeeCompany['sellor'] = this.listEmployee[index]['sellor'];
        return this.listEmployee[index]['sellor'];
    };
    DecisionsService.prototype.getManager = function (index) {
        this.employeeCompany['manager'] = this.listEmployee[index]['manager'];
        return this.listEmployee[index]['manager'];
    };
    //Machinery
    DecisionsService.prototype.getNumberMachine = function () {
        return this.machinery;
    };
    DecisionsService.prototype.setNumberMachine = function (index) {
        this.machinery.emit(this.listMachinery[index]);
    };
    return DecisionsService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('hire-fire'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], DecisionsService.prototype, "hireFire", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('employees'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], DecisionsService.prototype, "employees", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Output */])('machinery'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _c || Object)
], DecisionsService.prototype, "machinery", void 0);
DecisionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _e || Object])
], DecisionsService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=decisions.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/initialization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_product__ = __webpack_require__("../../../../../src/app/objects/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_company__ = __webpack_require__("../../../../../src/app/objects/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_attract__ = __webpack_require__("../../../../../src/app/objects/attract.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitializationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InitializationService = (function () {
    function InitializationService(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    InitializationService.prototype.initProducts = function (nbProduct) {
        var products = [];
        for (var i = 0; i < nbProduct; i++) {
            var p = new __WEBPACK_IMPORTED_MODULE_2__objects_product__["a" /* Product */]();
            p.attracts = this.initAttract(1); //TODO: A refaire pour plus de fonctionalité
            products.push(p);
        }
        return products;
    };
    InitializationService.prototype.initCompanies = function (nbCompany) {
        var companies = [];
        for (var i = 0; i < nbCompany; i++) {
            var c = new __WEBPACK_IMPORTED_MODULE_3__objects_company__["a" /* Company */]();
            companies.push(c);
        }
        return companies;
    };
    InitializationService.prototype.initAttract = function (nbAttract) {
        var attracts = [];
        for (var i = 0; i < nbAttract; i++) {
            var a = new __WEBPACK_IMPORTED_MODULE_4__objects_attract__["a" /* Attract */]();
            attracts.push(a);
        }
        return attracts;
    };
    InitializationService.prototype.initCompaniesName = function (companies) {
        for (var i = 1; i < companies.length + 1; i++) {
            var name = this.lang.initCompaniesNamePlaceholder + " " + (i);
            this.setCompanyName(name, companies[i - 1]);
        }
    };
    InitializationService.prototype.setCompanyName = function (name, company) {
        company.name = name;
    };
    InitializationService.prototype.setProductNumberAttract = function (nb, product) {
        product.nbAttracts = nb;
    };
    InitializationService.prototype.setCompanyNumberMachine = function (nb, company) {
        company.nbMachine = nb;
    };
    InitializationService.prototype.setAllCompanyNumberMachine = function (nb, companies) {
        for (var i = 0; i < companies.length; i++) {
            this.setCompanyNumberMachine(nb, companies[i]);
        }
    };
    InitializationService.prototype.setCompanySocialCapital = function (nb, company) {
        company.socialCapital = nb;
    };
    InitializationService.prototype.setAllCompanySocialCapital = function (nb, companies) {
        for (var i = 0; i < companies.length; i++) {
            this.setCompanySocialCapital(nb, companies[i]);
        }
    };
    InitializationService.prototype.populateTeams = function (companies, products, politics) {
        var _this = this;
        //TODO: redo then we could destroy a machine and we can choose how many product they have
        var machineType = politics.machineryType;
        companies.map(function (company) {
            company.companyMachinery = _this.populateCompanyMachine(company, machineType);
            company.companyProduct = products;
            company.employeesList = [];
        });
        return companies;
    };
    InitializationService.prototype.populateCompanyMachine = function (company, machineType) {
        var machines = [];
        for (var i = 0; i < company.nbMachine; i++) {
            machines.push(machineType);
        }
        return machines;
    };
    InitializationService.prototype.createGame = function (companies, products, politics, studies) {
        var round = 0;
        var decision = 0;
        var game = {
            round: round,
            teams: companies,
            allProduct: products,
            politic: politics,
            studies: studies
        };
        return game;
    };
    return InitializationService;
}());
InitializationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], InitializationService);

var _a;
//# sourceMappingURL=initialization.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/modelization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelizationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Brand = (function () {
    function Brand() {
    }
    return Brand;
}());
var Team = (function () {
    function Team() {
    }
    return Team;
}());
/*
* This service create and manage the model of brands
* @service
* @author: layninou
*/
var ModelizationService = (function () {
    function ModelizationService() {
        this.teams = [];
        this.brands = [];
        this.hasSellor = true;
    }
    ModelizationService.prototype.theoricalMarket = function (price) {
        var theoricalMarket = 100 / this.numberPart;
        this.theoricalMarketValue = theoricalMarket * price;
        if (price === 0) {
            this.theoricalMarketValue = theoricalMarket;
        }
    };
    ModelizationService.prototype.setNumberPart = function (n) {
        this.numberPart = n;
    };
    ModelizationService.prototype.setTeamNull = function () {
        this.teams = [];
    };
    ModelizationService.prototype.setMarketNull = function () {
        this.teams.map(function (team) {
            team.marketPart = 0;
            team.attraction = 0;
        });
    };
    ModelizationService.prototype.setMarket = function (market) {
        this.teams.map(function (team) { return team.marketPart = market; });
    };
    ModelizationService.prototype.setBrandNull = function () {
        this.brands = [];
    };
    ModelizationService.prototype.addBrand = function (weight, type) {
        this.brands.push({
            brandWeight: weight,
            brandType: type
        });
    };
    //These are the brand function
    ModelizationService.prototype.priceBrandFunction = function (price, priceMin) {
        var idealPrice = priceMin + (0.05 * priceMin);
        return Math.exp(-(price - priceMin));
    };
    ModelizationService.prototype.publicityBrandFunction = function (publicity) {
        var fct = 1.2 * (1 - Math.exp(-publicity / (10 * this.theoricalMarketValue)));
        return fct;
    };
    ModelizationService.prototype.sellingForceBrandFunction = function (sellor, commission) {
        if (sellor == 4) {
            var force = 0;
            return force;
        }
        if (sellor <= 4) {
            var force = ((4 / 10) + ((4 / 10) * (commission / 100)));
            return force;
        }
        if (sellor <= 10) {
            var force = ((sellor / 10) + ((sellor / 10) * (commission / 100)));
            return force;
        }
        return 1 + (commission / 100);
    };
    ModelizationService.prototype.creditBrandFunction = function (credit) {
        if (credit <= 15) {
            return 0;
        }
        if (credit <= 30) {
            return 0.3;
        }
        if (credit <= 45) {
            return 0.5;
        }
        if (credit <= 60) {
            return 0.7;
        }
        if (credit <= 75) {
            return 0.9;
        }
        if (credit <= 90) {
            return 1.2;
        }
        return 1.2;
    };
    ModelizationService.prototype.marketingBrandFunction = function (sellor, marketing) {
        var fct = 1.2 * (1 - Math.exp(-(marketing * sellor) / (10 * this.theoricalMarketValue)));
        return fct;
    };
    //this is the getter/setter for the use of the model's brand
    ModelizationService.prototype.setPrice = function (price) {
        this.price = price;
    };
    ModelizationService.prototype.setMinPrice = function (price) {
        this.minPrice = price;
    };
    ModelizationService.prototype.setPublicity = function (publicity) {
        this.publicity = publicity;
    };
    ModelizationService.prototype.setResearch = function (research) {
        this.research = research;
    };
    ModelizationService.prototype.setSellor = function (sellor) {
        this.sellor = sellor;
    };
    ModelizationService.prototype.setCommission = function (commission) {
        this.commission = commission;
    };
    ModelizationService.prototype.setCredit = function (credit) {
        this.credit = credit;
    };
    ModelizationService.prototype.setMarketing = function (marketing) {
        this.marketing = marketing;
    };
    //Getter/Setter for the team
    ModelizationService.prototype.addTeam = function (name) {
        var team = {
            name: name,
            brands: [],
            attraction: 0,
            marketPart: 0
        };
        this.teams.push(team);
        return team;
    };
    //TODO
    ModelizationService.prototype.getTeam = function (name) {
        return null;
    };
    //This is the model
    ModelizationService.prototype.brandFunction = function (type) {
        if (type === "price") {
            return this.priceBrandFunction(this.price, this.minPrice);
        }
        if (type === "publicity") {
            return this.publicityBrandFunction(this.publicity);
        }
        if (type === "research") {
            return this.publicityBrandFunction(this.research);
        }
        if (type === "credit") {
            return this.creditBrandFunction(this.credit);
        }
        if (type === "sellorForce") {
            return this.sellingForceBrandFunction(this.sellor, this.commission);
        }
        if (type === "marketing") {
            return this.marketingBrandFunction(this.sellor, this.marketing);
        }
        return 0;
    };
    ModelizationService.prototype.calculateAttraction = function () {
        var _this = this;
        var attract = 0;
        this.brands.map(function (brand) {
            attract += brand.brandWeight * _this.brandFunction(brand.brandType);
        });
        // if(this.brandFunction("sellorForce") == 0){
        //   attract = 0;
        // }
        return attract;
    };
    ModelizationService.prototype.addAttraction = function (team) {
        team.attraction = this.calculateAttraction();
    };
    ModelizationService.prototype.calculMarket = function () {
        var _this = this;
        var maxAttract = 0;
        this.teams.map(function (team) { return maxAttract += team.attraction; });
        if (this.fidelity === undefined) {
            this.fidelity = 0;
        }
        this.teams.map(function (team) {
            team.marketPart = (team.marketPart * _this.fidelity) + ((1 - _this.fidelity) * (team.attraction / maxAttract));
            // if(maxAttract === 0){
            //   team.marketPart = 0;
            // }
        });
    };
    ModelizationService.prototype.getTeamName = function (index) {
        return this.teams[index].name;
    };
    ModelizationService.prototype.getMarket = function (index) {
        return this.teams[index].marketPart;
    };
    //The model for this game
    ModelizationService.prototype.initTeamOrdinatix = function (name, price, minPrice, publicity, sellor, commission, credit, marketing, research, market) {
        //Init the market
        this.setPrice(price);
        this.setMinPrice(minPrice);
        this.setPublicity(publicity);
        this.setSellor(sellor);
        this.setCommission(commission);
        this.setCredit(credit);
        this.setMarketing(marketing);
        this.setResearch(research);
        //init theoricalMarketValue (so define by the price)
        this.theoricalMarket(price);
        //found the adapted team
        var team;
        team = this.addTeam(name);
        team.brands = this.brands;
        this.addAttraction(team);
        if (market !== undefined) {
            team.marketPart = market;
        }
    };
    return ModelizationService;
}());
ModelizationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModelizationService);

//# sourceMappingURL=modelization.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/pie-chart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieChartService = (function () {
    function PieChartService() {
        this.colorChart = ["#0066cc", "#3333cc", "#9933ff", "#cc0099", "#ff3300", "#cc6600",
            "#ffff00", "#99ff33", "#33cc33", "#00ff99", "#33cccc"];
    }
    PieChartService.prototype.cacahuete = function () {
        console.log("hey");
    };
    PieChartService.prototype.pieChart = function (ctx, w, h, datalist, datalabel) {
        var radius = h / 2 - 5;
        var centerx = w / 2;
        var centery = h / 2;
        var lastend = 0;
        var offset = Math.PI / 2;
        var labelxy = new Array();
        //font for the label
        var fontSize = Math.floor(h / 15);
        ctx.textAlign = 'center';
        ctx.font = fontSize + "px Arial";
        var total = 0;
        for (var x = 0; x < datalist.length; x++) {
            total += datalist[x];
        }
        //creation of the part of each pie
        for (var i = 0; i < datalist.length; i++) {
            var thispart = datalist[i];
            ctx.beginPath();
            ctx.fillStyle = this.colorChart[i];
            ctx.moveTo(centerx, centery);
            var arcsector = Math.PI * (2 * thispart / total);
            ctx.arc(centerx, centery, radius, lastend - offset, lastend + arcsector - offset, false);
            ctx.lineTo(centerx, centery);
            ctx.fill();
            ctx.closePath();
            if (thispart > (total / 20)) {
                labelxy.push(lastend + arcsector / 2 + Math.PI + offset);
            }
            lastend += arcsector;
        }
        var lradius = radius * 3 / 4;
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#000000";
        for (var i = 0; i < labelxy.length; i++) {
            var langle = labelxy[i];
            var dx = centerx + lradius * Math.cos(langle);
            var dy = centery + lradius * Math.sin(langle);
            ctx.fillText(datalabel[i], dx, dy);
        }
    };
    return PieChartService;
}());
PieChartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PieChartService);

//# sourceMappingURL=pie-chart.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_init_Game_const__ = __webpack_require__("../../../../../src/app/constant/init-Game.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_modelization_service__ = __webpack_require__("../../../../../src/app/service/modelization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_calculus_service__ = __webpack_require__("../../../../../src/app/service/calculus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Constant

//Service


//Firebase

/*
* This service manage all result without calculus
* @service
* @author: layninou
*/
var ResultService = (function () {
    function ResultService(dbLink, model, calculus) {
        this.dbLink = dbLink;
        this.model = model;
        this.calculus = calculus;
        this.marketPart = [];
    }
    //Sharing Result
    ResultService.prototype.transformGame = function (protoGame) {
        var syncGame = __WEBPACK_IMPORTED_MODULE_1__constant_init_Game_const__["a" /* NULL_GAME */];
        Object.keys(protoGame).map(function (key, index) {
            if (key === "politic") {
                syncGame.politic = protoGame[key];
            }
            if (key === "product") {
                syncGame.allProduct = protoGame[key];
            }
            if (key === "teams") {
                syncGame.teams = protoGame[key];
            }
            if (key === "round") {
                syncGame.round = protoGame[key];
            }
            if (key === "hasDecide") {
                syncGame.nbDecision = protoGame[key];
            }
            if (key === "result") {
                syncGame.result = protoGame[key];
            }
            if (key === "studies") {
                syncGame.studies = protoGame[key];
            }
            if (key.startsWith("result")) {
                syncGame[key] = protoGame[key];
            }
        });
        this.game = syncGame;
        return syncGame;
    };
    ResultService.prototype.getAllResult = function () {
        return this.dbLink.list('/test/result');
    };
    ResultService.prototype.nullTheDecision = function () {
        this.game.nbDecision = undefined;
    };
    ResultService.prototype.pushGame = function (game) {
        this.game = game;
    };
    ResultService.prototype.getGame = function () {
        return this.game;
    };
    ResultService.prototype.getRound = function () {
        return this.game.round;
    };
    // Potential Selling
    ResultService.prototype.createTheoricalPotential = function (game) {
        var gameTeams = [];
        var gameProduct = [];
        Object.keys(game.teams).map(function (key) { return gameTeams.push(game.teams[key]); });
        Object.keys(game.allProduct).map(function () { return gameProduct.push(0); });
        gameTeams.map(function (team, indexTeam) {
            gameProduct.map(function (product, indexProd) {
                gameProduct[indexProd] += team.companyProduct[indexProd].potentialSell;
            });
        });
        this.theoricalPotential = gameProduct;
        return this.theoricalPotential;
    };
    ResultService.prototype.evolutePotential = function (oldPotential, type) {
        this.theoricalPotential.map(function (theoricPot) {
            //theoricPot = functionChooseByTheType with oldPotential
        });
    };
    /*
    * Exponential evolution of the product potential
    * @param {number} evol, the potential selling
    * @param {number} round, the round of the game
    * return {number} return the effective selling
    * @author: layninou
    */
    ResultService.prototype.exponentialEvolution = function (evol, round) {
        for (var i = 0; i < round; i++) {
            evol *= 1.1;
        }
        return evol;
    };
    /*
    * Croissant/Decroissant evolution of the product potential
    * @param {number} evol, the potential selling
    * @param {number} round, the round of the game
    * return {number} return the effective selling
    * @author: layninou
    */
    ResultService.prototype.croidecroiEvolution = function (evol, round) {
        for (var i = 0; i < round; i++) {
            evol += ((-1) ^ round) * (round * evol / 10);
        }
        return evol;
    };
    /*
    * Random evolution of the product potential
    * @param {number} evol, the potential selling
    * @param {number} round, the round of the game
    * return {number} return the effective selling
    * @author: layninou
    */
    ResultService.prototype.randomEvolution = function (evol, round) {
        for (var i = 0; i < round; i++) {
            evol *= 1 + Math.random();
        }
        return evol;
    };
    /*
    * Random Croissant/Decroissant evolution of the product potential
    * @param {number} evol, the potential selling
    * @param {number} round, the round of the game
    * return {number} return the effective selling
    * @author: layninou
    */
    ResultService.prototype.hardRandomEvolution = function (evol, round) {
        for (var i = 0; i < round; i++) {
            evol *= ((-1) ^ round) * (1 + Math.random());
        }
        return evol;
    };
    //
    // Real Selling
    //
    ResultService.prototype.createRealPotential = function (theoricPot) {
        var RealPot = [];
        theoricPot.map(function (pot) {
            RealPot.push(Math.round(Math.random() * pot));
        });
        return RealPot;
    };
    //
    //Apply Model to Selling!
    //
    ResultService.prototype.initNumberTeam = function (game) {
        var nbTeams = 0;
        Object.keys(game.teams).map(function () { return nbTeams++; });
        this.model.setNumberPart(nbTeams);
    };
    ResultService.prototype.initBrand = function (prod) {
        var _this = this;
        var attracts = [];
        Object.keys(prod.attracts).map(function (key) { return attracts.push(prod.attracts[key]); });
        attracts.map(function (attract) {
            _this.model.addBrand(attract.sensibility, attract.type);
        });
    };
    ResultService.prototype.initTeamOrdinatix = function (team, index) {
        //We make the product in an array to make a model for a particular product
        var products = [];
        Object.keys(team.companyProduct).map(function (key) { return products.push(team.companyProduct[key]); });
        var priceDec, publicityDec, sellorDec, creditDec, marketingDec, researchDec;
        var price = [], publicity = [], sellor = [], credit = [], marketing = [], research = [];
        //We prepare all importante decision for the model
        var marketDecision = [];
        Object.keys(team.decision.marketingDecision).map(function (key) { return marketDecision.push(team.decision.marketingDecision[key]); });
        marketDecision.map(function (marketDec) {
            if (marketDec.type === "price") {
                priceDec = marketDec.decision;
                Object.keys(priceDec).map(function (key) { return price.push(priceDec[key]); });
            }
            if (marketDec.type === "publicity") {
                publicityDec = marketDec.decision;
                Object.keys(publicityDec).map(function (key) { return publicity.push(publicityDec[key]); });
            }
            if (marketDec.type === "sellorForce") {
                sellorDec = marketDec.decision;
                Object.keys(sellorDec).map(function (key) { return sellor.push(sellorDec[key]); });
            }
            if (marketDec.type === "marketing") {
                marketingDec = marketDec.decision;
                Object.keys(marketingDec).map(function (key) { return marketing.push(marketingDec[key]); });
            }
            if (marketDec.type === "credit") {
                creditDec = marketDec.decision;
                Object.keys(creditDec).map(function (key) { return credit.push(creditDec[key]); });
            }
            if (marketDec.type === "research") {
                researchDec = marketDec.decision;
                Object.keys(researchDec).map(function (key) { return research.push(researchDec[key]); });
            }
        });
        //We make the model travel for the product "index"
        this.model.initTeamOrdinatix(team.name, price[index], products[index].minPrice, publicity[index], sellor[index], team.decision.remuneration.commission, credit[index], marketing[index], research[index]);
    };
    ResultService.prototype.initAllTeamsOrdinatix = function (game) {
        var _this = this;
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        var products = [];
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        //TODO: init products maybe?
        this.marketPart = [];
        products.map(function (prod, indexProd) {
            var falseMarket = [];
            _this.model.setBrandNull();
            _this.model.setTeamNull();
            //TODO: set Market comme il faut (FIDELITY)
            _this.model.setMarketNull();
            _this.initBrand(products[indexProd]);
            teams.map(function (team) {
                _this.initTeamOrdinatix(team, indexProd);
            });
            _this.model.calculMarket();
            teams.map(function (team, indexTeam) {
                falseMarket.push((_a = {}, _a[_this.model.getTeamName(indexTeam)] = _this.model.getMarket(indexTeam), _a));
                var _a;
            });
            _this.marketPart.push(falseMarket);
        });
        return this.marketPart;
    };
    ResultService.prototype.repartBuyer = function (market, realPotentials) {
        var repartition = [];
        market.map(function (productMarket, indexProd) {
            var repartitionBuyer = [];
            productMarket.map(function (elementMarket) {
                var result = 0; //Obligatoire si tu veux rentrer dans le map sans tout foutre en l'air
                Object.keys(elementMarket).map(function (key) { return result = elementMarket[key]; });
                repartitionBuyer.push(Math.round(result * realPotentials[indexProd]));
            });
            repartition.push(repartitionBuyer);
        });
        return repartition;
    };
    //Machine and Hire Fire
    ResultService.prototype.createHireFireProductor = function (company) {
        var numberProductor = 0;
        if (company.employeesList !== undefined) {
            Object.keys(company.employeesList).map(function (key) {
                if (company.employeesList[key].type === "Productor") {
                    numberProductor++;
                }
            });
        }
        var hireNumber = 0;
        var fireNumber = 0;
        Object.keys(company.decision.hireFire).map(function (key) {
            if (company.decision.hireFire[key].type === "Productor") {
                hireNumber = company.decision.hireFire[key].hire;
                fireNumber = company.decision.hireFire[key].fire;
            }
        });
        var productorList = [];
        var newNumberProductor = numberProductor + hireNumber - fireNumber;
        for (var i = 0; i < newNumberProductor; i++) {
            productorList.push({
                type: "Productor",
                salary: 45000
            });
        }
        return productorList;
    };
    ResultService.prototype.createHireFireSellor = function (company) {
        var numberSellor = 0;
        if (company.employeesList !== undefined) {
            Object.keys(company.employeesList).map(function (key) {
                if (company.employeesList[key].type === "Sellor") {
                    numberSellor++;
                }
            });
        }
        var hireNumber = 0;
        var fireNumber = 0;
        Object.keys(company.decision.hireFire).map(function (key) {
            if (company.decision.hireFire[key].type === "Sellor") {
                hireNumber = company.decision.hireFire[key].hire;
                fireNumber = company.decision.hireFire[key].fire;
            }
        });
        var sellorList = [];
        var newNumberSellor = numberSellor + hireNumber - fireNumber;
        for (var i = 0; i < newNumberSellor; i++) {
            sellorList.push({
                type: "Sellor",
                salary: 54000
            });
        }
        return sellorList;
    };
    ResultService.prototype.createHireFireManager = function (company) {
        var numberManager = 0;
        if (company.employeesList !== undefined) {
            Object.keys(company.employeesList).map(function (key) {
                if (company.employeesList[key].type === "Manager") {
                    numberManager++;
                }
            });
        }
        var hireNumber = 0;
        var fireNumber = 0;
        Object.keys(company.decision.hireFire).map(function (key) {
            if (company.decision.hireFire[key].type === "Manager") {
                hireNumber = company.decision.hireFire[key].hire;
                fireNumber = company.decision.hireFire[key].fire;
            }
        });
        var sellorList = [];
        var newNumberSellor = numberManager + hireNumber - fireNumber;
        for (var i = 0; i < newNumberSellor; i++) {
            sellorList.push({
                type: "Manager",
                salary: 105000
            });
        }
        return sellorList;
    };
    ResultService.prototype.createHireFire = function (company) {
        var productorList = this.createHireFireProductor(company);
        var sellorList = this.createHireFireSellor(company);
        var managerList = this.createHireFireManager(company);
        var employeeList = [];
        productorList.map(function (employee) { return employeeList.push(employee); });
        sellorList.map(function (employee) { return employeeList.push(employee); });
        managerList.map(function (employee) { return employeeList.push(employee); });
        return employeeList;
    };
    ResultService.prototype.createAllHireFire = function (game) {
        var _this = this;
        var teams = [];
        Object.keys(game.teams).map(function (key) {
            teams.push(game.teams[key]);
        });
        var employeesList = [];
        teams.map(function (team, index) {
            employeesList.push(_this.createHireFire(team));
        });
        return employeesList;
    };
    ResultService.prototype.createNewMachinery = function (company, game) {
        var machinery = [];
        var numberMachine = 0;
        Object.keys(company.companyMachinery).map(function (key) {
            numberMachine++;
            machinery.push(company.companyMachinery[key]);
        });
        var buyMachine = company.decision.machineFlux.buyMachine;
        var sellMachine = company.decision.machineFlux.sellMachine;
        var alreadyExistingMachine = numberMachine - sellMachine;
        var newMachinery = [];
        //repush already existing machine
        for (var i = 0; i < alreadyExistingMachine; i++) {
            newMachinery.push(machinery[i]);
        }
        //Push new machines
        if (buyMachine > 0) {
            for (var i = 0; i < buyMachine; i++) {
                newMachinery.push(game.politic.machineryType);
            }
        }
        return newMachinery;
    };
    ResultService.prototype.createAllNewMachinery = function (game) {
        var _this = this;
        var teams = [];
        Object.keys(game.teams).map(function (key) {
            teams.push(game.teams[key]);
        });
        var machineryList = [];
        teams.map(function (team) {
            machineryList.push(_this.createNewMachinery(team, game));
        });
        return machineryList;
    };
    //Choice
    ResultService.prototype.getAffectedMachine = function (company, productIndex) {
        var affectedMachine = company.decision.productionDecision.affectedMachine[productIndex];
        return affectedMachine;
    };
    ResultService.prototype.getPercentAffectedMachine = function (company, productIndex) {
        var numberMachine = 0;
        company.companyMachinery.map(function () { return numberMachine++; });
        var affectedMachine = company.decision.productionDecision.affectedMachine[productIndex];
        var PercentMachine = (affectedMachine / numberMachine) * 100;
        return PercentMachine;
    };
    ResultService.prototype.getAffectedProductor = function (company, productIndex) {
        var affectedProductor = company.decision.productionDecision.affectedProductor[productIndex];
        return affectedProductor;
    };
    ResultService.prototype.getPlannedProduction = function (company, productIndex) {
        var plannedProduction = company.decision.productionDecision.production[productIndex];
        return plannedProduction;
    };
    ResultService.prototype.getFabricationTime = function (company, productIndex) {
        var fabricationTime = 0;
        return fabricationTime;
    };
    ResultService.prototype.getPriceDecision = function (company, productIndex) {
        var market = [];
        Object.keys(company.decision.marketingDecision).map(function (key) {
            market.push(company.decision.marketingDecision[key]);
        });
        var priceDecision = 0;
        market.map(function (market, indexMarket) {
            if (market.type === "price") {
                priceDecision = market.decision[productIndex];
            }
        });
        return priceDecision;
    };
    ResultService.prototype.getQualityDecision = function (company, productIndex) {
        var market = [];
        Object.keys(company.decision.marketingDecision).map(function (key) {
            market.push(company.decision.marketingDecision[key]);
        });
        var qualityDecision = 0;
        market.map(function (market, indexMarket) {
            if (market.type === "research") {
                qualityDecision = market.decision[productIndex];
            }
        });
        return qualityDecision;
    };
    ResultService.prototype.getPublicityDecision = function (company, productIndex) {
        var market = [];
        Object.keys(company.decision.marketingDecision).map(function (key) {
            market.push(company.decision.marketingDecision[key]);
        });
        var publicityDecision = 0;
        market.map(function (market, indexMarket) {
            if (market.type === "publicity") {
                publicityDecision = market.decision[productIndex];
            }
        });
        return publicityDecision;
    };
    ResultService.prototype.getSellorDecision = function (company, productIndex) {
        var market = [];
        Object.keys(company.decision.marketingDecision).map(function (key) {
            market.push(company.decision.marketingDecision[key]);
        });
        var sellorDecision = 0;
        market.map(function (market, indexMarket) {
            if (market.type === "sellorForce") {
                sellorDecision = market.decision[productIndex];
            }
        });
        return sellorDecision;
    };
    ResultService.prototype.getMarketingDecision = function (company, productIndex) {
        var market = [];
        Object.keys(company.decision.marketingDecision).map(function (key) {
            market.push(company.decision.marketingDecision[key]);
        });
        var marketingDecision = 0;
        market.map(function (market, indexMarket) {
            if (market.type === "marketing") {
                marketingDecision = market.decision[productIndex];
            }
        });
        return marketingDecision;
    };
    ResultService.prototype.getCreditDecision = function (company, productIndex) {
        var market = [];
        Object.keys(company.decision.marketingDecision).map(function (key) {
            market.push(company.decision.marketingDecision[key]);
        });
        var creditDecision = 0;
        market.map(function (market, indexMarket) {
            if (market.type === "credit") {
                creditDecision = market.decision[productIndex];
            }
        });
        return creditDecision;
    };
    ResultService.prototype.makeChoice = function (company, indexProd) {
        var affectedMachine = this.getAffectedMachine(company, indexProd);
        var purcentMachine = this.getPercentAffectedMachine(company, indexProd);
        var affectedProductor = this.getAffectedProductor(company, indexProd);
        var productionPlanned = this.getPlannedProduction(company, indexProd);
        var fabricationTime = this.getFabricationTime(company, indexProd);
        //TODO: faire les cas null !!! si la decision est inexistante
        var qualityDecision = this.getQualityDecision(company, indexProd);
        var priceDecision = this.getPriceDecision(company, indexProd);
        var publicityDecision = this.getPublicityDecision(company, indexProd);
        var sellorAffected = this.getSellorDecision(company, indexProd);
        var marketingAction = this.getMarketingDecision(company, indexProd);
        var clientCredit = this.getCreditDecision(company, indexProd);
        var choice = {
            affectedMachine: affectedMachine,
            purcentMachine: purcentMachine,
            affectedProductor: affectedProductor,
            productionPlanned: productionPlanned,
            fabricationTime: fabricationTime,
            qualityDecision: qualityDecision,
            priceDecision: priceDecision,
            publicityDecision: publicityDecision,
            sellorAffected: sellorAffected,
            marketingAction: marketingAction,
            clientCredit: clientCredit
        };
        return choice;
    };
    ResultService.prototype.makeCompanyChoices = function (company) {
        var _this = this;
        var choices = [];
        Object.keys(company.companyProduct).map(function (product, indexProd) {
            choices.push(_this.makeChoice(company, indexProd));
        });
        return choices;
    };
    ResultService.prototype.makeChoices = function (game) {
        var _this = this;
        var allChoices = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) {
            teams.push(game.teams[key]);
        });
        teams.map(function (team) {
            allChoices.push(_this.makeCompanyChoices(team));
        });
        return allChoices;
    };
    /****************************************************************************/
    /****************************************************************************/
    /***********************  STRUCTURE  ****************************************/
    /****************************************************************************/
    /****************************************************************************/
    //Structure
    ResultService.prototype.productionCapacity = function (company) {
        var production = 0;
        var machinery = [];
        Object.keys(company.companyMachinery).map(function (key) { return machinery.push(company.companyMachinery[key]); });
        machinery.map(function (machine) {
            production += machine.productCapacity;
        });
        return production;
    };
    ResultService.prototype.numberProduct = function (company) {
        var nbProduct = 0;
        Object.keys(company.companyProduct).map(function () { return nbProduct++; });
        return nbProduct;
    };
    ResultService.prototype.getStockValue = function (allExploitation) {
        var stock = allExploitation["stockValue"];
        return stock;
    };
    ResultService.prototype.getProductors = function (company) {
        var nbProductor = 0;
        if (company.employeesList !== undefined) {
            Object.keys(company.employeesList).map(function (key) {
                if (company.employeesList[key].type === "Productor") {
                    nbProductor++;
                }
            });
        }
        var hireNumber = 0;
        var fireNumber = 0;
        Object.keys(company.decision.hireFire).map(function (key) {
            if (company.decision.hireFire[key].type === "Productor") {
                hireNumber = company.decision.hireFire[key].hire;
                fireNumber = company.decision.hireFire[key].fire;
            }
        });
        nbProductor += hireNumber - fireNumber;
        return nbProductor;
    };
    ResultService.prototype.getSellors = function (company) {
        var nbSellor = 0;
        if (company.employeesList !== undefined) {
            Object.keys(company.employeesList).map(function (key) {
                if (company.employeesList[key].type === "Sellor") {
                    nbSellor++;
                }
            });
        }
        var hireNumber = 0;
        var fireNumber = 0;
        Object.keys(company.decision.hireFire).map(function (key) {
            if (company.decision.hireFire[key].type === "Sellor") {
                hireNumber = company.decision.hireFire[key].hire;
                fireNumber = company.decision.hireFire[key].fire;
            }
        });
        nbSellor += hireNumber - fireNumber;
        return nbSellor;
    };
    ResultService.prototype.getManager = function (company) {
        var nbManager = 0;
        if (company.employeesList !== undefined) {
            Object.keys(company.employeesList).map(function (key) {
                if (company.employeesList[key].type === "Manager") {
                    nbManager++;
                }
            });
        }
        var hireNumber = 0;
        var fireNumber = 0;
        Object.keys(company.decision.hireFire).map(function (key) {
            if (company.decision.hireFire[key].type === "Manager") {
                hireNumber = company.decision.hireFire[key].hire;
                fireNumber = company.decision.hireFire[key].fire;
            }
        });
        nbManager += hireNumber - fireNumber;
        return nbManager;
    };
    ResultService.prototype.getDebt = function (company, turnovers) {
        return this.makeCreanceProduct(company, turnovers);
    };
    //TODO
    ResultService.prototype.getDisturbed = function (sit) {
        var disturbed = 0;
        //TODO: faire suivre par rapport au prochaine structure et mettre des problemes dessus. 
        var situationMachine = 0;
        sit.map(function (s) {
            situationMachine += Math.round(s.machinePercent) - 100;
        });
        if (situationMachine < 100) {
            disturbed = situationMachine;
        }
        else {
            disturbed = 100;
        }
        return disturbed;
    };
    ResultService.prototype.getStrikes = function () {
        return 0;
    };
    ResultService.prototype.makeOneStructure = function (company, sit, turnovers, allExploitation) {
        var capacityProduction = this.productionCapacity(company);
        var numberProduct = this.numberProduct(company);
        var stockValue = this.getStockValue(allExploitation);
        var numberProductor = this.getProductors(company);
        ;
        var numberSellor = this.getSellors(company);
        var numberManager = this.getManager(company);
        var debtClient = this.getDebt(company, turnovers);
        var disturbed = this.getDisturbed(sit);
        var strike = this.getStrikes();
        var structure = {
            capacityProduction: capacityProduction,
            numberProduct: numberProduct,
            stockValue: stockValue,
            numberProductor: numberProductor,
            numberSellor: numberSellor,
            numberManager: numberManager,
            debtClient: debtClient,
            disturbed: disturbed,
            strike: strike
        };
        return structure;
    };
    ResultService.prototype.makeAllStructure = function (game, sits, turnovers, allExploitationPack) {
        var _this = this;
        var structures = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (team, indexTeam) {
            var structure;
            structure = _this.makeOneStructure(team, sits[indexTeam], turnovers[indexTeam], allExploitationPack[indexTeam]);
            structures.push(structure);
        });
        return structures;
    };
    /****************************************************************************/
    /****************************************************************************/
    /***********************  SITUATION  ****************************************/
    /****************************************************************************/
    /****************************************************************************/
    ResultService.prototype.realProduction = function (company, game, indexProduct) {
        var products = [];
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        var hypoProduction = company.decision.productionDecision.production[indexProduct];
        var possibleProductionMachine = this.calculus.calculProductPossibleMachine(products[indexProduct], company, company.decision, indexProduct);
        var possibleProductionProductor = this.calculus.calculProductPossibleProductor(game.politic, company.decision, indexProduct);
        var limitOvertime = 0.01 * (100 + game.politic.overtimePercent);
        var percentOvertime = this.calculus.calculOvertime(game.politic, company.companyProduct[indexProduct], company.decision, indexProduct);
        if (hypoProduction > possibleProductionMachine) {
            return possibleProductionMachine;
        }
        if (percentOvertime > 1) {
            if (percentOvertime < limitOvertime) {
                return hypoProduction;
            }
            return possibleProductionProductor;
        }
        return hypoProduction;
    };
    ResultService.prototype.useMachinePercent = function (company, indexProduct) {
        var use = this.calculus.calculUseMachine(company, company.companyProduct[indexProduct], company.decision, indexProduct);
        use = 0.01 * Math.round(10000 * use);
        return use;
    };
    ResultService.prototype.overtime = function (game, company, indexProduct) {
        var time = this.calculus.calculOvertime(game.politic, company.companyProduct[indexProduct], company.decision, indexProduct);
        //TODO: prevoir les heures sup sup et greve!
        if (time > 1) {
            var overtime = 0.01 * Math.round(10000 * (time - 1));
            return overtime;
        }
        return 0;
    };
    ResultService.prototype.normalSelling = function (production, buyer) {
        var sell = production - buyer;
        if (sell <= 0) {
            return production;
        }
        if (sell > 0) {
            return buyer;
        }
    };
    ResultService.prototype.turnover = function (selling, company, indexProduct) {
        var price = 0;
        company.decision.marketingDecision.map(function (marketing) {
            if (marketing.type === "price") {
                price = marketing.decision[indexProduct];
            }
        });
        return this.calculus.calculTurnover(selling, price);
    };
    ResultService.prototype.marketShare = function (turnovers, indexTeam) {
        return this.calculus.calculMarketShare(turnovers, indexTeam);
    };
    ResultService.prototype.stock = function (production, buyer) {
        if ((production - buyer) > 0) {
            return production - buyer;
        }
        return 0;
    };
    ResultService.prototype.makeOneProductSituation = function (buyer, game, company, indexProduct, indexTeam) {
        var realProduction = this.realProduction(company, game, indexProduct);
        var machinePercent = this.useMachinePercent(company, indexProduct);
        var overtime = this.overtime(game, company, indexProduct);
        var selling = this.normalSelling(realProduction, buyer[indexTeam]);
        var turnover = this.turnover(selling, company, indexProduct);
        var stockQuantity = this.stock(realProduction, buyer[indexTeam]);
        // console.log("stock du produit " + indexProduct + " est de " + stockQuantity);
        var stockValue = this.valueSellStockProduct(company, game, stockQuantity, indexProduct);
        var situation = {
            realProduction: realProduction,
            machinePercent: machinePercent,
            overtime: overtime,
            sellingNormal: selling,
            sellingClear: 0,
            sellingExceptionnal: 0,
            sellingValue: turnover,
            marketPart: 0,
            stock: stockQuantity,
            stockValue: stockValue
        };
        return situation;
    };
    ResultService.prototype.makeOneProductAllSituations = function (buyer, game, indexProduct) {
        var _this = this;
        var situations = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (company, indexTeam) {
            situations.push(_this.makeOneProductSituation(buyer[indexProduct], game, company, indexProduct, indexTeam));
        });
        return situations;
    };
    ResultService.prototype.situationsMarket = function (game, situations) {
        var _this = this;
        var totalTurnover = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        situations.map(function (sit) { return totalTurnover.push(sit.sellingValue); });
        teams.map(function (company, indexCompany) {
            situations[indexCompany].marketPart = _this.marketShare(totalTurnover, indexCompany);
        });
    };
    ResultService.prototype.makeAllSituations = function (buyer, game) {
        var _this = this;
        var situationProduct = [];
        var products = [];
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        products.map(function (product, indexProd) {
            var situations = [];
            situations = _this.makeOneProductAllSituations(buyer, game, indexProd);
            _this.situationsMarket(game, situations);
            situationProduct.push(situations);
        });
        return situationProduct;
    };
    ResultService.prototype.resortSituations = function (game, situations) {
        var teamSituations = [];
        var teams = [];
        var products = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        teams.map(function (team, indexTeam) {
            var productSituations = [];
            products.map(function (product, indexProd) {
                productSituations.push(situations[indexProd][indexTeam]);
            });
            teamSituations.push(productSituations);
        });
        return teamSituations;
    };
    ResultService.prototype.makeCreanceProduct = function (company, turnoversProduct) {
        var _this = this;
        var debt = 0;
        var products = [];
        Object.keys(company.companyProduct).map(function (key) { return products.push(company.companyProduct[key]); });
        products.map(function (product, indexProd) {
            debt = _this.calculus.calculDebt(turnoversProduct, company.decision, indexProd);
        });
        return debt;
    };
    ResultService.prototype.makeAllCreance = function (game, turnoversTeam) {
        var _this = this;
        var debt = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (team, indexTeam) {
            debt.push(_this.makeCreanceProduct(team, turnoversTeam[indexTeam]));
        });
        return debt;
    };
    ResultService.prototype.getAllTurnover = function (situationsTeams) {
        var turnoversTeam = [];
        situationsTeams.map(function (situationsTeam, indexTeam) {
            var turnoversProduct = [];
            situationsTeam.map(function (situationProduct, indexProduct) {
                turnoversProduct.push(situationProduct.sellingValue);
            });
            turnoversTeam.push(turnoversProduct);
        });
        return turnoversTeam;
    };
    /****************************************************************************/
    /****************************************************************************/
    /*************************** STOCK ******************************************/
    /****************************************************************************/
    /****************************************************************************/
    //Stock
    ResultService.prototype.valueSellStockProduct = function (company, game, stock, indexProduct) {
        var stockValue = 0;
        var products = [];
        Object.keys(company.companyProduct).map(function (key) { return products.push(company.companyProduct[key]); });
        stockValue = this.calculus.calculStockProductionValue(company, products[indexProduct], game.politic, company.decision, indexProduct, company.decision.productionDecision.production[indexProduct], stock);
        return stockValue;
    };
    ResultService.prototype.valueSellStockTeams = function (game, stock, indexProduct) {
        var _this = this;
        var stockValue = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (team, indexTeam) {
            stockValue.push(_this.valueSellStockProduct(team, game, stock, indexProduct));
        });
        return stockValue;
    };
    ResultService.prototype.valueSellStock = function (game, stock) {
        var _this = this;
        var stockValue = [];
        var products = [];
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        products.map(function (product, indexProduct) {
            stockValue.push(_this.valueSellStockTeams(game, stock, indexProduct));
        });
        return stockValue;
    };
    ResultService.prototype.makeOneProductExploitation = function (buyer, game, company, indexProduct, indexTeam) {
        var realProduction = this.realProduction(company, game, indexProduct);
        var selling = this.normalSelling(realProduction, buyer[indexTeam]);
        var stockQuantity = this.stock(realProduction, buyer[indexTeam]);
        //TODO, redo for more turn
        var stockValue = this.valueSellStockProduct(company, game, stockQuantity, indexProduct);
        var exploitation = {
            sellingNormalValue: selling,
            sellingClearValue: 0,
            sellingSpecialValue: 0,
            stockValue: stockValue,
            subvention: 0
        };
        return exploitation;
    };
    ResultService.prototype.makeOneProductAllExploitations = function (buyer, game, indexProduct) {
        var _this = this;
        var exploitations = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (company, indexTeam) {
            exploitations.push(_this.makeOneProductExploitation(buyer[indexProduct], game, company, indexProduct, indexTeam));
        });
        return exploitations;
    };
    ResultService.prototype.makeAllExploitations = function (buyer, game) {
        var _this = this;
        var exploitationProduct = [];
        var products = [];
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        products.map(function (product, indexProd) {
            var exploitations = [];
            exploitations = _this.makeOneProductAllExploitations(buyer, game, indexProd);
            exploitationProduct.push(exploitations);
        });
        return exploitationProduct;
    };
    ResultService.prototype.resortExploitations = function (game, exploitations) {
        var teamExploitations = [];
        var teams = [];
        var products = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        teams.map(function (team, indexTeam) {
            var productExploitations = [];
            products.map(function (product, indexProd) {
                productExploitations.push(exploitations[indexProd][indexTeam]);
            });
            teamExploitations.push(productExploitations);
        });
        return teamExploitations;
    };
    ResultService.prototype.makeOneTotalExploitation = function (company, exploitations) {
        var sellingNormalValue = 0;
        var sellingClearValue = 0;
        var sellingSpecialValue = 0;
        var stockValue = 0;
        var subvention = 0;
        exploitations.map(function (exploitation) {
            sellingNormalValue += exploitation.sellingNormalValue;
            sellingClearValue += exploitation.sellingClearValue;
            sellingSpecialValue += exploitation.sellingSpecialValue;
            stockValue += exploitation.stockValue;
            subvention += exploitation.subvention;
        });
        subvention = company.decision.financialDecision.subventions;
        var exploitationTotal = {
            sellingNormalValue: sellingNormalValue,
            sellingClearValue: sellingClearValue,
            sellingSpecialValue: sellingSpecialValue,
            stockValue: stockValue,
            subvention: subvention
        };
        return exploitationTotal;
    };
    ResultService.prototype.makeAllTotalExploitations = function (exploitationPack, game) {
        var _this = this;
        var allExploitations = [];
        var teams = [];
        var products = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        var exploitations = [];
        teams.map(function (team, indexTeam) {
            var teamExploitations = [];
            products.map(function (prod, indexProduct) {
                teamExploitations.push(exploitationPack[indexProduct][indexTeam]);
            });
            exploitations.push(teamExploitations);
        });
        exploitations.map(function (exploitation, indexExploitation) { return allExploitations.push(_this.makeOneTotalExploitation(teams[indexExploitation], exploitation)); });
        return allExploitations;
    };
    /****************************************************************************/
    /****************************************************************************/
    /************************* CHARGES ******************************************/
    /****************************************************************************/
    /****************************************************************************/
    //Charges
    ResultService.prototype.matterConsommation = function (company, game, indexProduct) {
        var consommation = this.calculus.calculConsmomationProduct(company.companyProduct[indexProduct], game.politic, company.decision, indexProduct);
        return consommation;
    };
    ResultService.prototype.productorCostProduct = function (company, game, indexProduct) {
        //TODO: prevoir envoie de producteur dans le resultat
        var productors = 0;
        var employees = [];
        Object.keys(company.decision.productionDecision.affectedProductor)
            .map(function (keys) { return employees.push(company.decision.productionDecision.affectedProductor[keys]); });
        productors = employees[indexProduct];
        var cost = this.calculus.productorCost(productors, game.politic);
        return cost;
    };
    ResultService.prototype.qualityCostProduct = function (dec, indexProduct) {
        var cost;
        dec.marketingDecision.map(function (market) {
            if (market.type === "research") {
                cost = market.decision[indexProduct];
            }
        });
        return cost;
    };
    ResultService.prototype.publicityCostProduct = function (dec, indexProduct) {
        var cost = 0;
        dec.marketingDecision.map(function (market) {
            if (market.type === "publicity") {
                cost += market.decision[indexProduct];
            }
        });
        return cost;
    };
    ResultService.prototype.marketingCostProduct = function (dec, indexProduct) {
        var cost = 0;
        dec.marketingDecision.map(function (market) {
            if (market.type === "marketing") {
                cost += market.decision[indexProduct];
            }
        });
        return cost;
    };
    ResultService.prototype.sellorCost = function (buyer, company, game, indexTeam, indexProduct) {
        var sellors = 0;
        var markets = [];
        Object.keys(company.decision.marketingDecision).map(function (keys) { return markets.push(company.decision.marketingDecision[keys]); });
        markets.map(function (market) {
            if (market.type === "sellorForce") {
                sellors = market.decision[indexProduct];
            }
        });
        var realProduction = this.realProduction(company, game, indexProduct);
        var selling = this.normalSelling(realProduction, buyer[indexTeam]);
        var cost = this.calculus.sellorCost(game.politic, company.decision, sellors, selling);
        return cost;
    };
    //TODO: error with stockage
    ResultService.prototype.stockageCostProduct = function (game, company, indexTeam, indexProduct) {
        var stock = 0;
        if (game.round !== 0) {
            var period = game.round - 1;
            var result = "result" + period;
            var team = "team" + indexTeam;
            var oldStock = game[result][team].exploitation[indexProduct].stockValue;
            stock += oldStock;
        }
        return stock;
    };
    ResultService.prototype.stockageCost = function (game, company, indexTeam) {
        var stock = 0;
        if (game.round !== 0) {
            var period = game.round - 1;
            var result = "result" + period;
            var team = "team" + indexTeam;
            var oldStock = game[result][team].exploitation["all"].stockValue;
            stock += oldStock;
        }
        return stock;
    };
    ResultService.prototype.amortizementDotationProduct = function (game, company, indexProduct) {
        var cost = this.calculus.calculProductDotationAmortissement(company, game.politic, company.decision, indexProduct);
        return cost;
    };
    ResultService.prototype.amortizementDotation = function (game, company) {
        var cost = this.calculus.calculAllDotationAmortissement(company, game.politic);
        return cost;
    };
    ResultService.prototype.costManager = function (company, game) {
        var managers = this.getManager(company);
        var cost = this.calculus.managerSalary(managers, game.politic);
        return cost;
    };
    ResultService.prototype.hireCost = function (company, game) {
        var cost = this.calculus.calculHireCost(game.politic, company.decision);
        return cost;
    };
    ResultService.prototype.fireCost = function (company, game) {
        var cost = this.calculus.calculFireCost(game.politic, company.decision);
        return cost;
    };
    ResultService.prototype.formationCost = function (company, game) {
        var cost = this.calculus.calculFormationCost(game.politic, company.decision);
        return cost;
    };
    ResultService.prototype.fixedCost = function (company, game) {
        var numberMachine = 0;
        Object.keys(company.companyMachinery).map(function () { return numberMachine++; });
        var cost = this.calculus.calculFixedCost(game.politic, numberMachine);
        return cost;
    };
    ResultService.prototype.reparationCost = function (game, company, disturbing) {
        var cost = 0;
        var allReparationPrice = 0;
        var percentReparation = 0.01 * company.decision.machineFlux.maintenance;
        company.companyMachinery.map(function (machine, index) {
            allReparationPrice += machine.repairPrice;
        });
        var percent = 0;
        if (disturbing < percentReparation) {
            cost = allReparationPrice * disturbing;
        }
        if (disturbing >= percentReparation) {
            cost = allReparationPrice * percentReparation;
        }
        if (disturbing === 0) {
            cost = 0;
        }
        return cost;
    };
    ResultService.prototype.servicingCost = function (game, company) {
        var cost = 0;
        var allReparationPrice = 0;
        var percentReparation = 0.01 * company.decision.machineFlux.maintenance;
        company.companyMachinery.map(function (machine, index) {
            allReparationPrice += machine.price / 10; //because i is a servicingCost
        });
        cost = allReparationPrice * percentReparation;
        return cost;
    };
    ResultService.prototype.studiesCost = function (game, company) {
        var cost = 0;
        //TODO: permettre de choisir le nombre de round
        if (game.round >= 2) {
            var allProductStudiesCost = [];
            Object.keys(game.studies.productStudies).map(function (key) {
                allProductStudiesCost.push(game.studies.productStudies[key]);
            });
            var booleanProductStudies = [];
            Object.keys(company.decision.studies.productStudies).map(function (key) {
                booleanProductStudies.push(company.decision.studies.productStudies[key]);
            });
            if (company.decision.studies.finance === true) {
                cost += game.studies.concurrenceStudies;
            }
            if (company.decision.studies.market === true) {
                cost += game.studies.marketStudies;
            }
            if (company.decision.studies.performance === true) {
                cost += game.studies.performanceStudies;
            }
            if (company.decision.studies.situation === true) {
                cost += game.studies.sellingStudies;
            }
            if (company.decision.studies.result === true) {
                cost += game.studies.structureStudies;
            }
            //map
            allProductStudiesCost.map(function (costProd, index) {
                if (booleanProductStudies[index]) {
                    cost += costProd;
                }
            });
        }
        return cost;
    };
    ResultService.prototype.assuranceCost = function (game, company) {
        var assurance = 0;
        var taux = game.politic.generalCost.insurance;
        var tools = 0;
        company.companyMachinery.map(function (machine) {
            tools += machine.price;
        });
        assurance = tools * (0.01 * taux);
        return assurance;
    };
    ResultService.prototype.makeOneProductCharges = function (buyer, game, company, indexProduct, indexTeam) {
        var matterConso = this.matterConsommation(company, game, indexProduct);
        var productorCost = this.productorCostProduct(company, game, indexProduct);
        var qualityCost = this.qualityCostProduct(company.decision, indexProduct);
        var publicityCost = this.publicityCostProduct(company.decision, indexProduct);
        var marketCost = this.marketingCostProduct(company.decision, indexProduct);
        var sellorCost = this.sellorCost(buyer, company, game, indexTeam, indexProduct);
        var stockCost = this.stockageCostProduct(game, company, indexTeam, indexProduct);
        var amortissement = this.amortizementDotationProduct(game, company, indexProduct);
        var charges = {
            materialConso: matterConso,
            directLabour: productorCost,
            qualityCost: qualityCost,
            publicityCost: publicityCost,
            marketingCost: marketCost,
            sellerLabour: sellorCost,
            stockCost: stockCost,
            amortissementDot: amortissement
        };
        return charges;
    };
    ResultService.prototype.makeOneProductAllCharges = function (buyer, game, indexProduct) {
        var _this = this;
        var charges = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (company, indexTeam) {
            charges.push(_this.makeOneProductCharges(buyer[indexProduct], game, company, indexProduct, indexTeam));
        });
        return charges;
    };
    ResultService.prototype.makeAllCharges = function (buyer, game) {
        var _this = this;
        var chargesProduct = [];
        var products = [];
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        products.map(function (product, indexProd) {
            var charges = [];
            charges = _this.makeOneProductAllCharges(buyer, game, indexProd);
            chargesProduct.push(charges);
        });
        return chargesProduct;
    };
    ResultService.prototype.resortCharges = function (game, charges) {
        var teamCharges = [];
        var teams = [];
        var products = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        teams.map(function (team, indexTeam) {
            var productCharges = [];
            products.map(function (product, indexProd) {
                productCharges.push(charges[indexProd][indexTeam]);
            });
            teamCharges.push(productCharges);
        });
        return teamCharges;
    };
    ResultService.prototype.makeOneTotalCharges = function (company, game, allCharges, indexTeam) {
        //Old Part
        var materialConso = 0;
        var directLabour = 0;
        var qualityCost = 0;
        var publicityCost = 0;
        var marketingCost = 0;
        var sellerLabour = 0;
        var stockCost = 0;
        var amortissementDot = 0;
        allCharges.map(function (charges) {
            materialConso += charges.materialConso;
            directLabour += charges.directLabour;
            qualityCost += charges.qualityCost;
            publicityCost += charges.publicityCost;
            marketingCost += charges.marketingCost;
            sellerLabour += charges.sellerLabour;
            stockCost += charges.stockCost;
            amortissementDot += charges.amortissementDot;
        });
        //New Part
        stockCost = this.stockageCost(game, company, indexTeam);
        amortissementDot = this.amortizementDotation(game, company);
        var managerCost = this.costManager(company, game);
        var hireCost = this.hireCost(company, game);
        var fireCost = this.fireCost(company, game);
        var formationCost = this.formationCost(company, game);
        var fixedCost = this.fixedCost(company, game);
        var disturbing = 0;
        var reparationCost = this.reparationCost(game, company, disturbing);
        var servicingCost = this.servicingCost(game, company);
        var assuranceCost = this.assuranceCost(game, company);
        var studiesCost = this.studiesCost(game, company);
        //Final Part
        var totalCharges = {
            materialConso: materialConso,
            directLabour: directLabour,
            qualityCost: qualityCost,
            publicityCost: publicityCost,
            marketingCost: marketingCost,
            sellerLabour: sellerLabour,
            stockCost: stockCost,
            amortissementDot: amortissementDot,
            //Other
            managerCost: managerCost,
            hireCost: hireCost,
            fireCost: fireCost,
            formationCost: formationCost,
            productionFixCost: fixedCost,
            reparationCost: reparationCost,
            servicingCost: servicingCost,
            assuranceBonus: assuranceCost,
            studiesCost: studiesCost,
        };
        return totalCharges;
    };
    //TODO: REDO
    ResultService.prototype.makeAllTotalCharges = function (chargesPack, game) {
        var _this = this;
        var allCharges = [];
        var teams = [];
        var products = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        Object.keys(game.allProduct).map(function (key) { return products.push(game.allProduct[key]); });
        var charges = [];
        teams.map(function (team, indexTeam) {
            var teamCharges = [];
            products.map(function (prod, indexProduct) {
                teamCharges.push(chargesPack[indexProduct][indexTeam]);
            });
            charges.push(teamCharges);
        });
        teams.map(function (team, index) {
            allCharges.push(_this.makeOneTotalCharges(team, game, charges[index], index));
        });
        return allCharges;
    };
    /****************************************************************************/
    /****************************************************************************/
    /************************ Exceptional ***************************************/
    /****************************************************************************/
    /****************************************************************************/
    //Exceptional
    //TODO: Il faut séparer les produit et charges exterieurs
    ResultService.prototype.getExceptionalProducts = function (dec) {
        var exception = 0;
        return exception;
    };
    ResultService.prototype.getExceptionalCharges = function (dec) {
        var exception = 0;
        return exception;
    };
    ResultService.prototype.getExceptionalResult = function (product, charges) {
        var exception = product - charges;
        return exception;
    };
    ResultService.prototype.makeExceptional = function (company) {
        var exceptionalProduct = this.getExceptionalProducts(company.decision);
        var exceptionalCharges = this.getExceptionalCharges(company.decision);
        var exceptionalResult = this.getExceptionalResult(exceptionalProduct, exceptionalCharges);
        var exception = {
            exceptionalProduct: exceptionalProduct,
            exceptionalCharges: exceptionalCharges,
            result: exceptionalResult
        };
        return exception;
    };
    ResultService.prototype.makeAllExceptional = function (game) {
        var _this = this;
        var exceptions = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (team, indexTeam) {
            exceptions.push(_this.makeExceptional(team));
        });
        return exceptions;
    };
    /****************************************************************************/
    /****************************************************************************/
    /************************ FINANCES ******************************************/
    /****************************************************************************/
    /****************************************************************************/
    //Finances
    ResultService.prototype.getFinanceProducts = function (dec) {
        var finance = dec.financialDecision.variateLoaning;
        return finance;
    };
    ResultService.prototype.getFinanceCharges = function (dec) {
        var finance = dec.financialDecision.variateLoaning;
        return finance;
    };
    ResultService.prototype.getFinanceResult = function (product, charges) {
        var finance = product - charges;
        return finance;
    };
    ResultService.prototype.makeFinance = function (company) {
        var financeProducts = this.getFinanceProducts(company.decision);
        var financeCharges = this.getFinanceCharges(company.decision);
        var financeResult = this.getFinanceResult(financeProducts, financeCharges);
        var finance = {
            financeProducts: financeProducts,
            financeCharges: financeCharges,
            result: financeResult
        };
        return finance;
    };
    ResultService.prototype.makeAllFinance = function (game) {
        var _this = this;
        var finances = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (team, indexTeam) {
            finances.push(_this.makeFinance(team));
        });
        return finances;
    };
    /****************************************************************************/
    /****************************************************************************/
    /************************ EXERCICE ******************************************/
    /****************************************************************************/
    /****************************************************************************/
    //Excercice Result
    ResultService.prototype.makeResultExploitation = function (allExploitation) {
        var result = 0;
        Object.keys(allExploitation).map(function (key) {
            result += allExploitation[key];
        });
        return result;
    };
    ResultService.prototype.makeResultCharges = function (allCharges) {
        var result = 0;
        Object.keys(allCharges).map(function (key) {
            result += allCharges[key];
        });
        return result;
    };
    ResultService.prototype.makeResultExercice = function (resultExploitation, resultCharges) {
        var result = resultExploitation - resultCharges;
        return result;
    };
    ResultService.prototype.makeResultNet = function (resultExercie, resultFinance, resultException, resultRefund) {
        var result = resultExercie + resultFinance + resultException + resultRefund;
        return result;
    };
    ResultService.prototype.makeResultTax = function (game, resultNet) {
        var result = 0;
        var tax = game.politic.IT;
        if (resultNet > 0) {
            result = 0.01 * (resultNet * tax);
        }
        return result;
    };
    ResultService.prototype.makeResultWithTax = function (resultNet, tax) {
        var result = 0;
        result = resultNet - tax;
        return result;
    };
    //TODO: Make the other result
    ResultService.prototype.makeCompanyExercice = function (game, allExploitation, allCharges) {
        var resultExploitation = this.makeResultExploitation(allExploitation);
        var resultCharges = this.makeResultCharges(allCharges);
        var resultExercice = this.makeResultExercice(resultExploitation, resultCharges);
        var exerciceFinance = 0;
        var exerciceException = 0;
        var exerciceRefund = 0;
        var exerciceNet = this.makeResultNet(resultExercice, exerciceFinance, exerciceException, exerciceRefund);
        var exerciceTaxes = this.makeResultTax(game, exerciceNet);
        var exerciceWithTax = this.makeResultWithTax(exerciceNet, exerciceTaxes);
        var exercice = {
            resultExploitation: resultExploitation,
            resultCharges: resultCharges,
            exerciceExercie: resultExercice,
            exerciceFinance: exerciceFinance,
            exerciceException: exerciceException,
            exerciceRefund: exerciceRefund,
            exerciceNet: exerciceNet,
            exerciceTax: exerciceTaxes,
            exerciceWithTax: exerciceWithTax
        };
        return exercice;
    };
    ResultService.prototype.makeAllExercice = function (game, allExploitation, allCharges) {
        var _this = this;
        var exercices = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (team, indexTeam) {
            exercices.push(_this.makeCompanyExercice(game, allExploitation[indexTeam], allCharges[indexTeam]));
        });
        return exercices;
    };
    /****************************************************************************/
    /****************************************************************************/
    /*************************   FLUX  ******************************************/
    /****************************************************************************/
    /****************************************************************************/
    //Flux
    //Immobilization
    //TODO !!!
    ResultService.prototype.getFluxToolsValue = function (company) {
        var tools = 0;
        var machinery = [];
        Object.keys(company.companyMachinery).map(function (key) {
            machinery.push(company.companyMachinery[key]);
        });
        machinery.map(function (machine) {
            tools += machine.price;
        });
        return tools;
    };
    ResultService.prototype.getFluxAmortizationValue = function (game, companyIndex, toolsValue) {
        var amortization = 0;
        if (game.round !== 0) {
            var round = "result" + (game.round - 1);
            var company = "team" + companyIndex;
            var oldAmort = game[round][company].flux.amortizement;
            amortization += oldAmort;
        }
        //Not Good
        var amortDivisor = game.politic.machineryType.amortization;
        //TODO: Change Amortissment for all machinery
        amortization += toolsValue / amortDivisor;
        return amortization;
    };
    ResultService.prototype.makeImmobilization = function (tools, amortissement) {
        var immobilization = 0;
        immobilization = tools - amortissement;
        return immobilization;
    };
    //Ciculization
    ResultService.prototype.getFluxStockValue = function (allExploitationPack, companyIndex) {
        var stock = 0;
        stock = allExploitationPack[companyIndex].stockValue;
        return stock;
    };
    ResultService.prototype.getFluxClientsDebt = function (structuresPack, companyIndex) {
        var client = 0;
        client += structuresPack[companyIndex].debtClient;
        return client;
    };
    ResultService.prototype.getFluxBank = function () {
        var bank = 0;
        return bank;
    };
    ResultService.prototype.makeCirculization = function (stock, client, bank) {
        var circulization = 0;
        circulization = stock + client + bank;
        return circulization;
    };
    //Own Ressources
    ResultService.prototype.getFluxSocialCapital = function (company) {
        var social = 0;
        social = company.socialCapital;
        return social;
    };
    ResultService.prototype.getFluxReserve = function () {
        var reserve = 0;
        return reserve;
    };
    ResultService.prototype.getFluxExercice = function (exo) {
        var exercice = 0;
        exercice = exo.exerciceWithTax;
        return exercice;
    };
    ResultService.prototype.makeOwnRessources = function (social, reserve, exercice) {
        var own = 0;
        own = social + reserve + exercice;
        return own;
    };
    //Debt Ressources
    ResultService.prototype.getFluxLoans = function () {
        var loan = 0;
        return loan;
    };
    ResultService.prototype.getFluxBankContest = function () {
        var bank = 0;
        return bank;
    };
    ResultService.prototype.getFluxProvider = function () {
        var provider = 0;
        return provider;
    };
    ResultService.prototype.getFluxFiscalDebt = function () {
        var fiscal = 0;
        return fiscal;
    };
    ResultService.prototype.makeBorrowRessources = function (loans, bank, provider, fiscal) {
        var borrow = 0;
        borrow = loans + bank + provider + fiscal;
        return borrow;
    };
    //Total
    ResultService.prototype.makeFluxAssets = function (immobilization, circulization) {
        var assets = 0;
        assets = immobilization + circulization;
        return assets;
    };
    ResultService.prototype.makeFluxLiabilities = function (own, debt) {
        var liabilities = 0;
        liabilities = own + debt;
        return liabilities;
    };
    ResultService.prototype.makeCompanyFlux = function (game, company, allExploitation, structurePack, exo, companyIndex) {
        //Actif
        var tools = this.getFluxToolsValue(company);
        var amortizement = this.getFluxAmortizationValue(game, companyIndex, tools);
        var immobilisation = this.makeImmobilization(tools, amortizement);
        var stockage = this.getFluxStockValue(allExploitation, companyIndex);
        var clients = this.getFluxClientsDebt(structurePack, companyIndex);
        var bank = this.getFluxBank();
        var circulization = this.makeCirculization(stockage, clients, bank);
        var totalAssets = this.makeFluxAssets(immobilisation, circulization);
        //Passif
        var socialCapital = this.getFluxSocialCapital(company);
        var reserve = this.getFluxReserve();
        var exercice = this.getFluxExercice(exo);
        var ownRessource = this.makeOwnRessources(socialCapital, reserve, exercice);
        var borrow = this.getFluxLoans();
        var bankLoans = this.getFluxBankContest();
        var provider = this.getFluxProvider();
        var taxDebts = this.getFluxFiscalDebt();
        var borrowRessource = this.makeBorrowRessources(borrow, bankLoans, provider, taxDebts);
        var totalLiabilities = this.makeFluxLiabilities(ownRessource, borrowRessource);
        var flux = {
            //Actif
            tools: tools,
            amortizement: amortizement,
            immobilisation: immobilisation,
            stockage: stockage,
            clients: clients,
            bank: bank,
            circulization: circulization,
            totalAssets: totalAssets,
            //Passif
            socialCapital: socialCapital,
            reserve: reserve,
            exercice: exercice,
            ownRessource: ownRessource,
            borrow: borrow,
            bankLoans: bankLoans,
            provider: provider,
            taxDebts: taxDebts,
            borrowRessource: borrowRessource,
            totalLiabilities: totalLiabilities
        };
        return flux;
    };
    ResultService.prototype.makeAllFlux = function (game, allExploitation, structurePack, exos) {
        var _this = this;
        var flux = [];
        var teams = [];
        Object.keys(game.teams).map(function (key) { return teams.push(game.teams[key]); });
        teams.map(function (team, indexTeam) {
            flux.push(_this.makeCompanyFlux(game, team, allExploitation, structurePack, exos[indexTeam], indexTeam));
        });
        return flux;
    };
    return ResultService;
}());
ResultService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_modelization_service__["a" /* ModelizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_modelization_service__["a" /* ModelizationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_calculus_service__["a" /* CalculusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_calculus_service__["a" /* CalculusService */]) === "function" && _c || Object])
], ResultService);

var _a, _b, _c;
//# sourceMappingURL=result.service.js.map

/***/ }),

/***/ "../../../../../src/app/situation/situation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".situation{\r\n  width: 100%;\r\n  overflow: auto;\r\n  margin-bottom: 10px;\r\n}\r\n.situation-show{\r\n  margin-bottom: 12px;\r\n}\r\n.situation-show div{\r\n  text-align: center;\r\n}\r\n\r\n.situation-periode div{\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n.periode{\r\n  margin: 5px;\r\n}\r\n.periode h3{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.periode-result div{\r\n  display: inline-block;\r\n  float: left;\r\n  text-align: center;\r\n  margin: 1px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\n/******************************************************************/\r\n\r\nh1,\r\nh3{\r\n  margin: 0px;\r\n}\r\n\r\n.flux-periode{\r\n  overflow: auto;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/******************************************************************/\r\n\r\n.periode-result div:hover{\r\n  background: #808080;\r\n}\r\n.choosed{\r\n  background: #808080;\r\n}\r\n\r\n/******************************************************************/\r\n.periode{\r\n  margin-bottom: 10px;\r\n}\r\n.results{\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/situation/situation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"result situation\">\r\n\r\n  <div class=\"situation-show\">\r\n    <div><h1>{{ lang.situTitle }}</h1></div>\r\n    <div><h3>{{ lang.situCompany }}:  {{ company.name }}</h3></div>\r\n  </div>\r\n\r\n  <div class=\"situation-periode\">\r\n\r\n    <div class=\"periode\">\r\n      <h3>{{ lang.situPeriode }}: </h3>\r\n    </div>\r\n    <div class=\"periode periode-result\" *ngIf=\"company.result\">\r\n      <div *ngFor=\"let item of listPeriode; let i = index\" (click)=\"changePeriode(i)\" [class.choosed]=\"boolPeriode[i]\">\r\n        <span>{{ i + 1 }}</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"situation-article\" *ngIf=\"periode !== undefined\">\r\n\r\n    <div class=\"results results-structure\">\r\n      <results-structure [company]=\"company\" [periode]=\"periode\"></results-structure>\r\n    </div>\r\n\r\n    <div class=\"results results-exploitation\">\r\n      <results-exploitation [company]=\"company\" [periode]=\"periode\"></results-exploitation>\r\n    </div>\r\n\r\n    <div class=\"results results-selling\">\r\n      <results-selling [company]=\"company\" [periode]=\"periode\"></results-selling>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/situation/situation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant_test_const__ = __webpack_require__("../../../../../src/app/constant/test.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SituationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Service

//Constant

var SituationComponent = (function () {
    function SituationComponent(route, router, decision, langServ) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.decision = decision;
        this.langServ = langServ;
        this.company = __WEBPACK_IMPORTED_MODULE_4__constant_test_const__["a" /* TEST_COMPANY */];
        this.employeesType = [
            { type: "Productor", salary: 0 },
            { type: "Sellor", salary: 0 },
            { type: "Manager", salary: 0 }
        ];
        this.listPeriode = [];
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    SituationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.teamId = +param['id'];
            var teamShare = "team" + _this.teamId;
            _this.listPeriode = [];
            _this.boolPeriode = [];
            _this.company = _this.decision.updateCompany(_this.teamId);
            _this.round = _this.decision.getRound();
            _this.periode = _this.decision.getRound() - 1;
            Object.keys(_this.company.result).map(function (key) {
                _this.listPeriode.push(_this.company.result[key]);
                _this.boolPeriode.push(false);
            });
            _this.boolPeriode[_this.boolPeriode.length - 1] = true;
        });
    };
    SituationComponent.prototype.changePeriode = function (n) {
        var _this = this;
        this.periode = n;
        this.boolPeriode.map(function (elt, i) { return _this.boolPeriode[i] = false; });
        this.boolPeriode[n] = true;
    };
    return SituationComponent;
}());
SituationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-situation',
        template: __webpack_require__("../../../../../src/app/situation/situation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/situation/situation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], SituationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=situation.component.js.map

/***/ }),

/***/ "../../../../../src/app/studies/studies-concurrence/studies-concurrence.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market{\r\n  border: 1px solid black;\r\n  padding: 0px;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.title{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.teams-space{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.teams-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.items-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.items-result{\r\n  background-color: none;\r\n  border: 1px solid black;\r\n}\r\n\r\n.items div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n.teams div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n\r\n.items-name{\r\n  width: 20vw !important;\r\n}\r\n.teams-space{\r\n  width: 20vw !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studies/studies-concurrence/studies-concurrence.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"market\">\r\n\r\n  <div class=\"title\">\r\n    {{ lang.studiesConcuTitle }}\r\n  </div>\r\n\r\n  <div class=\"teams\">\r\n    <div class=\"teams-space\">\r\n      <span>&nbsp;</span>\r\n    </div>\r\n    <div class=\"teams-name\" *ngFor=\"let team of allTeams\">\r\n      <span>{{ team.name }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"items\" *ngFor=\"let item of keyList; let iTem = index\">\r\n    <div class=\"items-name\">\r\n      {{ item }}\r\n    </div>\r\n    <div class=\"items-result\" *ngFor=\"let team of allTeams; let iTeam= index\">\r\n      {{ valueList[iTeam][item] | roundAt2 }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/studies/studies-concurrence/studies-concurrence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesConcurrenceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudiesConcurrenceComponent = (function () {
    function StudiesConcurrenceComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    StudiesConcurrenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allTeams = [];
        this.allProducts = [];
        Object.keys(this.game.teams).map(function (team) { return _this.allTeams.push(_this.game.teams[team]); });
        Object.keys(this.game.allProduct).map(function (product) { return _this.allProducts.push(_this.game.allProduct[product]); });
        //TODO
        this.keyList = ["Résultat Fiscal", "Résultat Net"];
        this.allProducts.map(function (prod, iProd) { return _this.keyList.push("Produit " + (iProd + 1) + " CA"); });
        this.valueList = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.game).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.allTeams.map(function (team, iTeam) {
                    var data = _this.keyList.reduce(function (o, key) {
                        return Object.assign(o, (_a = {}, _a[key] = 0, _a));
                        var _a;
                    }, {});
                    //TODO
                    _this.valueList.push(data);
                });
            }
        });
    };
    StudiesConcurrenceComponent.prototype.ngOnChanges = function (change) {
        this.ngOnInit();
    };
    return StudiesConcurrenceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], StudiesConcurrenceComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StudiesConcurrenceComponent.prototype, "periode", void 0);
StudiesConcurrenceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'studies-concurrence',
        template: __webpack_require__("../../../../../src/app/studies/studies-concurrence/studies-concurrence.component.html"),
        styles: [__webpack_require__("../../../../../src/app/studies/studies-concurrence/studies-concurrence.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], StudiesConcurrenceComponent);

var _a;
//# sourceMappingURL=studies-concurrence.component.js.map

/***/ }),

/***/ "../../../../../src/app/studies/studies-market/studies-market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market{\r\n  border: 1px solid black;\r\n  padding: 0px;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.title{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.teams-space{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.teams-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.products-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.products-result{\r\n  background-color: none;\r\n  border: 1px solid black;\r\n}\r\n\r\n.products div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n.teams div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studies/studies-market/studies-market.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"market\">\r\n\r\n  <div class=\"title\">\r\n    {{ lang.studiesMPTitle }}\r\n  </div>\r\n\r\n  <div class=\"teams\">\r\n    <div class=\"teams-space\">\r\n      <span>&nbsp;</span>\r\n    </div>\r\n    <div class=\"teams-name\" *ngFor=\"let team of allTeams\">\r\n      <span>{{ team.name }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"products\" *ngFor=\"let product of allProducts; let iProd = index\">\r\n    <div class=\"products-name\">\r\n      {{ lang.studiesMPProd }} {{ iProd + 1 }}\r\n    </div>\r\n    <div class=\"products-result\" *ngFor=\"let team of allTeams; let iTeam= index\">\r\n      {{ markets[iProd][iTeam][team.name] | roundAt2 }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/studies/studies-market/studies-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesMarketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudiesMarketComponent = (function () {
    function StudiesMarketComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    StudiesMarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allTeams = [];
        this.allProducts = [];
        Object.keys(this.game.teams).map(function (team) { return _this.allTeams.push(_this.game.teams[team]); });
        Object.keys(this.game.allProduct).map(function (product) { return _this.allProducts.push(_this.game.allProduct[product]); });
        this.markets = [];
        this.allProducts.map(function (key) { return _this.markets.push(0); });
        var resultPeriode = "result" + this.periode;
        Object.keys(this.game).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.allProducts.map(function (prod, iProd) {
                    _this.markets[iProd] = (_this.game[keyResult].market[iProd]);
                });
            }
        });
    };
    StudiesMarketComponent.prototype.ngOnChanges = function (change) {
        this.ngOnInit();
    };
    return StudiesMarketComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], StudiesMarketComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], StudiesMarketComponent.prototype, "company", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StudiesMarketComponent.prototype, "periode", void 0);
StudiesMarketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'studies-market',
        template: __webpack_require__("../../../../../src/app/studies/studies-market/studies-market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/studies/studies-market/studies-market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], StudiesMarketComponent);

var _a;
//# sourceMappingURL=studies-market.component.js.map

/***/ }),

/***/ "../../../../../src/app/studies/studies-performance/studies-performance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market{\r\n  border: 1px solid black;\r\n  padding: 0px;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.title{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.products-space{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.products-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.items-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.items-result{\r\n  background-color: none;\r\n  border: 1px solid black;\r\n}\r\n\r\n.items div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n.products div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n\r\n.items-name{\r\n  width: 20vw !important;\r\n}\r\n.products-space{\r\n  width: 20vw !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studies/studies-performance/studies-performance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"market\">\r\n\r\n  <div class=\"title\">\r\n    {{ lang.studiesPerformanceTitle }}\r\n  </div>\r\n\r\n  <div class=\"products\">\r\n    <div class=\"products-space\">\r\n      <span>&nbsp;</span>\r\n    </div>\r\n    <div class=\"products-name\" *ngFor=\"let product of allProducts; let iProd = index\">\r\n      <span>{{ lang.studiesPerformanceNameProduct }} {{ iProd + 1 }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"items\" *ngFor=\"let item of keyList; let iTem = index\">\r\n    <div class=\"items-name\">\r\n      {{ item }}\r\n    </div>\r\n    <div class=\"items-result\" *ngFor=\"let product of allProducts; let iProd= index\">\r\n      {{ valueList[iProd][item] | roundAt2 }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/studies/studies-performance/studies-performance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesPerformanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudiesPerformanceComponent = (function () {
    function StudiesPerformanceComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    StudiesPerformanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allTeams = [];
        this.allProducts = [];
        Object.keys(this.game.teams).map(function (team) { return _this.allTeams.push(_this.game.teams[team]); });
        Object.keys(this.game.allProduct).map(function (product) { return _this.allProducts.push(_this.game.allProduct[product]); });
        //TODO
        this.keyList = ["Prix", "Pub", "Marketing", "Sellor", "Credit"];
        this.valueList = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.game).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.allProducts.map(function (prod, iProd) {
                    var data = _this.keyList.reduce(function (o, key) {
                        return Object.assign(o, (_a = {}, _a[key] = 0, _a));
                        var _a;
                    }, {});
                    //TODO
                    _this.valueList.push(data);
                });
            }
        });
    };
    StudiesPerformanceComponent.prototype.ngOnChanges = function (change) {
        this.ngOnInit();
    };
    return StudiesPerformanceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], StudiesPerformanceComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StudiesPerformanceComponent.prototype, "periode", void 0);
StudiesPerformanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'studies-performance',
        template: __webpack_require__("../../../../../src/app/studies/studies-performance/studies-performance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/studies/studies-performance/studies-performance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], StudiesPerformanceComponent);

var _a;
//# sourceMappingURL=studies-performance.component.js.map

/***/ }),

/***/ "../../../../../src/app/studies/studies-product/studies-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market{\r\n  border: 1px solid black;\r\n  padding: 0px;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.title{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.teams-space{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.teams-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.choices-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.choices-result{\r\n  background-color: none;\r\n  border: 1px solid black;\r\n}\r\n\r\n.choices div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n.teams div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studies/studies-product/studies-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"market\" *ngFor=\"let product of allProducts; let iProd = index\">\r\n\r\n  <div class=\"title\">\r\n    {{ lang.studiesProductTitle }} {{ iProd + 1}}\r\n  </div>\r\n\r\n  <div class=\"teams\">\r\n    <div class=\"teams-space\">\r\n      <span>&nbsp;</span>\r\n    </div>\r\n    <div class=\"teams-name\" *ngFor=\"let team of allTeams\">\r\n      <span>{{ team.name }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"choices\" *ngFor=\"let choice of proprety; let iChoice = index\">\r\n    <div class=\"choices-name\">\r\n      <span *ngIf=\"choice === 'price'\">{{ lang.studiesProductPrice }}</span>\r\n      <span *ngIf=\"choice === 'publicity'\">{{ lang.studiesProductPublicity }}</span>\r\n      <span *ngIf=\"choice === 'marketing'\">{{ lang.studiesProductAction }}</span>\r\n      <span *ngIf=\"choice === 'sellor'\">{{ lang.studiesProductSellor }}</span>\r\n      <span *ngIf=\"choice === 'credit'\">{{ lang.studiesProductCredit }}</span>\r\n    </div>\r\n    <div class=\"choices-result\" *ngFor=\"let team of allTeams; let iTeam= index\">\r\n      {{ productsChoices[iProd][iTeam][choice] }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/studies/studies-product/studies-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamChoice = (function () {
    function TeamChoice() {
    }
    return TeamChoice;
}());
var StudiesProductComponent = (function () {
    function StudiesProductComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    StudiesProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allTeams = [];
        this.allProducts = [];
        Object.keys(this.game.teams).map(function (team) { return _this.allTeams.push(_this.game.teams[team]); });
        Object.keys(this.game.allProduct).map(function (product) { return _this.allProducts.push(_this.game.allProduct[product]); });
        this.productsChoices = [];
        this.proprety = [];
        var falseChoice = {
            price: 0,
            publicity: 0,
            marketing: 0,
            sellor: 0,
            credit: 0
        };
        Object.keys(falseChoice).map(function (key) { return _this.proprety.push(key); });
        var resultPeriode = "result" + this.periode;
        Object.keys(this.game).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.allProducts.map(function (product, iProd) {
                    var teamsChoice = [];
                    _this.allTeams.map(function (team, index) { return teamsChoice.push({
                        price: 0,
                        publicity: 0,
                        marketing: 0,
                        sellor: 0,
                        credit: 0
                    }); });
                    _this.allTeams.map(function (team, iTeam) {
                        var teamName = "team" + iTeam;
                        teamsChoice[iTeam].price = _this.game[keyResult][teamName].choice[iProd].priceDecision;
                        teamsChoice[iTeam].publicity = _this.game[keyResult][teamName].choice[iProd].publicityDecision;
                        teamsChoice[iTeam].marketing = _this.game[keyResult][teamName].choice[iProd].marketingAction;
                        teamsChoice[iTeam].sellor = _this.game[keyResult][teamName].choice[iProd].sellorAffected;
                        teamsChoice[iTeam].credit = _this.game[keyResult][teamName].choice[iProd].clientCredit;
                    });
                    _this.productsChoices.push(teamsChoice);
                });
            }
        });
    };
    StudiesProductComponent.prototype.ngOnChanges = function (change) {
        this.ngOnInit();
    };
    return StudiesProductComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], StudiesProductComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StudiesProductComponent.prototype, "periode", void 0);
StudiesProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'studies-product',
        template: __webpack_require__("../../../../../src/app/studies/studies-product/studies-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/studies/studies-product/studies-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], StudiesProductComponent);

var _a;
//# sourceMappingURL=studies-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/studies/studies-selling/studies-selling.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market{\r\n  border: 1px solid black;\r\n  padding: 0px;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.title{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.product-space{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.product-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.selling-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.selling-result{\r\n  border: 1px solid black;\r\n}\r\n\r\n.selling div{\r\n  display: inline-block;\r\n  width: 12vw;\r\n  text-align: center;\r\n}\r\n.product div{\r\n  display: inline-block;\r\n  width: 12vw;\r\n  text-align: center;\r\n}\r\n\r\n.product-space{\r\n  width: 25vw !important;\r\n}\r\n.selling-name{\r\n  width: 25vw !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studies/studies-selling/studies-selling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"market\">\r\n\r\n  <div class=\"title\">\r\n    {{ lang.studiesMSTitle }}\r\n  </div>\r\n\r\n  <div class=\"product\">\r\n    <div class=\"product-space\">\r\n      <span>&nbsp;</span>\r\n    </div>\r\n    <div class=\"product-name\" *ngFor=\"let product of allProducts; let i = index\">\r\n      <span>{{ lang.studiesPerformanceNameProduct }} {{ i + 1 }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"potential selling\">\r\n    <div class=\"potential-name selling-name\">\r\n      {{ lang.studiesMSPotential }}\r\n    </div>\r\n    <div class=\"potential-result selling-result\" *ngFor=\"let product of allProducts; let iProd = index\">\r\n      {{ selling.potential[iProd] | roundAt0 }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"effective selling\">\r\n    <div class=\"effective-name selling-name\">\r\n      {{ lang.studiesMSEffective }}\r\n    </div>\r\n    <div class=\"effective-result selling-result\" *ngFor=\"let product of allProducts; let iProd = index\">\r\n      {{ selling.effective[iProd] }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/studies/studies-selling/studies-selling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesSellingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudiesSellingComponent = (function () {
    function StudiesSellingComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
        this.selling = {
            potential: 0,
            effective: 0,
            unsatisfed: 0
        };
    }
    StudiesSellingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allTeams = [];
        this.allProducts = [];
        Object.keys(this.game.teams).map(function (team) { return _this.allTeams.push(_this.game.teams[team]); });
        Object.keys(this.game.allProduct).map(function (product) { return _this.allProducts.push(_this.game.allProduct[product]); });
        // this.selling = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.game).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                var potentialSelling = [];
                var effectiveSelling = [];
                var unsatisfaction = [];
                _this.allProducts.map(function (prod, iProd) {
                    potentialSelling.push(_this.game[keyResult].potentialSell[iProd]);
                    effectiveSelling.push(_this.game[keyResult].effectiveSell[iProd]);
                });
                _this.selling.potential = potentialSelling;
                _this.selling.effective = effectiveSelling;
            }
        });
    };
    StudiesSellingComponent.prototype.ngOnChanges = function (change) {
        this.ngOnInit();
    };
    return StudiesSellingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], StudiesSellingComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StudiesSellingComponent.prototype, "periode", void 0);
StudiesSellingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'studies-selling',
        template: __webpack_require__("../../../../../src/app/studies/studies-selling/studies-selling.component.html"),
        styles: [__webpack_require__("../../../../../src/app/studies/studies-selling/studies-selling.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], StudiesSellingComponent);

var _a;
//# sourceMappingURL=studies-selling.component.js.map

/***/ }),

/***/ "../../../../../src/app/studies/studies-structure/studies-structure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market{\r\n  border: 1px solid black;\r\n  padding: 0px;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.title{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.teams-space{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.teams-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.items-name{\r\n  background-color: grey;\r\n  border: 1px solid black;\r\n}\r\n.items-result{\r\n  background-color: none;\r\n  border: 1px solid black;\r\n}\r\n\r\n.items div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n.teams div{\r\n  display: inline-block;\r\n  width: 10vw;\r\n  text-align: center;\r\n}\r\n\r\n.items-name{\r\n  width: 20vw !important;\r\n}\r\n.teams-space{\r\n  width: 20vw !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studies/studies-structure/studies-structure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"market\">\r\n\r\n  <div class=\"title\">\r\n  {{ lang.studiesStructTitle }}\r\n  </div>\r\n\r\n  <div class=\"teams\">\r\n    <div class=\"teams-space\">\r\n      <span>&nbsp;</span>\r\n    </div>\r\n    <div class=\"teams-name\" *ngFor=\"let team of allTeams\">\r\n      <span>{{ team.name }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"items\" *ngFor=\"let item of keyList; let iTem = index\">\r\n    <div class=\"items-name\">\r\n      {{ item }}\r\n    </div>\r\n    <div class=\"items-result\" *ngFor=\"let team of allTeams; let iTeam= index\">\r\n      {{ valueList[iTeam][item] | roundAt2 }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/studies/studies-structure/studies-structure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesStructureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudiesStructureComponent = (function () {
    function StudiesStructureComponent(langServ) {
        var _this = this;
        this.langServ = langServ;
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    StudiesStructureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allTeams = [];
        this.allProducts = [];
        Object.keys(this.game.teams).map(function (team) { return _this.allTeams.push(_this.game.teams[team]); });
        Object.keys(this.game.allProduct).map(function (product) { return _this.allProducts.push(_this.game.allProduct[product]); });
        this.keyList = ["Capital propre", "Immobilisation", "Valeur Stock", "Endettement %", "Decouvert"];
        this.allProducts.map(function (prod, iProd) { return _this.keyList.push("HS (%) Produit " + (iProd + 1)); });
        this.valueList = [];
        var resultPeriode = "result" + this.periode;
        Object.keys(this.game).map(function (keyResult) {
            if (keyResult === resultPeriode) {
                _this.allTeams.map(function (team, iTeam) {
                    var data = _this.keyList.reduce(function (o, key) {
                        return Object.assign(o, (_a = {}, _a[key] = 0, _a));
                        var _a;
                    }, {});
                    //TODO
                    _this.valueList.push(data);
                });
            }
        });
    };
    StudiesStructureComponent.prototype.ngOnChanges = function (change) {
        this.ngOnInit();
    };
    return StudiesStructureComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], StudiesStructureComponent.prototype, "game", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StudiesStructureComponent.prototype, "periode", void 0);
StudiesStructureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'studies-structure',
        template: __webpack_require__("../../../../../src/app/studies/studies-structure/studies-structure.component.html"),
        styles: [__webpack_require__("../../../../../src/app/studies/studies-structure/studies-structure.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], StudiesStructureComponent);

var _a;
//# sourceMappingURL=studies-structure.component.js.map

/***/ }),

/***/ "../../../../../src/app/studies/studies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".studies{\r\n  width: 100%;\r\n  overflow: auto;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.studies-show div{\r\n  text-align: center;\r\n}\r\n\r\n.studies-periode div{\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n.periode{\r\n  margin: 5px;\r\n}\r\n.periode h3{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.periode-result div{\r\n  display: inline-block;\r\n  float: left;\r\n  text-align: center;\r\n  margin: 1px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\n/******************************************************************/\r\n\r\nh1,\r\nh3{\r\n  margin: 0px;\r\n}\r\n\r\n.flux-periode{\r\n  overflow: auto;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/******************************************************************/\r\n\r\n.periode-result div:hover{\r\n  background: #808080;\r\n}\r\n.choosed{\r\n  background: #808080;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studies/studies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"result studies\">\r\n\r\n  <div class=\"studies-show\">\r\n    <div><h1>{{ lang.studiesTitle }}</h1></div>\r\n    <div><h3>{{ lang.studiesCompany }}:  {{ company.name }}</h3></div>\r\n  </div>\r\n\r\n  <div class=\"studies-periode\">\r\n\r\n    <div class=\"periode\">\r\n      <h3>{{ lang.studiesPeriode }}: </h3>\r\n    </div>\r\n    <div class=\"periode periode-result\" *ngIf=\"company.result\">\r\n      <div *ngFor=\"let item of listPeriode; let i = index\" (click)=\"changePeriode(i)\" [class.choosed]=\"boolPeriode[i]\">\r\n        <span>{{ i + 1 }}</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"studies-article\" *ngIf=\"periode !== undefined\">\r\n\r\n    <div class=\"studies studies-products\">\r\n      <studies-product [game]=\"game\" [periode]=\"periode\"></studies-product>\r\n    </div>\r\n\r\n    <div class=\"studies studies-maket\">\r\n      <studies-market [game]=\"game\" [company]=\"company\" [periode]=\"periode\"></studies-market>\r\n    </div>\r\n\r\n    <div class=\"studies studies-concurrence\">\r\n      <studies-concurrence [game]=\"game\" [periode]=\"periode\"></studies-concurrence>\r\n    </div>\r\n\r\n    <div class=\"studies studies-structure\">\r\n      <studies-structure [game]=\"game\" [periode]=\"periode\"></studies-structure>\r\n    </div>\r\n\r\n    <div class=\"studies studies-selling\">\r\n      <studies-selling [game]=\"game\" [periode]=\"periode\"></studies-selling>\r\n    </div>\r\n\r\n    <div class=\"studies studies-performance\">\r\n      <studies-performance [game]=\"game\" [periode]=\"periode\"></studies-performance>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/studies/studies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_language_service__ = __webpack_require__("../../../../../src/app/language/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__ = __webpack_require__("../../../../../src/app/service/decisions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_result_service__ = __webpack_require__("../../../../../src/app/service/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant_test_const__ = __webpack_require__("../../../../../src/app/constant/test.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constant_init_Game_const__ = __webpack_require__("../../../../../src/app/constant/init-Game.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Service


//Constant


var StudiesComponent = (function () {
    function StudiesComponent(route, router, langServ, decision, rServ) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.langServ = langServ;
        this.decision = decision;
        this.rServ = rServ;
        this.company = __WEBPACK_IMPORTED_MODULE_5__constant_test_const__["a" /* TEST_COMPANY */];
        this.game = __WEBPACK_IMPORTED_MODULE_6__constant_init_Game_const__["a" /* NULL_GAME */];
        this.lang = langServ.getLanguageConstructor();
        langServ.getLanguage().subscribe(function (lang) { return _this.lang = lang; });
    }
    StudiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.game = this.rServ.getGame();
        this.route.params.subscribe(function (param) {
            _this.teamId = +param['id'];
            var teamShare = "team" + _this.teamId;
            _this.listPeriode = [];
            _this.boolPeriode = [];
            _this.company = _this.decision.updateCompany(_this.teamId);
            _this.round = _this.decision.getRound();
            _this.periode = _this.decision.getRound() - 1;
            Object.keys(_this.company.result).map(function (key) {
                _this.listPeriode.push(_this.company.result[key]);
                _this.boolPeriode.push(false);
            });
            _this.boolPeriode[_this.boolPeriode.length - 1] = true;
        });
    };
    StudiesComponent.prototype.changePeriode = function (n) {
        var _this = this;
        this.periode = n;
        this.boolPeriode.map(function (elt, i) { return _this.boolPeriode[i] = false; });
        this.boolPeriode[n] = true;
    };
    return StudiesComponent;
}());
StudiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-studies',
        template: __webpack_require__("../../../../../src/app/studies/studies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/studies/studies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__language_language_service__["a" /* LanguageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_decisions_service__["a" /* DecisionsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_result_service__["a" /* ResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_result_service__["a" /* ResultService */]) === "function" && _e || Object])
], StudiesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=studies.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map