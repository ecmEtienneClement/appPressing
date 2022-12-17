"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_linges_details-type-piece_details-type-piece_module_ts"],{

/***/ 84263:
/*!********************************************************************************!*\
  !*** ./src/app/modules/linges/details-type-piece/details-type-piece.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTypePiecePageModule": () => (/* binding */ DetailsTypePiecePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var src_app_appState_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/appState/app.state */ 3190);
/* harmony import */ var _ngrx_detailsTypePiece_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx/detailsTypePiece.effects */ 35501);
/* harmony import */ var _ngrx_detailsTypePiece_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx/detailsTypePiece.reducer */ 2986);
/* harmony import */ var _services_detailsTypePiece_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/detailsTypePiece.data.service */ 68100);








let DetailsTypePiecePageModule = class DetailsTypePiecePageModule {
};
DetailsTypePiecePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreModule.forFeature(src_app_appState_app_state__WEBPACK_IMPORTED_MODULE_0__.NameStateEntities.detailsTypePiece, _ngrx_detailsTypePiece_reducer__WEBPACK_IMPORTED_MODULE_2__.GetDetailsTypePieceReducer.getReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forFeature([_ngrx_detailsTypePiece_effects__WEBPACK_IMPORTED_MODULE_1__.DetailsTypePieceEffects]),
        ],
        providers: [_services_detailsTypePiece_data_service__WEBPACK_IMPORTED_MODULE_3__.DetailsTypePieceDataService],
    })
], DetailsTypePiecePageModule);



/***/ }),

/***/ 35501:
/*!************************************************************************************!*\
  !*** ./src/app/modules/linges/details-type-piece/ngrx/detailsTypePiece.effects.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTypePieceEffects": () => (/* binding */ DetailsTypePieceEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var src_app_modules_servicesModules_modules_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.ngrx.effects */ 3370);
/* harmony import */ var _detailsTypePiece_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsTypePiece.actions */ 8959);
/* harmony import */ var _services_detailsTypePiece_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/detailsTypePiece.data.service */ 68100);







let DetailsTypePieceEffects = class DetailsTypePieceEffects extends src_app_modules_servicesModules_modules_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EntitiesEffects {
    constructor(store, action$, detailsTypePieceActions, detailsTypePieceDataService) {
        super(store, action$, detailsTypePieceActions, detailsTypePieceDataService);
    }
};
DetailsTypePieceEffects.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions },
    { type: _detailsTypePiece_actions__WEBPACK_IMPORTED_MODULE_1__.DetailsTypePieceActions },
    { type: _services_detailsTypePiece_data_service__WEBPACK_IMPORTED_MODULE_2__.DetailsTypePieceDataService }
];
DetailsTypePieceEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], DetailsTypePieceEffects);



/***/ }),

/***/ 2986:
/*!************************************************************************************!*\
  !*** ./src/app/modules/linges/details-type-piece/ngrx/detailsTypePiece.reducer.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetDetailsTypePieceReducer": () => (/* binding */ GetDetailsTypePieceReducer)
/* harmony export */ });
/* harmony import */ var src_app_modules_servicesModules_modules_ngrx_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.ngrx.reducer */ 78265);
/* harmony import */ var _detailsTypePiece_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsTypePiece.actions */ 8959);


class DetailsTypePieceReducer extends src_app_modules_servicesModules_modules_ngrx_reducer__WEBPACK_IMPORTED_MODULE_0__.EntitiesReducer {
    constructor(detailsTypePieceActions) {
        super(detailsTypePieceActions, 'details type piece');
    }
}
//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
class GetDetailsTypePieceReducer {
    static getReducer(state, action) {
        if (GetDetailsTypePieceReducer.intanceDetailsTypePieceReducer == null) {
            GetDetailsTypePieceReducer.intanceDetailsTypePieceReducer =
                new DetailsTypePieceReducer(new _detailsTypePiece_actions__WEBPACK_IMPORTED_MODULE_1__.DetailsTypePieceActions());
        }
        return GetDetailsTypePieceReducer.intanceDetailsTypePieceReducer.entitiesFeactureReducer()(state, action);
    }
}
GetDetailsTypePieceReducer.intanceDetailsTypePieceReducer = null;


/***/ }),

/***/ 68100:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/linges/details-type-piece/services/detailsTypePiece.data.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTypePieceDataService": () => (/* binding */ DetailsTypePieceDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api.config */ 48487);
/* harmony import */ var src_app_modules_servicesModules_modules_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/servicesModules/modules.data.service */ 24882);

/* eslint-disable no-underscore-dangle */




let DetailsTypePieceDataService = class DetailsTypePieceDataService extends src_app_modules_servicesModules_modules_data_service__WEBPACK_IMPORTED_MODULE_1__.EntitiesDataService {
    constructor(httpClient) {
        super(httpClient, src_app_api_config__WEBPACK_IMPORTED_MODULE_0__.NameUrlEntitiesAPI.detailsTypePiece);
    }
};
DetailsTypePieceDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
DetailsTypePieceDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], DetailsTypePieceDataService);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_linges_details-type-piece_details-type-piece_module_ts.js.map