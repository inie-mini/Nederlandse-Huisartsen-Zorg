"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgot-pw_forgot-pw_module_ts"],{

/***/ 6088:
/*!*************************************************************!*\
  !*** ./src/app/pages/forgot-pw/forgot-pw-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPwPageRoutingModule": () => (/* binding */ ForgotPwPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _forgot_pw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-pw.page */ 9266);




const routes = [
    {
        path: '',
        component: _forgot_pw_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPwPage
    }
];
let ForgotPwPageRoutingModule = class ForgotPwPageRoutingModule {
};
ForgotPwPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPwPageRoutingModule);



/***/ }),

/***/ 823:
/*!*****************************************************!*\
  !*** ./src/app/pages/forgot-pw/forgot-pw.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPwPageModule": () => (/* binding */ ForgotPwPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_pw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-pw-routing.module */ 6088);
/* harmony import */ var _forgot_pw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-pw.page */ 9266);







let ForgotPwPageModule = class ForgotPwPageModule {
};
ForgotPwPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_pw_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPwPageRoutingModule
        ],
        declarations: [_forgot_pw_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPwPage]
    })
], ForgotPwPageModule);



/***/ }),

/***/ 9266:
/*!***************************************************!*\
  !*** ./src/app/pages/forgot-pw/forgot-pw.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPwPage": () => (/* binding */ ForgotPwPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_pw_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-pw.page.html?ngResource */ 8648);
/* harmony import */ var _forgot_pw_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-pw.page.scss?ngResource */ 3809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ForgotPwPage = class ForgotPwPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPwPage.ctorParameters = () => [];
ForgotPwPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-forgot-pw',
        template: _forgot_pw_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_pw_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPwPage);



/***/ }),

/***/ 3809:
/*!****************************************************************!*\
  !*** ./src/app/pages/forgot-pw/forgot-pw.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcHcucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8648:
/*!****************************************************************!*\
  !*** ./src/app/pages/forgot-pw/forgot-pw.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"flex-center\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title color=\"secondary\">Paswoord reset</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Email:</ion-label>\n          <ion-input type=\"email\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">Stuur mail</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot-pw_forgot-pw_module_ts.js.map