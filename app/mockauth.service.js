"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AuthService = (function () {
    function AuthService() {
        this.isLoggedIn = false;
    }
    AuthService.prototype.getUser = function () {
        return {
            firstName: "Cack",
            lastName: "Jai",
            email: "cjai@micds.org",
            gradYear: 9,
        };
    };
    AuthService.prototype.logIn = function () {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            _this.isLoggedIn = true;
            resolve('');
            //this is gaurenteed to be successful bacause its only mockup
        });
        p.then(function (msg) { _this.loginSuccessful = true; })
            .catch(function (e) { _this.loginSuccessful = false; });
    };
    AuthService.prototype.logOut = function () {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            _this.isLoggedIn = false;
            resolve('');
            //this is gaurenteed to be successful bacause its only mockup
        });
        p.then(function (msg) { _this.logoutSuccessful = true; })
            .catch(function (e) { _this.logoutSuccessful = false; });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=mockauth.service.js.map