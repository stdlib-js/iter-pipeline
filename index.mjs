// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function i(){var i,n,o;if(1===(i=arguments.length)&&t(arguments[0]))n=arguments[0].slice(),i=n.length;else for(n=[],o=0;o<i;o++)n.push(arguments[o]);if(0===i)throw new Error("insufficient arguments. Must provide at least one iterator function.");for(o=0;o<i;o++)if(!r(n[o]))throw new TypeError(s("invalid arguments. All arguments must be functions. Value: `%s`.",n[o]));return m;function m(r){var t;if(!e(r))throw new TypeError(s("0Ch49",r));for(t=r,o=0;o<i-1;o++)if(t=n[o](t),!e(t))throw new TypeError(s("0Ch4T",t));return n[i-1](t)}}export{i as default};
//# sourceMappingURL=index.mjs.map