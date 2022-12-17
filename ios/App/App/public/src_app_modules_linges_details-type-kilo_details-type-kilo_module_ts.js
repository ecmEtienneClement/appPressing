"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_linges_details-type-kilo_details-type-kilo_module_ts"],{

/***/ 66253:
/*!******************************************************************************!*\
  !*** ./src/app/modules/linges/details-type-kilo/details-type-kilo.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTypeKiloPageModule": () => (/* binding */ DetailsTypeKiloPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_detailsTypeKilo_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/detailsTypeKilo.data.service */ 60331);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var src_app_appState_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/appState/app.state */ 3190);
/* harmony import */ var _ngrx_detailsTypeKilo_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx/detailsTypeKilo.reducer */ 16556);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_detailsTypeKilo_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx/detailsTypeKilo.effects */ 72093);








let DetailsTypeKiloPageModule = class DetailsTypeKiloPageModule {
};
DetailsTypeKiloPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreModule.forFeature(src_app_appState_app_state__WEBPACK_IMPORTED_MODULE_1__.NameStateEntities.detailsTypeKilo, _ngrx_detailsTypeKilo_reducer__WEBPACK_IMPORTED_MODULE_2__.GetDetailsTypeKiloReducer.getReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forFeature([_ngrx_detailsTypeKilo_effects__WEBPACK_IMPORTED_MODULE_3__.DetailsTypeKiloEffects])
        ],
        providers: [_services_detailsTypeKilo_data_service__WEBPACK_IMPORTED_MODULE_0__.DetailsTypeKiloDataService],
    })
], DetailsTypeKiloPageModule);



/***/ }),

/***/ 72093:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/linges/details-type-kilo/ngrx/detailsTypeKilo.effects.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTypeKiloEffects": () => (/* binding */ DetailsTypeKiloEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var src_app_modules_servicesModules_modules_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.ngrx.effects */ 3370);
/* harmony import */ var _services_detailsTypeKilo_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/detailsTypeKilo.data.service */ 60331);
/* harmony import */ var _detailsTypeKilo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailsTypeKilo.actions */ 85988);







let DetailsTypeKiloEffects = class DetailsTypeKiloEffects extends src_app_modules_servicesModules_modules_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EntitiesEffects {
    constructor(store, action$, detailsTypeKiloActions, detailsTypeKiloDataService) {
        super(store, action$, detailsTypeKiloActions, detailsTypeKiloDataService);
    }
};
DetailsTypeKiloEffects.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions },
    { type: _detailsTypeKilo_actions__WEBPACK_IMPORTED_MODULE_2__.DetailsTypeKiloActions },
    { type: _services_detailsTypeKilo_data_service__WEBPACK_IMPORTED_MODULE_1__.DetailsTypeKiloDataService }
];
DetailsTypeKiloEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], DetailsTypeKiloEffects);



/***/ }),

/***/ 16556:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/linges/details-type-kilo/ngrx/detailsTypeKilo.reducer.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetDetailsTypeKiloReducer": () => (/* binding */ GetDetailsTypeKiloReducer)
/* harmony export */ });
/* harmony import */ var src_app_modules_servicesModules_modules_ngrx_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.ngrx.reducer */ 78265);
/* harmony import */ var _detailsTypeKilo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsTypeKilo.actions */ 85988);


class DetailsTypeKiloReducer extends src_app_modules_servicesModules_modules_ngrx_reducer__WEBPACK_IMPORTED_MODULE_0__.EntitiesReducer {
    constructor(detailsTypeKiloActions) {
        super(detailsTypeKiloActions, 'details type kilo');
    }
}
//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
class GetDetailsTypeKiloReducer {
    static getReducer(state, action) {
        if (GetDetailsTypeKiloReducer.intanceDetailsTypeKiloReducer == null) {
            GetDetailsTypeKiloReducer.intanceDetailsTypeKiloReducer =
                new DetailsTypeKiloReducer(new _detailsTypeKilo_actions__WEBPACK_IMPORTED_MODULE_1__.DetailsTypeKiloActions());
        }
        return GetDetailsTypeKiloReducer.intanceDetailsTypeKiloReducer.entitiesFeactureReducer()(state, action);
    }
}
GetDetailsTypeKiloReducer.intanceDetailsTypeKiloReducer = null;


/***/ }),

/***/ 60331:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/linges/details-type-kilo/services/detailsTypeKilo.data.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTypeKiloDataService": () => (/* binding */ DetailsTypeKiloDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api.config */ 48487);
/* harmony import */ var src_app_modules_servicesModules_modules_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.data.service */ 24882);

/* eslint-disable no-underscore-dangle */




let DetailsTypeKiloDataService = class DetailsTypeKiloDataService extends src_app_modules_servicesModules_modules_data_service__WEBPACK_IMPORTED_MODULE_1__.EntitiesDataService {
    constructor(httpClient) {
        super(httpClient, src_app_api_config__WEBPACK_IMPORTED_MODULE_0__.NameUrlEntitiesAPI.detailTypeKilo);
    }
};
DetailsTypeKiloDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
DetailsTypeKiloDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], DetailsTypeKiloDataService);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_linges_details-type-kilo_details-type-kilo_module_ts.js.map