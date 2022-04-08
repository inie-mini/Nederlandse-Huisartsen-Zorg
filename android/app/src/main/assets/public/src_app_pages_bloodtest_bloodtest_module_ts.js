"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_bloodtest_bloodtest_module_ts"],{

/***/ 8508:
/*!*************************************************************!*\
  !*** ./src/app/pages/bloodtest/bloodtest-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodtestPageRoutingModule": () => (/* binding */ BloodtestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _bloodtest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloodtest.page */ 5440);




const routes = [
    {
        path: '',
        component: _bloodtest_page__WEBPACK_IMPORTED_MODULE_0__.BloodtestPage
    }
];
let BloodtestPageRoutingModule = class BloodtestPageRoutingModule {
};
BloodtestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BloodtestPageRoutingModule);



/***/ }),

/***/ 2563:
/*!*****************************************************!*\
  !*** ./src/app/pages/bloodtest/bloodtest.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodtestPageModule": () => (/* binding */ BloodtestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _bloodtest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloodtest-routing.module */ 8508);
/* harmony import */ var _bloodtest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloodtest.page */ 5440);







let BloodtestPageModule = class BloodtestPageModule {
};
BloodtestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bloodtest_routing_module__WEBPACK_IMPORTED_MODULE_0__.BloodtestPageRoutingModule
        ],
        declarations: [_bloodtest_page__WEBPACK_IMPORTED_MODULE_1__.BloodtestPage]
    })
], BloodtestPageModule);



/***/ }),

/***/ 5440:
/*!***************************************************!*\
  !*** ./src/app/pages/bloodtest/bloodtest.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodtestPage": () => (/* binding */ BloodtestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _bloodtest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloodtest.page.html?ngResource */ 4936);
/* harmony import */ var _bloodtest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloodtest.page.scss?ngResource */ 6554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let BloodtestPage = class BloodtestPage {
    constructor() { }
    ngOnInit() {
    }
};
BloodtestPage.ctorParameters = () => [];
BloodtestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bloodtest',
        template: _bloodtest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bloodtest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BloodtestPage);



/***/ }),

/***/ 6554:
/*!****************************************************************!*\
  !*** ./src/app/pages/bloodtest/bloodtest.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "form {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 400px;\n  margin: 0 auto;\n  justify-content: center;\n}\n\nion-item {\n  border-radius: 20px;\n  font-size: 13px;\n  margin-block-start: 10px;\n  margin-block-end: 5px;\n}\n\n.buttons {\n  display: inline-flex;\n  justify-content: space-around;\n  margin-block-start: 20px;\n}\n\n.buttons ion-button {\n  width: 135px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb29kdGVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUFFO0VBQ0UsWUFBQTtBQUVKIiwiZmlsZSI6ImJsb29kdGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMTBweDtcclxuICBtYXJnaW4tYmxvY2stZW5kOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMjBweDtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 4936:
/*!****************************************************************!*\
  !*** ./src/app/pages/bloodtest/bloodtest.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bloedonderzoek</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"flex-center\">\n  <form action=\"\">\n    <ion-item id=\"purpose-bloodwork\">\n      <ion-label position=\"floating\">Klacht omschrijving:</ion-label>\n      <ion-textarea rows=\"10\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Onderzoeken op</ion-label>\n      <ion-select value=\"bloodwork\" multiple=\"true\">\n        <ion-select-option value=\"treatedYes\">Allergie&euml;n</ion-select-option>\n        <ion-select-option value=\"treatedNo\">Bloedarmoede</ion-select-option>\n        <ion-select-option value=\"treatedYes\">Blauw bloed (adel)</ion-select-option>\n        <ion-select-option value=\"treatedNo\">Toekomst voorspelling</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bent u hier al eerder op onderzocht</ion-label>\n      <ion-select value=\"researched-before\" multiple=\"false\">\n        <ion-select-option value=\"researched-before-Yes\">Ja</ion-select-option>\n        <ion-select-option value=\"researched-before-No\">Nee</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bent u hier al eerder voor bij de huisarts geweest</ion-label>\n      <ion-select value=\"visited-general-practitioner\" multiple=\"false\">\n        <ion-select-option value=\"visited-general-practitioner-Yes\">Ja</ion-select-option>\n        <ion-select-option value=\"visited-general-practitioner-No\">Nee</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Wilt u vooraf contact met de arts hierover</ion-label>\n      <ion-select value=\"contact\" multiple=\"false\">\n        <ion-select-option value=\"contactYes\">Ja</ion-select-option>\n        <ion-select-option value=\"contactNo\">Nee</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"buttons\">\n      <ion-button id=\"Submit\" (click)=\"onClick()\" expand=\"block\" shape=\"round\">\n        Submit\n      </ion-button>\n      <ion-button id=\"Cancel\" href=\"../home/\" expand=\"block\" shape=\"round\">\n        Annuleren\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bloodtest_bloodtest_module_ts.js.map