var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var Page4 = (function () {
    function Page4(nav) {
        this.nav = nav;
    }
    Page4.prototype.goBack = function () {
        this.nav.setRoot(ColorsPage);
    };
    Page4 = __decorate([
        Component({
            template: "\n    <ion-header>\n      <ion-navbar color=\"light\">\n        <ion-title>Toolbar: Light</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button ion-button block (click)=\"goBack()\">Go Back to Beginning</button>\n    </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page4);
    return Page4;
}());
export var Page3 = (function () {
    function Page3(nav) {
        this.nav = nav;
    }
    Page3.prototype.pushPage = function () {
        this.nav.push(Page4);
    };
    Page3 = __decorate([
        Component({
            template: "\n    <ion-header>\n      <ion-navbar color=\"danger\">\n        <ion-title>Toolbar: Danger</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button ion-button block (click)=\"pushPage()\">Next Page</button>\n    </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page3);
    return Page3;
}());
export var Page2 = (function () {
    function Page2(nav) {
        this.nav = nav;
    }
    Page2.prototype.pushPage = function () {
        this.nav.push(Page3);
    };
    Page2 = __decorate([
        Component({
            template: "\n    <ion-header>\n      <ion-navbar color=\"secondary\">\n        <ion-title>Toolbar: Secondary</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button ion-button block (click)=\"pushPage()\">Next Page</button>\n    </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page2);
    return Page2;
}());
export var ColorsPage = (function () {
    function ColorsPage(nav) {
        this.nav = nav;
    }
    ColorsPage.prototype.pushPage = function () {
        this.nav.push(Page2);
    };
    ColorsPage = __decorate([
        Component({
            template: "\n    <ion-header>\n      <ion-navbar color=\"primary\">\n        <ion-title>Toolbar: Primary</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button ion-button block (click)=\"pushPage()\">Next Page</button>\n    </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [NavController])
    ], ColorsPage);
    return ColorsPage;
}());
