/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './account';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/components/alert/alert';
import * as import9 from 'ionic-angular/navigation/nav-controller';
import * as import10 from '../../providers/user-data';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/button/button';
import * as import16 from 'ionic-angular/components/menu/menu-toggle';
import * as import17 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from 'ionic-angular/components/icon/icon';
import * as import20 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import21 from 'ionic-angular/components/content/content';
import * as import22 from '@angular/common/src/directives/ng_if';
import * as import23 from 'ionic-angular/config/config';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'ionic-angular/navigation/view-controller';
import * as import26 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import29 from 'ionic-angular/components/menu/menu-controller';
import * as import30 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import31 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from '@angular/core/src/linker/template_ref';
import * as import36 from 'ionic-angular/components/list/list';
import * as import37 from 'ionic-angular/components/item/item';
import * as import38 from 'ionic-angular/gestures/gesture-controller';
import * as import39 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import40 from 'ionic-angular/util/form';
var renderType_AccountPage_Host = null;
var _View_AccountPage_Host0 = (function (_super) {
    __extends(_View_AccountPage_Host0, _super);
    function _View_AccountPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AccountPage_Host0, renderType_AccountPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AccountPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-account', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AccountPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AccountPage_0_4 = new import3.AccountPage(this.parentInjector.get(import8.AlertController), this.parentInjector.get(import9.NavController), this.parentInjector.get(import10.UserData));
        this._appEl_0.initComponent(this._AccountPage_0_4, [], compView_0);
        compView_0.create(this._AccountPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AccountPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AccountPage) && (0 === requestNodeIndex))) {
            return this._AccountPage_0_4;
        }
        return notFoundResult;
    };
    _View_AccountPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._AccountPage_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_AccountPage_Host0;
}(import1.AppView));
function viewFactory_AccountPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AccountPage_Host === null)) {
        (renderType_AccountPage_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_AccountPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var AccountPageNgFactory = new import12.ComponentFactory('page-account', viewFactory_AccountPage_Host0, import3.AccountPage);
var styles_AccountPage = [];
var renderType_AccountPage = null;
var _View_AccountPage0 = (function (_super) {
    __extends(_View_AccountPage0, _super);
    function _View_AccountPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AccountPage0, renderType_AccountPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AccountPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import13.Header(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import25.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import26.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import14.Navbar(this.parentInjector.get(import27.App), this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import9.NavController, null), this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import28.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import15.Button('', '', this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import16.MenuToggle(this.parentInjector.get(import29.MenuController), new import24.ElementRef(this._el_4), this.parentInjector.get(import25.ViewController, null), this._Navbar_2_4);
        this._ToolbarItem_4_6 = new import17.ToolbarItem(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_2_4);
        this._query_Button_4_0 = new import18.QueryList();
        this._appEl_4.initComponent(this._Button_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import19.Icon(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import2.AppElement(9, 2, this, this._el_9);
        var compView_9 = import30.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import20.ToolbarTitle(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_2_4);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, 'Account', null);
        compView_9.create(this._ToolbarTitle_9_4, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'outer-content');
        this._appEl_14 = new import2.AppElement(14, null, this, this._el_14);
        var compView_14 = import31.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import21.Content(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import27.App), this.parentInjector.get(import32.Keyboard), this.parentInjector.get(import33.NgZone), this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import34.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_16 = new import2.AppElement(16, 14, this, this._anchor_16);
        this._TemplateRef_16_5 = new import35.TemplateRef_(this._appEl_16, viewFactory_AccountPage1);
        this._NgIf_16_6 = new import22.NgIf(this._appEl_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(null, '\n', null);
        compView_14.create(this._Content_14_4, [
            [],
            [].concat([
                this._text_15,
                this._appEl_16,
                this._text_17
            ]),
            []
        ], null);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._text_18
        ], [disposable_0], []);
        return null;
    };
    _View_AccountPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3;
        }
        if (((token === import15.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4;
        }
        if (((token === import16.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5;
        }
        if (((token === import17.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6;
        }
        if (((token === import20.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4;
        }
        if (((token === import14.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4;
        }
        if (((token === import13.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3;
        }
        if (((token === import35.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import22.NgIf) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6;
        }
        if (((token === import21.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Content_14_4;
        }
        return notFoundResult;
    };
    _View_AccountPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3 = '';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._MenuToggle_4_5.menuToggle = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_5 = 'menu';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Icon_6_3.name = currVal_5;
            this._expr_5 = currVal_5;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_14_4.ngOnInit();
        }
        var currVal_8 = this.context.username;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._NgIf_16_6.ngIf = currVal_8;
            this._expr_8 = currVal_8;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4]);
                this._ToolbarItem_4_6._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_4_5.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_6_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_14_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_AccountPage0.prototype.destroyInternal = function () {
        this._Icon_6_3.ngOnDestroy();
        this._Content_14_4.ngOnDestroy();
    };
    _View_AccountPage0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.toggle() !== false);
        return (true && pd_0);
    };
    return _View_AccountPage0;
}(import1.AppView));
export function viewFactory_AccountPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AccountPage === null)) {
        (renderType_AccountPage = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_AccountPage, {}));
    }
    return new _View_AccountPage0(viewUtils, parentInjector, declarationEl);
}
var _View_AccountPage1 = (function (_super) {
    __extends(_View_AccountPage1, _super);
    function _View_AccountPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AccountPage1, renderType_AccountPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AccountPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'padding-top', '');
        this.renderer.setElementAttribute(this._el_0, 'text-center', '');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'img', null);
        this.renderer.setElementAttribute(this._el_2, 'src', 'http://www.gravatar.com/avatar?d=mm&s=140');
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'h2', null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_7, 'inset', '');
        this._List_7_3 = new import36.List(this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_7), this.renderer, this.parent.parentInjector.get(import38.GestureController));
        this._text_8 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'button', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_9, 'ion-item', '');
        this._appEl_9 = new import2.AppElement(9, 7, this, this._el_9);
        var compView_9 = import39.viewFactory_Item0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Item_9_4 = new import37.Item(this.parent.parentInjector.get(import40.Form), this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_9), this.renderer);
        this._ItemContent_9_5 = new import37.ItemContent();
        this._query_Label_9_0 = new import18.QueryList();
        this._query_Button_9_1 = new import18.QueryList();
        this._query_Icon_9_2 = new import18.QueryList();
        this._appEl_9.initComponent(this._Item_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, 'Update Picture', null);
        this._query_Label_9_0.reset([]);
        this._Item_9_4.contentLabel = this._query_Label_9_0.first;
        compView_9.create(this._Item_9_4, [
            [],
            [],
            [].concat([this._text_10]),
            [],
            []
        ], null);
        this._text_11 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_12 = this.renderer.createElement(this._el_7, 'button', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_12, 'ion-item', '');
        this._appEl_12 = new import2.AppElement(12, 7, this, this._el_12);
        var compView_12 = import39.viewFactory_Item0(this.viewUtils, this.injector(12), this._appEl_12);
        this._Item_12_4 = new import37.Item(this.parent.parentInjector.get(import40.Form), this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_12), this.renderer);
        this._ItemContent_12_5 = new import37.ItemContent();
        this._query_Label_12_0 = new import18.QueryList();
        this._query_Button_12_1 = new import18.QueryList();
        this._query_Icon_12_2 = new import18.QueryList();
        this._appEl_12.initComponent(this._Item_12_4, [], compView_12);
        this._text_13 = this.renderer.createText(null, 'Change Username', null);
        this._query_Label_12_0.reset([]);
        this._Item_12_4.contentLabel = this._query_Label_12_0.first;
        compView_12.create(this._Item_12_4, [
            [],
            [],
            [].concat([this._text_13]),
            [],
            []
        ], null);
        this._text_14 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_15 = this.renderer.createElement(this._el_7, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_15, 'ion-item', '');
        this._appEl_15 = new import2.AppElement(15, 7, this, this._el_15);
        var compView_15 = import39.viewFactory_Item0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Item_15_4 = new import37.Item(this.parent.parentInjector.get(import40.Form), this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_15), this.renderer);
        this._ItemContent_15_5 = new import37.ItemContent();
        this._query_Label_15_0 = new import18.QueryList();
        this._query_Button_15_1 = new import18.QueryList();
        this._query_Icon_15_2 = new import18.QueryList();
        this._appEl_15.initComponent(this._Item_15_4, [], compView_15);
        this._text_16 = this.renderer.createText(null, 'Change Password', null);
        this._query_Label_15_0.reset([]);
        this._Item_15_4.contentLabel = this._query_Label_15_0.first;
        compView_15.create(this._Item_15_4, [
            [],
            [],
            [].concat([this._text_16]),
            [],
            []
        ], null);
        this._text_17 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_18 = this.renderer.createElement(this._el_7, 'button', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_18, 'ion-item', '');
        this._appEl_18 = new import2.AppElement(18, 7, this, this._el_18);
        var compView_18 = import39.viewFactory_Item0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Item_18_4 = new import37.Item(this.parent.parentInjector.get(import40.Form), this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_18), this.renderer);
        this._ItemContent_18_5 = new import37.ItemContent();
        this._query_Label_18_0 = new import18.QueryList();
        this._query_Button_18_1 = new import18.QueryList();
        this._query_Icon_18_2 = new import18.QueryList();
        this._appEl_18.initComponent(this._Item_18_4, [], compView_18);
        this._text_19 = this.renderer.createText(null, 'Logout', null);
        this._query_Label_18_0.reset([]);
        this._Item_18_4.contentLabel = this._query_Label_18_0.first;
        compView_18.create(this._Item_18_4, [
            [],
            [],
            [].concat([this._text_19]),
            [],
            []
        ], null);
        this._text_20 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_12, 'click', this.eventHandler(this._handle_click_12_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_18, 'click', this.eventHandler(this._handle_click_18_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], []);
        return null;
    };
    _View_AccountPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.Item) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._Item_9_4;
        }
        if (((token === import37.ItemContent) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ItemContent_9_5;
        }
        if (((token === import37.Item) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Item_12_4;
        }
        if (((token === import37.ItemContent) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._ItemContent_12_5;
        }
        if (((token === import37.Item) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Item_15_4;
        }
        if (((token === import37.ItemContent) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._ItemContent_15_5;
        }
        if (((token === import37.Item) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Item_18_4;
        }
        if (((token === import37.ItemContent) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ItemContent_18_5;
        }
        if (((token === import36.List) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._List_7_3;
        }
        return notFoundResult;
    };
    _View_AccountPage1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_9_1.dirty) {
                this._query_Button_9_1.reset([]);
                this._Item_9_4._buttons = this._query_Button_9_1;
                this._query_Button_9_1.notifyOnChanges();
            }
            if (this._query_Icon_9_2.dirty) {
                this._query_Icon_9_2.reset([]);
                this._Item_9_4._icons = this._query_Icon_9_2;
                this._query_Icon_9_2.notifyOnChanges();
            }
            if (this._query_Button_12_1.dirty) {
                this._query_Button_12_1.reset([]);
                this._Item_12_4._buttons = this._query_Button_12_1;
                this._query_Button_12_1.notifyOnChanges();
            }
            if (this._query_Icon_12_2.dirty) {
                this._query_Icon_12_2.reset([]);
                this._Item_12_4._icons = this._query_Icon_12_2;
                this._query_Icon_12_2.notifyOnChanges();
            }
            if (this._query_Button_15_1.dirty) {
                this._query_Button_15_1.reset([]);
                this._Item_15_4._buttons = this._query_Button_15_1;
                this._query_Button_15_1.notifyOnChanges();
            }
            if (this._query_Icon_15_2.dirty) {
                this._query_Icon_15_2.reset([]);
                this._Item_15_4._icons = this._query_Icon_15_2;
                this._query_Icon_15_2.notifyOnChanges();
            }
            if (this._query_Button_18_1.dirty) {
                this._query_Button_18_1.reset([]);
                this._Item_18_4._buttons = this._query_Button_18_1;
                this._query_Button_18_1.notifyOnChanges();
            }
            if (this._query_Icon_18_2.dirty) {
                this._query_Icon_18_2.reset([]);
                this._Item_18_4._icons = this._query_Icon_18_2;
                this._query_Icon_18_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_9_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_12_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_15_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_18_4.ngAfterContentInit();
            }
        }
        var currVal_0 = import4.interpolate(1, '', this.parent.context.username, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_5, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AccountPage1.prototype._handle_click_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.updatePicture() !== false);
        return (true && pd_0);
    };
    _View_AccountPage1.prototype._handle_click_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.changeUsername() !== false);
        return (true && pd_0);
    };
    _View_AccountPage1.prototype._handle_click_15_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.changePassword() !== false);
        return (true && pd_0);
    };
    _View_AccountPage1.prototype._handle_click_18_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.logout() !== false);
        return (true && pd_0);
    };
    return _View_AccountPage1;
}(import1.AppView));
function viewFactory_AccountPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_AccountPage1(viewUtils, parentInjector, declarationEl);
}
