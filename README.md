<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterPipeline

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an [iterator][mdn-iterator-protocol] pipeline.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-pipeline
```

</section>

<section class="usage">

## Usage

```javascript
var iterPipeline = require( '@stdlib/iter-pipeline' );
```

#### iterPipeline( iterFcn0\[, ...iterFcn] )

Returns an [iterator][mdn-iterator-protocol] pipeline.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );
var iterThunk = require( '@stdlib/iter-pipeline-thunk' );
var iterHead = require( '@stdlib/iter-head' );
var iterSome = require( '@stdlib/iter-some' );

// Convert iterator functions to unary functions which accept an iterator:
var it1 = iterThunk( iterHead, 5 );
var it2 = iterThunk( iterSome, 3 );

// Create an iterator pipeline:
var p = iterPipeline( it1, it2 );

// Create a source iterator:
var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1 ] );

// Provide the source iterator to our iterator pipeline:
var bool = p( arr );
// returns true

// Create a new source iterator:
arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 0, 1, 1 ] );

// Run the pipeline for the new source iterator:
bool = p( arr );
// returns false
```

The function accepts [iterator][mdn-iterator-protocol] functions provided as separate arguments **or** as a single argument consisting of an array of [iterator][mdn-iterator-protocol] functions.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );
var iterThunk = require( '@stdlib/iter-pipeline-thunk' );
var iterHead = require( '@stdlib/iter-head' );
var iterSome = require( '@stdlib/iter-some' );

var it1 = iterThunk( iterHead, 5 );
var it2 = iterThunk( iterSome, 3 );

var p = iterPipeline( [ it1, it2 ] );

var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1 ] );
var bool = p( arr );
// returns true

arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 0, 1, 1 ] );
bool = p( arr );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Within the context of an [iterator][mdn-iterator-protocol] pipeline (as defined by this function), an [iterator][mdn-iterator-protocol] function is defined as a **unary** function which accepts an [iterator][mdn-iterator-protocol] as its **only** argument.
-   Each [iterator][mdn-iterator-protocol] function, except the last [iterator][mdn-iterator-protocol] function, within an [iterator][mdn-iterator-protocol] pipeline must return an [iterator][mdn-iterator-protocol].
-   Starting from the left, each returned [iterator][mdn-iterator-protocol] is passed to the next [iterator][mdn-iterator-protocol] function.
-   The result of the last [iterator][mdn-iterator-protocol] function is the result of the pipeline.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable function-paren-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-iter-randu' );
var iterHead = require( '@stdlib/iter-head' );
var iterMap = require( '@stdlib/iter-map' );
var iterSome = require( '@stdlib/iter-some' );
var iterThunk = require( '@stdlib/iter-pipeline-thunk' );
var iterPipeline = require( '@stdlib/iter-pipeline' );

function threshold( r ) {
    return ( r > 0.95 );
}

// Create a pipeline which tests whether at least 5% of values exceed a threshold:
var p = iterPipeline(
    // Apply a threshold to iterated values:
    iterThunk( iterMap, threshold ),

    // Limit the sequence to 100 values:
    iterThunk( iterHead, 100 ),

    // Test whether at least 5 values exceed the threshold:
    iterThunk( iterSome, 5 )
);

// Define the number of random number sequences to analyze:
var N = 100;

// Initialize a counter for sequences satisfying the 5% threshold:
var count = 0;

// Perform analysis...
var bool;
var i;
for ( i = 0; i < N; i++ ) {
    bool = p( randu() );
    if ( bool ) {
        count += 1;
    }
    console.log( bool );
}
console.log( '%d of %d', count, N );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-pipeline.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-pipeline

[test-image]: https://github.com/stdlib-js/iter-pipeline/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter-pipeline/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-pipeline/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-pipeline?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-pipeline.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-pipeline/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-pipeline/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
