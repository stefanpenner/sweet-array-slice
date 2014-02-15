sweet-a_slice
=============

sweet.js macro for array splice, specifically to deal with argument splicing deopt.

how to use
----------

```sh
npm install sweet-a_slice sweet

npm install -g sweet.js # if you don't already have sweet.js
sjs -m sweet-a_slice <your-sweet-code>
```

Example
-------

* [usage in rsvp](https://github.com/tildeio/rsvp.js/commit/cddf7232546a9cf858524b75cde6f9edf72620a7)



Ouput
-----

```js
// test.js

// example 1
var a = a_slice(arguments);
// example 2
var b = a_slice(arguments, 1);
// example 3
var c = a_slice(arguments, 1, 2);
```

```js
// sjs -m ./a_slice.js test.js                                                                                                                                                                                                        !10130
// example 1
var length$311 = arguments.length;
var a$312 = new Array(length$311);
for (var i$313 = 0; i$313 < length$311; i$313++) {
    a$312[i$313] = arguments[i$313];
}
// example 2
var start$315 = Math.min(1, length$316 -1);
var length$316 = arguments.length;
var b$317 = new Array(length$316 - start$315);
for (var i$318 = start$315; i$318 < length$316; i$318++) {
    b$317[i$318] = arguments[i$318];
}
// example 3
var start$320 = Math.min(1, length - 1);
var end$321 = Math.min(2, length);
var c$322 = new Array(end$321 - start$320);
for (var i$323 = start$320; i$323 < end$321; i$323++) {
    c$322[i$323] = arguments[i$323];
}
```
