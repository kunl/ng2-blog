webpackJsonp([3],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_module__ = __webpack_require__(691);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__about_module__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return __WEBPACK_IMPORTED_MODULE_0__about_module__["b"]; });



/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'About',
        template: __webpack_require__(707)
    })
], AboutComponent);

var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([{
                    path: '', component: AboutComponent
                }])
        ],
        declarations: [AboutComponent]
    })
], AboutModule);



/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<section class=\"about\">\r\n    <h3>Angular + nodejs + express 驱动的一个博客</h3>\r\n    <p>\r\n        热爱前端工作，关注前端最新动态。\r\n    </p>\r\n    <p>\r\n        可以通过 github 或者 <a href=\"mailto:le720@outlook.com\">le720@outlook.com</a> 联系我。\r\n    </p>\r\n</section>"

/***/ })

});