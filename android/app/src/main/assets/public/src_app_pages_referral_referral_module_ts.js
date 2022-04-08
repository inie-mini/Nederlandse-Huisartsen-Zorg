"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_referral_referral_module_ts"],{

/***/ 2554:
/*!***********************************************************!*\
  !*** ./src/app/pages/referral/referral-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralPageRoutingModule": () => (/* binding */ ReferralPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _referral_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referral.page */ 9421);




const routes = [
    {
        path: '',
        component: _referral_page__WEBPACK_IMPORTED_MODULE_0__.ReferralPage
    }
];
let ReferralPageRoutingModule = class ReferralPageRoutingModule {
};
ReferralPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReferralPageRoutingModule);



/***/ }),

/***/ 7798:
/*!***************************************************!*\
  !*** ./src/app/pages/referral/referral.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralPageModule": () => (/* binding */ ReferralPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _referral_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referral-routing.module */ 2554);
/* harmony import */ var _referral_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referral.page */ 9421);







let ReferralPageModule = class ReferralPageModule {
};
ReferralPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _referral_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferralPageRoutingModule
        ],
        declarations: [_referral_page__WEBPACK_IMPORTED_MODULE_1__.ReferralPage]
    })
], ReferralPageModule);



/***/ }),

/***/ 9421:
/*!*************************************************!*\
  !*** ./src/app/pages/referral/referral.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralPage": () => (/* binding */ ReferralPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _referral_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referral.page.html?ngResource */ 7917);
/* harmony import */ var _referral_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referral.page.scss?ngResource */ 5189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ReferralPage = class ReferralPage {
    constructor() { }
    ngOnInit() {
    }
};
ReferralPage.ctorParameters = () => [];
ReferralPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-referral',
        template: _referral_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_referral_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReferralPage);



/***/ }),

/***/ 5189:
/*!**************************************************************!*\
  !*** ./src/app/pages/referral/referral.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "form {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 400px;\n  margin: 0 auto;\n  justify-content: center;\n}\n\nion-item {\n  border-radius: 20px;\n  font-size: 13px;\n  margin-block-start: 10px;\n  margin-block-end: 5px;\n}\n\n.buttons {\n  display: inline-flex;\n  justify-content: space-around;\n  margin-block-start: 20px;\n}\n\n.buttons ion-button {\n  width: 135px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoicmVmZXJyYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIwcHg7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 7917:
/*!**************************************************************!*\
  !*** ./src/app/pages/referral/referral.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Doorverwijzing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"flex-center\">\n  <form action=\"\">\n    <ion-item id=\"complaintDescription\">\n      <ion-label position=\"floating\">Klacht omschrijving:</ion-label>\n      <ion-textarea rows=\"10\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Gewenste specialist</ion-label>\n      <ion-select value=\"specialist\" multiple=\"false\">\n        <ion-select-option value=\"specialist1\">geen voorkeur</ion-select-option>\n        <ion-select-option value=\"specialist1\">specialist 1</ion-select-option>\n        <ion-select-option value=\"specialist2\">specialist 2</ion-select-option>\n        <ion-select-option value=\"specialist3\">specialist 3</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bent u al eerder voor deze klacht behandeld</ion-label>\n      <ion-select value=\"treated\" multiple=\"false\">\n        <ion-select-option value=\"treatedYes\">Ja</ion-select-option>\n        <ion-select-option value=\"treatedNo\">Nee</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bent u al eerder bij deze specialist geweest</ion-label>\n      <ion-select value=\"treated\" multiple=\"false\">\n        <ion-select-option value=\"treatedYes\">Ja</ion-select-option>\n        <ion-select-option value=\"treatedNo\">Nee</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Wilt u vooraf contact met de arts hierover</ion-label>\n      <ion-select value=\"treated\" multiple=\"false\">\n        <ion-select-option value=\"treatedYes\">Ja</ion-select-option>\n        <ion-select-option value=\"treatedNo\">Nee</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"buttons\">\n      <ion-button id=\"Submit\" (click)=\"onClick()\" expand=\"block\" shape=\"round\">\n        Inplannen\n      </ion-button>\n      <ion-button id=\"Cancel\" href=\"../home/\" expand=\"block\" shape=\"round\">\n        Annuleren\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_referral_referral_module_ts.js.map