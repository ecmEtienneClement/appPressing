"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _services_login_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.data.service */ 6911);
/* harmony import */ var _ngrx_login_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx/login.effects */ 10286);
/* harmony import */ var _ngrx_login_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngrx/login.reducer */ 78197);
/* harmony import */ var _appState_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appState/app.state */ 3190);
/* harmony import */ var _sheared_modules_sheared_modules_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sheared-modules/sheared-modules.module */ 15709);
/* harmony import */ var _awesome_cordova_plugins_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/toast/ngx */ 16790);












let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _sheared_modules_sheared_modules_module__WEBPACK_IMPORTED_MODULE_6__.ShearedModulesModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature(_appState_app_state__WEBPACK_IMPORTED_MODULE_5__.NameStateEntities.login, _ngrx_login_reducer__WEBPACK_IMPORTED_MODULE_4__.GetLoginReducer.getReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forFeature([_ngrx_login_effects__WEBPACK_IMPORTED_MODULE_3__.LoginEffects]),
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
        providers: [_services_login_data_service__WEBPACK_IMPORTED_MODULE_2__.LoginDataService, _awesome_cordova_plugins_toast_ngx__WEBPACK_IMPORTED_MODULE_7__.Toast],
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _home_etienne_Bureau_Projet_Ionic_FirstIonic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes.config */ 23421);
/* harmony import */ var _ngrx_login_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngrx/login.actions */ 14676);
/* harmony import */ var _ngrx_login_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngrx/login.selectors */ 66610);
/* harmony import */ var src_app_models_models_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/models.interfaces */ 68157);
/* harmony import */ var _modules_servicesModules_modules_emit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/servicesModules/modules.emit */ 14570);
/* harmony import */ var _servicesApp_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../servicesApp/user.service */ 86750);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
















let HomePage = class HomePage {
  constructor(store, formBuilder, loginSelectors, loginActions, userService, loadingCtl, router) {
    this.store = store;
    this.formBuilder = formBuilder;
    this.loginSelectors = loginSelectors;
    this.loginActions = loginActions;
    this.userService = userService;
    this.loadingCtl = loadingCtl;
    this.router = router;
    this.notification$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable();
    this.errorMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable();
    this.dataState$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable();
    this.routesNames = _routes_config__WEBPACK_IMPORTED_MODULE_3__.RoutesNames;
    this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.islogOut = false;
  }

  ngOnInit() {
    //teste de toast

    /*
    this.toast.show(`I'm a toast`, '9000', 'center').subscribe((toast) => {
      console.log(toast);
    });
    */
    this.dataState$ = this.store.select(this.loginSelectors.getDataState());
    this.notification$ = this.store.select(this.loginSelectors.getNotification());
    this.errorMessage$ = this.store.select(this.loginSelectors.getMessageError());
    this.initForm();
    this.onSubEmit();
    this.onSubUser();

    if (this.userService.getTokenUser() === '') {
      this.islogOut = true;
    }
  } //TODO INIT FORM


  initForm() {
    this.formLogin = this.formBuilder.group({
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email]],
      mdp: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]*$')]]
    });
  } //TODO SUB EMIT


  onSubEmit() {
    _modules_servicesModules_modules_emit__WEBPACK_IMPORTED_MODULE_7__.EntitiesEmit.entitieSub.subscribe({
      next: dataEmit => {
        if (dataEmit.nameNotification === 'user') {
          const user = dataEmit.entitie;
          this.userService.setUser(user);
          this.loading.dismiss();
          this.router.navigate([this.routesNames.linges]);
        }
      }
    });
  } //TODO SUBMIT


  submitForm() {
    const email = this.formLogin.value.email;
    const mdp = this.formLogin.value.mdp;
    const user = {
      email,
      mdp
    };
    this.store.dispatch(this.loginActions.addEntitie()({
      entitie: user,
      onNavAfterAdd: false
    }));
  } //TODO SUB USER


  onSubUser() {
    this.sub.add(this.userService.userSub.subscribe({
      next: dataState => {
        if (dataState === src_app_models_models_interfaces__WEBPACK_IMPORTED_MODULE_6__.EnumUserState.logOut) {
          this.islogOut = true;
        }
      }
    }));
  }

  showLoading() {
    var _this = this;

    return (0,_home_etienne_Bureau_Projet_Ionic_FirstIonic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = yield _this.loadingCtl.create({
        message: 'Connexion en cour...',
        cssClass: 'custom-loading',
        duration: 15000
      });

      _this.loading.present();
    })();
  } //TODO


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

};

HomePage.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
}, {
  type: _ngrx_login_selectors__WEBPACK_IMPORTED_MODULE_5__.LoginSelectors
}, {
  type: _ngrx_login_actions__WEBPACK_IMPORTED_MODULE_4__.LoginActions
}, {
  type: _servicesApp_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 14676:
/*!********************************************!*\
  !*** ./src/app/home/ngrx/login.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginActions": () => (/* binding */ LoginActions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api.config */ 48487);
/* harmony import */ var src_app_modules_servicesModules_modules_ngrx_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.ngrx.actions */ 48980);




let LoginActions = class LoginActions extends src_app_modules_servicesModules_modules_ngrx_actions__WEBPACK_IMPORTED_MODULE_1__.EntitiesActions {
    constructor() {
        super(src_app_api_config__WEBPACK_IMPORTED_MODULE_0__.EntitiesNameAPI.login);
    }
};
LoginActions.ctorParameters = () => [];
LoginActions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], LoginActions);



/***/ }),

/***/ 10286:
/*!********************************************!*\
  !*** ./src/app/home/ngrx/login.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginEffects": () => (/* binding */ LoginEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var src_app_modules_servicesModules_modules_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.ngrx.effects */ 3370);
/* harmony import */ var _services_login_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.data.service */ 6911);
/* harmony import */ var _ngrx_login_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ngrx/login.actions */ 14676);







let LoginEffects = class LoginEffects extends src_app_modules_servicesModules_modules_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EntitiesEffects {
    constructor(store, action$, loginActions, loginDataService) {
        super(store, action$, loginActions, loginDataService);
    }
};
LoginEffects.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions },
    { type: _ngrx_login_actions__WEBPACK_IMPORTED_MODULE_2__.LoginActions },
    { type: _services_login_data_service__WEBPACK_IMPORTED_MODULE_1__.LoginDataService }
];
LoginEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], LoginEffects);



/***/ }),

/***/ 78197:
/*!********************************************!*\
  !*** ./src/app/home/ngrx/login.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetLoginReducer": () => (/* binding */ GetLoginReducer)
/* harmony export */ });
/* harmony import */ var src_app_modules_servicesModules_modules_ngrx_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.ngrx.reducer */ 78265);
/* harmony import */ var _login_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.actions */ 14676);


class LoginReducer extends src_app_modules_servicesModules_modules_ngrx_reducer__WEBPACK_IMPORTED_MODULE_0__.EntitiesReducer {
    constructor(detailsTypeKiloActions) {
        super(detailsTypeKiloActions, 'user');
    }
}
//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
class GetLoginReducer {
    static getReducer(state, action) {
        if (GetLoginReducer.intanceLoginReducer == null) {
            GetLoginReducer.intanceLoginReducer = new LoginReducer(new _login_actions__WEBPACK_IMPORTED_MODULE_1__.LoginActions());
        }
        return GetLoginReducer.intanceLoginReducer.entitiesFeactureReducer()(state, action);
    }
}
GetLoginReducer.intanceLoginReducer = null;


/***/ }),

/***/ 66610:
/*!**********************************************!*\
  !*** ./src/app/home/ngrx/login.selectors.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginSelectors": () => (/* binding */ LoginSelectors)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_appState_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/appState/app.state */ 3190);
/* harmony import */ var src_app_modules_servicesModules_modules_ngrx_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.ngrx.selectors */ 47301);




let LoginSelectors = class LoginSelectors extends src_app_modules_servicesModules_modules_ngrx_selectors__WEBPACK_IMPORTED_MODULE_1__.EntitiesSelectors {
    constructor() {
        super(src_app_appState_app_state__WEBPACK_IMPORTED_MODULE_0__.NameStateEntities.login);
    }
};
LoginSelectors.ctorParameters = () => [];
LoginSelectors = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], LoginSelectors);



/***/ }),

/***/ 6911:
/*!*****************************************************!*\
  !*** ./src/app/home/services/login.data.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginDataService": () => (/* binding */ LoginDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api.config */ 48487);
/* harmony import */ var src_app_modules_servicesModules_modules_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.data.service */ 24882);

/* eslint-disable no-underscore-dangle */




let LoginDataService = class LoginDataService extends src_app_modules_servicesModules_modules_data_service__WEBPACK_IMPORTED_MODULE_1__.EntitiesDataService {
    constructor(httpClient) {
        super(httpClient, src_app_api_config__WEBPACK_IMPORTED_MODULE_0__.NameUrlEntitiesAPI.login);
    }
};
LoginDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
LoginDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], LoginDataService);



/***/ }),

/***/ 16790:
/*!******************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/toast/ngx/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 49471);






var Toast =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Toast, _super);

  function Toast() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Toast.prototype.show = function (message, duration, position) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "show", {
      "observable": true,
      "clearFunction": "hide"
    }, arguments);
  };

  Toast.prototype.hide = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hide", {}, arguments);
  };

  Toast.prototype.showWithOptions = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showWithOptions", {
      "observable": true,
      "clearFunction": "hide"
    }, arguments);
  };

  Toast.prototype.showShortTop = function (message) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showShortTop", {
      "observable": true,
      "clearFunction": "hide"
    }, arguments);
  };

  Toast.prototype.showShortCenter = function (message) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showShortCenter", {
      "observable": true,
      "clearFunction": "hide"
    }, arguments);
  };

  Toast.prototype.showShortBottom = function (message) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showShortBottom", {
      "observable": true,
      "clearFunction": "hide"
    }, arguments);
  };

  Toast.prototype.showLongTop = function (message) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showLongTop", {
      "observable": true,
      "clearFunction": "hide"
    }, arguments);
  };

  Toast.prototype.showLongCenter = function (message) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showLongCenter", {
      "observable": true,
      "clearFunction": "hide"
    }, arguments);
  };

  Toast.prototype.showLongBottom = function (message) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showLongBottom", {
      "observable": true,
      "clearFunction": "hide"
    }, arguments);
  };

  Toast.ɵfac = /* @__PURE__ */function () {
    let ɵToast_BaseFactory;
    return function Toast_Factory(t) {
      return (ɵToast_BaseFactory || (ɵToast_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Toast)))(t || Toast);
    };
  }();

  Toast.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Toast,
    factory: Toast.ɵfac
  });
  Toast.pluginName = "Toast";
  Toast.plugin = "cordova-plugin-x-toast";
  Toast.pluginRef = "plugins.toast";
  Toast.repo = "https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin";
  Toast.platforms = ["Android", "BlackBerry 10", "iOS", "Windows", "Windows Phone 8"];
  Toast = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([], Toast);
  return Toast;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Toast, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], null, {
    show: [],
    hide: [],
    showWithOptions: [],
    showShortTop: [],
    showShortCenter: [],
    showShortBottom: [],
    showLongTop: [],
    showLongCenter: [],
    showLongBottom: []
  });
})();

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: Raleway, sans-serif;\n}\n\nion-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.screen {\n  background: linear-gradient(90deg, #312450, #312450);\n  position: relative;\n  height: 100%;\n  width: 100%;\n  box-shadow: 0px 0px 24px #312450;\n}\n\n.screen .screen__content {\n  z-index: 1;\n  position: relative;\n  height: 100%;\n}\n\n.screen .screen__background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n  clip-path: inset(0 0 0 0);\n}\n\n.screen .screen__background .screen__background__shape {\n  transform: rotate(45deg);\n  position: absolute;\n  height: 520px;\n  width: 520px;\n  background: #ffffff;\n  top: -50px;\n  right: 120px;\n  border-radius: 0 72px 0 0;\n  box-shadow: 3px 3px 3px #000000;\n}\n\n.login {\n  width: 320px;\n  padding: 30px;\n  padding-top: 55px;\n}\n\n.login .login__submit {\n  background: #ffffff;\n  padding: 10px;\n  font-size: 14px;\n  margin-top: 30px;\n  border-radius: 26px;\n  border: 2px solid #ffffff;\n  text-transform: uppercase;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  color: #312450;\n  box-shadow: 3px 3px 3px #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vUHJvamV0JTIwSW9uaWMvRmlyc3RJb25pYy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0hGOztBRElFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLHlCQUFBO0FDRko7O0FER0k7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkF6Q1E7RUEwQ1IsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDRE47O0FETUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FES0U7RUFDRSxtQkF4RFU7RUF5RFYsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBakVXO0VBa0VYLCtCQUFBO0FDSEoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItdmlvbGV0OiAjMzg4MGZmO1xuJGNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJGNvbG9yLWRhcms6ICMwMDAwMDA7XG4kY29sb3ItdmlvbGV0OiAjMzEyNDUwO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zY3JlZW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRjb2xvci12aW9sZXQsICRjb2xvci12aW9sZXQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAkY29sb3ItdmlvbGV0O1xuICAuc2NyZWVuX19jb250ZW50IHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnNjcmVlbl9fYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAwO1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xuICAgIC5zY3JlZW5fX2JhY2tncm91bmRfX3NoYXBlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogNTIwcHg7XG4gICAgICB3aWR0aDogNTIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQ7XG4gICAgICB0b3A6IC01MHB4O1xuICAgICAgcmlnaHQ6IDEyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCA3MnB4IDAgMDtcbiAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICRjb2xvci1kYXJrO1xuICAgIH1cbiAgfVxufVxuXG4ubG9naW4ge1xuICB3aWR0aDogMzIwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiA1NXB4O1xuXG4gIC5sb2dpbl9fc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1saWdodDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogJGNvbG9yLXZpb2xldDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAkY29sb3ItZGFyaztcbiAgfVxufVxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zY3JlZW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzMTI0NTAsICMzMTI0NTApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAjMzEyNDUwO1xufVxuLnNjcmVlbiAuc2NyZWVuX19jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2NyZWVuIC5zY3JlZW5fX2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMDtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xuICBjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xufVxuLnNjcmVlbiAuc2NyZWVuX19iYWNrZ3JvdW5kIC5zY3JlZW5fX2JhY2tncm91bmRfX3NoYXBlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTIwcHg7XG4gIHdpZHRoOiA1MjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdG9wOiAtNTBweDtcbiAgcmlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDcycHggMCAwO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwO1xufVxuXG4ubG9naW4ge1xuICB3aWR0aDogMzIwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiA1NXB4O1xufVxuLmxvZ2luIC5sb2dpbl9fc3VibWl0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMzEyNDUwO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwO1xufSJdfQ== */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Connexion</ion-title>\n    <ion-menu-toggle *ngIf=\"!islogOut\" slot=\"start\">\n      <ion-button><ion-icon name=\"grid-outline\"></ion-icon></ion-button>\n    </ion-menu-toggle>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"screen\">\n    <div class=\"screen__content\">\n      <!-- --------------------------------SECTION STATE APP----------------------------------- -->\n      <div *ngIf=\"dataState$ | async as dataState\" class=\"container-fluid\">\n        <app-cmp-state-app\n          [dataState]=\"dataState\"\n          [notification]=\"notification$ | async\"\n          [errorMessage]=\"errorMessage$ | async\"\n        ></app-cmp-state-app>\n      </div>\n\n      <!-- --------------------------------SECTION FORM LOGIN----------------------------------- -->\n      <form\n        class=\"login\"\n        [formGroup]=\"formLogin\"\n        (ngSubmit)=\"submitForm()\"\n        novalidate\n      >\n        <!--                               INPUT Email                                            -->\n        <ion-item class=\"m-3\" fill=\"solid\" counter=\"true\">\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input\n            maxlength=\"50\"\n            type=\"text\"\n            formControlName=\"email\"\n          ></ion-input>\n          <ion-note slot=\"helper\">Email valide</ion-note>\n          <ion-note slot=\"error\">Email invalide</ion-note>\n        </ion-item>\n\n        <!--                               INPUT MDP                                            -->\n        <ion-item class=\"m-3\" fill=\"solid\" counter=\"true\">\n          <ion-label position=\"floating\">Mot de passe</ion-label>\n          <ion-input\n            minlength=\"6\"\n            maxlength=\"15\"\n            type=\"text\"\n            formControlName=\"mdp\"\n          ></ion-input>\n          <ion-note slot=\"helper\">Mot de passe valide</ion-note>\n          <ion-note slot=\"error\">Mot de passe invalide</ion-note>\n        </ion-item>\n\n        <button\n          *ngIf=\"!formLogin.invalid\"\n          class=\"button login__submit\"\n          type=\"submit\"\n        >\n          <span (click)=\"showLoading()\" class=\"button__text\">Se Connecter</span>\n        </button>\n      </form>\n    </div>\n    <div class=\"screen__background\">\n      <span class=\"screen__background__shape\"></span>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map