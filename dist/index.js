"use strict";var l=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=l(function(h,s){
var c=require('@stdlib/assert-is-function/dist'),p=require('@stdlib/assert-is-array-like-object/dist'),u=require('@stdlib/assert-is-iterator-like/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function v(){var t,r,e;if(t=arguments.length,t===1&&p(arguments[0]))r=arguments[0].slice(),t=r.length;else for(r=[],e=0;e<t;e++)r.push(arguments[e]);if(t===0)throw new Error(format('0PZ0N'));for(e=0;e<t;e++)if(!c(r[e]))throw new TypeError(a('0PZ4F',r[e]));return f;function f(n){var i;if(!u(n))throw new TypeError(a('0PZ3w',n));for(i=n,e=0;e<t-1;e++)if(i=r[e](i),!u(i))throw new TypeError(a('0PZ4G',i));return r[t-1](i)}}s.exports=v
});var m=o();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
