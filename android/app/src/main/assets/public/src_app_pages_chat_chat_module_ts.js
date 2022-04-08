"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_chat_chat_module_ts"],{

/***/ 4322:
/*!***************************************************!*\
  !*** ./src/app/pages/chat/chat-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 8885);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 5501:
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 4322);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 8885);







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 8885:
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page.html?ngResource */ 6948);
/* harmony import */ var _chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss?ngResource */ 4772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ChatPage = class ChatPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatPage.ctorParameters = () => [];
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chat',
        template: _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatPage);



/***/ }),

/***/ 4772:
/*!******************************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n}\nion-content .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  letter-spacing: 1px;\n  height: 10vh;\n  min-height: 65px;\n}\nion-content .header .info {\n  display: flex;\n  align-items: center;\n}\nion-content .header .info ion-avatar {\n  max-width: 51px;\n  max-height: 51px;\n  margin-inline-start: 15px;\n}\nion-content .header .info .details {\n  margin-inline-start: 15px;\n  display: flex;\n  flex-direction: column;\n}\nion-content .header .info .details #username, ion-content .header .info .details #status {\n  color: darkblue;\n  opacity: 0.4;\n  margin-inline-start: 10px;\n}\nion-content .header .icoontjes {\n  display: flex;\n  opacity: 0.7;\n}\nion-content .header .icoontjes ion-icon {\n  font-size: 1.4rem;\n  margin-inline-end: 10px;\n}\nion-content .conversation {\n  border: 1px solid lightsteelblue;\n  border-radius: 15px;\n  background-color: rgba(240, 255, 255, 0.336);\n  height: 84vh;\n  padding: 5px;\n  margin: 10px;\n}\nion-content .conversation .chat-section {\n  height: calc(100% - 85px);\n  overflow: scroll;\n}\nion-content .conversation .chat-section .chat {\n  display: flex;\n  flex-direction: column;\n}\nion-content .conversation .chat-section .chat .messages {\n  display: flex;\n  flex-direction: column;\n}\nion-content .conversation .chat-section .chat .messages .message {\n  border-radius: 15px;\n  padding: 10px 15px;\n  margin-block-start: 5px;\n  margin-block-end: 5px;\n  font-size: 0.8rem;\n}\nion-content .conversation .chat-section .chat .my {\n  align-items: flex-end;\n}\nion-content .conversation .chat-section .chat .my span {\n  font-size: 0.7rem;\n  color: #a6a6a6;\n  margin-inline-start: 40px;\n}\nion-content .conversation .chat-section .chat .my .message {\n  background: rgba(29, 241, 135, 0.144);\n  position: relative;\n  max-width: 70vw;\n}\nion-content .conversation .chat-section .chat .my .message-last-mine {\n  display: flex;\n  margin-block-end: 5px;\n}\nion-content .conversation .chat-section .chat .my .message-last-mine ion-avatar {\n  max-width: 30px;\n  max-height: 30px;\n  margin-inline-start: 15px;\n  margin-block-start: 8px;\n}\nion-content .conversation .chat-section .chat .doctor {\n  align-items: flex-start;\n}\nion-content .conversation .chat-section .chat .doctor span {\n  font-size: 0.7rem;\n  color: #a6a6a6;\n  margin-inline-start: 40px;\n}\nion-content .conversation .chat-section .chat .doctor .message {\n  background: #f16b1d25;\n  position: relative;\n  max-width: 70vw;\n}\nion-content .conversation .chat-section .chat .doctor .message-last-doc {\n  display: flex;\n  margin-block-start: 5px;\n}\nion-content .conversation .chat-section .chat .doctor .message-last-doc:before {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  bottom: 0;\n  left: -7px;\n  height: 20px;\n  background: #eee;\n  border-bottom-right-radius: 15px;\n}\nion-content .conversation .chat-section .chat .doctor .message-last-doc::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: -10px;\n  width: 10px;\n  height: 20px;\n  background: #fff;\n  border-top-right-radius: 10px;\n}\nion-content .conversation .chat-section .chat .doctor .message-last-doc ion-avatar {\n  max-width: 30px;\n  max-height: 30px;\n  margin-inline-end: 10px;\n  margin-block-start: 8px;\n}\nion-content .conversation .message-input {\n  display: flex;\n  align-items: center;\n  width: 85vw;\n  justify-content: space-between;\n  position: fixed;\n  bottom: 30px;\n  left: 50%;\n  margin-left: -43vw;\n}\nion-content .conversation .message-input ion-input {\n  border: 1px solid gray;\n  border-radius: 25px;\n  height: 48px;\n  --padding-inline-start: 20px;\n}\nion-content .conversation .message-input .sendMessage {\n  margin-inline-start: 20px;\n  background: #f16b1d25;\n  color: #fff;\n  padding: 10px 12px 6px 14px;\n  font-size: 1.3rem;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBQ007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNSO0FBQ007RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQVE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRVY7QUFFSTtFQUNFLGFBQUE7RUFFQSxZQUFBO0FBRE47QUFFTTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUtFO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEo7QUFLSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQUtNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSFI7QUFLUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUhWO0FBSVU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRlo7QUFLUTtFQUNFLHFCQUFBO0FBSFY7QUFJVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRlo7QUFJVTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRlo7QUFJVTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQUZaO0FBR1k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBRGQ7QUFNUTtFQUNFLHVCQUFBO0FBSlY7QUFLVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBSFo7QUFLVTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSFo7QUFLVTtFQXdCRSxhQUFBO0VBQ0EsdUJBQUE7QUExQlo7QUFHWTtFQUNNLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBRGxCO0FBR2dCO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBRGxCO0FBTVk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBSmQ7QUFVSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBUk47QUFTTTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFQUjtBQVNNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQUiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBpb24tYXZhdGFye1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgbWluLWhlaWdodDogNjVweDtcclxuICAgIFxyXG4gICAgLmluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUxcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTFweDtcclxuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5kZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICN1c2VybmFtZSwgI3N0YXR1c3tcclxuICAgICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaWNvb250amVze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnZlcnNhdGlvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjU1LCAyNTUsIDAuMzM2KTtcclxuICAgIGhlaWdodDogODR2aDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAuY2hhdC1zZWN0aW9uIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4NXB4KTtcclxuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgICAgIC5jaGF0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIFxyXG4gICAgICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgICAgICAubXl7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNhNmE2YTY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjksIDI0MSwgMTM1LCAwLjE0NCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lc3NhZ2UtbGFzdC1taW5le1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiA1cHg7XHJcbiAgICAgICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIC5kb2N0b3J7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2E2YTZhNjtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxNmIxZDI1O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZXNzYWdlLWxhc3QtZG9je1xyXG5cclxuICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IC03cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogNXB4O1xyXG4gICAgICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1pbnB1dHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDg1dnc7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC00M3Z3O1xyXG4gICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAtLXBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zZW5kTWVzc2FnZXtcclxuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMTZiMWQyNTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHggNnB4IDE0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBcclxufSJdfQ== */";

/***/ }),

/***/ 6948:
/*!******************************************************!*\
  !*** ./src/app/pages/chat/chat.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Chat</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-card>\n    <ion-card-header class=\"header ion-padding\">\n      <div class=\"info\">\n        <ion-icon name=\"chevron-back\" routerLink=\"../home\"></ion-icon>\n        <ion-avatar>\n          <img src=\"https://i.pravatar.cc/243\" />\n        </ion-avatar>\n        <span class=\"details\">\n          <ion-card-title id=\"username\">Ik, de zieke patient</ion-card-title>\n          <ion-card-subtitle id=\"status\">online</ion-card-subtitle>\n        </span>\n      </div>\n      <div class=\"icoontjes\">\n        <ion-icon name=\"videocam-outline\"></ion-icon>\n        <ion-icon name=\"call-outline\"></ion-icon>\n      </div>\n    </ion-card-header>\n    <ion-card-content class=\"conversation ion-padding\">\n      <div class=\"chat-section\" id=\"chat\">\n        <div class=\"chat\">\n          <div class=\"my messages\">\n            <div class=\"message\">\n              Dokter, als ik met mijn vinger hier druk doet het zeer\n            </div>\n            <div class=\"message\">\n              en als ik met mijn vinger daar druk doet het ook zeer...\n            </div>\n            <div class=\"message last\">\n              Overal doet het zeer\n            </div> \n            <span>\n              <ion-icon name=\"checkmark-done\"></ion-icon> 09:44am\n            </span>\n          </div>\n          <div class=\"doctor messages\">\n            <div class=\"message doc\">\n              Ow ik zie het al\n            </div>\n            <div class=\"message-last-doc\">\n              <ion-avatar>\n                <img src=\"https://i.pravatar.cc/242\" />\n              </ion-avatar>\n              <div class=\"message last\">\n                U heeft een gebroken vinger!\n              </div>\n            </div>\n            <span>\n              <ion-icon name=\"checkmark-done\"></ion-icon> 09:48am\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"message-input\">\n        <ion-input placeholder=\"Type your message here...\"></ion-input>\n        <div class=\"sendMessage\">\n          <ion-icon name=\"send-sharp\"></ion-icon>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chat_chat_module_ts.js.map