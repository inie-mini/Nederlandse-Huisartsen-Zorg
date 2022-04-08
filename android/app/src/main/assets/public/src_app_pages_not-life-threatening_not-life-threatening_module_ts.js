"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_not-life-threatening_not-life-threatening_module_ts"],{

/***/ 9997:
/*!**************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/modal-page/modal-page.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPagePage": () => (/* binding */ ModalPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-page.page.html?ngResource */ 8733);
/* harmony import */ var _modal_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-page.page.scss?ngResource */ 8916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ModalPagePage = class ModalPagePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
ModalPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ModalPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-page',
        template: _modal_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalPagePage);



/***/ }),

/***/ 7113:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-life-threatening-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotLifeThreateningPageRoutingModule": () => (/* binding */ NotLifeThreateningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _not_life_threatening_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-life-threatening.page */ 3857);




const routes = [
    {
        path: '',
        component: _not_life_threatening_page__WEBPACK_IMPORTED_MODULE_0__.NotLifeThreateningPage
    },
    {
        path: 'modal-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_not-life-threatening_modal-page_modal-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modal-page/modal-page.module */ 6370)).then(m => m.ModalPagePageModule)
    },
    {
        path: 'not-mobile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_not-life-threatening_not-mobile_not-mobile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./not-mobile/not-mobile.module */ 3455)).then(m => m.NotMobilePageModule)
    }
];
let NotLifeThreateningPageRoutingModule = class NotLifeThreateningPageRoutingModule {
};
NotLifeThreateningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotLifeThreateningPageRoutingModule);



/***/ }),

/***/ 1839:
/*!***************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-life-threatening.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotLifeThreateningPageModule": () => (/* binding */ NotLifeThreateningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _not_life_threatening_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-life-threatening-routing.module */ 7113);
/* harmony import */ var _not_life_threatening_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-life-threatening.page */ 3857);







let NotLifeThreateningPageModule = class NotLifeThreateningPageModule {
};
NotLifeThreateningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _not_life_threatening_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotLifeThreateningPageRoutingModule
        ],
        declarations: [_not_life_threatening_page__WEBPACK_IMPORTED_MODULE_1__.NotLifeThreateningPage]
    })
], NotLifeThreateningPageModule);



/***/ }),

/***/ 3857:
/*!*************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-life-threatening.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotLifeThreateningPage": () => (/* binding */ NotLifeThreateningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _not_life_threatening_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-life-threatening.page.html?ngResource */ 3846);
/* harmony import */ var _not_life_threatening_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-life-threatening.page.scss?ngResource */ 6409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _not_life_threatening_modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../not-life-threatening/modal-page/modal-page.page */ 9997);






let NotLifeThreateningPage = class NotLifeThreateningPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    openTransparentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _not_life_threatening_modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_2__.ModalPagePage,
                cssClass: 'transparent-modal'
            });
            yield modal.present();
        });
    }
    ngOnInit() {
    }
};
NotLifeThreateningPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
NotLifeThreateningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-not-life-threatening',
        template: _not_life_threatening_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_not_life_threatening_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotLifeThreateningPage);



/***/ }),

/***/ 8916:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/modal-page/modal-page.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoibW9kYWwtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 6409:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-life-threatening.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "ion-list {\n  margin: 15px;\n}\n\n#mobiliteit {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-block-start: 20px;\n}\n\n#mobiliteit ion-button {\n  width: 85vw;\n  align-items: center;\n  font-size: 12px;\n  height: 50px;\n  white-space: normal;\n}\n\n.selections {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1saWZlLXRocmVhdGVuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDRSxZQUFBO0FBbkJGOztBQXNCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFuQkY7O0FBb0JFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWxCSjs7QUF5QkE7RUFDRSxlQUFBO0FBdEJGIiwiZmlsZSI6Im5vdC1saWZlLXRocmVhdGVuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1zZWxlY3QgPiBpb24tc2VsZWN0LW9wdGlvbntcclxuLy8gICBjb2xvcjogcmVkO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gfVxyXG4vLyBpb24tYnV0dG9ueyBcclxuLy8gfVxyXG4vLyAjY2FyZC13YXJuaW5nIHtcclxuLy8gICBiYWNrZ3JvdW5kOiB3YXJuaW5nO1xyXG4vLyAgIGNvbG9yOiAjZmYzODM4O1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gfVxyXG4vLyAjbW9iaWxpdGVpdCBpb24tYnV0dG9ue1xyXG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICB3aWR0aDogNzV2dztcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgbWFyZ2luOiA1cHg7XHJcbi8vICAgbGluZS1oZWlnaHQ6MjtcclxuLy8gfVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4jbW9iaWxpdGVpdHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIwcHg7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICAvLyBpb24tbGFiZWwge1xyXG4gIC8vIGZvbnQtc2l6ZTpsYXJnZTtcclxuICAvLyB9XHJcbn1cclxuXHJcbi5zZWxlY3Rpb25ze1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */";

/***/ }),

/***/ 8733:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/modal-page/modal-page.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>modalPage</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"flex-center\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Dichtsbijzijnde huisartsenpost:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <address>\n          Ga naar deze medische post.<br>\n          Men is op de hoogte van uw komst.<br><br>\n          Huisartsenpost de Huisarts<br>\n          Dokterslaan 3<br>\n          1234 HA &hyphen; Artsenstad\n        </address>\n        <ion-footer>\n          <ion-toolbar>\n            <ion-button (click)=\"dismiss()\" fill=\"clear\" color=\"dark\">\n              <ion-icon slot=\"icon-only\" name=\"close-circle\"></ion-icon>\n            </ion-button>\n          </ion-toolbar>\n        </ion-footer>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 3846:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/not-life-threatening/not-life-threatening.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  \n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Spoedeisende hulp\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label class=\"selections\">&lpar;Vermoedelijk&rpar; letsel</ion-label>\n      <ion-select placeholder=\"Maak een keuze....\">\n        <ion-select-option value=\"botbreuk\">Botbreuk of ernstige verstuiking&sol;kneuzing</ion-select-option>\n        <ion-select-option value=\"bloeding\">Bloeding</ion-select-option>\n        <ion-select-option value=\"val\">Erstige val</ion-select-option>\n        <ion-select-option value=\"hoofdletsel\">Hoofdletsel</ion-select-option>\n        <ion-select-option value=\"verbranding\">Verbranding</ion-select-option>\n        <ion-select-option value=\"overdosis-vergiftiging\">Overdosis of vergiftiging</ion-select-option>\n        <ion-select-option value=\"bewusteloosheid\">Bewusteloosheid</ion-select-option>\n        <ion-select-option value=\"hersenletsel\">Hersenletsel</ion-select-option>\n        <ion-select-option value=\"onbekend\">Onbekend en niet te achterhalen</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class=\"selections\">\n      <ion-label>Het slachtoffer heeft alcohol en&sol;of drugs gebruikt</ion-label>\n      <ion-select class=\"custom-options\" multiple=\"true\">\n        <ion-select-option value=\"drugs\">Drugs</ion-select-option>\n        <ion-select-option value=\"alcohol\">Alcohol</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div id=\"mobiliteit\">\n      <ion-button (click)=\"openTransparentModal()\" expand=\"full\" color=\"secondary\" shape=\"round\">\n        Het slachtoffer is mobiel en kan vervoer regelen..\n      </ion-button>\n      <ion-button href=\"not-life-threatening/not-mobile\">Het slachtoffer is niet mobiel en&sol;of kan geen vervoer regelen.</ion-button>\n    </div>\n  </ion-list>\n  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-life-threatening_not-life-threatening_module_ts.js.map