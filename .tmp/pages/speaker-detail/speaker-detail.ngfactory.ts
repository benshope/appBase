/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './speaker-detail';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import15 from 'ionic-angular/components/content/content';
import * as import16 from 'ionic-angular/components/button/button';
import * as import17 from 'ionic-angular/components/icon/icon';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import29 from '@angular/core/src/security';
var renderType_SpeakerDetailPage_Host:import0.RenderComponentType = (null as any);
class _View_SpeakerDetailPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _SpeakerDetailPage_0_4:import3.SpeakerDetailPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SpeakerDetailPage_Host0,renderType_SpeakerDetailPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-speaker-detail',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SpeakerDetailPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SpeakerDetailPage_0_4 = new import3.SpeakerDetailPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.NavParams));
    this._appEl_0.initComponent(this._SpeakerDetailPage_0_4,([] as any[]),compView_0);
    compView_0.create(this._SpeakerDetailPage_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.SpeakerDetailPage) && (0 === requestNodeIndex))) { return this._SpeakerDetailPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_SpeakerDetailPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_SpeakerDetailPage_Host === (null as any))) { (renderType_SpeakerDetailPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_SpeakerDetailPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const SpeakerDetailPageNgFactory:import11.ComponentFactory<import3.SpeakerDetailPage> = new import11.ComponentFactory<import3.SpeakerDetailPage>('page-speaker-detail',viewFactory_SpeakerDetailPage_Host0,import3.SpeakerDetailPage);
const styles_SpeakerDetailPage:any[] = ([] as any[]);
var renderType_SpeakerDetailPage:import0.RenderComponentType = (null as any);
class _View_SpeakerDetailPage0 extends import1.AppView<import3.SpeakerDetailPage> {
  _el_0:any;
  _Header_0_3:import12.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import13.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import14.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Content_9_4:import15.Content;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  /*private*/ _appEl_16:import2.AppElement;
  _Button_16_4:import16.Button;
  _text_17:any;
  _el_18:any;
  _Icon_18_3:import17.Icon;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _Button_21_4:import16.Button;
  _text_22:any;
  _el_23:any;
  _Icon_23_3:import17.Icon;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  /*private*/ _appEl_26:import2.AppElement;
  _Button_26_4:import16.Button;
  _text_27:any;
  _el_28:any;
  _Icon_28_3:import17.Icon;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SpeakerDetailPage0,renderType_SpeakerDetailPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import12.Header(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import20.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import21.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Navbar(this.parentInjector.get(import22.App),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import23.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import14.ToolbarTitle(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import12.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','speaker-detail');
    this.renderer.setElementAttribute(this._el_9,'padding','');
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import24.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import15.Content(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import22.App),this.parentInjector.get(import25.Keyboard),this.parentInjector.get(import26.NgZone),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import27.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'text-center','');
    this._text_12 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'img',(null as any));
    this._el_14 = this.renderer.createElement(this._el_11,'br',(null as any));
    this._text_15 = this.renderer.createText(this._el_11,'\n\n    ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_11,'button',(null as any));
    this.renderer.setElementAttribute(this._el_16,'clear','');
    this.renderer.setElementAttribute(this._el_16,'color','twitter');
    this.renderer.setElementAttribute(this._el_16,'icon-only','');
    this.renderer.setElementAttribute(this._el_16,'ion-button','');
    this.renderer.setElementAttribute(this._el_16,'small','');
    this._appEl_16 = new import2.AppElement(16,11,this,this._el_16);
    var compView_16:any = import28.viewFactory_Button0(this.viewUtils,this.injector(16),this._appEl_16);
    this._Button_16_4 = new import16.Button((null as any),'',this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_16),this.renderer);
    this._appEl_16.initComponent(this._Button_16_4,([] as any[]),compView_16);
    this._text_17 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_18 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_18,'name','logo-twitter');
    this.renderer.setElementAttribute(this._el_18,'role','img');
    this._Icon_18_3 = new import17.Icon(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_18),this.renderer);
    this._text_19 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_16.create(this._Button_16_4,[([] as any[]).concat([
        this._text_17,
        this._el_18,
        this._text_19
      ]
    )],(null as any));
    this._text_20 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_11,'button',(null as any));
    this.renderer.setElementAttribute(this._el_21,'clear','');
    this.renderer.setElementAttribute(this._el_21,'color','github');
    this.renderer.setElementAttribute(this._el_21,'icon-only','');
    this.renderer.setElementAttribute(this._el_21,'ion-button','');
    this.renderer.setElementAttribute(this._el_21,'small','');
    this._appEl_21 = new import2.AppElement(21,11,this,this._el_21);
    var compView_21:any = import28.viewFactory_Button0(this.viewUtils,this.injector(21),this._appEl_21);
    this._Button_21_4 = new import16.Button((null as any),'',this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_21),this.renderer);
    this._appEl_21.initComponent(this._Button_21_4,([] as any[]),compView_21);
    this._text_22 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_23 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_23,'name','logo-github');
    this.renderer.setElementAttribute(this._el_23,'role','img');
    this._Icon_23_3 = new import17.Icon(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_23),this.renderer);
    this._text_24 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_21.create(this._Button_21_4,[([] as any[]).concat([
        this._text_22,
        this._el_23,
        this._text_24
      ]
    )],(null as any));
    this._text_25 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_11,'button',(null as any));
    this.renderer.setElementAttribute(this._el_26,'clear','');
    this.renderer.setElementAttribute(this._el_26,'color','instagram');
    this.renderer.setElementAttribute(this._el_26,'icon-only','');
    this.renderer.setElementAttribute(this._el_26,'ion-button','');
    this.renderer.setElementAttribute(this._el_26,'small','');
    this._appEl_26 = new import2.AppElement(26,11,this,this._el_26);
    var compView_26:any = import28.viewFactory_Button0(this.viewUtils,this.injector(26),this._appEl_26);
    this._Button_26_4 = new import16.Button((null as any),'',this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_26),this.renderer);
    this._appEl_26.initComponent(this._Button_26_4,([] as any[]),compView_26);
    this._text_27 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_28 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_28,'name','logo-instagram');
    this.renderer.setElementAttribute(this._el_28,'role','img');
    this._Icon_28_3 = new import17.Icon(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_28),this.renderer);
    this._text_29 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_26.create(this._Button_26_4,[([] as any[]).concat([
        this._text_27,
        this._el_28,
        this._text_29
      ]
    )],(null as any));
    this._text_30 = this.renderer.createText(this._el_11,'\n  ',(null as any));
    this._text_31 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_32 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_33 = this.renderer.createText(this._el_32,'',(null as any));
    this._text_34 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_9.create(this._Content_9_4,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_31,
        this._el_32,
        this._text_34
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_35 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
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
      this._el_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._text_35
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import13.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4; }
    if (((token === import12.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3; }
    if (((token === import17.Icon) && (18 === requestNodeIndex))) { return this._Icon_18_3; }
    if (((token === import16.Button) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Button_16_4; }
    if (((token === import17.Icon) && (23 === requestNodeIndex))) { return this._Icon_23_3; }
    if (((token === import16.Button) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._Button_21_4; }
    if (((token === import17.Icon) && (28 === requestNodeIndex))) { return this._Icon_28_3; }
    if (((token === import16.Button) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._Button_26_4; }
    if (((token === import15.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._Content_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_9_4.ngOnInit(); }
    changed = false;
    const currVal_6:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._Button_16_4.small = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._Button_16_4.clear = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = 'twitter';
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._Button_16_4.color = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    if (changed) { this._appEl_16.componentView.markAsCheckOnce(); }
    const currVal_9:any = 'logo-twitter';
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._Icon_18_3.name = currVal_9;
      this._expr_9 = currVal_9;
    }
    changed = false;
    const currVal_11:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._Button_21_4.small = currVal_11;
      changed = true;
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._Button_21_4.clear = currVal_12;
      changed = true;
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = 'github';
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this._Button_21_4.color = currVal_13;
      changed = true;
      this._expr_13 = currVal_13;
    }
    if (changed) { this._appEl_21.componentView.markAsCheckOnce(); }
    const currVal_14:any = 'logo-github';
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this._Icon_23_3.name = currVal_14;
      this._expr_14 = currVal_14;
    }
    changed = false;
    const currVal_16:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._Button_26_4.small = currVal_16;
      changed = true;
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this._Button_26_4.clear = currVal_17;
      changed = true;
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = 'instagram';
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this._Button_26_4.color = currVal_18;
      changed = true;
      this._expr_18 = currVal_18;
    }
    if (changed) { this._appEl_26.componentView.markAsCheckOnce(); }
    const currVal_19:any = 'logo-instagram';
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this._Icon_28_3.name = currVal_19;
      this._expr_19 = currVal_19;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_16_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_21_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_26_4.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.speaker.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_5,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_9_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.speaker.profilePic;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_13,'src',this.viewUtils.sanitizer.sanitize(import29.SecurityContext.URL,currVal_4));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.speaker.name;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_13,'alt',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_10:any = this._Icon_18_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_18,'hide',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_15:any = this._Icon_23_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_23,'hide',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_20:any = this._Icon_28_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_28,'hide',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = import4.interpolate(1,'',this.context.speaker.about,'');
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setText(this._text_33,currVal_21);
      this._expr_21 = currVal_21;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_18_3.ngOnDestroy();
    this._Icon_23_3.ngOnDestroy();
    this._Icon_28_3.ngOnDestroy();
    this._Content_9_4.ngOnDestroy();
  }
}
export function viewFactory_SpeakerDetailPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.SpeakerDetailPage> {
  if ((renderType_SpeakerDetailPage === (null as any))) { (renderType_SpeakerDetailPage = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_SpeakerDetailPage,{})); }
  return new _View_SpeakerDetailPage0(viewUtils,parentInjector,declarationEl);
}