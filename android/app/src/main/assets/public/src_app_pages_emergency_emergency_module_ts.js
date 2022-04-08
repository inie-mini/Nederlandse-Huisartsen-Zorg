"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_emergency_emergency_module_ts"],{

/***/ 9230:
/*!*************************************************************!*\
  !*** ./src/app/pages/emergency/emergency-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyPageRoutingModule": () => (/* binding */ EmergencyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _emergency_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency.page */ 2674);




const routes = [
    {
        path: '',
        component: _emergency_page__WEBPACK_IMPORTED_MODULE_0__.EmergencyPage
    }
];
let EmergencyPageRoutingModule = class EmergencyPageRoutingModule {
};
EmergencyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmergencyPageRoutingModule);



/***/ }),

/***/ 5252:
/*!*****************************************************!*\
  !*** ./src/app/pages/emergency/emergency.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyPageModule": () => (/* binding */ EmergencyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _emergency_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency-routing.module */ 9230);
/* harmony import */ var _emergency_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency.page */ 2674);







let EmergencyPageModule = class EmergencyPageModule {
};
EmergencyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _emergency_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmergencyPageRoutingModule
        ],
        declarations: [_emergency_page__WEBPACK_IMPORTED_MODULE_1__.EmergencyPage]
    })
], EmergencyPageModule);



/***/ }),

/***/ 2674:
/*!***************************************************!*\
  !*** ./src/app/pages/emergency/emergency.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyPage": () => (/* binding */ EmergencyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _emergency_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency.page.html?ngResource */ 7393);
/* harmony import */ var _emergency_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency.page.scss?ngResource */ 7080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _emergency2_emergency2_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emergency2/emergency2.page */ 9721);






let EmergencyPage = class EmergencyPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    openTransparentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _emergency2_emergency2_page__WEBPACK_IMPORTED_MODULE_2__.Emergency2Page,
                cssClass: 'emergency2-modal'
            });
            yield modal.present();
        });
    }
    ngOnInit() {
    }
};
EmergencyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
EmergencyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-emergency',
        template: _emergency_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_emergency_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmergencyPage);



/***/ }),

/***/ 7080:
/*!****************************************************************!*\
  !*** ./src/app/pages/emergency/emergency.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtZXJnZW5jeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiZW1lcmdlbmN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgaGVpZ2h0OiAxMDBweFxyXG59Il19 */";

/***/ }),

/***/ 7393:
/*!****************************************************************!*\
  !*** ./src/app/pages/emergency/emergency.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-center\">\n    <ion-button (click)=\"openTransparentModal()\" expand=\"full\" color=\"danger\" shape=\"round\">Alarmeer huisarts</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_emergency_emergency_module_ts.js.map