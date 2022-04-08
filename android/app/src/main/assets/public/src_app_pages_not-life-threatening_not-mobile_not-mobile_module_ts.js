"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_not-life-threatening_not-mobile_not-mobile_module_ts"],{

/***/ 10:
/*!************************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-mobile/not-mobile-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotMobilePageRoutingModule": () => (/* binding */ NotMobilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _not_mobile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-mobile.page */ 5547);




const routes = [
    {
        path: '',
        component: _not_mobile_page__WEBPACK_IMPORTED_MODULE_0__.NotMobilePage
    }
];
let NotMobilePageRoutingModule = class NotMobilePageRoutingModule {
};
NotMobilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotMobilePageRoutingModule);



/***/ }),

/***/ 3455:
/*!****************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-mobile/not-mobile.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotMobilePageModule": () => (/* binding */ NotMobilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _not_mobile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-mobile-routing.module */ 10);
/* harmony import */ var _not_mobile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-mobile.page */ 5547);







// import { HomePage } from '../../home/home.page';
let NotMobilePageModule = class NotMobilePageModule {
};
NotMobilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _not_mobile_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotMobilePageRoutingModule
        ],
        declarations: [_not_mobile_page__WEBPACK_IMPORTED_MODULE_1__.NotMobilePage]
    })
], NotMobilePageModule);



/***/ }),

/***/ 5547:
/*!**************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-mobile/not-mobile.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotMobilePage": () => (/* binding */ NotMobilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _not_mobile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-mobile.page.html?ngResource */ 9883);
/* harmony import */ var _not_mobile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-mobile.page.scss?ngResource */ 4385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NotMobilePage = class NotMobilePage {
    constructor() { }
    toggleImg() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const img = document.getElementById('googleMaps');
            // var checkForVisible = img.style.visibility == "visible";
            if (img.style.visibility === 'visible') {
                img.style.visibility = 'hidden';
            }
            else {
                img.style.visibility = 'visible';
            }
        });
    }
    ngOnInit() {
    }
};
NotMobilePage.ctorParameters = () => [];
NotMobilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-mobile',
        template: _not_mobile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_not_mobile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotMobilePage);



/***/ }),

/***/ 4385:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-mobile/not-mobile.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\nion-content ion-button {\n  font-size: 0.8rem;\n  white-space: normal;\n  margin: 10px;\n  height: 60px;\n}\nion-content p {\n  font-size: 20px;\n}\nion-content #googleMaps {\n  width: 85vw;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1tb2JpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0U7RUFDRSxlQUFBO0FBQ0o7QUFFRTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6Im5vdC1tb2JpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAjZ29vZ2xlTWFwcyB7XHJcbiAgd2lkdGg6IDg1dnc7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9883:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-mobile/not-mobile.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Niet levensbedreigend <br> Niet mobiel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Vul uw huidige adres in...</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form action=\"\" method=\"post\" id=\"huidigeplaats\">\n        <ion-item>\n          <ion-label position=\"floating\">Straatnaam&colon;</ion-label>\n          <ion-input type=\"text\" id=\"streetname\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Huisnummer&colon;</ion-label>\n          <ion-input type=\"text\" id=\"streetnumber\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Postcode&colon;</ion-label>\n          <ion-input type=\"text\" id=\"zipcode\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Plaats&colon;</ion-label>\n          <ion-input type=\"text\" id=\"city\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\" shape=\"round\" type=\"submit\">Stuur hulpdiensten naar dit adres</ion-button>\n        <p>OF</p>\n        <ion-button expand=\"block\" fill=\"clear\" shape=\"round\" (click)=\"toggleImg()\">\n          Ik ben niet op een adres, ga naar de locatie van dit apparaat.\n        </ion-button>\n      </form>\n      <div id=\"googleMaps\">\n        <img src=\"../../../../assets/img/maps-location.png\">\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-life-threatening_not-mobile_not-mobile_module_ts.js.map