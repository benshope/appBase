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
import { Platform } from 'ionic-angular';
export var TabIconPage = (function () {
    function TabIconPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabIconPage.prototype.ionViewWillEnter = function () {
        // document.getElementById('md-tabs-icon').style.display = "block";
        // document.getElementById('md-only').style.display = "none";
    };
    TabIconPage = __decorate([
        Component({
            template: "\n    <ion-header>\n      <ion-navbar [color]=\"isAndroid ? 'danger' : 'primary'\">\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n" }), 
        __metadata('design:paramtypes', [Platform])
    ], TabIconPage);
    return TabIconPage;
}());
export var IconPage = (function () {
    function IconPage(platform) {
        this.tabOne = TabIconPage;
        this.tabTwo = TabIconPage;
        this.tabThree = TabIconPage;
        this.tabFour = TabIconPage;
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    IconPage.prototype.ionViewWillLeave = function () {
        document.getElementById('md-tabs-icon').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    };
    IconPage = __decorate([
        Component({
            template: "\n  <ion-tabs class=\"tabs-icon\" [color]=\"isAndroid ? 'danger' : 'primary'\">\n    <ion-tab tabIcon=\"contact\" [root]=\"tabOne\"></ion-tab>\n    <ion-tab tabIcon=\"compass\" [root]=\"tabTwo\"></ion-tab>\n    <ion-tab tabIcon=\"analytics\" [root]=\"tabThree\"></ion-tab>\n    <ion-tab tabIcon=\"settings\" [root]=\"tabFour\"></ion-tab>\n  </ion-tabs>\n" }), 
        __metadata('design:paramtypes', [Platform])
    ], IconPage);
    return IconPage;
}());
