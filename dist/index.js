"use strict";var l=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=l(function(h,s){"use strict";var c=require("@stdlib/assert-is-function"),p=require("@stdlib/assert-is-array-like-object"),u=require("@stdlib/assert-is-iterator-like"),a=require("@stdlib/string-format");function v(){var t,r,e;if(t=arguments.length,t===1&&p(arguments[0]))r=arguments[0].slice(),t=r.length;else for(r=[],e=0;e<t;e++)r.push(arguments[e]);if(t===0)throw new Error("insufficient arguments. Must provide at least one iterator function.");for(e=0;e<t;e++)if(!c(r[e]))throw new TypeError(a("invalid arguments. All arguments must be functions. Value: `%s`.",r[e]));return f;function f(n){var i;if(!u(n))throw new TypeError(a("invalid argument. Must provide an iterator. Value: `%s`.",n));for(i=n,e=0;e<t-1;e++)if(i=r[e](i),!u(i))throw new TypeError(a("invalid argument. Each iterator function, except the last iterator function, within an iterator pipeline must return an iterator. Value: `%s`.",i));return r[t-1](i)}}s.exports=v});var m=o();module.exports=m;
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
