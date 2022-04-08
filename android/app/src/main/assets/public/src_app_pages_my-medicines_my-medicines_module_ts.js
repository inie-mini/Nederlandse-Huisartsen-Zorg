"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-medicines_my-medicines_module_ts"],{

/***/ 915:
/*!*******************************************************************!*\
  !*** ./src/app/pages/my-medicines/my-medicines-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMedicinesPageRoutingModule": () => (/* binding */ MyMedicinesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _my_medicines_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-medicines.page */ 2252);




const routes = [
    {
        path: '',
        component: _my_medicines_page__WEBPACK_IMPORTED_MODULE_0__.MyMedicinesPage
    }
];
let MyMedicinesPageRoutingModule = class MyMedicinesPageRoutingModule {
};
MyMedicinesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyMedicinesPageRoutingModule);



/***/ }),

/***/ 800:
/*!***********************************************************!*\
  !*** ./src/app/pages/my-medicines/my-medicines.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMedicinesPageModule": () => (/* binding */ MyMedicinesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _my_medicines_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-medicines-routing.module */ 915);
/* harmony import */ var _my_medicines_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-medicines.page */ 2252);







let MyMedicinesPageModule = class MyMedicinesPageModule {
};
MyMedicinesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_medicines_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyMedicinesPageRoutingModule
        ],
        declarations: [_my_medicines_page__WEBPACK_IMPORTED_MODULE_1__.MyMedicinesPage]
    })
], MyMedicinesPageModule);



/***/ }),

/***/ 2252:
/*!*********************************************************!*\
  !*** ./src/app/pages/my-medicines/my-medicines.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMedicinesPage": () => (/* binding */ MyMedicinesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_medicines_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-medicines.page.html?ngResource */ 9336);
/* harmony import */ var _my_medicines_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-medicines.page.scss?ngResource */ 1155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MyMedicinesPage = class MyMedicinesPage {
    constructor() { }
    ngOnInit() {
    }
};
MyMedicinesPage.ctorParameters = () => [];
MyMedicinesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-my-medicines',
        template: _my_medicines_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_medicines_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyMedicinesPage);



/***/ }),

/***/ 1155:
/*!**********************************************************************!*\
  !*** ./src/app/pages/my-medicines/my-medicines.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1tZWRpY2luZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9336:
/*!**********************************************************************!*\
  !*** ./src/app/pages/my-medicines/my-medicines.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mijn medicijnen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-medicines_my-medicines_module_ts.js.map