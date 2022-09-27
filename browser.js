// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).iterPipeline=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,l=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,s;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,s="set"in r,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),s&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(e){return"boolean"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[g],i=g,t=null!=(o=e)&&v.call(o,i);try{e[g]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[g]=r:delete e[g],n}:function(e){return d.call(e)},w=Boolean.prototype.toString;var m=b();function _(e){return"object"==typeof e&&(e instanceof Boolean||(m?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===h(e)))}function j(e){return s(e)||_(e)}function E(){return new Function("return this;")()}p(j,"isPrimitive",s),p(j,"isObject",_);var S="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O="object"==typeof A?A:null;var P=function(e){if(arguments.length){if(!s(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(S)return S;if(T)return T;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),B=P.document&&P.document.childNodes,x=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;p(C,"REGEXP",V);var M=Array.isArray?Array.isArray:function(e){return"[object Array]"===h(e)};function k(e){return null!==e&&"object"==typeof e}function G(e){var t,r,n,o;if(("Object"===(r=h(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return k(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(k,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!M(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(k));var L="function"==typeof e||"object"==typeof x||"function"==typeof B?function(e){return G(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?G(e).toLowerCase():t};function F(e){return"function"===L(e)}var I=Math.floor;function R(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&(t=e.length,I(t)===t)&&e.length>=0&&e.length<=4294967295;var t}function U(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&F(e.next)}function N(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(){var e,t,r;if(1===(e=arguments.length)&&R(arguments[0]))t=arguments[0].slice(),e=t.length;else for(t=[],r=0;r<e;r++)t.push(arguments[r]);if(0===e)throw new Error("insufficient arguments. Must provide at least one iterator function.");for(r=0;r<e;r++)if(!F(t[r]))throw new TypeError(N("invalid arguments. All arguments must be functions. Value: `%s`.",t[r]));return n;function n(n){var o;if(!U(n))throw new TypeError(N("0Ch49",n));for(o=n,r=0;r<e-1;r++)if(!U(o=t[r](o)))throw new TypeError(N("0Ch4T",o));return t[e-1](o)}}}));
//# sourceMappingURL=browser.js.map
