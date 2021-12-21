module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("react")},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),i=t(0),s=t.n(i),c=(t(3),function(e){var n=e.id,t=void 0===n?"nc":n,i=e.width,s=void 0===i?"300px":i,c=e.height,a=void 0===c?"34px":c,f=e.onSuccess,u=void 0===f?function(e){console.log("前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。",e)}:f,l=e.onFail,d=void 0===l?function(e){console.log("滑动验证失败时触发该回调参数。",e)}:l,p=e.onError,v=void 0===p?function(e){console.log("验证码加载出现异常时触发该回调参数。",e)}:p,h=function(){AWSC.use("nc",(function(e,n){window.nc=n.init({appkey:"CF_APP_1",scene:"register",renderTo:"nc",success:function(e){u(e)},fail:function(e){d(e)},error:function(e){v(e)}})}))};return Object(r.useEffect)((function(){if(document.getElementById("awsc"))document.getElementById(t).innerHTML="",h();else{var e=document.createElement("script");e.id="awsc",e.src="https://g.alicdn.com/AWSC/AWSC/awsc.js",e.async=!1,document.head.appendChild(e),e.onload=function(){h()}}}),[]),o.a.createElement("div",{className:"slide-verify",style:{width:s,height:a}},o.a.createElement("div",{id:t}))});c.propTypes={id:s.a.string,width:s.a.string,height:s.a.string,onSuccess:s.a.func,onFail:s.a.func,onerror:s.a.func},n.default=c},function(e,n,t){var r=t(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0};t(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".slide-verify {\n  position: relative;\n}\n.slide-verify * {\n  box-sizing: border-box;\n}\n.slide-verify .nc_scale {\n  border: 1px solid #e8e8e8;\n  overflow: hidden;\n}\n.slide-verify .nc_iconfont {\n  border: none !important;\n}\n.slide-verify .nc_iconfont,\n.slide-verify .nc-lang-cnt {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.slide-verify .nc_iconfont,\n.slide-verify .nc_1_nocaptcha,\n.slide-verify .sm-pop-inner,\n.slide-verify .nc_scale,\n.slide-verify .nc_wrapper,\n.slide-verify .nc_2_nocaptcha,\n.slide-verify .nc-lang-cnt {\n  height: 100% !important;\n}\n",""])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[t].concat(i).concat([o]).join("\n")}var s;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var n={};return function(t){if(void 0===n[t]){var r=e.call(this,t);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[t]=r}return n[t]}}((function(e){return document.querySelector(e)})),a=null,f=0,u=[],l=t(7);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(m(r.parts[s],n))}else{var c=[];for(s=0;s<r.parts.length;s++)c.push(m(r.parts[s],n));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(c):t.push(r[s]={id:s,parts:[c]})}return t}function v(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertInto+" "+e.insertAt.before);t.insertBefore(n,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function y(e){var n=document.createElement("style");return e.attrs.type="text/css",b(n,e.attrs),v(e,n),n}function b(e,n){Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])}))}function m(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var s=f++;t=a||(a=y(n)),r=x.bind(null,t,s,!1),o=x.bind(null,t,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(n,e.attrs),v(e,n),n}(n),r=S.bind(null,t,n),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=y(n),r=j.bind(null,t),o=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return d(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var s=t[o];(c=i[s.id]).refs--,r.push(c)}e&&d(p(e,n),n);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete i[c.id]}}}};var g,w=(g=[],function(e,n){return g[e]=n,g.filter(Boolean).join("\n")});function x(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function j(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function S(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=l(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(s),c&&URL.revokeObjectURL(c)}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,(function(e,n){return n})).replace(/^'(.*)'$/,(function(e,n){return n}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}]);