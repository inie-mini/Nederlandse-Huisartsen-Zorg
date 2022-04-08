"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_emergency2_emergency2_module_ts"],{

/***/ 8211:
/*!***************************************************************!*\
  !*** ./src/app/pages/emergency2/emergency2-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emergency2PageRoutingModule": () => (/* binding */ Emergency2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _emergency2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency2.page */ 9721);




const routes = [
    {
        path: '',
        component: _emergency2_page__WEBPACK_IMPORTED_MODULE_0__.Emergency2Page
    }
];
let Emergency2PageRoutingModule = class Emergency2PageRoutingModule {
};
Emergency2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Emergency2PageRoutingModule);



/***/ }),

/***/ 727:
/*!*******************************************************!*\
  !*** ./src/app/pages/emergency2/emergency2.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emergency2PageModule": () => (/* binding */ Emergency2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _emergency2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency2-routing.module */ 8211);
/* harmony import */ var _emergency2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency2.page */ 9721);







let Emergency2PageModule = class Emergency2PageModule {
};
Emergency2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _emergency2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Emergency2PageRoutingModule
        ],
        declarations: [_emergency2_page__WEBPACK_IMPORTED_MODULE_1__.Emergency2Page]
    })
], Emergency2PageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_emergency2_emergency2_module_ts.js.map