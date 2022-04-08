"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_not-life-threatening_modal-page_modal-page_module_ts"],{

/***/ 6558:
/*!************************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/modal-page/modal-page-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPagePageRoutingModule": () => (/* binding */ ModalPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modal_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-page.page */ 9997);




const routes = [
    {
        path: '',
        component: _modal_page_page__WEBPACK_IMPORTED_MODULE_0__.ModalPagePage
    }
];
let ModalPagePageRoutingModule = class ModalPagePageRoutingModule {
};
ModalPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPagePageRoutingModule);



/***/ }),

/***/ 6370:
/*!****************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/modal-page/modal-page.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPagePageModule": () => (/* binding */ ModalPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modal_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-page-routing.module */ 6558);
/* harmony import */ var _modal_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-page.page */ 9997);







let ModalPagePageModule = class ModalPagePageModule {
};
ModalPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPagePageRoutingModule
        ],
        declarations: [_modal_page_page__WEBPACK_IMPORTED_MODULE_1__.ModalPagePage]
    })
], ModalPagePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-life-threatening_modal-page_modal-page_module_ts.js.map