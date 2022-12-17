"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_modulesParametres_parametres_parametres_module_ts"],{

/***/ 46469:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/modulesParametres/parametres/parametres-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametresPageRoutingModule": () => (/* binding */ ParametresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _parametres_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parametres.page */ 93469);




const routes = [
    {
        path: '',
        component: _parametres_page__WEBPACK_IMPORTED_MODULE_0__.ParametresPage
    }
];
let ParametresPageRoutingModule = class ParametresPageRoutingModule {
};
ParametresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ParametresPageRoutingModule);



/***/ }),

/***/ 7603:
/*!***************************************************************************!*\
  !*** ./src/app/modules/modulesParametres/parametres/parametres.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametresPageModule": () => (/* binding */ ParametresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _parametres_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parametres-routing.module */ 46469);
/* harmony import */ var _parametres_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parametres.page */ 93469);







let ParametresPageModule = class ParametresPageModule {
};
ParametresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _parametres_routing_module__WEBPACK_IMPORTED_MODULE_0__.ParametresPageRoutingModule
        ],
        declarations: [_parametres_page__WEBPACK_IMPORTED_MODULE_1__.ParametresPage]
    })
], ParametresPageModule);



/***/ }),

/***/ 93469:
/*!*************************************************************************!*\
  !*** ./src/app/modules/modulesParametres/parametres/parametres.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametresPage": () => (/* binding */ ParametresPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _parametres_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parametres.page.html?ngResource */ 59659);
/* harmony import */ var _parametres_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parametres.page.scss?ngResource */ 80846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/routes.config */ 23421);






let ParametresPage = class ParametresPage {
    constructor(router) {
        this.router = router;
        this.routesNames = src_app_routes_config__WEBPACK_IMPORTED_MODULE_2__.RoutesNames;
    }
    ngOnInit() { }
    //TODO NAV
    onNav(routeParam) {
        this.router.navigate([routeParam]);
    }
};
ParametresPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ParametresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-parametres',
        template: _parametres_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_parametres_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ParametresPage);



/***/ }),

/***/ 80846:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/modulesParametres/parametres/parametres.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --border-style: none;\n}\n\nion-item {\n  width: 100%;\n}\n\nion-item .card {\n  width: 100%;\n}\n\n.user {\n  width: 100%;\n  background-color: #ffffff;\n  border-radius: 0 0 12px 12px;\n  padding: 2px 5px 10px;\n  display: grid;\n  height: 70px;\n  max-height: 70px;\n}\n\n.user__profile {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  align-items: center;\n  padding: 5px 30px 10px 10px;\n  overflow: hidden;\n  border-radius: 10px;\n  box-shadow: 0 2px 2px 2px rgba(51, 51, 51, 0.23);\n  background-color: #ffffff;\n}\n\n.user__picture {\n  color: #000000;\n  font-size: 25px;\n  border-radius: 50%;\n  box-shadow: 0 0 0 10px #f3f4f6, 0 0 0 22px #acacac;\n}\n\n.user__name {\n  color: #000000;\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: 0.54px;\n  margin-left: 40px;\n  text-transform: uppercase;\n}\n\n.user__value {\n  color: #acacac;\n  font-weight: 700;\n  font-size: 20px;\n  text-align: right;\n}\n\n.item_btn {\n  background-color: #ffffff;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5px;\n  margin-left: 2px;\n  margin-right: 5px;\n  border-left: 2px solid #acacac;\n  border-radius: 5px;\n  background: linear-gradient(145deg, #ffffff, #ffffff);\n  box-shadow: 10px 0 20px -10px rgba(0, 0, 0, 0.8);\n  height: 70%;\n}\n\n.item_icon {\n  font-size: 25px;\n  color: #000000;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nion-item {\n  --border-style: none;\n}\n\nion-searchbar {\n  --border-radius: 20px;\n  --color: #000000;\n  height: 5px;\n}\n\n.scroll {\n  font-size: 22px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.scroll :hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL21vZHVsZXMuc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2pldCUyMElvbmljL0ZpcnN0SW9uaWMvc3JjL2FwcC9tb2R1bGVzL21vZHVsZXNQYXJhbWV0cmVzL3BhcmFtZXRyZXMvcGFyYW1ldHJlcy5wYWdlLnNjc3MiLCIuLi8uLi9tb2R1bGVzLnNjc3MvbGlzdHMudXNlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEQTtFQUNFLG9CQUFBO0FDcERGOztBRHNEQTtFQUNFLFdBQUE7QUNuREY7O0FEcURFO0VBQ0UsV0FBQTtBQ25ESjs7QUNQQTtFQUNFLFdBQUE7RUFDQSx5QkZGWTtFRUdaLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEVUY7O0FDUkU7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJGakJVO0FDMkJkOztBQ1BFO0VBQ0UsY0ZwQlM7RUVxQlQsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7QURTSjs7QUNORTtFQUNFLGNGM0JTO0VFNEJULGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRFFKOztBQ0xFO0VBQ0UsY0ZuQ2dCO0VFb0NoQixnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRE9KOztBQ0hBO0VGWEUseUJBakNZO0VBa0NaLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlRVMrQjtFRlIvQixnQkVRb0M7RUZQcEMsaUJFT3lDO0VGTnpDLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FYbUQ7QUM2QnJEOztBQ2RBO0VBQ0UsZUFBQTtFQUNBLGNGaERXO0VFaURYLGlCQUFBO0VBQ0Esa0JBQUE7QURpQkY7O0FDZkE7RUFDRSxvQkFBQTtBRGtCRjs7QUNoQkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBRG1CRjs7QUNqQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRG9CRjs7QUNsQkE7RUFDRSxlQUFBO0FEcUJGIiwiZmlsZSI6InBhcmFtZXRyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9NRVMgVkFSSUFCTEVTXG4kY29sb3ItcHJpbWFyeTogIzM4ODBmZjtcbiRjb2xvci1saWdodDogI2ZmZmZmZjtcbiRjb2xvci1kYXJrOiAjMDAwMDAwO1xuJGNvbG9yLWxpZ2h0LWJsYWNrOiAjYWNhY2FjO1xuLy9NRVMgTUlYSU4gU1xuQG1peGluIGZsZXgtbWl4aW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtaXhpbiBjYXJkLWJnLW1peGluIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MiwgMjUyLCAwLjU1KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWJsYWNrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMTksIDE4LCAxOCwgMC40KTtcbn1cbkBtaXhpbiBidG4tbWl4aW4ge1xuICBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbkBtaXhpbiBidG4taXRlbS1vcHRpb24tbWl4aW4oJG1nVCwgJG1nbCwgJG1nUiwgJGhlaTogNzAlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6ICRtZ1Q7XG4gIG1hcmdpbi1sZWZ0OiAkbWdsO1xuICBtYXJnaW4tcmlnaHQ6ICRtZ1I7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgJGNvbG9yLWxpZ2h0LWJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICRjb2xvci1saWdodCwgJGNvbG9yLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogMTBweCAwIDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBoZWlnaHQ6ICRoZWk7XG59XG5AbWl4aW4gY2FyZC10aXRsZS1taXhpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLy9cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5pb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuIFxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsImlvbi1pdGVtIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbmlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24taXRlbSAuY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xuICBwYWRkaW5nOiAycHggNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogNzBweDtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cbi51c2VyX19wcm9maWxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDMwcHggMTBweCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4udXNlcl9fcGljdHVyZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMTBweCAjZjNmNGY2LCAwIDAgMCAyMnB4ICNhY2FjYWM7XG59XG4udXNlcl9fbmFtZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnVzZXJfX3ZhbHVlIHtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pdGVtX2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNhY2FjYWM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZmZmZmZiwgI2ZmZmZmZik7XG4gIGJveC1zaGFkb3c6IDEwcHggMCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi5pdGVtX2ljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWNvbG9yOiAjMDAwMDAwO1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLnNjcm9sbCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uc2Nyb2xsIDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJAaW1wb3J0IFwiLi4vbW9kdWxlcy5zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi51c2VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcbiAgcGFkZGluZzogMnB4IDVweCAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG5cbiAgJl9fcHJvZmlsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDMwcHggMTBweCAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0O1xuICB9XG5cbiAgJl9fcGljdHVyZSB7XG4gICAgY29sb3I6ICRjb2xvci1kYXJrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCAjZjNmNGY2LCAwIDAgMCAyMnB4ICRjb2xvci1saWdodC1ibGFjaztcbiAgfVxuXG4gICZfX25hbWUge1xuICAgIGNvbG9yOiAkY29sb3ItZGFyaztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAmX192YWx1ZSB7XG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4uaXRlbV9idG4ge1xuICBAaW5jbHVkZSBidG4taXRlbS1vcHRpb24tbWl4aW4oNXB4LCAycHgsIDVweCk7XG59XG4uaXRlbV9pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogJGNvbG9yLWRhcms7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1jb2xvcjogIzAwMDAwMDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uc2Nyb2xsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uc2Nyb2xsIDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 59659:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/modulesParametres/parametres/parametres.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Parametres</ion-title>\n    <ion-menu-toggle slot=\"start\">\n      <ion-button><ion-icon name=\"grid-outline\"></ion-icon></ion-button>\n    </ion-menu-toggle>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--                                 LISTE                                  -->\n\n  <ion-list lines=\"inset\">\n    <ion-item-sliding class=\"mt-1\">\n      <!-- *************************************** -->\n      <ion-item (click)=\"onNav(routesNames.typesLinges)\">\n        <main class=\"user\">\n          <article class=\"user__profile\">\n            <ion-icon class=\"user__picture\" name=\"settings-outline\"></ion-icon>\n\n            <span class=\"user__name\">Types de linges </span>\n          </article>\n        </main>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding class=\"mt-1\">\n      <!-- *********************                         ****************** -->\n      <ion-item (click)=\"onNav(routesNames.infosKilo)\">\n        <main class=\"user\">\n          <article class=\"user__profile\">\n            <ion-icon class=\"user__picture\" name=\"settings-outline\"></ion-icon>\n            <span class=\"user__name\">Infos kilo</span>\n          </article>\n        </main>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding class=\"mt-1\">\n      <!-- *********************                         ****************** -->\n      <ion-item (click)=\"onNav(routesNames.infosPieces)\">\n        <main class=\"user\">\n          <article class=\"user__profile\">\n            <ion-icon class=\"user__picture\" name=\"settings-outline\"></ion-icon>\n\n            <span class=\"user__name\">Infos Pieces</span>\n          </article>\n        </main>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n<ion-footer [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-back-button\n      slot=\"start\"\n      [defaultHref]=\"routesNames.home\"\n    ></ion-back-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_modulesParametres_parametres_parametres_module_ts.js.map