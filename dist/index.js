"use strict";var l=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var o=l(function(h,s){"use strict";var c=require("@stdlib/assert-is-function"),p=require("@stdlib/assert-is-array-like-object"),u=require("@stdlib/assert-is-iterator-like"),a=require("@stdlib/string-format");function v(){var t,e,r;if(t=arguments.length,t===1&&p(arguments[0]))e=arguments[0].slice(),t=e.length;else for(e=[],r=0;r<t;r++)e.push(arguments[r]);if(t===0)throw new Error("insufficient arguments. Must provide at least one iterator function.");for(r=0;r<t;r++)if(!c(e[r]))throw new TypeError(a("invalid arguments. All arguments must be functions. Value: `%s`.",e[r]));return f;function f(n){var i;if(!u(n))throw new TypeError(a("invalid argument. Must provide an iterator. Value: `%s`.",n));for(i=n,r=0;r<t-1;r++)if(i=e[r](i),!u(i))throw new TypeError(a("invalid argument. Each iterator function, except the last iterator function, within an iterator pipeline must return an iterator. Value: `%s`.",i));return e[t-1](i)}}s.exports=v});var m=o();module.exports=m;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
