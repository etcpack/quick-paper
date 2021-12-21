/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/index.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var QuickPaper =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('3');
var App =__etcpack__scope_args__.default;

new QuickPaper({
  //挂载点
  el: document.getElementById('root'),
  // 启动页面
  render: function render(createElement) {
    return createElement(App);
  }
}); // import script from '/src/app.paper?QuickPaper&type=script&lang=js&hash=6e4e7abb';
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/quick-paper.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');

__etcpack__scope_bundle__.default= QuickPaper;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/quick-paper/dist/quick-paper.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    "use strict";function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
* quick-paper v1.2.2
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/!function(){var e=Object.prototype.toString;function t(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":e.call(t)}var n=function(e,n){return null!==n&&"object"===_typeof(n)&&e.indexOf(n.nodeType)>-1&&!function(e){if(null===e||"object"!==_typeof(e)||"[object Object]"!=t(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var n=e;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}(n)},r=function(e){var n=_typeof(e);return"string"===n||"object"===n&&null!=e&&!Array.isArray(e)&&"[object String]"===t(e)},o=function(e){if(!function(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(e))return!1;var n=t(e);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n};function i(e){/^[_$]/.test(e)&&console.error("The beginning of _ or $ is not allowed："+e)}var s=1;function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={},i=[];if(!r(e))return{type:"component",options:e,attrs:{},children:[]};for(var s in t)/^@/.test(s)?o[s.replace(/^@/,"q-on:")]=t[s]:/^:/.test(s)?o["q-bind"+s]=t[s]:o[s]=t[s];for(var a,c=0;c<n.length;c++)a=n[c],r(a)?/\{\{[^}]+\}\}/.test(a)?i.push({type:"bindText",content:('" '+a+' "').replace(/\{\{([^}]+)\}\}/g,'"+$1+"')}):i.push({type:"text",content:a}):i.push(a);return{type:"none",tagName:e,attrs:o,children:i}}function c(e){for(var t=(e+"").toLowerCase(),n=(e+"").toUpperCase(),r="",o=!1,i=0;i<e.length;i++)"-"!=e[i]?o?(r+=n[i],o=!1):r+=t[i]:o=!0;return r}var l=Object.prototype.toString;var p=function(e){var t=_typeof(e);return"string"===t||"object"===t&&null!=e&&!Array.isArray(e)&&"[object String]"===function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l.call(e)}(e)},u=function(e){return Array.isArray(e)},f={blankReg:new RegExp("[\\x20\\t\\r\\n\\f]"),blanksReg:/^[\x20\t\r\n\f]{0,}$/,identifier:/^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/},d=["+","-","*","/","%","&","|","!","?",":","[","]","(",")",">","<","="],h=["+","-","*","/","%","&","|","!","?",":",">","<","=","<=",">=","==","===","!=","!=="];function v(e,t,n){t=t.trim();var r=-1,o=null,i=function(){return o=r++<t.length-1?t[r]:null},s=function(e){return t.substring(r,e+r>t.length?t.length:e+r)};i();for(var a=[];!(r>=t.length);)if(d.indexOf(o)>-1)if(["&","|","="].indexOf(o)>-1)if(["==="].indexOf(s(3))>-1)a.push(s(3)),r+=2,i();else{if(!(["&&","||","=="].indexOf(s(2))>-1))throw new Error("Illegal expression : "+t+"\nstep='analyseExpress',index="+r);a.push(s(2)),r+=1,i()}else["!=="].indexOf(s(3))>-1?(a.push(s(3)),r+=2,i()):[">=","<=","!="].indexOf(s(2))>-1?(a.push(s(2)),r+=1,i()):(a.push(o),i());else if(['"',"'"].indexOf(o)>-1){var c="",l=o;for(i();o!=l;){if(r>=t.length)throw new Error("String unclosed error : "+t+"\nstep='analyseExpress',index="+r);c+=o,i()}a.push(c+"@string"),i()}else if(/\d/.test(o)){var u="no";c=o;for(i();r<t.length;){if(/\d/.test(o))c+=o,"error"==u&&(u="yes");else{if("."!=o||"no"!=u)break;c+=o,u="error"}i()}"error"==u&&(c+="0"),a.push(+c)}else if(["null","true"].indexOf(s(4))>-1)a.push({null:null,true:!0}[s(4)]),r+=3,i();else if(["false"].indexOf(s(5))>-1)a.push({false:!1}[s(5)]),r+=4,i();else if(["undefined"].indexOf(s(9))>-1)a.push({undefined:void 0}[s(9)]),r+=8,i();else if(f.blankReg.test(o))do{i()}while(f.blankReg.test(o)&&r<t.length);else{var v=!1;if("."==o&&(v=!0,i()),!f.identifier.test(o))throw new Error("Illegal express : "+t+"\nstep='analyseExpress',index="+r);for(var y=1;r+y<=t.length&&f.identifier.test(s(y));)y+=1;if(v)a.push("["),a.push(s(y-1)+"@string"),a.push("]");else{var _=s(y-1),g=_ in n?n[_]:e[_];a.push(p(g)?g+"@string":g)}r+=y-2,i()}for(var b=0,m=0;m<a.length;m++)["+","-"].indexOf(a[m])>-1&&(0==m||h.indexOf(a[b-1])>-1)?(a[b++]=+(a[m]+a[m+1]),m+=1):a[b++]=a[m];return a.length=b,a}var y=function(e){return"string"==typeof e?e.replace(/@string$/,""):e};function _(e){for(var t,n=0,r=0;r<e.length;r++)"!"==e[r]?e[n]=!e[++r]:e[n]=e[r],n+=1;if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"*"==e[r]?e[n-1]=y(e[n-1])*y(e[++r]):"/"==e[r]?e[n-1]=y(e[n-1])/y(e[++r]):"%"==e[r]?e[n-1]=y(e[n-1])%y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"+"==e[r]?e[n-1]="string"==typeof(t=y(e[n-1])+y(e[++r]))?t+"@string":t:"-"==e[r]?e[n-1]=y(e[n-1])-y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)">"==e[r]?e[n-1]=y(e[n-1])>y(e[++r]):"<"==e[r]?e[n-1]=y(e[n-1])<y(e[++r]):"<="==e[r]?e[n-1]=y(e[n-1])<=y(e[++r]):">="==e[r]?e[n-1]=y(e[n-1])>=y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"=="==e[r]?e[n-1]=y(e[n-1])==y(e[++r]):"==="==e[r]?e[n-1]=y(e[n-1])===y(e[++r]):"!="==e[r]?e[n-1]=y(e[n-1])!=y(e[++r]):"!=="==e[r]?e[n-1]=y(e[n-1])!==y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"&&"==e[r]?(e[n-1]=y(e[n-1])&&y(e[1+r]),r+=1):"||"==e[r]?(e[n-1]=y(e[n-1])||y(e[1+r]),r+=1):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"?"==e[r]?(e[n-1]=y(e[n-1])?y(e[r+1]):y(e[r+3]),r+=3):e[n++]=e[r];if(1==n)return y(e[0]);throw e.length=n,new Error("Unrecognized expression : ["+e.toString()+"]")}var g=function(e){for(var t=!0;t;){t=!1;for(var n=[],r=[],o=!1,i=0;i<e.length;i++)if("["==e[i]&&0!=i&&"]"!=e[i-1]){if(o){n.push("[");for(var s=0;s<r.length;s++)n.push(r[s])}else o=!0;r=[]}else if("]"==e[i]&&o){t=!0;var a=_(r),c=n[n.length-1][a];n[n.length-1]=p(c)?c+"@string":c,o=!1}else o?r.push(e[i]):n.push(e[i]);e=n}return e},b=function(e){for(var t=[],n=[],r=0;r<e.length;r++)"["==e[r]?n=[]:"]"==e[r]?t.push(_(n)):n.push(e[r]);return t};function m(e,t,n){var r,o=function e(t,n,r){if(n.indexOf("(")>-1){for(var o=[],i=[],s=0,a=0;a<n.length;a++)if("("==n[a])s>0&&i.push("("),s+=1;else if(")"==n[a]){if(s>1&&i.push(")"),0==(s-=1)){var c=_(e(t,i));o.push(p(c)?c+"@string":c),i=[]}}else s>0?i.push(n[a]):o.push(n[a]);n=o}return g(n)}(e,t);if("["!=o[0])r=[_(o)];else if("]"==o[o.length-1])r=b(o);else{var i=o.lastIndexOf("]"),s=b(o.slice(0,i+1)),a=o.slice(i+1);a.unshift(function(e,t,n){for(var r=(t[0]in n?n[t[0]]:e[t[0]]),o=1;o<t.length;o++)try{r=r[t[o]]}catch(r){throw console.error({target:e,scope:n,expressArray:t,index:o}),r}return r}(e,s,n)),r=[_(a)]}return r}
/*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */var x=function(e,t,n){arguments.length<3&&(n={});var r=v(e,t,n),o=m(e,r,n);if(o.length>1)throw new Error("Illegal expression : "+t+"\nstep='evalExpress',path="+o+",expressArray="+r);return o[0]};function O(e,t,n){window.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function $(e){if(!(this instanceof $))throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");var t;this._name=e.name||"noname",this.$$lifecycle(e.beforeCreate),this.$$init(e),this.$$lifecycle("created"),t=this._el,n([1,9,11],t)&&this.$$mount()}!function(e){e.prototype.$$init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in this._options=e,this._uid=s++,this._data=o(e.data)?e.data():e.data,this._el=e.el,this.__isMounted=!1,this.__isDestroyed=!1,e.methods)i(t),this[t]=e.methods[t];for(var n in this._data)this[n]=this._data[n];for(var r in this.__componentLib_scope={},e.component)this.__componentLib_scope[r]=e.component[r];for(var a in this.__directiveLib_scope={},e.directive)this.__directiveLib_scope[a]=e.directive[a]}}($),function(e){e.prototype.$$lifecycle=function(e){o(e)?e():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(e)>-1&&o(this._options[e])&&this._options[e].call(this)}}($),function(e){e.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(a),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],function e(t,n,r,o){var i,s=x(t,n);if(s){if("none"==s.type){var a=c(s.tagName);t.__componentLib[a]||t.__componentLib_scope[a]?(s.options=t.__componentLib[a]||t.__componentLib_scope[a],s.type="component"):s.type="tag"}if("component"==s.type){i=document.createElement("quick-paper-component"),r.appendChild(i),s.options.el=i,"render"in s.options||(s.options.render=function(e){return e("quick-paper-component",{},[])}),s.instance=new o(s.options),s.instance.__parent=t;var l={};for(var p in s.attrs)/^data-quickpaper-/.test(p)||(/^:/.test(p)?l[p.replace("q-bind"+p)]=s.attrs[p]:/^@/.test(p)?l[p.replace(p.replace(/^@/,"q-on:"))]=s.attrs[p]:l[p]=s.attrs[p]);var u={attrs:l,instance:s.instance};if("component"==u.instance._name){var f=u.attrs["q-bind:is"];u.instance.lister(o,t[f])}t.__componentTask.push(u)}else if("tag"==s.type){for(var d in i=document.createElement(s.tagName),"Quick-Paper-COMPONENT"==r.nodeName||"Quick-Paper-COMPONENT"==r._nodeName?(b=i,(g=r).parentNode.replaceChild(b,g),t._el=i):r.appendChild(i),s.attrs){var h=s.attrs[d],v=(d+":").split(":"),y=t.__directiveLib[c(v[0])]||t.__directiveLib_scope[c(v[0])];y?t.__directiveTask.push(_objectSpread(_objectSpread({el:i},y),{},{value:h,type:v[1]})):i.setAttribute(d,h)}for(var _=0;_<s.children.length;_++)e(t,n+".children["+_+"]",i,o)}else"text"==s.type?((i=document.createTextNode("")).textContent=s.content.replace(/↵/g,"\n"),r.appendChild(i)):"bindText"==s.type?((i=document.createTextNode("")).textContent=x(t,s.content).replace(/↵/g,"\n"),r.appendChild(i),t.__bindTextTask.push({el:i,content:s.content})):console.error("Type not expected："+s.type);var g,b}else console.error("vnode is undefined!")}(this,"_vnode",this._el,e);for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];if(o(n.inserted)){var r=void 0;try{r=x(this,n.value)}catch(e){}n.inserted(n.el,{target:this,exp:n.value,value:r,type:n.type})}}!function(e){var t=function(t){i(t),o(e[t])&&console.error('Data property "'+t+'" has already been defined as a Method.');var n=e._data[t];e[t]=n,Object.defineProperty(e,t,{get:function(){return n},set:function(t){n=t,e.$$updateComponent()}})};for(var n in e._data)t(n)}(this),this.__isMounted=!0,this.$$lifecycle("mounted")},e.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];if(o(n.update)){var r=void 0;try{r=x(this,n.value)}catch(e){}n.update(n.el,{target:this,exp:n.value,value:r,type:n.type})}}for(var i=0;i<this.__bindTextTask.length;i++){var s=this.__bindTextTask[i],a=x(this,s.content).replace(/↵/g,"\n");s.el.textContent!=a&&(s.el.textContent=a)}for(var c=0;c<this.__componentTask.length;c++){var l=this.__componentTask[c];if("component"==l.instance._name){var p=l.attrs["q-bind:is"];l.instance.lister(e,this[p])}}this.$$lifecycle("updated")},e.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var e=0;e<this.__directiveTask.length;e++){var t=this.__directiveTask[e];o(t.delete)&&t.delete(t.el,{target:this,exp:t.value,value:x(this,t.value),type:t.type})}this.$$lifecycle("destroyed")}}($),function(e){e.prototype.__directiveLib={},e.prototype.__componentLib={},function(e){e.directive=function(t,n){e.prototype.__directiveLib[t]=n},e.component=function(t,n){e.prototype.__componentLib[t]=n}}(e),function(e){e.use=function(t){t.install.call(t,e)}}(e)}($),$.prototype.$$mount=function(){if(!o(this._options.render))throw new Error("options.render needs to be a function");this.$$render=this._options.render,this.$$mountComponent()};var w=function(e,t){r(t.type)&&t.type.length>0?e.getAttribute(t.type)!=t.value&&e.setAttribute(t.type,t.value):e.value==t.value&&e.textContent==t.value||(e.value=e.textContent=t.value)},j={inserted:w,update:w},k={inserted:function(e,t){for(var n=t.type.split("."),r={prevent:!1,stop:!1,once:!1},o=1;o<n.length;o++)r[n[o]]=!0;O(e,n[0],(function o(i){r.stop&&function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}(i),r.prevent&&function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1}(i);var s,a,c,l=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(t.exp),p=[],u=[];if(l[2]){var f=l[2].replace(/^\(/,"").replace(/\)$/,"").trim();f.length>0&&(u=f.split(","))}for(var d=0;d<u.length;d++){var h=u[d];h=x(t.target,h),p.push(h)}p.push(i),t.target[l[1]].apply(t.target,p),r.once&&(s=e,a=n[0],c=o,window.detachEvent?s.detachEvent("on"+a,c):s.removeEventListener(a,c,!1))}))}},T={inserted:function(e,t){e.value=t.value,O(e,"input",(function(){!function(e,t,n,r){arguments.length<3&&(r={});for(var o=v(e,t,r),i=m(e,o,r),s=e,a=0;a<i.length-1;a++)i[a]in s||(s[i[a]]=u(s)?[]:{}),s=s[i[a]];s[i[i.length-1]]=n}(t.target,"."+t.exp,e.value)}))},update:function(e,t){e.value=t.value}};$.directive("qBind",j),$.directive("qOn",k),$.directive("qModel",T),$.component("component",{name:"component",data:function(){return{is:null}},methods:{lister:function(e,t){if(t!=this.is&&null!=t){var n=this._oldComponent;n&&n.$$lifecycle("beforeDestroy"),this.is=t;var r=t;r.el=this._el,r.el._nodeName="Quick-Paper-COMPONENT",this._oldComponent=new e(r),this._el=this._oldComponent._el,n&&(n.$$lifecycle("destroyed"),n=null)}}}}),"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?module.exports=$:window.QuickPaper=$}();
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/app.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('4');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('5');


    script.render=function(createElement){

        return createElement('div',{"class":"doit","quickpaper":"","data-quickpaper-6e4e7abb":""},[createElement('div',{"data-quickpaper-6e4e7abb":""},["这是一个页面"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/app.paper?QuickPaper&type=script&lang=js&hash=6e4e7abb
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {

    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/app.paper?QuickPaper&type=style&lang=css&hash=6e4e7abb
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "[quickpaper][data-quickpaper-6e4e7abb]{\n        font-size: 18px;\n    }\n    div[data-quickpaper-6e4e7abb]{\n        color: red;\n    }";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();