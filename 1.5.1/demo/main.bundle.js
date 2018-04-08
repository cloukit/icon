webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "<demo></demo>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("./src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_service__ = __webpack_require__("./src/components/icon.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


var CloukitIconComponent = /** @class */ (function () {
    function CloukitIconComponent(iconService) {
        this.iconService = iconService;
        this.size = 'small';
        this.combine = 'none';
        this.foregroundIconColor = '#fff';
        this.foregroundIconTransform = '';
        this.backgroundIconColor = '#000';
        this.backgroundIconTransform = '';
    }
    CloukitIconComponent.prototype.ngOnInit = function () {
        this._foregroundIconPath = this.iconService.getIconPathD(this.foregroundIcon);
        this._backgroundIconPath = this.iconService.getIconPathD(this.backgroundIcon);
        this._iconWidth = this.iconService.getIconSize(this.size);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitIconComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitIconComponent.prototype, "combine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitIconComponent.prototype, "foregroundIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitIconComponent.prototype, "foregroundIconColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitIconComponent.prototype, "foregroundIconTransform", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitIconComponent.prototype, "backgroundIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitIconComponent.prototype, "backgroundIconColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CloukitIconComponent.prototype, "backgroundIconTransform", void 0);
    CloukitIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-icon',
            template: "\n<svg [attr.width]=\"_iconWidth\" viewBox=\"0 0 512 512\" *ngIf=\"combine === 'mask'\">\n  <defs>\n    <mask id=\"subtract\">\n      <rect width=\"100%\" height=\"100%\" fill=\"white\"/>\n      <path\n        [attr.d]=\"_foregroundIconPath\"\n        [attr.transform]=\"foregroundIconTransform\"\n        fill=\"black\"\n      />\n    </mask>\n  </defs>\n  <path\n    [attr.fill]=\"backgroundIconColor\"\n    [attr.d]=\"_backgroundIconPath\"\n    [attr.transform]=\"backgroundIconTransform\"\n    mask=\"url(#subtract)\"\n  />\n</svg>\n<svg [attr.width]=\"_iconWidth\" viewBox=\"0 0 512 512\" *ngIf=\"combine === 'stack'\">\n  <path\n    [attr.fill]=\"backgroundIconColor\"\n    [attr.d]=\"_backgroundIconPath\"\n    [attr.transform]=\"backgroundIconTransform\"\n  />\n  <path\n    [attr.fill]=\"foregroundIconColor\"\n    [attr.d]=\"_foregroundIconPath\"\n    [attr.transform]=\"foregroundIconTransform\"\n  />\n</svg>\n<svg [attr.width]=\"_iconWidth\" viewBox=\"0 0 512 512\" *ngIf=\"combine === 'none'\">\n  <path\n    [attr.fill]=\"foregroundIconColor\"\n    [attr.d]=\"_foregroundIconPath\"\n    [attr.transform]=\"foregroundIconTransform\"\n  />\n</svg>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__icon_service__["a" /* CloukitIconService */]])
    ], CloukitIconComponent);
    return CloukitIconComponent;
}());



/***/ }),

/***/ "./src/components/icon.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitIconModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_component__ = __webpack_require__("./src/components/icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_service__ = __webpack_require__("./src/components/icon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_paths__ = __webpack_require__("./src/components/icon.paths.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */





var CloukitIconModule = /** @class */ (function () {
    function CloukitIconModule(iconService) {
        this.iconService = iconService;
        //
        // Register default icons with their names.
        // If already another icon is registered, it will not be overridden.
        //
        var iconNames = Object.keys(__WEBPACK_IMPORTED_MODULE_4__icon_paths__["a" /* CloukitIcons */]);
        for (var i = 0; i < iconNames.length; i++) {
            if (this.iconService.getIconPathD(iconNames[i]) === undefined) {
                this.iconService.registerIcon(iconNames[i], __WEBPACK_IMPORTED_MODULE_4__icon_paths__["a" /* CloukitIcons */][iconNames[i]]);
            }
        }
        //
        // Register default icon sizes
        //
        var defaultIconSizes = {
            small: 24,
            medium: 32,
            large: 48,
            xlarge: 64,
        };
        var sizeKeys = Object.keys(defaultIconSizes);
        for (var i = 0; i < sizeKeys.length; i++) {
            if (this.iconService.getIconSize(sizeKeys[i]) === undefined) {
                this.iconService.registerIconSize(sizeKeys[i], defaultIconSizes[sizeKeys[i]]);
            }
        }
    }
    CloukitIconModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__icon_component__["a" /* CloukitIconComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__icon_component__["a" /* CloukitIconComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__icon_service__["a" /* CloukitIconService */]],
            entryComponents: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__icon_service__["a" /* CloukitIconService */]])
    ], CloukitIconModule);
    return CloukitIconModule;
}());



/***/ }),

/***/ "./src/components/icon.paths.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitIcons; });
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
/**
 * An icon consists of exactly one SVG path inside a 512x512 pixel viewbox.
 * If you want to inject your own icons keep that in mind.
 * Draw your icons in any way and use "combine-path" or "convert to outlines" tools
 * to create a single path.
 *
 * Your icons svg code should look like this:
 *
 * ```html
 * <svg viewBox="0 0 512 512">
 *     <path d="M23233....." ></path>
 * </svg>
 * ```
 * We just need the value of the path "d" attribute.
 *
 */
var CloukitIcons = /** @class */ (function () {
    function CloukitIcons() {
    }
    CloukitIcons.triangle = 'M221.946 35.544c18.9-33.09 49.58-33.114 68.526-.046L502.84 406.132C521.783 439.196 506.252 466 468.132 466H45.08c-38.113 0-53.69-26.822-34.787-59.914L221.946 35.544z';
    CloukitIcons.squareRounded = 'M95 0h322c52.467 0 95 42.533 95 95v322c0 52.468-42.533 95-95 95H95c-52.468 0-95-42.532-95-95V95C0 42.533 42.532 0 95 0z';
    CloukitIcons.circle = 'M256 0c141.385 0 256 114.615 256 256 0 141.386-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0z';
    CloukitIcons.check = 'M386.76 136L203.024 316.723l-78.016-76.74L95 269.502l78.02 76.74 30.005 29.513 213.745-210.24';
    CloukitIcons.cross = 'M384.676 161.08l-31.6-31.08-96.738 95.153L159.598 130 128 161.08l96.74 95.152L128 351.385l31.6 31.08 96.738-95.155 96.74 95.153 31.597-31.08-96.74-95.15';
    CloukitIcons.exclamation = 'M227.94 114.457h55.54v202.285h-55.54V114.457zm0 231.438h55.54v54.824h-55.54v-54.825z';
    CloukitIcons.info = 'M227.94 400.72h55.54V228.433h-55.54V400.72zm0-202.44h55.54v-54.823h-55.54v54.824z';
    CloukitIcons.chevronUp = 'M393.638 298.14L256.223 173 119 298.14l35.836 41.243 101.483-92.66 101.52 92.66';
    CloukitIcons.chevronDown = 'M393.638 214.243l-137.415 125.14L119 214.243 154.836 173l101.483 92.66L357.84 173';
    CloukitIcons.chevronRight = 'M214.243 119l125.14 137.416-125.14 137.223L173 357.8l92.66-101.482L173 154.8';
    CloukitIcons.chevronLeft = 'M298.14 119L173 256.416 298.14 393.64l41.243-35.838-92.66-101.482 92.66-101.52';
    CloukitIcons.arrowUp = 'M393.416 238.402L256 113.262l-137.223 125.14 35.837 41.243 73.327-71.188V400.72h55.54V208.456l74.137 71.188';
    CloukitIcons.arrowDown = 'M393.416 275.578L256 400.718l-137.223-125.14 35.837-41.243 73.327 71.188V113.26h55.54v192.263l74.137-71.188';
    CloukitIcons.arrowRight = 'M274.684 119.67l125.14 137.416-125.14 137.223-41.243-35.838 71.19-73.327H112.366v-55.54H304.63l-71.19-74.136';
    CloukitIcons.arrowLeft = 'M237.508 119.67l-125.14 137.416 125.14 137.223 41.243-35.838-71.187-73.327h192.262v-55.54H207.563l71.188-74.136';
    CloukitIcons.anonym = 'M45.748 2.757c46.774-12.182 118.827 27.32 188.94 26.76 76.893-.618 152.053-40.12 203.352-26.76 47.19 12.29 46.804 55.226 25.983 96.47-1.068 2.117-1.068 106.958 0 314.52H419.92c3.052-174.157 3.052-259.86 0-257.113C400.23 174.357 378.4 186.2 359.43 186.2c-69.266 0-59.762-52.685-124.745-52.685-64.982 0-55.347 52.685-131.767 52.685C26.5 186.2-52.325 28.3 45.748 2.757zM117.5 131c35.622 0 64.5-19.028 64.5-42.5S153.122 46 117.5 46 53 65.028 53 88.5 81.878 131 117.5 131zm236 0c35.622 0 64.5-19.028 64.5-42.5S389.122 46 353.5 46 289 65.028 289 88.5s28.878 42.5 64.5 42.5z';
    CloukitIcons.pencil = 'M343.118 36l114.907 96.418-230.118 274.244L113 310.244 343.118 36zM92.71 333.576l114.907 96.418-131.73 40.318L92.71 333.577z';
    CloukitIcons.user = 'M256 231c-57.99 0-105-47.01-105-105S198.01 21 256 21s105 47.01 105 105-47.01 105-105 105zm237 262H19c0-130.89 106.11-237 237-237s237 106.11 237 237z';
    CloukitIcons.eye = 'M253 396.016c-127.025 0-187.293-64.364-230-135.258C65.578 189.858 125.975 119 253 119s177.184 80.207 230 141.758c-53.105 71.652-102.975 135.258-230 135.258zm.17-68.016c48.142 0 87.17-31.34 87.17-70s-39.028-70-87.17-70c-48.143 0-87.17 31.34-87.17 70s39.027 70 87.17 70z';
    CloukitIcons.checkCircle = 'M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 256-256 256zm130.76-376L203.024 316.723l-78.016-76.74L95 269.502l78.02 76.74 30.005 29.513 213.745-210.24L386.76 136z';
    CloukitIcons.exclamationCircle = 'M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 256-256 256zm-28.06-397.543v202.285h55.54V114.457h-55.54zm0 231.438v54.824h55.54v-54.825h-55.54z';
    CloukitIcons.exclamationTriangle = 'M221.946 35.544c18.9-33.09 49.58-33.114 68.526-.046L502.84 406.132C521.783 439.196 506.252 466 468.132 466H45.08c-38.113 0-53.69-26.822-34.787-59.914L221.946 35.544zm5.995 78.913v202.285h55.54V114.457h-55.54zm0 231.438v54.824h55.54v-54.825h-55.54z';
    CloukitIcons.infoCircle = 'M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 256-256 256zm-28.06-111.28h55.54V228.433h-55.54V400.72zm0-202.44h55.54v-54.823h-55.54v54.824z';
    CloukitIcons.plus = 'M312 200h161v112H312v161H200V312H39V200h161V39h112v161z';
    CloukitIcons.minus = 'M39 200h434v112H39z';
    CloukitIcons.plusThin = 'M286 230h187v60H286v187h-60V290H39v-60h187V43h60v187z';
    CloukitIcons.minusThin = 'M39 230h434v60H39z';
    return CloukitIcons;
}());



/***/ }),

/***/ "./src/components/icon.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitIconService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

var CloukitIconService = /** @class */ (function () {
    function CloukitIconService() {
        /** Holds all registered icons */
        this._icons = new Map();
        /** Holds all registered icon sizes */
        this._iconSizes = new Map();
    }
    CloukitIconService.prototype.registerIcon = function (iconName, pathD) {
        this._icons.set(iconName, pathD);
    };
    CloukitIconService.prototype.getIconPathD = function (iconName) {
        return this._icons.get(iconName);
    };
    CloukitIconService.prototype.registerIconSize = function (size, width) {
        this._iconSizes.set(size, width);
    };
    CloukitIconService.prototype.getIconSize = function (size) {
        return this._iconSizes.get(size);
    };
    CloukitIconService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], CloukitIconService);
    return CloukitIconService;
}());



/***/ }),

/***/ "./src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:10px\">\n\n  <cloukit-story title=\"Single Layer Icons\" story=\"story-00-single-layer-icons\">\n    <story-00-single-layer-icons></story-00-single-layer-icons>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Different Sizes\" story=\"story-01-different-sizes\">\n    <story-01-different-sizes></story-01-different-sizes>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Stacked Multi Layer Icons\" story=\"story-02-stacked-multi-layer-icons\">\n    <story-02-stacked-multi-layer-icons></story-02-stacked-multi-layer-icons>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Masked Multi Layer Icons\" story=\"story-03-masked-multi-layer-icons\">\n    <story-03-masked-multi-layer-icons></story-03-masked-multi-layer-icons>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Transformed Icons\" story=\"story-04-transformed-icons\">\n    <story-04-transformed-icons></story-04-transformed-icons>\n  </cloukit-story>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.sharedStyles = [
        '.iconBox { display: flex; flex-wrap: wrap; }',
        '.iconItem { color:#777; text-align:center; font-size:12px; padding:10px; background-color:#efefef; margin-right:10px; margin-top:10px; min-width:110px; max-width:110px; }',
        '.iconCodeBox { color:#777; padding:10px; background-color:#efefef; margin-right:10px; margin-top:10px; }',
        '.label { display:inline-block; width:250px; }',
    ];
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("./src/demo/demo.component.html"),
            styles: [],
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_story__ = __webpack_require__("./node_modules/@cloukit/story/story.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("./src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stories_story_00_single_layer_icons__ = __webpack_require__("./src/demo/stories/story-00-single-layer-icons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stories_story_01_different_sizes__ = __webpack_require__("./src/demo/stories/story-01-different-sizes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stories_story_02_stacked_multi_layer_icons__ = __webpack_require__("./src/demo/stories/story-02-stacked-multi-layer-icons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stories_story_03_masked_multi_layer_icons__ = __webpack_require__("./src/demo/stories/story-03-masked-multi-layer-icons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stories_story_04_transformed_icons__ = __webpack_require__("./src/demo/stories/story-04-transformed-icons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stories_story_05_register_custom_icon__ = __webpack_require__("./src/demo/stories/story-05-register-custom-icon.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DemoModule = /** @class */ (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // INITIALIZE STORY SOURCES
        //
        var baseUrl = document.getElementsByTagName('base')[0].href;
        var storySourceJsonUrl = baseUrl + "assets/demoStoriesSource.json"; // File is auto generated by build chain!
        this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__stories_story_00_single_layer_icons__["a" /* Story00Component */],
                __WEBPACK_IMPORTED_MODULE_6__stories_story_01_different_sizes__["a" /* Story01Component */],
                __WEBPACK_IMPORTED_MODULE_7__stories_story_02_stacked_multi_layer_icons__["a" /* Story02Component */],
                __WEBPACK_IMPORTED_MODULE_8__stories_story_03_masked_multi_layer_icons__["a" /* Story03Component */],
                __WEBPACK_IMPORTED_MODULE_9__stories_story_04_transformed_icons__["a" /* Story04Component */],
                __WEBPACK_IMPORTED_MODULE_10__stories_story_05_register_custom_icon__["a" /* Story05Component */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__demo_component__["a" /* DemoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* CloukitIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__cloukit_story__["a" /* CloukitStoryModule */],
            ],
            providers: [],
            bootstrap: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cloukit_story__["b" /* CloukitStoryService */]])
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/demo/stories/story-00-single-layer-icons.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"iconBox\">\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"check\"\n      foregroundIconColor=\"#3FA051\"\n    ></cloukit-icon><br>\n    check\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"cross\"\n      foregroundIconColor=\"#A03F3F\"\n    ></cloukit-icon><br>\n    cross\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"info\"\n      foregroundIconColor=\"#3F68A0\"\n    ></cloukit-icon><br>\n    info\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"exclamation\"\n      foregroundIconColor=\"#A0533F\"\n    ></cloukit-icon><br>\n    exclamation\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"chevronLeft\"\n      foregroundIconColor=\"#6F6F6F\"\n    ></cloukit-icon><br>\n    chevronLeft\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"chevronUp\"\n      foregroundIconColor=\"#6F6F6F\"\n    ></cloukit-icon><br>\n    chevronUp\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"chevronRight\"\n      foregroundIconColor=\"#6F6F6F\"\n    ></cloukit-icon><br>\n    chevronRight\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"chevronDown\"\n      foregroundIconColor=\"#6F6F6F\"\n    ></cloukit-icon><br>\n    chevronDown\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"arrowLeft\"\n      foregroundIconColor=\"#6F6F6F\"\n    ></cloukit-icon><br>\n    arrowLeft\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"arrowUp\"\n      foregroundIconColor=\"#6F6F6F\"\n    ></cloukit-icon><br>\n    arrowUp\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"arrowRight\"\n      foregroundIconColor=\"#6F6F6F\"\n    ></cloukit-icon><br>\n    arrowRight\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"arrowDown\"\n      foregroundIconColor=\"#6F6F6F\"\n    ></cloukit-icon><br>\n    arrowDown\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"circle\"\n      foregroundIconColor=\"#8F8F8F\"\n    ></cloukit-icon><br>\n    circle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"triangle\"\n      foregroundIconColor=\"#8F8F8F\"\n    ></cloukit-icon><br>\n    triangle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"squareRounded\"\n      foregroundIconColor=\"#8F8F8F\"\n    ></cloukit-icon><br>\n    squareRounded\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"anonym\"\n      foregroundIconColor=\"#2185D4\"\n    ></cloukit-icon><br>\n    anonym\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"pencil\"\n      foregroundIconColor=\"#2185D4\"\n    ></cloukit-icon><br>\n    pencil\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"user\"\n      foregroundIconColor=\"#2185D4\"\n    ></cloukit-icon><br>\n    user\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"eye\"\n      foregroundIconColor=\"#2185D4\"\n    ></cloukit-icon><br>\n    eye\n  </div>\n\n\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"checkCircle\"\n      foregroundIconColor=\"#019A06\"\n    ></cloukit-icon><br>\n    checkCircle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"exclamationCircle\"\n      foregroundIconColor=\"#E04900\"\n    ></cloukit-icon><br>\n    exclamationCircle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"exclamationTriangle\"\n      foregroundIconColor=\"#E08400\"\n    ></cloukit-icon><br>\n    exclamationTriangle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"infoCircle\"\n      foregroundIconColor=\"#0054E0\"\n    ></cloukit-icon><br>\n    infoCircle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"plus\"\n      foregroundIconColor=\"#0054E0\"\n    ></cloukit-icon><br>\n    plus\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"minus\"\n      foregroundIconColor=\"#0054E0\"\n    ></cloukit-icon><br>\n    minus\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"plusThin\"\n      foregroundIconColor=\"#0054E0\"\n    ></cloukit-icon><br>\n    plusThin\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      foregroundIcon=\"minusThin\"\n      foregroundIconColor=\"#0054E0\"\n    ></cloukit-icon><br>\n    minusThin\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-00-single-layer-icons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story00Component = /** @class */ (function () {
    function Story00Component() {
    }
    Story00Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-00-single-layer-icons',
            template: __webpack_require__("./src/demo/stories/story-00-single-layer-icons.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story00Component);
    return Story00Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-01-different-sizes.html":
/***/ (function(module, exports) {

module.exports = "<span>Use the <code>size</code> attribute to set the desired size. The actual pixel sizes can be registered at the <code>ClouktiIconService</code>.</span>\n\n<div class=\"iconBox\">\n  <div class=\"iconItem\">\n    <cloukit-icon\n      size=\"small\"\n      foregroundIcon=\"check\"\n      foregroundIconColor=\"#3FA051\"\n    ></cloukit-icon><br>\n    small\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      size=\"medium\"\n      foregroundIcon=\"check\"\n      foregroundIconColor=\"#3FA051\"\n    ></cloukit-icon><br>\n    medium\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      size=\"large\"\n      foregroundIcon=\"check\"\n      foregroundIconColor=\"#3FA051\"\n    ></cloukit-icon><br>\n    large\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      size=\"xlarge\"\n      foregroundIcon=\"check\"\n      foregroundIconColor=\"#3FA051\"\n    ></cloukit-icon><br>\n    xlarge\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-01-different-sizes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story01Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story01Component = /** @class */ (function () {
    function Story01Component() {
    }
    Story01Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-01-different-sizes',
            template: __webpack_require__("./src/demo/stories/story-01-different-sizes.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story01Component);
    return Story01Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-02-stacked-multi-layer-icons.html":
/***/ (function(module, exports) {

module.exports = "<span>The foreground icon is stacked on top the background icon.</span>\n<div class=\"iconBox\">\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"exclamation\"\n      foregroundIconColor=\"#fff\"\n      backgroundIcon=\"triangle\"\n      backgroundIconColor=\"#E77300\"\n    ></cloukit-icon><br>\n    exclamation<br>triangle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"info\"\n      foregroundIconColor=\"#fff\"\n      backgroundIcon=\"circle\"\n      backgroundIconColor=\"#2185D4\"\n    ></cloukit-icon><br>\n    info<br>circle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"cross\"\n      foregroundIconColor=\"#fff\"\n      backgroundIcon=\"squareRounded\"\n      backgroundIconColor=\"#D60000\"\n    ></cloukit-icon><br>\n    cross<br>squareRounded\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"check\"\n      foregroundIconColor=\"#fff\"\n      backgroundIcon=\"squareRounded\"\n      backgroundIconColor=\"#00D632\"\n    ></cloukit-icon><br>\n    check<br>squareRounded\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"arrowRight\"\n      foregroundIconColor=\"#6E8A27\"\n      backgroundIcon=\"circle\"\n      backgroundIconColor=\"#D2FF60\"\n    ></cloukit-icon><br>\n    arrowRight<br>circle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"arrowLeft\"\n      foregroundIconColor=\"#6E8A27\"\n      backgroundIcon=\"circle\"\n      backgroundIconColor=\"#D2FF60\"\n    ></cloukit-icon><br>\n    arrowLeft<br>circle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"arrowUp\"\n      foregroundIconColor=\"#6E8A27\"\n      backgroundIcon=\"circle\"\n      backgroundIconColor=\"#D2FF60\"\n    ></cloukit-icon><br>\n    arrowUp<br>circle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"arrowDown\"\n      foregroundIconColor=\"#6E8A27\"\n      backgroundIcon=\"circle\"\n      backgroundIconColor=\"#D2FF60\"\n    ></cloukit-icon><br>\n    arrowDown<br>circle\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-02-stacked-multi-layer-icons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story02Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story02Component = /** @class */ (function () {
    function Story02Component() {
    }
    Story02Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-02-stacked-multi-layer-icons',
            template: __webpack_require__("./src/demo/stories/story-02-stacked-multi-layer-icons.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story02Component);
    return Story02Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-03-masked-multi-layer-icons.html":
/***/ (function(module, exports) {

module.exports = "<span>The foreground icon is subtracted from the background icon via a mask.</span>\n<div class=\"iconBox\">\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"mask\"\n      foregroundIcon=\"exclamation\"\n      backgroundIcon=\"triangle\"\n      backgroundIconColor=\"#E77300\"\n    ></cloukit-icon><br>\n    exclamation<br>triangle\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"mask\"\n      foregroundIcon=\"info\"\n      backgroundIcon=\"circle\"\n      backgroundIconColor=\"#2185D4\"\n    ></cloukit-icon><br>\n    info<br>circle\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-03-masked-multi-layer-icons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story03Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story03Component = /** @class */ (function () {
    function Story03Component() {
    }
    Story03Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-03-masked-multi-layer-icons',
            template: __webpack_require__("./src/demo/stories/story-03-masked-multi-layer-icons.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story03Component);
    return Story03Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-04-transformed-icons.html":
/***/ (function(module, exports) {

module.exports = "<span>Use the <code>transform</code> attribute to be applied to any icon to change its size, rotation or position. Note that the viewport is always 512x512 pixel.</span>\n\n<div class=\"iconBox\">\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"exclamation\"\n      foregroundIconColor=\"#fff\"\n      backgroundIcon=\"circle\"\n      backgroundIconColor=\"#E77300\"\n    ></cloukit-icon>\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"exclamation\"\n      foregroundIconColor=\"#fff\"\n      foregroundIconTransform=\"scale(0.7), translate(100, 100)\"\n      backgroundIcon=\"circle\"\n      backgroundIconColor=\"#E77300\"\n      backgroundIconTransform=\"scale(0.7), translate(100, 100)\"\n    ></cloukit-icon><br>\n    scale and translate\n  </div>\n  <div class=\"iconItem\">\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"cross\"\n      foregroundIconColor=\"#fff\"\n      backgroundIcon=\"triangle\"\n      backgroundIconColor=\"#D60000\"\n    ></cloukit-icon>\n    <cloukit-icon\n      combine=\"stack\"\n      foregroundIcon=\"cross\"\n      foregroundIconColor=\"#fff\"\n      foregroundIconTransform=\"scale(0.7), translate(100, 180)\"\n      backgroundIcon=\"triangle\"\n      backgroundIconColor=\"#D60000\"\n    ></cloukit-icon><br>\n    scale and translate\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-04-transformed-icons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story04Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story04Component = /** @class */ (function () {
    function Story04Component() {
    }
    Story04Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-04-transformed-icons',
            template: __webpack_require__("./src/demo/stories/story-04-transformed-icons.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story04Component);
    return Story04Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-05-register-custom-icon.html":
/***/ (function(module, exports) {

module.exports = "<span>Custom Icons</span>\n\nTBD\n\n  <cloukit-icon\n    combine=\"stack\"\n    foregroundIcon=\"exclamation\"\n    foregroundIconColor=\"#fff\"\n    backgroundIcon=\"circle\"\n    backgroundIconColor=\"#E77300\"\n  ></cloukit-icon>\n"

/***/ }),

/***/ "./src/demo/stories/story-05-register-custom-icon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story05Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story05Component = /** @class */ (function () {
    function Story05Component() {
    }
    Story05Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-05-register-custom-icon',
            template: __webpack_require__("./src/demo/stories/story-05-register-custom-icon.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story05Component);
    return Story05Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_icon_module__ = __webpack_require__("./src/components/icon.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_icon_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_icon_service__ = __webpack_require__("./src/components/icon.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_icon_paths__ = __webpack_require__("./src/components/icon.paths.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map