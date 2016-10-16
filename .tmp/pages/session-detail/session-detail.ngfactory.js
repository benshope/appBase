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
import * as import3 from './session-detail';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-params';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import14 from 'ionic-angular/components/content/content';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/navigation/nav-controller';
import * as import22 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from '@angular/core/src/linker/template_ref';
import * as import28 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_SessionDetailPage_Host = null;
var _View_SessionDetailPage_Host0 = (function (_super) {
    __extends(_View_SessionDetailPage_Host0, _super);
    function _View_SessionDetailPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SessionDetailPage_Host0, renderType_SessionDetailPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SessionDetailPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-session-detail', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SessionDetailPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SessionDetailPage_0_4 = new import3.SessionDetailPage(this.parentInjector.get(import8.NavParams));
        this._appEl_0.initComponent(this._SessionDetailPage_0_4, [], compView_0);
        compView_0.create(this._SessionDetailPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SessionDetailPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.SessionDetailPage) && (0 === requestNodeIndex))) {
            return this._SessionDetailPage_0_4;
        }
        return notFoundResult;
    };
    return _View_SessionDetailPage_Host0;
}(import1.AppView));
function viewFactory_SessionDetailPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SessionDetailPage_Host === null)) {
        (renderType_SessionDetailPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_SessionDetailPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var SessionDetailPageNgFactory = new import10.ComponentFactory('page-session-detail', viewFactory_SessionDetailPage_Host0, import3.SessionDetailPage);
var styles_SessionDetailPage = [];
var renderType_SessionDetailPage = null;
var _View_SessionDetailPage0 = (function (_super) {
    __extends(_View_SessionDetailPage0, _super);
    function _View_SessionDetailPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SessionDetailPage0, renderType_SessionDetailPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SessionDetailPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import19.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import22.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Session', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'padding', '');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import23.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import26.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'h1', null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_14 = new import2.AppElement(14, 9, this, this._anchor_14);
        this._TemplateRef_14_5 = new import27.TemplateRef_(this._appEl_14, viewFactory_SessionDetailPage1);
        this._NgFor_14_6 = new import15.NgFor(this._appEl_14.vcRef, this._TemplateRef_14_5, this.parentInjector.get(import28.IterableDiffers), this.ref);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'p', null);
        this._text_17 = this.renderer.createText(this._el_16, '', null);
        this._text_18 = this.renderer.createText(null, '\n\n  ', null);
        this._el_19 = this.renderer.createElement(null, 'p', null);
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(null, '\n\n  ', null);
        this._el_22 = this.renderer.createElement(null, 'p', null);
        this._text_23 = this.renderer.createText(this._el_22, '', null);
        this._text_24 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_13,
                this._appEl_14,
                this._text_15,
                this._el_16,
                this._text_18,
                this._el_19,
                this._text_21,
                this._el_22,
                this._text_24
            ]),
            []
        ], null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25
        ], [], []);
        return null;
    };
    _View_SessionDetailPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import27.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import15.NgFor) && (14 === requestNodeIndex))) {
            return this._NgFor_14_6;
        }
        if (((token === import14.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_SessionDetailPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_4 = this.context.session.speakers;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgFor_14_6.ngForOf = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgFor_14_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_14_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
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
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.session.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_12, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_5 = import4.interpolate(2, '\n    ', this.context.session.timeStart, ' - ', this.context.session.timeEnd, '\n  ');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_17, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import4.interpolate(1, '', this.context.session.location, '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_20, currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = import4.interpolate(1, '', this.context.session.description, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_23, currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_SessionDetailPage0.prototype.destroyInternal = function () {
        this._Content_9_4.ngOnDestroy();
    };
    return _View_SessionDetailPage0;
}(import1.AppView));
export function viewFactory_SessionDetailPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SessionDetailPage === null)) {
        (renderType_SessionDetailPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_SessionDetailPage, {}));
    }
    return new _View_SessionDetailPage0(viewUtils, parentInjector, declarationEl);
}
var _View_SessionDetailPage1 = (function (_super) {
    __extends(_View_SessionDetailPage1, _super);
    function _View_SessionDetailPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SessionDetailPage1, renderType_SessionDetailPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SessionDetailPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'h4', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_SessionDetailPage1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '\n    ', this.context.$implicit.name, '\n  ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_SessionDetailPage1;
}(import1.AppView));
function viewFactory_SessionDetailPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_SessionDetailPage1(viewUtils, parentInjector, declarationEl);
}
