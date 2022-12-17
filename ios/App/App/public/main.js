(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 48487:
/*!*******************************!*\
  !*** ./src/app/api.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesNameAPI": () => (/* binding */ EntitiesNameAPI),
/* harmony export */   "NameUrlEntitiesAPI": () => (/* binding */ NameUrlEntitiesAPI)
/* harmony export */ });
// TODO MODEL NAME URL
var NameUrlEntitiesAPI;
(function (NameUrlEntitiesAPI) {
    NameUrlEntitiesAPI["login"] = "sign/";
    NameUrlEntitiesAPI["acceuil"] = "etatFinancier/";
    NameUrlEntitiesAPI["admins"] = "admins/";
    NameUrlEntitiesAPI["employers"] = "employers/";
    NameUrlEntitiesAPI["clients"] = "clients/";
    NameUrlEntitiesAPI["linge"] = "linges/";
    NameUrlEntitiesAPI["factures"] = "factures/";
    NameUrlEntitiesAPI["depensess"] = "depenses/";
    NameUrlEntitiesAPI["dmdDepenses"] = "demandeDepenses/";
    NameUrlEntitiesAPI["compteBloquers"] = "compteBloquers/";
    NameUrlEntitiesAPI["typesLinges"] = "typesLinges/";
    NameUrlEntitiesAPI["infosKilo"] = "infosKilo/";
    NameUrlEntitiesAPI["infosPieces"] = "infosPieces/";
    NameUrlEntitiesAPI["detailsTypePiece"] = "detailTypePieces/";
    NameUrlEntitiesAPI["detailTypeKilo"] = "detailTypeKilo/";
})(NameUrlEntitiesAPI || (NameUrlEntitiesAPI = {}));
// TODO MODEL ENTITIES NAME API
var EntitiesNameAPI;
(function (EntitiesNameAPI) {
    EntitiesNameAPI["admins"] = "[Admins / API]";
    EntitiesNameAPI["clients"] = "[Clients / API]";
    EntitiesNameAPI["linges"] = "[linges / API]";
    EntitiesNameAPI["employers"] = "[Employers / API]";
    EntitiesNameAPI["factures"] = "[Factures / API]";
    EntitiesNameAPI["depenses"] = "[Depenses / API]";
    EntitiesNameAPI["dmdDepenses"] = "[DmdDepense / API]";
    EntitiesNameAPI["compteBloquers"] = "[CompteBloquers / API]";
    EntitiesNameAPI["typesLinges"] = "[TypesLinges / API]";
    EntitiesNameAPI["infosKilo"] = "[infosKilo / API]";
    EntitiesNameAPI["etatFinancier"] = "[etatFinancier / API]";
    EntitiesNameAPI["infosPieces"] = "[infosPieces / API]";
    EntitiesNameAPI["detailsTypePiece"] = "[detailsTypePieces / API]";
    EntitiesNameAPI["detailsTypeKilo"] = "[detailsTypeKilo / API]";
    EntitiesNameAPI["login"] = "[login / API]";
})(EntitiesNameAPI || (EntitiesNameAPI = {}));


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forbiden/forbiden.component */ 10393);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.config */ 23421);
/* harmony import */ var _servicesApp_admin_authorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicesApp/admin.authorization */ 13313);
/* harmony import */ var _servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicesApp/auth.authorization */ 93161);







const routes = [
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.home,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.forbiden,
        component: _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_0__.ForbidenComponent,
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.admins,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization, _servicesApp_admin_authorization__WEBPACK_IMPORTED_MODULE_2__.AdminAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_admins_admins_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admins/admins.module */ 72615)).then((m) => m.AdminsPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.employers,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_employer_employer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employer/employer.module */ 64860)).then((m) => m.EmployerPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.clients,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_clients_clients_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/clients/clients.module */ 95225)).then((m) => m.ClientsPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.factures,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization, _servicesApp_admin_authorization__WEBPACK_IMPORTED_MODULE_2__.AdminAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_factures_factures_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/factures/factures.module */ 56953)).then((m) => m.FacturesPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.dmdDepenses,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_dmd-depense_dmd-depense_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dmd-depense/dmd-depense.module */ 13327)).then((m) => m.DmdDepensePageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.cmpBloques,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization, _servicesApp_admin_authorization__WEBPACK_IMPORTED_MODULE_2__.AdminAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_cmp-bloques_cmp-bloques_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cmp-bloques/cmp-bloques.module */ 46261)).then((m) => m.CmpBloquesPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.typesLinges,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization, _servicesApp_admin_authorization__WEBPACK_IMPORTED_MODULE_2__.AdminAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_modulesParametres_typesLinges_types_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/modulesParametres/typesLinges/types.module */ 26710)).then((m) => m.TypesPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.infosPieces,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization, _servicesApp_admin_authorization__WEBPACK_IMPORTED_MODULE_2__.AdminAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_modulesParametres_info-pieces_info-pieces_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/modulesParametres/info-pieces/info-pieces.module */ 3718)).then((m) => m.InfoPiecesPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.infosKilo,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization, _servicesApp_admin_authorization__WEBPACK_IMPORTED_MODULE_2__.AdminAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_modulesParametres_info-kilo_info-kilo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/modulesParametres/info-kilo/info-kilo.module */ 52035)).then((m) => m.InfoKiloPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.parametres,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization, _servicesApp_admin_authorization__WEBPACK_IMPORTED_MODULE_2__.AdminAuthorization],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_modulesParametres_parametres_parametres_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/modulesParametres/parametres/parametres.module */ 7603)).then((m) => m.ParametresPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.linges,
        canActivate: [_servicesApp_auth_authorization__WEBPACK_IMPORTED_MODULE_3__.AuthAuthorization],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_linges_linges_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/linges/linges.module */ 70485)).then((m) => m.LingesPageModule),
    },
    {
        path: _routes_config__WEBPACK_IMPORTED_MODULE_1__.RoutesNames.etatFinancier,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_servicesModules_modules_ngrx_reducer_ts-src_app_sheared-modules_shear-12b7dd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_acceuil_acceuil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/acceuil/acceuil.module */ 78922)).then((m) => m.AcceuilPageModule),
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _models_models_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/models.interfaces */ 68157);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.config */ 23421);
/* harmony import */ var _servicesApp_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicesApp/user.service */ 86750);









let AppComponent = class AppComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.routesNames = _routes_config__WEBPACK_IMPORTED_MODULE_3__.RoutesNames;
        this.isAdmin = false;
        this.idUser = '';
        this.islogOut = false;
        this.onIsAdmin();
    }
    ngOnInit() {
        this.onSubUser();
        if (this.userService.getTokenUser() === '') {
            this.islogOut = true;
        }
    }
    //TODO
    onIsAdmin() {
        this.isAdmin =
            this.userService.getRoleUser() === _models_models_interfaces__WEBPACK_IMPORTED_MODULE_2__.EnumUserRole.admin ? true : false;
        this.idUser = this.userService.getIdUser();
    }
    //TODO
    logOut() {
        this.userService.clearUser();
    }
    //TODO SUB USER
    onSubUser() {
        this.sub.add(this.userService.userSub.subscribe({
            next: (dataState) => {
                this.onIsAdmin();
                if (dataState === _models_models_interfaces__WEBPACK_IMPORTED_MODULE_2__.EnumUserState.logOut) {
                    this.islogOut = true;
                    this.router.navigate([this.routesNames.home]);
                }
            },
        }));
    }
    //TODO
    onNavProfil() {
        if (this.userService.getRoleUser() === _models_models_interfaces__WEBPACK_IMPORTED_MODULE_2__.EnumUserRole.admin) {
            this.router.navigate([
                this.routesNames.admins +
                    this.routesNames.adminsInfo +
                    this.userService.getIdUser(),
            ]);
        }
        else {
            this.router.navigate([
                this.routesNames.employers +
                    this.routesNames.employersInfo +
                    this.userService.getIdUser(),
            ]);
        }
    }
    //TODO
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _servicesApp_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store-devtools */ 55242);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/router-store */ 61611);
/* harmony import */ var _routeState_route_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routeState/route.state */ 62230);
/* harmony import */ var _appState_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appState/app.state */ 3190);
/* harmony import */ var _modules_servicesModules_modules_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/servicesModules/modules.data.service */ 24882);
/* harmony import */ var _modules_servicesModules_modules_ngrx_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/servicesModules/modules.ngrx.actions */ 48980);
/* harmony import */ var _modules_servicesModules_modules_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/servicesModules/modules.ngrx.effects */ 3370);
/* harmony import */ var _modules_servicesModules_modules_entitiesDataState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/servicesModules/modules.entitiesDataState */ 29728);
/* harmony import */ var _modules_servicesModules_modules_ngrx_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/servicesModules/modules.ngrx.selectors */ 47301);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 55916);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 8685);
/* harmony import */ var _servicesApp_http_inter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicesApp/http.inter */ 52452);
/* harmony import */ var _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forbiden/forbiden.component */ 10393);























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_12__.ForbidenComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forRoot(_appState_app_state__WEBPACK_IMPORTED_MODULE_3__.appReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forRoot([]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_20__.StoreRouterConnectingModule.forRoot({
                serializer: _routeState_route_state__WEBPACK_IMPORTED_MODULE_2__.CustomRouterStateSerializer,
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__.StoreDevtoolsModule.instrument({}),
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
                useClass: _servicesApp_http_inter__WEBPACK_IMPORTED_MODULE_11__.HtppInterceptor,
                multi: true,
            },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy },
            _modules_servicesModules_modules_data_service__WEBPACK_IMPORTED_MODULE_4__.EntitiesDataService,
            _modules_servicesModules_modules_ngrx_actions__WEBPACK_IMPORTED_MODULE_5__.EntitiesActions,
            _modules_servicesModules_modules_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.EntitiesEffects,
            _modules_servicesModules_modules_entitiesDataState__WEBPACK_IMPORTED_MODULE_7__.EntitiesDataState,
            _modules_servicesModules_modules_ngrx_selectors__WEBPACK_IMPORTED_MODULE_8__.EntitiesSelectors,
            _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__.SQLite,
            _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__.NativeStorage,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3190:
/*!***************************************!*\
  !*** ./src/app/appState/app.state.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStateEnum": () => (/* binding */ AppStateEnum),
/* harmony export */   "NameStateEntities": () => (/* binding */ NameStateEntities),
/* harmony export */   "appReducer": () => (/* binding */ appReducer),
/* harmony export */   "initStateApp": () => (/* binding */ initStateApp)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ 61611);

//TODO STATE APP ENUM
var AppStateEnum;
(function (AppStateEnum) {
    AppStateEnum["initiale"] = "[ETAT/APP] initiale";
    AppStateEnum["loading"] = "[ETAT/APP] en chargement";
    AppStateEnum["loaded"] = " [ETAT/APP] charger";
    AppStateEnum["error"] = "[ETAT/APP] erreur";
})(AppStateEnum || (AppStateEnum = {}));
//TODO INIT STATE APP
const initStateApp = {
    entities: [],
    entitie: null,
    notification: null,
    messageError: null,
    dataState: AppStateEnum.initiale,
};
//TODO STATE NAME  ENUM
var NameStateEntities;
(function (NameStateEntities) {
    NameStateEntities["admin"] = "adminsState";
    NameStateEntities["client"] = "clientsState";
    NameStateEntities["etatFinancier"] = "etatFinancierState";
    NameStateEntities["linges"] = "lingesState";
    NameStateEntities["employer"] = "employersState";
    NameStateEntities["facture"] = "facturesState";
    NameStateEntities["dmdDepense"] = "dmdDepensesState";
    NameStateEntities["cmpBloque"] = "cmpBloquesState";
    NameStateEntities["typeLinge"] = "typeLingesState";
    NameStateEntities["infosKilo"] = "infosKiloState";
    NameStateEntities["infosPiece"] = "infosPiecesState";
    NameStateEntities["detailsTypePiece"] = "detailsTypePieceState";
    NameStateEntities["detailsTypeKilo"] = "detailsTypeKiloState";
    NameStateEntities["login"] = "loginState";
})(NameStateEntities || (NameStateEntities = {}));
const appReducer = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__.routerReducer,
};


/***/ }),

/***/ 10393:
/*!************************************************!*\
  !*** ./src/app/forbiden/forbiden.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForbidenComponent": () => (/* binding */ ForbidenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forbiden_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forbiden.component.html?ngResource */ 49796);
/* harmony import */ var _forbiden_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forbiden.component.scss?ngResource */ 33781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes.config */ 23421);





let ForbidenComponent = class ForbidenComponent {
    constructor() {
        this.routesNames = _routes_config__WEBPACK_IMPORTED_MODULE_2__.RoutesNames;
    }
    ngOnInit() { }
};
ForbidenComponent.ctorParameters = () => [];
ForbidenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-forbiden',
        template: _forbiden_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forbiden_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForbidenComponent);



/***/ }),

/***/ 68157:
/*!*********************************************!*\
  !*** ./src/app/models/models.interfaces.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumTypeFacture": () => (/* binding */ EnumTypeFacture),
/* harmony export */   "EnumTypeLinge": () => (/* binding */ EnumTypeLinge),
/* harmony export */   "EnumUserRole": () => (/* binding */ EnumUserRole),
/* harmony export */   "EnumUserState": () => (/* binding */ EnumUserState)
/* harmony export */ });
//TODO
var EnumUserState;
(function (EnumUserState) {
    EnumUserState["logIn"] = "login";
    EnumUserState["logOut"] = "logOut";
})(EnumUserState || (EnumUserState = {}));
//
var EnumUserRole;
(function (EnumUserRole) {
    EnumUserRole["admin"] = "admin";
    EnumUserRole["employer"] = "employer";
})(EnumUserRole || (EnumUserRole = {}));
var EnumTypeFacture;
(function (EnumTypeFacture) {
    EnumTypeFacture["eau"] = "Eaux";
    EnumTypeFacture["electricite"] = "Electricit\u00E9";
    EnumTypeFacture["location"] = "Location";
    EnumTypeFacture["salaire"] = "Salaires";
})(EnumTypeFacture || (EnumTypeFacture = {}));
var EnumTypeLinge;
(function (EnumTypeLinge) {
    EnumTypeLinge["piece"] = "Piece";
    EnumTypeLinge["kilo"] = "Kilo";
})(EnumTypeLinge || (EnumTypeLinge = {}));


/***/ }),

/***/ 24882:
/*!*****************************************************************!*\
  !*** ./src/app/modules/servicesModules/modules.data.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesDataService": () => (/* binding */ EntitiesDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var src_app_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api.config */ 48487);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);

/* eslint-disable no-underscore-dangle */





let EntitiesDataService = class EntitiesDataService {
    constructor(httpClient, nameUrlEntities) {
        this.httpClient = httpClient;
        this.nameUrlEntities = nameUrlEntities;
    }
    //TODO
    createEntitie(entitie) {
        return this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + this.nameUrlEntities, entitie)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1));
    }
    //
    //TODO
    getAllEntities() {
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + this.nameUrlEntities)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1));
    }
    //
    //TODO
    getEntitieById(idEntitie) {
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + this.nameUrlEntities + idEntitie)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1));
    }
    //
    //TODO
    updateEntitieById(entitie) {
        return this.httpClient
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + this.nameUrlEntities + entitie.id, {
            ...entitie,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1));
    }
    //
    //TODO
    deleteEntitiesById(idEntitie) {
        return this.httpClient
            .delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + this.nameUrlEntities + idEntitie)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1));
    }
    //
    //TODO
    deleteAllEntities() {
        return this.httpClient
            .delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + this.nameUrlEntities + 'all')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1));
    }
};
EntitiesDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: src_app_api_config__WEBPACK_IMPORTED_MODULE_0__.NameUrlEntitiesAPI }
];
EntitiesDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], EntitiesDataService);



/***/ }),

/***/ 29728:
/*!**********************************************************************!*\
  !*** ./src/app/modules/servicesModules/modules.entitiesDataState.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesDataState": () => (/* binding */ EntitiesDataState),
/* harmony export */   "EnumAddOrUpdFormEntitie": () => (/* binding */ EnumAddOrUpdFormEntitie)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let EntitiesDataState = class EntitiesDataState {
    constructor() {
        this.setAddOrUpdFormEntitie(EnumAddOrUpdFormEntitie.addEntitie);
    }
    //TODO
    getAddOrUpdFormEntitie() {
        return this.addOrUpdFormEntitie;
    }
    //TODO
    setAddOrUpdFormEntitie(dataSet) {
        this.addOrUpdFormEntitie = dataSet;
    }
};
EntitiesDataState.ctorParameters = () => [];
EntitiesDataState = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], EntitiesDataState);

//TODO POUR ROUTER NAV
var EnumAddOrUpdFormEntitie;
(function (EnumAddOrUpdFormEntitie) {
    EnumAddOrUpdFormEntitie[EnumAddOrUpdFormEntitie["addEntitie"] = 0] = "addEntitie";
    EnumAddOrUpdFormEntitie[EnumAddOrUpdFormEntitie["updEntitie"] = 1] = "updEntitie";
})(EnumAddOrUpdFormEntitie || (EnumAddOrUpdFormEntitie = {}));


/***/ }),

/***/ 48980:
/*!*****************************************************************!*\
  !*** ./src/app/modules/servicesModules/modules.ngrx.actions.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesActions": () => (/* binding */ EntitiesActions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var src_app_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api.config */ 48487);




let EntitiesActions = class EntitiesActions {
    constructor(entitiesNameAPI) {
        this.entitiesNameAPI = entitiesNameAPI;
    }
    //TODO ADD ENTITIE
    addEntitie() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' addEntitie', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    addEntitieSuccess() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' addEntitieSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    //TODO GET ENTITIES
    getAllEntities() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' getAllEntities');
    }
    getAllEntitiesSuccess() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' getAllEntitiesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    //TODO GET ENTITIE
    getEntitie() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' getEntitie', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    getEntitieSuccess() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' getEntitieSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    //TODO UPD ENTITIE
    updEntitie() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' updEntitie', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    updEntitieSuccess() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' updEntitieSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    //TODO DELETE ENTITIE
    deleteEntitie() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' deleteEntitie', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    deleteEntitieSuccess() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' deleteEntitieSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    //TODO DELETE ALL ENTITIES
    deleteAllEntities() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' deleteAllEntities');
    }
    deleteAllEntitiesSuccess() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' deleteAllEntitiesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
    //TODO ERROR ENTITIES
    errorEntities() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createAction)(this.entitiesNameAPI + ' errorEntities', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.props)());
    }
};
EntitiesActions.ctorParameters = () => [
    { type: src_app_api_config__WEBPACK_IMPORTED_MODULE_0__.EntitiesNameAPI }
];
EntitiesActions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], EntitiesActions);



/***/ }),

/***/ 3370:
/*!*****************************************************************!*\
  !*** ./src/app/modules/servicesModules/modules.ngrx.effects.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesEffects": () => (/* binding */ EntitiesEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var src_app_routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/routes.config */ 23421);
/* harmony import */ var _modules_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.data.service */ 24882);
/* harmony import */ var _modules_ngrx_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules.ngrx.actions */ 48980);
/* harmony import */ var _modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules.service */ 99407);










let EntitiesEffects = class EntitiesEffects {
    constructor(store, action$, entitiesActionsService, entitiesDataService, entitiesService) {
        this.store = store;
        this.action$ = action$;
        this.entitiesActionsService = entitiesActionsService;
        this.entitiesDataService = entitiesDataService;
        this.entitiesService = entitiesService;
        this.routesNames = src_app_routes_config__WEBPACK_IMPORTED_MODULE_0__.RoutesNames;
        //TODO ADD ENTITIE EFFECT
        this.getAddEntitieEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(this.entitiesActionsService.addEntitie()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((action) => this.entitiesDataService.createEntitie(action.entitie).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((dataEntitie) => {
            if (dataEntitie) {
                if (action.onNavAfterAdd) {
                    this.onNavEntities();
                }
                return this.entitiesActionsService.addEntitieSuccess()({
                    entitie: dataEntitie,
                });
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.entitiesActionsService.errorEntities()({
            error: error.error ? error.error.message : error.message,
        })))))));
        //TODO GET ALL ENTITIES EFFECT
        this.getAllEntitiesEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(this.entitiesActionsService.getAllEntities()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.entitiesDataService.getAllEntities().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((dataEntities) => this.entitiesActionsService.getAllEntitiesSuccess()({
            entities: dataEntities,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.entitiesActionsService.errorEntities()({
            error: error.error ? error.error.message : error.message,
        })))))));
        //TODO GET ENTITIE EFFECT
        this.getEntitieEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(this.entitiesActionsService.getEntitie()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((action) => this.entitiesDataService.getEntitieById(action.idEntitie).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((dataEntitie) => this.entitiesActionsService.getEntitieSuccess()({
            entitie: dataEntitie,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.entitiesActionsService.errorEntities()({
            error: error.error ? error.error.message : error.message,
        })))))));
        //TODO UPD ENTITIE EFFECT
        this.updEntitieEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(this.entitiesActionsService.updEntitie()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((action) => this.entitiesDataService.updateEntitieById(action.entitie).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((dataEntitie) => {
            if (!action.onNavAfterUpd) {
                if (action.onNavAfterUpd !== false) {
                    this.onNavInfo(action.entitie.id);
                }
            }
            return this.entitiesActionsService.updEntitieSuccess()({
                entitie: dataEntitie,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.entitiesActionsService.errorEntities()({
            error: error.error ? error.error.message : error.message,
        })))))));
        //TODO DELETE ENTITIE EFFECT
        this.deleteEntitieEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(this.entitiesActionsService.deleteEntitie()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((action) => this.entitiesDataService.deleteEntitiesById(action.idEntitie).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((dataBoolean) => this.entitiesActionsService.deleteEntitieSuccess()({
            idEntitie: action.idEntitie,
            deleted: dataBoolean,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.entitiesActionsService.errorEntities()({
            error: error.error ? error.error.message : error.message,
        })))))));
        //TODO DELETE ALL ENTITIES EFFECT
        this.deleteAllEntitiesEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(this.entitiesActionsService.deleteAllEntities()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.entitiesDataService.deleteAllEntities().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((dataBoolean) => this.entitiesActionsService.deleteAllEntitiesSuccess()({
            deleted: dataBoolean,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.entitiesActionsService.errorEntities()({
            error: error.error ? error.error.message : error.message,
        })))))));
    }
    //TODO NAV INFO
    onNavInfo(idEntitie) {
        //Verifie si this.entitiesService.getRouteParam() est != de undefined
        if (this.entitiesService.getRouteParam()) {
            this.entitiesService.onNav(_modules_service__WEBPACK_IMPORTED_MODULE_3__.WhereNavEntities.ressourcesEntitie, this.entitiesService.getRouteParam(), idEntitie);
        } //Ce cas c'est pour les entites qui n'ont pas de ressourcesEntitie comme info-kilo, type-linge
        else {
            this.entitiesService.onNav(_modules_service__WEBPACK_IMPORTED_MODULE_3__.WhereNavEntities.homeEntitie);
        }
    }
    //TODO NAV HOME ENTITIES
    onNavEntities() {
        this.store.dispatch(this.entitiesActionsService.getAllEntities()());
        this.entitiesService.onNav(_modules_service__WEBPACK_IMPORTED_MODULE_3__.WhereNavEntities.homeEntitie);
    }
};
EntitiesEffects.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions },
    { type: _modules_ngrx_actions__WEBPACK_IMPORTED_MODULE_2__.EntitiesActions },
    { type: _modules_data_service__WEBPACK_IMPORTED_MODULE_1__.EntitiesDataService },
    { type: _modules_service__WEBPACK_IMPORTED_MODULE_3__.EntitiesService }
];
EntitiesEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()
], EntitiesEffects);



/***/ }),

/***/ 47301:
/*!*******************************************************************!*\
  !*** ./src/app/modules/servicesModules/modules.ngrx.selectors.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesSelectors": () => (/* binding */ EntitiesSelectors)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var src_app_appState_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/appState/app.state */ 3190);
/* harmony import */ var src_app_routeState_route_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/routeState/route.selectors */ 92721);





let EntitiesSelectors = class EntitiesSelectors {
    constructor(nameStateEntities) {
        this.nameStateEntities = nameStateEntities;
    }
    //TODO
    //******* SELECTEUR POUR LES ENTITIES */
    getEntities() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(this.getStateEntities(), (state) => state.entities);
    }
    //TODO
    //******* SELECTEUR POUR LE ENTITIE */
    getEntitie() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(this.getStateEntities(), (state) => state.entitie);
    }
    //TODO
    //******* SELECTEUR POUR LA NOTIFICATION */
    getNotification() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(this.getStateEntities(), (state) => state.notification);
    }
    //TODO
    //******* SELECTEUR POUR LE DATA STATE */
    getDataState() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(this.getStateEntities(), (state) => state.dataState);
    }
    //TODO
    //******* SELECTEUR L' ENTITIE BY ID */
    getEntitieById() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(this.getStateEntities(), src_app_routeState_route_selectors__WEBPACK_IMPORTED_MODULE_1__.getCustomStateRouter, (stateEntities, stateRoute) => {
            if (stateEntities.entities && stateRoute.params.id) {
                const entities = stateEntities.entities;
                return entities
                    ? // eslint-disable-next-line eqeqeq
                        entities.find((entitie) => entitie.id == stateRoute.params.id)
                    : null;
            }
        });
    }
    //TODO
    //******* SELECTEUR POUR LE MESSAGE D'ERREUR */
    getMessageError() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(this.getStateEntities(), (state) => state.messageError);
    }
    //TODO
    //******* SELECTEUR POUR LE STORE */
    getStateEntities() {
        return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(this.nameStateEntities);
    }
};
EntitiesSelectors.ctorParameters = () => [
    { type: src_app_appState_app_state__WEBPACK_IMPORTED_MODULE_0__.NameStateEntities }
];
EntitiesSelectors = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], EntitiesSelectors);



/***/ }),

/***/ 99407:
/*!************************************************************!*\
  !*** ./src/app/modules/servicesModules/modules.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesService": () => (/* binding */ EntitiesService),
/* harmony export */   "WhereNavEntities": () => (/* binding */ WhereNavEntities)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/routes.config */ 23421);
/* harmony import */ var _modules_entitiesDataState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.entitiesDataState */ 29728);





let EntitiesService = class EntitiesService {
    /*
    Permet le partage de donnee entre les composants afin de modifier le comportement du
    formulaire pour le cas de add et upd car l'ajout et modification d'une entitie sont effectués
    dans le meme composant
    */
    //routeBaseEntitie ==>permet de definir la route de base pour chaque module
    constructor(router, routeBaseEntitie, entitieDataState) {
        this.router = router;
        this.routeBaseEntitie = routeBaseEntitie;
        this.entitieDataState = entitieDataState;
    }
    //TODO ==> NAV DYNAMIQUE IN MODULES
    onNav(whereNav, routeParam, idEntitie) {
        switch (whereNav) {
            case WhereNavEntities.homeEntitie:
                this.router.navigate([`${this.routeBaseEntitie}`]);
                break;
            case WhereNavEntities.ressourcesEntitie:
                this.router.navigate([
                    `${this.routeBaseEntitie}/${routeParam}/${idEntitie}`,
                ]);
                break;
            case WhereNavEntities.addEntitie:
                this.entitieDataState.setAddOrUpdFormEntitie(_modules_entitiesDataState__WEBPACK_IMPORTED_MODULE_1__.EnumAddOrUpdFormEntitie.addEntitie);
                this.router.navigate([`${this.routeBaseEntitie}/${routeParam}`]);
                break;
            case WhereNavEntities.updEntitie:
                this.entitieDataState.setAddOrUpdFormEntitie(_modules_entitiesDataState__WEBPACK_IMPORTED_MODULE_1__.EnumAddOrUpdFormEntitie.updEntitie);
                this.router.navigate([
                    `${this.routeBaseEntitie}/${routeParam}/${idEntitie}`,
                ]);
                break;
            default:
            case WhereNavEntities.homeEntitie:
                this.router.navigate([`${this.routeBaseEntitie}`]);
                break;
        }
    }
    /**
     * Ce get et set permet a la classe EntitiesEffects<T> de pourvoir naviguer dynamiquement
     * apres l'ajout ou modification d'une entities
     */
    //TODO
    getRouteParam() {
        return this.routeParam;
    }
    //TODO
    setRouteParam(routeParam) {
        this.routeParam = routeParam;
    }
};
EntitiesService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: src_app_routes_config__WEBPACK_IMPORTED_MODULE_0__.RoutesNames },
    { type: _modules_entitiesDataState__WEBPACK_IMPORTED_MODULE_1__.EntitiesDataState }
];
EntitiesService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], EntitiesService);

//
var WhereNavEntities;
(function (WhereNavEntities) {
    WhereNavEntities[WhereNavEntities["homeEntitie"] = 0] = "homeEntitie";
    WhereNavEntities[WhereNavEntities["ressourcesEntitie"] = 1] = "ressourcesEntitie";
    WhereNavEntities[WhereNavEntities["addEntitie"] = 2] = "addEntitie";
    WhereNavEntities[WhereNavEntities["updEntitie"] = 3] = "updEntitie";
})(WhereNavEntities || (WhereNavEntities = {}));


/***/ }),

/***/ 92721:
/*!***********************************************!*\
  !*** ./src/app/routeState/route.selectors.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCustomStateRouter": () => (/* binding */ getCustomStateRouter)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

//TODO ETAT ROUTER GLOBAL
const getStateRouter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('router');
//TODO ETAT ROUTER MODIFIER CUSTOM
const getCustomStateRouter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getStateRouter, (router) => router.state);


/***/ }),

/***/ 62230:
/*!*******************************************!*\
  !*** ./src/app/routeState/route.state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomRouterStateSerializer": () => (/* binding */ CustomRouterStateSerializer)
/* harmony export */ });
//TODO [NGRX DOC] MODIFICATION DE MON ETAT NGRX
class CustomRouterStateSerializer {
    serialize(routerState) {
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const { url, root: { queryParams }, } = routerState;
        const { params } = route;
        return { url, params, queryParams };
    }
}


/***/ }),

/***/ 23421:
/*!**********************************!*\
  !*** ./src/app/routes.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesNames": () => (/* binding */ RoutesNames)
/* harmony export */ });
var RoutesNames;
(function (RoutesNames) {
    RoutesNames["home"] = "home";
    RoutesNames["forbiden"] = "forbiden";
    //TODO ETAT FINANCIER
    RoutesNames["etatFinancier"] = "etatFinancier";
    //TODO CLIENTS
    RoutesNames["admins"] = "admins";
    RoutesNames["adminsInfo"] = "admins_info";
    RoutesNames["adminsAdd"] = "admins_add";
    RoutesNames["adminsUpd"] = "admins_upd";
    RoutesNames["adminsEmployers"] = "admins_employers";
    RoutesNames["adminsFacDepDmd"] = "admins_fac_dmd_dep";
    RoutesNames["adminsCmtBloquer"] = "admins_cmp_bloques";
    //TODO CLIENTS
    RoutesNames["clients"] = "clients";
    RoutesNames["clientsInfo"] = "clients_info";
    RoutesNames["clientsAdd"] = "clients_add";
    RoutesNames["clientsUpd"] = "clients_upd";
    RoutesNames["clientsLinges"] = "clients_linges";
    //TODO LINGES
    RoutesNames["linges"] = "linges";
    RoutesNames["lingesInfo"] = "clients_info";
    RoutesNames["lingesUpd"] = "clients_upd";
    RoutesNames["lingesAddTypeAndClient"] = "clients_add_type_and_client";
    RoutesNames["lingesAddDetailsType"] = "clients_add_details_type";
    RoutesNames["lingesAddFinale"] = "clients_add_finale";
    //TODO EMPLOYERS
    RoutesNames["employers"] = "employers";
    RoutesNames["employersInfo"] = "employers_info";
    RoutesNames["employersAdd"] = "employers_add";
    RoutesNames["employersUpd"] = "employers_upd";
    RoutesNames["employersLinges"] = "employers_linges";
    RoutesNames["employersClients"] = "employers_clients";
    RoutesNames["employersDmdDepense"] = "employers_dmd_depense";
    //TODO FACTURES
    RoutesNames["factures"] = "factures";
    RoutesNames["facturesInfo"] = "factures_info";
    RoutesNames["facturesAdd"] = "factures_add";
    RoutesNames["facturesUpd"] = "factures_upd";
    //TODO DEMANDES DEPENSES
    RoutesNames["dmdDepenses"] = "dmdDepenses";
    RoutesNames["dmdDepensesInfo"] = "dmdDepenses_info";
    RoutesNames["dmdDepensesAdd"] = "dmdDepenses_add";
    RoutesNames["dmdDepensesUpd"] = "dmdDepenses_upd";
    //TODO COMPTES BLOQUES
    RoutesNames["cmpBloques"] = "cmpBloques";
    RoutesNames["cmpBloquesInfo"] = "cmpBloques_info";
    RoutesNames["cmpBloquesAdd"] = "cmpBloques_add";
    //TODO TYPES LINGES
    RoutesNames["parametres"] = "parametres";
    //TODO TYPES LINGES
    RoutesNames["typesLinges"] = "typesLinges";
    //TODO INFO KILO
    RoutesNames["infosKilo"] = "infosKilo";
    //TODO INFO PIECES
    RoutesNames["infosPieces"] = "infosPieces";
    RoutesNames["infosPiecesAdd"] = "infosPiecesAdd";
    RoutesNames["infosPiecesInfoAndUpd"] = "infosPiecesInfoAndUpd";
})(RoutesNames || (RoutesNames = {}));


/***/ }),

/***/ 13313:
/*!****************************************************!*\
  !*** ./src/app/servicesApp/admin.authorization.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAuthorization": () => (/* binding */ AdminAuthorization)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.config */ 23421);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 86750);
/* harmony import */ var _models_models_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/models.interfaces */ 68157);






let AdminAuthorization = class AdminAuthorization {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.routesNames = _routes_config__WEBPACK_IMPORTED_MODULE_0__.RoutesNames;
    }
    canActivate() {
        try {
            const role = this.userService.getRoleUser();
            const token = this.userService.getTokenUser();
            if (token === null || token === undefined || token === '') {
                this.router.navigate([this.routesNames.home]);
                return false;
            }
            //
            if (role !== _models_models_interfaces__WEBPACK_IMPORTED_MODULE_2__.EnumUserRole.admin) {
                throw new Error('');
            }
            return true;
        }
        catch (error) {
            this.router.navigate([this.routesNames.forbiden]);
            return false;
        }
    }
};
AdminAuthorization.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService }
];
AdminAuthorization = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], AdminAuthorization);



/***/ }),

/***/ 93161:
/*!***************************************************!*\
  !*** ./src/app/servicesApp/auth.authorization.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthAuthorization": () => (/* binding */ AuthAuthorization)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.config */ 23421);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 86750);





let AuthAuthorization = class AuthAuthorization {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.routesNames = _routes_config__WEBPACK_IMPORTED_MODULE_0__.RoutesNames;
    }
    canActivate() {
        try {
            const token = this.userService.getTokenUser();
            if (token === null || token === undefined || token === '') {
                throw new Error('');
            }
            return true;
        }
        catch (error) {
            this.router.navigate([this.routesNames.home]);
            return false;
        }
    }
};
AuthAuthorization.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService }
];
AuthAuthorization = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], AuthAuthorization);



/***/ }),

/***/ 52452:
/*!*******************************************!*\
  !*** ./src/app/servicesApp/http.inter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtppInterceptor": () => (/* binding */ HtppInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)();
class HtppInterceptor {
    intercept(req, next) {
        let user;
        const userNull = { email: '', mdp: '', token: '' };
        let url = req.url;
        try {
            user = JSON.parse(localStorage.getItem('user'));
            user = user === null ? userNull : user;
        }
        catch (error) {
            user = userNull;
        }
        //
        if (url.endsWith('/')) {
            url = url.slice(0, url.length - 1);
        }
        //
        url = `${url}?id=${user.userIdAuth}&em=${user.userEmailAuth}&rl=${user.userRoleAuth}`;
        //
        const newReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + user.token),
            url,
        });
        return next.handle(newReq);
    }
}


/***/ }),

/***/ 86750:
/*!*********************************************!*\
  !*** ./src/app/servicesApp/user.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _models_models_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/models.interfaces */ 68157);




let UserService = class UserService {
    constructor() {
        this.userSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    //TODO
    emitUserSub(userState) {
        this.userSub.next(userState);
    }
    //TODO
    getUser() {
        let user;
        const userNull = {
            email: '',
            mdp: '',
            token: '',
            userEmailAuth: '',
            userRoleAuth: '',
            userIdAuth: '',
            userNomAuth: '',
            userPrenomAuth: '',
        };
        user = JSON.parse(localStorage.getItem('user'));
        user = user === null ? userNull : user;
        return user;
    }
    //TODO
    getNomUser() {
        return this.getUser().userNomAuth;
    }
    //TODO
    getPrenomUser() {
        return this.getUser().userPrenomAuth;
    }
    //TODO
    getRoleUser() {
        return this.getUser().userRoleAuth;
    }
    //TODO
    getTokenUser() {
        return this.getUser().token;
    }
    //TODO
    getIdUser() {
        return this.getUser().userIdAuth;
    }
    //TODO
    getEmailUser() {
        return this.getUser().userEmailAuth;
    }
    //TODO
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.emitUserSub(_models_models_interfaces__WEBPACK_IMPORTED_MODULE_0__.EnumUserState.logIn);
    }
    //TODO
    clearUser() {
        localStorage.removeItem('user');
        this.emitUserSub(_models_models_interfaces__WEBPACK_IMPORTED_MODULE_0__.EnumUserState.logOut);
    }
};
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // host: 'https://127.0.0.1:3000/',
    host: 'http://api-pressing.eu-4.evennode.com/',
    dbName: 'dataPressing.db',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 35821:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		18386,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		59355,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		77979,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		71665,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		71458,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		40524,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		54393,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		91564,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		52360,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		9027,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		93974,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		1813,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		55700,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		30651,
		"default-node_modules_ionic_angular_node_modules_ionic_core_dist_esm_parse-250f021a_js-node_mo-b7781e",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		94429,
		"default-node_modules_ionic_angular_node_modules_ionic_core_dist_esm_parse-250f021a_js-node_mo-b7781e",
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		16118,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		95633,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		65436,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		95831,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		45769,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		43250,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		64489,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		10505,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		60684,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		35694,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		79358,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		99067,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		90314,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		29433,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		29212,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		31316,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		30315,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		79320,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		35239,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		94005,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		55777,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		88235,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		44315,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		94078,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		33714,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		8690,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		44125,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		80976,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		94476,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		61422,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		19099,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		69775,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		51790,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 35821;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu {\n  --width: 80%;\n  --height: 100%;\n}\nion-menu .ion-padding {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\nion-menu .ion-padding .nav {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #312450;\n}\nion-menu .ion-padding .nav ion-item {\n  max-height: 55px;\n  --border-style: none;\n}\nion-menu .ion-padding .nav ion-item::after {\n  content: \"\";\n  position: absolute;\n  width: 100px;\n  height: 2px;\n  left: 0;\n  bottom: 0;\n  background-image: linear-gradient(to right, #5e42a6, #b74e91);\n}\nion-label {\n  text-transform: capitalize;\n  letter-spacing: 0.2em;\n  font-size: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL1Byb2pldCUyMElvbmljL0ZpcnN0SW9uaWMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0FDR047QURGTTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUNJUjtBREZRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLDZEQUFBO0FDSVY7QURFQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IHtcbiAgLS13aWR0aDogODAlO1xuICAtLWhlaWdodDogMTAwJTtcbiAgLmlvbi1wYWRkaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC5uYXYge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZDogIzMxMjQ1MDtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTVweDtcbiAgICAgICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1ZTQyYTYsICNiNzRlOTEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24tbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICBmb250LXNpemU6IDAuMjVlbTtcbn1cbiIsImlvbi1tZW51IHtcbiAgLS13aWR0aDogODAlO1xuICAtLWhlaWdodDogMTAwJTtcbn1cbmlvbi1tZW51IC5pb24tcGFkZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1tZW51IC5pb24tcGFkZGluZyAubmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICMzMTI0NTA7XG59XG5pb24tbWVudSAuaW9uLXBhZGRpbmcgLm5hdiBpb24taXRlbSB7XG4gIG1heC1oZWlnaHQ6IDU1cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuaW9uLW1lbnUgLmlvbi1wYWRkaW5nIC5uYXYgaW9uLWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMnB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzVlNDJhNiwgI2I3NGU5MSk7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIGZvbnQtc2l6ZTogMC4yNWVtO1xufSJdfQ== */";

/***/ }),

/***/ 33781:
/*!*************************************************************!*\
  !*** ./src/app/forbiden/forbiden.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JiaWRlbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-menu type=\"reveal\" contentId=\"main-content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>P7-Pressing-App</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <ion-list lines=\"none\" class=\"nav\">\n        <!-- **********MENU CONNEXION********** -->\n        <ion-item\n          style=\"color: white; width: 100%\"\n          routerLink=\"{{ routesNames.home }}\"\n        >\n          <ion-icon\n            slot=\"start\"\n            style=\"color: white\"\n            name=\"enter-outline\"\n          ></ion-icon>\n\n          <ion-menu-toggle>\n            <ion-label>Connexion</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n        <!-- **********MENU ACCEUIL********** -->\n        <ion-item\n          *ngIf=\"isAdmin\"\n          style=\"color: white; width: 100%\"\n          routerLink=\"{{ routesNames.etatFinancier }}\"\n        >\n          <ion-icon\n            slot=\"start\"\n            style=\"color: white\"\n            name=\"home-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Acceuil</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n        <!-- **********MENU PROFIL ADM********** -->\n        <ion-item\n          *ngIf=\"isAdmin\"\n          routerLink=\"{{\n            routesNames.admins + '/' + routesNames.adminsInfo + '/' + idUser\n          }}\"\n          style=\"color: white; width: 100%\"\n        >\n          <ion-icon\n            slot=\"start\"\n            style=\"color: white\"\n            name=\"person-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Profil</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n        <!-- **********MENU PROFIL EMP********** -->\n        <ion-item\n          *ngIf=\"!isAdmin\"\n          routerLink=\"{{\n            routesNames.employers +\n              '/' +\n              routesNames.employersInfo +\n              '/' +\n              idUser\n          }}\"\n          style=\"color: white; width: 100%\"\n        >\n          <ion-icon\n            slot=\"start\"\n            style=\"color: white\"\n            name=\"person-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Profil</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n\n        <!-- **********MENU ADMINS********** -->\n        <ion-item\n          *ngIf=\"isAdmin\"\n          style=\"color: white\"\n          routerLink=\"{{ routesNames.admins }}\"\n        >\n          <ion-icon\n            style=\"color: white\"\n            slot=\"start\"\n            name=\"people-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Admins</ion-label>\n          </ion-menu-toggle></ion-item\n        >\n        <!-- **********MENU EMPLOYERS********** -->\n        <ion-item\n          *ngIf=\"isAdmin\"\n          style=\"color: white\"\n          routerLink=\"{{ routesNames.employers }}\"\n        >\n          <ion-icon\n            style=\"color: white\"\n            slot=\"start\"\n            name=\"people-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Employes</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n        <!-- **********MENU LINGES********** -->\n        <ion-item style=\"color: white\" routerLink=\"{{ routesNames.linges }}\">\n          <ion-icon\n            slot=\"start\"\n            style=\"color: white\"\n            name=\"shirt-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Linges</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n        <!-- **********MENU CLIENTS********** -->\n        <ion-item style=\"color: white\" routerLink=\"{{ routesNames.clients }}\">\n          <ion-icon\n            style=\"color: white\"\n            slot=\"start\"\n            name=\"people-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Clients</ion-label>\n          </ion-menu-toggle></ion-item\n        >\n\n        <!-- **********MENU FACTURES********** -->\n        <ion-item\n          *ngIf=\"isAdmin\"\n          style=\"color: white\"\n          routerLink=\"{{ routesNames.factures }}\"\n        >\n          <ion-icon\n            style=\"color: white\"\n            slot=\"start\"\n            name=\"reader-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Factures</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n        <!-- **********MENU DEMANDES********** -->\n        <ion-item\n          style=\"color: white\"\n          routerLink=\"{{ routesNames.dmdDepenses }}\"\n        >\n          <ion-icon\n            style=\"color: white\"\n            slot=\"start\"\n            name=\"newspaper-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Demandes</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n        <!-- **********MENU COMPTE BLOQUE********** -->\n        <ion-item\n          *ngIf=\"isAdmin\"\n          style=\"color: white\"\n          routerLink=\"{{ routesNames.cmpBloques }}\"\n        >\n          <ion-icon\n            style=\"color: white\"\n            slot=\"start\"\n            name=\"lock-closed-outline\"\n          ></ion-icon>\n          <ion-menu-toggle>\n            <ion-label>Comptes Bloqués</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n        <!-- **********MENU PARAMETRE********** -->\n        <ion-item\n          *ngIf=\"isAdmin\"\n          style=\"color: white\"\n          routerLink=\"{{ routesNames.parametres }}\"\n        >\n          <ion-icon\n            style=\"color: white\"\n            slot=\"start\"\n            name=\"settings-outline\"\n          ></ion-icon>\n\n          <ion-menu-toggle>\n            <ion-label>Configurations</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n\n        <!-- **********MENU DECONNECTER********** -->\n        <ion-item style=\"color: white\" (click)=\"logOut()\">\n          <ion-icon\n            slot=\"start\"\n            style=\"color: white\"\n            name=\"exit-outline\"\n          ></ion-icon>\n          <ion-menu-toggle class=\"mt-4\">\n            <ion-label>Déconnecter</ion-label>\n          </ion-menu-toggle>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 49796:
/*!*************************************************************!*\
  !*** ./src/app/forbiden/forbiden.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n    <ion-menu-toggle slot=\"start\">\n      <ion-button><ion-icon name=\"grid-outline\"></ion-icon></ion-button>\n    </ion-menu-toggle>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- --------------------------------SECTION FORBIDEN----------------------------------- -->\n\n  <div class=\"alert alert-warning\">\n    <strong>Vous n'éte pas authorisé a accéder a cette ressource !</strong>\n  </div>\n</ion-content>\n<ion-footer [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-back-button\n      slot=\"start\"\n      [defaultHref]=\"routesNames.home\"\n    ></ion-back-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map