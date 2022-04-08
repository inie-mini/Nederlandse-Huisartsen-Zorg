"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_consult_consult_module_ts"],{

/***/ 4016:
/*!*********************************************************!*\
  !*** ./src/app/pages/consult/consult-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultPageRoutingModule": () => (/* binding */ ConsultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _consult_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consult.page */ 5938);




const routes = [
    {
        path: '',
        component: _consult_page__WEBPACK_IMPORTED_MODULE_0__.ConsultPage
    }
];
let ConsultPageRoutingModule = class ConsultPageRoutingModule {
};
ConsultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConsultPageRoutingModule);



/***/ }),

/***/ 691:
/*!*************************************************!*\
  !*** ./src/app/pages/consult/consult.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultPageModule": () => (/* binding */ ConsultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _consult_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consult-routing.module */ 4016);
/* harmony import */ var _consult_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consult.page */ 5938);







let ConsultPageModule = class ConsultPageModule {
};
ConsultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _consult_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultPageRoutingModule
        ],
        declarations: [_consult_page__WEBPACK_IMPORTED_MODULE_1__.ConsultPage]
    })
], ConsultPageModule);



/***/ }),

/***/ 5938:
/*!***********************************************!*\
  !*** ./src/app/pages/consult/consult.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultPage": () => (/* binding */ ConsultPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _consult_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consult.page.html?ngResource */ 4392);
/* harmony import */ var _consult_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consult.page.scss?ngResource */ 8472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ConsultPage = class ConsultPage {
    constructor() { }
    ngOnInit() {
    }
};
ConsultPage.ctorParameters = () => [];
ConsultPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-consult',
        template: _consult_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_consult_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConsultPage);



/***/ }),

/***/ 8472:
/*!************************************************************!*\
  !*** ./src/app/pages/consult/consult.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".selection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: auto;\n}\n.selection ion-label {\n  width: 80vw;\n  margin: 20px;\n}\n.selection ion-datetime {\n  border-radius: 20px;\n  margin-block-end: 10px;\n}\n.selection #consultLength {\n  border-radius: 20px;\n  width: 350px;\n  margin: 10px;\n}\n.selection #complaintDescription {\n  border-radius: 20px;\n  width: 350px;\n  margin: 10px;\n}\n.selection #complaintDescription ion-textarea {\n  height: auto;\n}\n.selection .buttons {\n  display: flex;\n  flex-direction: row;\n  margin-block-end: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKO0FBREk7RUFDRSxZQUFBO0FBR047QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUoiLCJmaWxlIjoiY29uc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBpb24tbGFiZWx7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gIH1cclxuICBpb24tZGF0ZXRpbWV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTBweDtcclxuICB9XHJcbiAgI2NvbnN1bHRMZW5ndGh7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICAjY29tcGxhaW50RGVzY3JpcHRpb257XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaW9uLXRleHRhcmVhe1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idXR0b25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAzNXB4O1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 4392:
/*!************************************************************!*\
  !*** ./src/app/pages/consult/consult.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Consultaanvraag</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"flex-center\">\n    <div class=\"selection\">\n      <ion-label>Kies de datum, dan tijd en geef dan aan of u een lange of korte consult wilt.</ion-label>\n      <ion-datetime \n        dayValues=1,2,4,5,8,12,17,18,19 \n        hourValues=\"8,9,10,11,13,14,15,16\" \n        minuteValues=\"0,15,30,45\" \n        min=\"2022-04-17\" max=\"2023-12-31\">\n        <div slot=\"time-label\">Kies uw gewenste tijd</div>\n      </ion-datetime>\n      <ion-item id=\"consultLength\">\n        <ion-label>Duur van het consult:</ion-label>\n        <ion-select value=\"lengthConsult\" multiple=\"false\">\n          <ion-select-option value=\"shortConsult\">Kort &#40;15 min&#41;</ion-select-option>\n          <ion-select-option value=\"longConsult\">Lang &#40;30 min&#41;</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item id=\"complaintDescription\">\n        <ion-label position=\"floating\">Klacht omschrijving:</ion-label>\n          <ion-textarea rows=\"10\"></ion-textarea>\n      </ion-item>\n      <div class=\"buttons\">\n        <ion-button id=\"Submit\" (click)=\"onClick()\" expand=\"block\" shape=\"round\">\n          Inplannen\n        </ion-button>\n        <ion-button id=\"Cancel\" href=\"../home/\" expand=\"block\" shape=\"round\">\n          Annuleren\n        </ion-button>\n      </div>\n    </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_consult_consult_module_ts.js.map