﻿/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){function e(a){a=a.attributes;return"application/x-shockwave-flash"==a.type||g.test(a.src||"")}function f(a,d){return a.createFakeParserElement(d,"cke_flash","flash",!0)}var g=/\.swf(?:$|\?)/i;CKEDITOR.plugins.add("flash",{requires:"dialog,fakeobjects",lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en-au,en-ca,en-gb,en,eo,es,et,eu,fa,fi,fo,fr-ca,fr,gl,gu,he,hi,hr,hu,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt-br,pt,ro,ru,sk,sl,sr-latn,sr,sv,th,tr,ug,uk,vi,zh-cn,zh",icons:"flash",onLoad:function(){CKEDITOR.addCss("img.cke_flash{background-image: url("+
CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}")},init:function(a){a.addCommand("flash",new CKEDITOR.dialogCommand("flash"));a.ui.addButton&&a.ui.addButton("Flash",{label:a.lang.common.flash,command:"flash",toolbar:"insert,20"});CKEDITOR.dialog.add("flash",this.path+"dialogs/flash.js");a.addMenuItems&&a.addMenuItems({flash:{label:a.lang.flash.properties,command:"flash",group:"flash"}});
a.on("doubleclick",function(a){var b=a.data.element;b.is("img")&&"flash"==b.data("cke-real-element-type")&&(a.data.dialog="flash")});a.contextMenu&&a.contextMenu.addListener(function(a){if(a&&a.is("img")&&!a.isReadOnly()&&"flash"==a.data("cke-real-element-type"))return{flash:CKEDITOR.TRISTATE_OFF}})},afterInit:function(a){var d=a.dataProcessor;(d=d&&d.dataFilter)&&d.addRules({elements:{"cke:object":function(b){var c=b.attributes;if((!c.classid||!(""+c.classid).toLowerCase())&&!e(b)){for(c=0;c<b.children.length;c++)if("cke:embed"==
b.children[c].name){if(!e(b.children[c]))break;return f(a,b)}return null}return f(a,b)},"cke:embed":function(b){return!e(b)?null:f(a,b)}}},5)}})})();CKEDITOR.tools.extend(CKEDITOR.config,{flashEmbedTagOnly:!1,flashAddEmbedTag:!0,flashConvertOnEdit:!1});