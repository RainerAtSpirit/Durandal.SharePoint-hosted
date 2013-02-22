/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

(function(){var e,t,n;(function(i){function r(e,t){var n,i,r,o,a,s,c,u,l,d,f=t&&t.split("/"),v=w.map,p=v&&v["*"]||{};if(e&&"."===e.charAt(0)&&t){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),u=0;e.length>u;u+=1)if(d=e[u],"."===d)e.splice(u,1),u-=1;else if(".."===d){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((f||p)&&v){for(n=e.split("/"),u=n.length;u>0;u-=1){if(i=n.slice(0,u).join("/"),f)for(l=f.length;l>0;l-=1)if(r=v[f.slice(0,l).join("/")],r&&(r=r[i])){o=r,a=u;break}if(o)break;!s&&p&&p[i]&&(s=p[i],c=u)}!o&&s&&(o=s,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function o(e,t){return function(){return v.apply(i,b.call(arguments,0).concat([e,t]))}}function a(e){return function(t){return r(t,e)}}function s(e){return function(t){h[e]=t}}function c(e){if(g.hasOwnProperty(e)){var t=g[e];delete g[e],y[e]=!0,f.apply(i,t)}if(!h.hasOwnProperty(e)&&!y.hasOwnProperty(e))throw Error("No "+e);return h[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function l(t,n,i){e.onResourceLoad&&t&&e.onResourceLoad({defined:n},{id:t},i)}function d(e){return function(){return w&&w.config&&w.config[e]||{}}}var f,v,p,m,h={},g={},w={},y={},b=[].slice;p=function(e,t){var n,i=u(e),o=i[0];return e=i[1],o&&(o=r(o,t),n=c(o)),o?e=n&&n.normalize?n.normalize(e,a(t)):r(e,t):(e=r(e,t),i=u(e),o=i[0],e=i[1],o&&(n=c(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},m={require:function(e){return o(e)},exports:function(e){var t=h[e];return t!==void 0?t:h[e]={}},module:function(e){return{id:e,uri:"",exports:h[e],config:d(e)}}},f=function(e,t,n,r){var a,u,d,f,v,w,b=[];if(r=r||e,"function"==typeof n){for(t=!t.length&&n.length?["require","exports","module"]:t,v=0;t.length>v;v+=1)if(f=p(t[v],r),u=f.f,"require"===u)b[v]=m.require(e);else if("exports"===u)b[v]=m.exports(e),w=!0;else if("module"===u)a=b[v]=m.module(e);else if(h.hasOwnProperty(u)||g.hasOwnProperty(u)||y.hasOwnProperty(u))b[v]=c(u);else{if(!f.p)throw Error(e+" missing "+u);f.p.load(f.n,o(r,!0),s(u),{}),b[v]=h[u]}d=n.apply(h[e],b),e&&(a&&a.exports!==i&&a.exports!==h[e]?h[e]=a.exports:d===i&&w||(h[e]=d))}else e&&(h[e]=n);l(e,h,b)},e=t=v=function(e,t,n,r,o){return"string"==typeof e?m[e]?m[e](t):c(p(e,t).f):(e.splice||(w=e,t.splice?(e=t,t=n,n=null):e=i),t=t||function(){},"function"==typeof n&&(n=r,r=o),r?f(i,e,t,n):setTimeout(function(){f(i,e,t,n)},15),v)},v.config=function(e){return w=e,v},n=function(e,t,n){t.splice||(n=t,t=[]),g[e]=[e,t,n]},n.amd={jQuery:!0}})(),n("durandal/amd/almond-custom",function(){}),n("main-built",function(){}),n("durandal/system",["require"],function(t){var n,i=!1,r=Object.keys,o=Object.prototype.hasOwnProperty,a=Object.prototype.toString,s=!1;if(Function.prototype.bind&&("object"==typeof console||"function"==typeof console)&&"object"==typeof console.log)try{["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}catch(c){s=!0}e.onResourceLoad=function(e,t){var n=e.defined[t.id];if(n)return"function"==typeof n?(n.prototype.__moduleId__=t.id,void 0):("string"!=typeof n&&(n.__moduleId__=t.id),void 0)};var u=function(){},l=function(){try{if("undefined"!=typeof console&&"function"==typeof console.log)if(window.opera)for(var e=0;arguments.length>e;)console.log("Item "+(e+1)+": "+arguments[e]),e++;else 1==Array.prototype.slice.call(arguments).length&&"string"==typeof Array.prototype.slice.call(arguments)[0]?console.log(""+Array.prototype.slice.call(arguments)):console.log(Array.prototype.slice.call(arguments));else Function.prototype.bind&&!s||"undefined"==typeof console||"object"!=typeof console.log||Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}catch(t){}};return n={version:"1.1.0",noop:u,getModuleId:function(e){return e?e.__moduleId__:null},debug:function(e){return 1!=arguments.length?i:(i=e,i?(this.log=l,this.log("Debug mode enabled.")):(this.log("Debug mode disabled."),this.log=u),void 0)},isArray:function(e){return"[object Array]"===a.call(e)},log:u,defer:function(e){return $.Deferred(e)},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),n="x"==e?t:8|3&t;return n.toString(16)})},acquire:function(){var e=Array.prototype.slice.call(arguments,0);return this.defer(function(n){t(e,function(){var e=arguments;setTimeout(function(){n.resolve.apply(n,e)},1)})}).promise()}},n.keys=r||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)o.call(e,n)&&(t[t.length]=n);return t},n}),n("durandal/viewEngine",["require","./system"],function(e){var t,n=e("./system");return t=$.parseHTML?function(e){return $.parseHTML(e)}:function(e){return $(e).get()},{viewExtension:".html",viewPlugin:"text",isViewUrl:function(e){return-1!==e.indexOf(this.viewExtension,e.length-this.viewExtension.length)},convertViewUrlToViewId:function(e){return e.substring(0,e.length-this.viewExtension.length)},convertViewIdToRequirePath:function(e){return this.viewPlugin+"!"+e+this.viewExtension},parseMarkup:function(e){var n=t(e);if(1==n.length)return n[0];for(var i=[],r=0;n.length>r;r++){var o=n[r];8!=o.nodeType&&i.push(o)}return i.length>1?$(i).wrapAll('<div class="durandal-wrapper"></div').parent().get(0):i[0]},createView:function(e){var t=this,i=this.convertViewIdToRequirePath(e);return n.defer(function(r){n.acquire(i).then(function(n){var i=t.parseMarkup(n);i.setAttribute("data-view",e),r.resolve(i)})}).promise()}}}),n("durandal/viewLocator",["require","./system","./viewEngine"],function(e){function t(e,t){for(var n=0;e.length>n;n++){var i=e[n],r=i.getAttribute("data-view");if(r==t)return i}}function n(e){return(e+"").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1")}var i=e("./system"),r=e("./viewEngine");return{useConvention:function(e,t,i){e=e||"viewmodels",t=t||"views",i=i||t;var r=RegExp(n(e),"gi");this.convertModuleIdToViewId=function(e){return e.replace(r,t)},this.translateViewIdToArea=function(e,t){return t&&"partial"!=t?i+"/"+t+"/"+e:i+"/"+e}},locateViewForObject:function(e,t){var n;if(e.getView&&(n=e.getView()))return this.locateView(n,null,t);if(e.viewUrl)return this.locateView(e.viewUrl,null,t);var r=i.getModuleId(e);return r?this.locateView(this.convertModuleIdToViewId(r),null,t):this.locateView(this.determineFallbackViewId(e),null,t)},convertModuleIdToViewId:function(e){return e},determineFallbackViewId:function(e){var t=/function (.{1,})\(/,n=t.exec(""+e.constructor),i=n&&n.length>1?n[1]:"";return"views/"+i},translateViewIdToArea:function(e){return e},locateView:function(e,n,o){if("string"==typeof e){var a;if(a=r.isViewUrl(e)?r.convertViewUrlToViewId(e):e,n&&(a=this.translateViewIdToArea(a,n)),o){var s=t(o,a);if(s)return i.defer(function(e){e.resolve(s)}).promise()}return r.createView(a)}return i.defer(function(t){t.resolve(e)}).promise()}}}),n("durandal/viewModelBinder",["require","./system"],function(e){function t(e,t,i){if(!t||!e)return n.log("Insufficent Information to Bind",t,e),void 0;if(!t.getAttribute)return n.log("Unexpected View Type",t,e),void 0;var r=t.getAttribute("data-view");try{n.log("Binding",r,e),i()}catch(o){n.log(o.message,r,e)}}var n=e("./system");return{bindContext:function(e,n,i){if(i){var r=e.createChildContext(i);t(r,n,function(){ko.applyBindingsToNode(n,null,r)})}else t(e,n,function(){ko.applyBindings(e,n)})},bind:function(e,n){t(e,n,function(){ko.applyBindings(e,n),e.setView&&e.setView(n)})}}}),n("durandal/viewModel",["require","./system"],function(e){function t(e){return void 0==e&&(e={}),e.closeOnDeactivate||(e.closeOnDeactivate=s.defaults.closeOnDeactivate),e.beforeActivate||(e.beforeActivate=s.defaults.beforeActivate),e.afterDeactivate||(e.afterDeactivate=s.defaults.afterDeactivate),e.interpretResponse||(e.interpretResponse=s.defaults.interpretResponse),e.areSameItem||(e.areSameItem=s.defaults.areSameItem),e}function n(e,t,n,i,r){if(e&&e.deactivate){c.log("Deactivating",e);var o=e.deactivate(t);o&&o.then?o.then(function(){n.afterDeactivate(e,t,r),i.resolve(!0)}):(n.afterDeactivate(e,t,r),i.resolve(!0))}else e&&n.afterDeactivate(e,t,r),i.resolve(!0)}function i(e,t,n,i){if(e)if(e.activate){c.log("Activating",e);var r=e.activate(i);r&&r.then?r.then(function(){t(e),n(!0)}):(t(e),n(!0))}else t(e),n(!0);else n(!0)}function r(e,t,n){return c.defer(function(i){if(e&&e.canDeactivate){var r=e.canDeactivate(t);r.then?r.then(function(e){i.resolve(n.interpretResponse(e))}):i.resolve(n.interpretResponse(r))}else i.resolve(!0)}).promise()}function o(e,t,n,i){return c.defer(function(r){if(e==t())return r.resolve(!0),void 0;if(e&&e.canActivate){var o=e.canActivate(i);o.then?o.then(function(e){r.resolve(n.interpretResponse(e))}):r.resolve(n.interpretResponse(o))}else r.resolve(!0)}).promise()}function a(e,a){var s=ko.observable(null);a=t(a);var u=ko.computed({read:function(){return s()},write:function(e){u.viaSetter=!0,u.activateItem(e)}});return u.settings=a,a.activator=u,u.isActivating=ko.observable(!1),u.canDeactivateItem=function(e,t){return r(e,t,a)},u.deactivateItem=function(e,t){return c.defer(function(i){u.canDeactivateItem(e,t).then(function(r){r?n(e,t,a,i,s):(u.notifySubscribers(),i.resolve(!1))})})},u.canActivateItem=function(e,t){return o(e,s,a,t)},u.activateItem=function(e,t){var r=u.viaSetter;return u.viaSetter=!1,c.defer(function(o){if(u.isActivating())return o.resolve(!1),void 0;u.isActivating(!0);var l=s();return a.areSameItem(l,e,t)?(u.isActivating(!1),o.resolve(!0),void 0):(u.canDeactivateItem(l,a.closeOnDeactivate).then(function(d){d?u.canActivateItem(e,t).then(function(d){d?c.defer(function(e){n(l,a.closeOnDeactivate,a,e)}).promise().then(function(){e=a.beforeActivate(e),i(e,s,function(e){u.isActivating(!1),o.resolve(e)},t)}):(r&&u.notifySubscribers(),u.isActivating(!1),o.resolve(!1))}):(r&&u.notifySubscribers(),u.isActivating(!1),o.resolve(!1))}),void 0)}).promise()},u.canActivate=function(){var t;return e?(t=e,e=!1):t=u(),u.canActivateItem(t)},u.activate=function(){var t;return e?(t=e,e=!1):t=u(),u.activateItem(t)},u.canDeactivate=function(e){return u.canDeactivateItem(u(),e)},u.deactivate=function(e){return u.deactivateItem(u(),e)},u.includeIn=function(e){e.canActivate=function(){return u.canActivate()},e.activate=function(){return u.activate()},e.canDeactivate=function(e){return u.canDeactivate(e)},e.deactivate=function(e){return u.deactivate(e)}},a.includeIn?u.includeIn(a.includeIn):e&&u.activate(),u.forItems=function(e){a.closeOnDeactivate=!1,a.determineNextItemToActivate=function(e,t){var n=t-1;return-1==n&&e.length>1?e[1]:n>-1&&e.length-1>n?e[n]:null},a.beforeActivate=function(t){var n=u();if(t){var i=e.indexOf(t);-1==i?e.push(t):t=e()[i]}else t=a.determineNextItemToActivate(e,n?e.indexOf(n):0);return t},a.afterDeactivate=function(t,n){n&&e.remove(t)};var t=u.canDeactivate;u.canDeactivate=function(n){return n?c.defer(function(t){function i(){for(var e=0;o.length>e;e++)if(!o[e])return t.resolve(!1),void 0;t.resolve(!0)}for(var r=e(),o=[],a=0;r.length>a;a++)u.canDeactivateItem(r[a],n).then(function(e){o.push(e),o.length==r.length&&i()})}).promise():t()};var n=u.deactivate;return u.deactivate=function(t){return t?c.defer(function(n){function i(i){u.deactivateItem(i,t).then(function(){o++,e.remove(i),o==a&&n.resolve()})}for(var r=e(),o=0,a=r.length,s=0;a>s;s++)i(r[s])}).promise():n()},u},u}var s,c=e("./system");return s={defaults:{closeOnDeactivate:!0,interpretResponse:function(e){if("string"==typeof e){var t=e.toLowerCase();return"yes"==t||"ok"==t}return e},areSameItem:function(e,t){return e==t},beforeActivate:function(e){return e},afterDeactivate:function(e,t,n){t&&n&&n(null)}},activator:a}}),n("durandal/composition",["require","./viewLocator","./viewModelBinder","./viewEngine","./system","./viewModel"],function(e){function t(e){return e.model&&e.model.activate&&(f.activateDuringComposition&&void 0==e.activate||e.activate)}function n(e,n){t(e)?u.activator().activateItem(e.model).then(function(e){e&&n()}):n()}function i(e){for(var t=[],n={childElements:t,activeView:null},i=ko.virtualElements.firstChild(e);i;)1==i.nodeType&&(t.push(i),i.getAttribute(d)&&(n.activeView=i)),i=ko.virtualElements.nextSibling(i);return n}function r(e,t,n){n.activeView&&n.activeView.removeAttribute(d),t&&(n.model&&n.model.viewAttached&&(n.composingNewView||n.alwaysAttachView)&&n.model.viewAttached(t),t.setAttribute(d,!0)),n.afterCompose&&n.afterCompose(e,t,n)}var o=e("./viewLocator"),a=e("./viewModelBinder"),s=e("./viewEngine"),c=e("./system"),u=e("./viewModel"),l={},d="data-active-view",f={activateDuringComposition:!1,convertTransitionToModuleId:function(e){return"durandal/transitions/"+e},switchContent:function(e,t,n){if(n.transition=n.transition||this.defaultTransitionName,"string"==typeof n.transition&&t){var i=this.convertTransitionToModuleId(n.transition);c.acquire(i).then(function(i){n.transition=i,i(e,t,n).then(function(){r(e,t,n)})})}else n.cacheViews&&n.activeView&&$(n.activeView).css("display","none"),t?n.cacheViews?n.composingNewView?(n.viewElements.push(t),ko.virtualElements.prepend(e,t)):$(t).css("display",""):(ko.virtualElements.emptyNode(e),ko.virtualElements.prepend(e,t)):n.cacheViews||ko.virtualElements.emptyNode(e),r(e,t,n)},bindAndShow:function(e,t,i){i.composingNewView=i.cacheViews?-1==i.viewElements.indexOf(t):!0,n(i,function(){if(i.beforeBind&&i.beforeBind(e,t,i),i.preserveContext&&i.bindingContext)a.bindContext(i.bindingContext,t,i.model);else if(t){var n=i.model||l,r=ko.dataFor(t);r!=n&&(i.composingNewView||console.log("Warning...composing an existing view against a different model may go badly for you."),a.bind(n,t))}f.switchContent(e,t,i)})},defaultStrategy:function(e){return o.locateViewForObject(e.model,e.viewElements)},getSettings:function(e){var t={},n=ko.utils.unwrapObservable(e())||{};if("string"==typeof n)return n;var i=c.getModuleId(n);if(i)return{model:n};for(var r in n)if("string"==typeof r){var o=ko.utils.unwrapObservable(n[r]);t[r]=o}return t},executeStrategy:function(e,t){t.strategy(t).then(function(n){f.bindAndShow(e,n,t)})},inject:function(e,t){return t.model?t.view?(o.locateView(t.view,t.area,t.viewElements).then(function(n){f.bindAndShow(e,n,t)}),void 0):((void 0===t.view||t.view)&&(t.strategy||(t.strategy=this.defaultStrategy),"string"==typeof t.strategy?c.acquire(t.strategy).then(function(n){t.strategy=n,f.executeStrategy(e,t)}):this.executeStrategy(e,t)),void 0):(this.bindAndShow(e,null,t),void 0)},compose:function(e,t,n){"string"==typeof t&&(t=s.isViewUrl(t)?{view:t}:{model:t});var r=c.getModuleId(t);r&&(t={model:t});var a=i(e);t.bindingContext=n,t.activeView=a.activeView,t.cacheViews&&!t.viewElements&&(t.viewElements=a.childElements),t.model?"string"==typeof t.model?c.acquire(t.model).then(function(n){t.model="function"==typeof n?new n(e,t):n,f.inject(e,t)}):f.inject(e,t):t.view?(t.area=t.area||"partial",t.preserveContext=!0,o.locateView(t.view,t.area,t.viewElements).then(function(n){f.bindAndShow(e,n,t)})):this.bindAndShow(e,null,t)}};return ko.bindingHandlers.compose={update:function(e,t,n,i,r){var o=f.getSettings(t);f.compose(e,o,r)}},ko.virtualElements.allowedBindings.compose=!0,f}),n("durandal/widget",["require","./system","./composition"],function(e){var t=e("./system"),n=e("./composition"),i="data-part",r="["+i+"]",o={},a={},s={getParts:function(e){var n={};t.isArray(e)||(e=[e]);for(var o=0;e.length>o;o++){var a=e[o];if(a.getAttribute){var s=a.getAttribute(i);s&&(n[s]=a);for(var c=$(r,a),u=0;c.length>u;u++){var l=c.get(u);n[l.getAttribute(i)]=l}}}return n},getSettings:function(e){var t={},n=ko.utils.unwrapObservable(e())||{};if("string"==typeof n)t=n;else for(var i in n)if("string"==typeof i){var r=ko.utils.unwrapObservable(n[i]);t[i]=r}return t},registerKind:function(e){ko.bindingHandlers[e]={init:function(){return{controlsDescendantBindings:!0}},update:function(t,n,i,r,o){var a=s.getSettings(n);a.kind=e,s.create(t,a,o)}},ko.virtualElements.allowedBindings[e]=!0},mapKind:function(e,t,n){t&&(a[e]=t),n&&(o[e]=n)},convertKindToModuleId:function(e){return o[e]||"durandal/widgets/"+e+"/controller"},convertKindToViewId:function(e){return a[e]||"durandal/widgets/"+e+"/view"},beforeBind:function(e,t){var n=s.getParts(e),i=s.getParts(t);for(var r in n)$(i[r]).replaceWith(n[r])},createCompositionSettings:function(e){return e.model||(e.model=this.convertKindToModuleId(e.kind)),e.view||(e.view=this.convertKindToViewId(e.kind)),e.preserveContext=!0,e.beforeBind=this.beforeBind,e},create:function(e,t,i){"string"==typeof t&&(t={kind:t});var r=s.createCompositionSettings(t);n.compose(e,r,i)}};return ko.bindingHandlers.widget={init:function(){return{controlsDescendantBindings:!0}},update:function(e,t,n,i,r){var o=s.getSettings(t);s.create(e,o,r)}},ko.virtualElements.allowedBindings.widget=!0,s}),n("durandal/modalDialog",["require","./composition","./system","./viewModel"],function(e){function t(e){return i.defer(function(t){"string"==typeof e?i.acquire(e).then(function(e){"function"==typeof e?t.resolve(new e):t.resolve(e)}):t.resolve(e)}).promise()}var n=e("./composition"),i=e("./system"),r=e("./viewModel"),o={},a=0,s={currentZIndex:1e3,getNextZIndex:function(){return++this.currentZIndex},isModalOpen:function(){return a>0},getContext:function(e){return o[e||"default"]},addContext:function(e,t){t.name=e,o[e]=t;var n="show"+e.substr(0,1).toUpperCase()+e.substr(1);this[n]=function(t,n){return this.show(t,n,e)}},createCompositionSettings:function(e,t){var n={model:e,activate:!1};return t.afterCompose&&(n.afterCompose=t.afterCompose),n},show:function(e,s,c){var u=this,l=o[c||"default"];return i.defer(function(i){t(e).then(function(e){var t=r.activator();t.activateItem(e,s).then(function(r){if(r){var o=e.modal={owner:e,context:l,activator:t,close:function(n){t.deactivateItem(e,!0).then(function(t){t&&(a--,l.removeHost(o),delete e.modal,i.resolve(n))})}};o.settings=u.createCompositionSettings(e,l),l.addHost(o),a++,n.compose(o.host,o.settings)}else i.resolve(!1)})})}).promise()}};return s.addContext("default",{blockoutOpacity:.2,removeDelay:200,addHost:function(e){var t=$("body"),n=$('<div class="modalBlockout"></div>').css({"z-index":s.getNextZIndex(),opacity:this.blockoutOpacity}).appendTo(t),i=$('<div class="modalHost"></div>').css({"z-index":s.getNextZIndex()}).appendTo(t);if(e.host=i.get(0),e.blockout=n.get(0),!s.isModalOpen()){e.oldBodyMarginRight=$("body").css("margin-right");var r=$("html"),o=t.outerWidth(!0),a=r.scrollTop();$("html").css("overflow-y","hidden");var c=$("body").outerWidth(!0);t.css("margin-right",c-o+parseInt(e.oldBodyMarginRight)+"px"),r.scrollTop(a),$("#simplemodal-overlay").css("width",c+"px")}},removeHost:function(e){if($(e.host).css("opacity",0),$(e.blockout).css("opacity",0),setTimeout(function(){$(e.host).remove(),$(e.blockout).remove()},this.removeDelay),!s.isModalOpen()){var t=$("html"),n=t.scrollTop();t.css("overflow-y","").scrollTop(n),$("body").css("margin-right",e.oldBodyMarginRight)}},afterCompose:function(e,t,n){var i=$(t),r=i.width(),o=i.height();i.css({"margin-top":""+-o/2+"px","margin-left":""+-r/2+"px"}),$(n.model.modal.host).css("opacity",1),$(t).hasClass("autoclose")&&$(n.model.modal.blockout).click(function(){n.model.modal.close()}),$(".autofocus",t).each(function(){$(this).focus()})}}),s}),n("durandal/events",["require","./system"],function(e){var t=e("./system"),n=/\s+/,i=function(){},r=function(e,t){this.owner=e,this.events=t};return r.prototype.then=function(e,t){return this.callback=e||this.callback,this.context=t||this.context,this.callback?(this.owner.on(this.events,this.callback,this.context),this):this},r.prototype.on=r.prototype.then,r.prototype.off=function(){return this.owner.off(this.events,this.callback,this.context),this},i.prototype.on=function(e,t,i){var o,a,s;if(t){for(o=this.callbacks||(this.callbacks={}),e=e.split(n);a=e.shift();)s=o[a]||(o[a]=[]),s.push(t,i);return this}return new r(this,e)},i.prototype.off=function(e,i,r){var o,a,s,c;if(!(a=this.callbacks))return this;if(!(e||i||r))return delete this.callbacks,this;for(e=e?e.split(n):t.keys(a);o=e.shift();)if((s=a[o])&&(i||r))for(c=s.length-2;c>=0;c-=2)i&&s[c]!==i||r&&s[c+1]!==r||s.splice(c,2);else delete a[o];return this},i.prototype.trigger=function(e){var t,i,r,o,a,s,c,u;if(!(i=this.callbacks))return this;for(u=[],e=e.split(n),o=1,a=arguments.length;a>o;o++)u[o-1]=arguments[o];for(;t=e.shift();){if((c=i.all)&&(c=c.slice()),(r=i[t])&&(r=r.slice()),r)for(o=0,a=r.length;a>o;o+=2)r[o].apply(r[o+1]||this,u);if(c)for(s=[t].concat(u),o=0,a=c.length;a>o;o+=2)c[o].apply(c[o+1]||this,s)}return this},i.prototype.proxy=function(e){var t=this;return function(n){t.trigger(e,n)}},i.includeIn=function(e){e.on=i.prototype.on,e.off=i.prototype.off,e.trigger=i.prototype.trigger,e.proxy=i.prototype.proxy},i}),n("durandal/app",["require","./system","./viewEngine","./composition","./widget","./modalDialog","./events"],function(e){var t,n=e("./system"),i=e("./viewEngine"),r=e("./composition"),o=(e("./widget"),e("./modalDialog")),a=e("./events"),s={showModal:function(e,t,n){return o.show(e,t,n)},showMessage:function(e,n,i){return o.show(new t(e,n,i))},start:function(){return n.defer(function(e){$(function(){n.log("Starting Application"),n.acquire("./messageBox").then(function(i){t=i,e.resolve(),n.log("Started Application")})})}).promise()},setRoot:function(e,t,n){var o,a={activate:!0,transition:t};o=n&&"string"!=typeof n?n:document.getElementById(n||"applicationHost"),"string"==typeof e?i.isViewUrl(e)?a.view=e:a.model=e:a.model=e,r.compose(o,a)},adaptToDevice:function(){document.body.ontouchmove&&(document.body.ontouchmove=function(e){e.preventDefault()})}};return a.includeIn(s),s}),n("durandal/plugins/router",["require","../system","../viewModel"],function(e){function t(e,t,n){t.routeInfo=e,t.router=u,v.log("Activating Route",e,n,t),x.activateItem(n,t).then(function(i){i?(k(e),u.onNavigationComplete(e,t,n),d=n,l=c.last_location[1].replace("/","")):(b=!0,v.log("Cancelling Navigation"),c.setLocation(l),b=!1,y(!1)),u.dfd&&(w(!0),u.dfd.resolve(),delete u.dfd)})}function n(){return b||c.last_location[1].replace("/","")==l}function i(e,i){var r=m[e];if(!n()){if(!r){if(!u.autoConvertRouteToModuleId)return u.handleInvalidRoute(e,i),void 0;r={moduleId:u.autoConvertRouteToModuleId(e,i),name:u.convertRouteToName(e)}}y(!0),v.acquire(r.moduleId).then(function(e){"function"==typeof e?t(r,i,new e):t(r,i,e)})}}function r(){i(f,this.params||{})}function o(){i(""+this.app.last_route.path,this.params||{})}function a(){var e,t=this.params||{};if(u.autoConvertRouteToModuleId){var n=this.path.split("#/");if(2==n.length){var r=n[1].split("/");return e=r[0],t.splat=r.splice(1),i(e,t),void 0}}u.handleInvalidRoute(this.app.last_location[1],t)}function s(e){return u.prepareRouteInfo(e),m[e.url]=e,h.push(e),e.visible&&(e.isActive=ko.computed(function(){return w()&&x()&&x().__moduleId__==e.moduleId}),g.push(e)),e}var c,u,l,d,f,v=e("../system"),p=e("../viewModel"),m={},h=ko.observableArray([]),g=ko.observableArray([]),w=ko.observable(!1),y=ko.observable(!1),b=!1,x=p.activator(),k=ko.observable();return x.settings.areSameItem=function(){return!1},u={ready:w,allRoutes:h,visibleRoutes:g,isNavigating:y,activeItem:x,activeRoute:k,afterCompose:function(){setTimeout(function(){y(!1)},10)},useConvention:function(e){e=null==e?"viewmodels":e,e&&(e+="/"),u.convertRouteToModuleId=function(t){return e+u.stripParameter(t)}},stripParameter:function(e){var t=e.indexOf(":"),n=t>0?t-1:e.length;return e.substring(0,n)},handleInvalidRoute:function(e,t){v.log("No Route Found",e,t)},onNavigationComplete:function(e){document.title=e.name},navigateBack:function(){window.history.back()},navigateTo:function(e){c.setLocation(e)},replaceLocation:function(e){window.location.replace(e)},convertRouteToName:function(e){var t=u.stripParameter(e);return t.substring(0,1).toUpperCase()+t.substring(1)},convertRouteToModuleId:function(e){return u.stripParameter(e)},prepareRouteInfo:function(e){e.url instanceof RegExp||(e.name=e.name||u.convertRouteToName(e.url),e.moduleId=e.moduleId||u.convertRouteToModuleId(e.url),e.hash=e.hash||"#/"+e.url),e.caption=e.caption||e.name,e.settings=e.settings||{}},mapAuto:function(e){e=e||"viewmodels",e+="/",u.autoConvertRouteToModuleId=function(t){return e+u.stripParameter(t)}},mapNav:function(e,t,n){return"string"==typeof e?this.mapRoute(e,t,n,!0):(e.visible=!0,s(e))},mapRoute:function(e,t,n,i){return"string"==typeof e?s({url:e,moduleId:t,name:n,visible:i}):s(e)},map:function(e){if(!v.isArray(e))return s(e);for(var t=[],n=0;e.length>n;n++)t.push(s(e[n]));return t},activate:function(e){return v.defer(function(t){var n;u.dfd=t,f=e,c=Sammy(function(e){for(var t=h(),i=0;t.length>i;i++){var s=t[i];e.get(s.url,o),n=this.routes.get[i],m[""+n.path]=s}e.get(/\#\/(.*)/,a),e.get("",r)}),c._checkFormSubmission=function(){return!1},c.log=function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("Sammy"),v.log.apply(v,e)},c.run()}).promise()}}}),e.config({paths:{text:"durandal/amd/text"}}),n("main",["require","durandal/app","durandal/viewLocator","durandal/system","durandal/plugins/router"],function(e){var t=e("durandal/app"),n=e("durandal/viewLocator"),i=(e("durandal/system"),e("durandal/plugins/router"));t.start().then(function(){n.useConvention(),i.useConvention(),i.mapNav("welcome"),i.mapNav("flickr"),t.adaptToDevice(),t.setRoot("viewmodels/shell","entrance")})}),n("durandal/http",[],function(){return{defaultJSONPCallbackParam:"callback",get:function(e,t){return $.ajax(e,{data:t})},jsonp:function(e,t,n){return-1==e.indexOf("=?")&&(n=n||this.defaultJSONPCallbackParam,e+=-1==e.indexOf("?")?"?":"&",e+=n+"=?"),$.ajax({url:e,dataType:"jsonp",data:t})},post:function(e,t){return $.ajax({url:e,data:JSON.stringify(t),type:"POST",contentType:"application/json",dataType:"json"})}}}),n("text",["module"],function(e){var n,i,r=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],o=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,s="undefined"!=typeof location&&location.href,c=s&&location.protocol&&location.protocol.replace(/\:/,""),u=s&&location.hostname,l=s&&(location.port||void 0),d=[],f=e.config&&e.config()||{};return n={version:"2.0.3",strip:function(e){if(e){e=e.replace(o,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:f.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){n=r[t];try{e=new ActiveXObject(n)}catch(i){}if(e){r=[n];break}}return e},parseName:function(e){var t=!1,n=e.indexOf("."),i=e.substring(0,n),r=e.substring(n+1,e.length);return n=r.indexOf("!"),-1!==n&&(t=r.substring(n+1,r.length),t="strip"===t,r=r.substring(0,n)),{moduleName:i,ext:r,strip:t}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,i,r){var o,a,s,c=n.xdRegExp.exec(e);return c?(o=c[2],a=c[3],a=a.split(":"),s=a[1],a=a[0],!(o&&o!==t||a&&a.toLowerCase()!==i.toLowerCase()||(s||a)&&s!==r)):!0},finishLoad:function(e,t,i,r){i=t?n.strip(i):i,f.isBuild&&(d[e]=i),r(i)},load:function(e,t,i,r){if(r.isBuild&&!r.inlineText)return i(),void 0;f.isBuild=r.isBuild;var o=n.parseName(e),a=o.moduleName+"."+o.ext,d=t.toUrl(a),v=f.useXhr||n.useXhr;!s||v(d,c,u,l)?n.get(d,function(t){n.finishLoad(e,o.strip,t,i)},function(e){i.error&&i.error(e)}):t([a],function(e){n.finishLoad(o.moduleName+"."+o.ext,o.strip,e,i)})},write:function(e,t,i){if(d.hasOwnProperty(t)){var r=n.jsEscape(d[t]);i.asModule(e+"!"+t,"define(function () { return '"+r+"';});\n")}},writeFile:function(e,t,i,r,o){var a=n.parseName(t),s=a.moduleName+"."+a.ext,c=i.toUrl(a.moduleName+"."+a.ext)+".js";n.load(s,i,function(){var t=function(e){return r(c,e)};t.asModule=function(e,t){return r.asModule(e,c,t)},n.write(e,s,t,o)},o)}},"node"===f.env||!f.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(i=t.nodeRequire("fs"),n.get=function(e,t){var n=i.readFileSync(e,"utf8");0===n.indexOf("﻿")&&(n=n.substring(1)),t(n)}):"xhr"===f.env||!f.env&&n.createXhr()?n.get=function(e,t,i){var r=n.createXhr();r.open("GET",e,!0),f.onXhr&&f.onXhr(r,e),r.onreadystatechange=function(){var n,o;4===r.readyState&&(n=r.status,n>399&&600>n?(o=Error(e+" HTTP status: "+n),o.xhr=r,i(o)):t(r.responseText))},r.send(null)}:("rhino"===f.env||!f.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java)&&(n.get=function(e,t){var n,i,r="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),r)),c="";try{for(n=new java.lang.StringBuffer,i=s.readLine(),i&&i.length()&&65279===i.charAt(0)&&(i=i.substring(1)),n.append(i);null!==(i=s.readLine());)n.append(a),n.append(i);c=""+n+""}finally{s.close()}t(c)}),n}),n("text!durandal/messageBox.html",[],function(){return'<div class="messageBox">\r\n    <div class="modal-header">\r\n        <h3 data-bind="html: title"></h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p class="message" data-bind="html: message"></p>\r\n    </div>\r\n    <div class="modal-footer" data-bind="foreach: options">\r\n        <button class="btn" data-bind="click: function () { $parent.selectOption($data); }, html: $data, css: { \'btn-primary\': $index() == 0, autofocus: $index() == 0 }"></button>\r\n    </div>\r\n</div>'}),n("durandal/messageBox",[],function(){var e=function(t,n,i){this.message=t,this.title=n||e.defaultTitle,this.options=i||e.defaultOptions};return e.prototype.selectOption=function(e){this.modal.close(e)},e.defaultTitle="Application",e.defaultOptions=["Ok"],e}),n("durandal/transitions/entrance",["require","../system"],function(e){var t=e("../system"),n=100,i=function(e,i,r){return t.defer(function(t){function o(){t.resolve()}function a(){r.cacheViews?r.composingNewView&&ko.virtualElements.prepend(e,i):(ko.virtualElements.emptyNode(e),ko.virtualElements.prepend(e,i));var t={marginLeft:"20px",marginRight:"-20px",opacity:0,display:"block"},n={marginRight:0,marginLeft:0,opacity:1};$(i).css(t),$(i).animate(n,c,"swing",o)}if(r.keepScrollPosition||$(document).scrollTop(0),i){var s=$(r.activeView),c=r.duration||500;s.length?s.fadeOut(n,a):a()}else r.activeView?$(r.activeView).fadeOut(n,function(){r.cacheViews||ko.virtualElements.emptyNode(e),o()}):(r.cacheViews||ko.virtualElements.emptyNode(e),o())}).promise()};return i}),n("viewmodels/flickr",["require","durandal/http","durandal/app"],function(e){var t=e("durandal/http"),n=e("durandal/app");return{displayName:"Flickr",images:ko.observableArray([]),activate:function(){if(!(this.images().length>0)){var e=this;return t.jsonp("http://api.flickr.com/services/feeds/photos_public.gne",{tags:"mount ranier",tagmode:"any",format:"json"},"jsoncallback").then(function(t){e.images(t.items)})}},select:function(e){e.viewUrl="views/detail",n.showModal(e)},canDeactivate:function(){return n.showMessage("Are you sure you want to leave this page?","Navigate",["Yes","No"])}}}),n("viewmodels/shell",["require","durandal/plugins/router","durandal/app"],function(e){var t=e("durandal/plugins/router"),n=e("durandal/app");return{router:t,search:function(){n.showMessage("Search not yet implemented...")},activate:function(){return t.activate("welcome")}}}),n("viewmodels/welcome",["require"],function(){return{displayName:"Welcome to the Durandal Starter Project!",description:"Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.",features:["Clean MV* Architecture","JS & HTML Modularity","Simple App Lifecycle","Eventing, Modals, Message Boxes, etc.","Navigation & Screen State Management","Consistent Async Programming w/ Promises","App Bundling and Optimization","Use any Backend Technology","Built on top of jQuery, Knockout & RequireJS","Integrates with other libraries such as SammyJS & Bootstrap","Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets)."]}
}),n("text!views/detail.html",[],function(){return'<div class="messageBox autoclose" style="max-width: 425px">\r\n    <div class="modal-header">\r\n        <h3>Details</h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p data-bind="html: description"></p>\r\n    </div>\r\n</div>'}),n("text!views/flickr.html",[],function(){return'<section>\r\n    <h2 data-bind="html: displayName"></h2>\r\n    <div class="row-fluid">\r\n        <ul class="thumbnails" data-bind="foreach: images">\r\n            <li>\r\n                <a href="#" class="thumbnail" data-bind="click:$parent.select">\r\n                    <img style="width: 260px; height: 180px;" data-bind="attr: { src: media.m }"/>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>'}),n("text!views/shell.html",[],function(){return'<div>\r\n    <div class="navbar">\r\n        <div class="navbar-inner">\r\n            <a class="brand" data-bind="attr: { href: router.visibleRoutes()[0].hash }">\r\n                <i class="icon-home"></i>\r\n                <span>Durandal</span>\r\n            </a>\r\n            <ul class="nav" data-bind="foreach: router.visibleRoutes">\r\n                <li data-bind="css: { active: isActive }">\r\n                    <a data-bind="attr: { href: hash }, html: name"></a>\r\n                </li>\r\n            </ul>\r\n            <div class="loader pull-right" data-bind="css: { active: router.isNavigating }">\r\n                <i class="icon-spinner icon-2x icon-spin"></i>\r\n            </div>\r\n            <form class="navbar-search pull-right" data-bind="submit:search">\r\n                <input type="text" class="search-query" placeholder="Search">\r\n            </form>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class="container-fluid page-host">\r\n        <!--ko compose: { \r\n            model: router.activeItem, //wiring the router\r\n            afterCompose: router.afterCompose, //wiring the router\r\n            transition:\'entrance\', //use the \'entrance\' transition when switching views\r\n            cacheViews:true //telling composition to keep views in the dom, and reuse them (only a good idea with singleton view models)\r\n        }--><!--/ko-->\r\n    </div>\r\n</div>'}),n("text!views/welcome.html",[],function(){return'<section>\r\n    <h2 data-bind="html:displayName"></h2>\r\n    <blockquote data-bind="html:description"></blockquote>\r\n    <h3>Features</h3>\r\n    <ul data-bind="foreach: features">\r\n        <li data-bind="html: $data"></li>\r\n    </ul>\r\n    <div class="alert alert-success">\r\n      <h4>Read Me Please</h4>\r\n        For more information about this starter project\'s architecture, please see the readme file located in the root of the project.\r\n        For general documenation please visit <a href="https://github.com/EisenbergEffect/Durandal/wiki">the wiki</a> and if you can\'t find \r\n        answers to your questions there, we hope you will join our <a href="https://groups.google.com/forum/?fromgroups#!forum/durandaljs">google group</a>.\r\n    </div>\r\n</section>'}),t(["main"])})();