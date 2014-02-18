sweet-array-slice
=============

sweet.js macro for array slice. It's specifically intended to deal with deoptimization due to arguments slicing.

How to use
----------

```sh
npm install sweet-array-slice sweet

npm install -g sweet.js # if you don't already have sweet.js
sjs -m sweet-array-slice <your-sweet-code>
```

Example
-------

* [usage in rsvp](https://github.com/tildeio/rsvp.js/commit/cddf7232546a9cf858524b75cde6f9edf72620a7)



Before
------

```js
// test.js

// example 1
var a = arraySlice(arguments);
// example 2
var b = arraySlice(arguments, 1);
// example 3
var c = arraySlice(arguments, 1, 2);
```

After
-----

```js
// example 1
var length$311 = arguments.length;
var a$312 = new Array(length$311);
for (var i$313 = 0; i$313 < length$311; i$313++) {
    a$312[i$313] = arguments[i$313];
}
// example 2
var length$315 = arguments.length;
var start$316 = Math.min(1, length$315 - 1);
var b$317 = new Array(length$315 - start$316);
for (var i$318 = start$316; i$318 < length$315; i$318++) {
    b$317[i$318] = arguments[i$318];
}
// example 3
var length$320 = arguments.length;
var start$321 = Math.min(1, length$320 - 1);
var end$322 = Math.min(2, length$320);
var c$323 = new Array(end$322 - start$321);
for (var i$324 = start$321; i$324 < end$322; i$324++) {
    c$323[i$324] = arguments[i$324];
}
```
