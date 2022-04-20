"use strict";
let greet;
// greet = 'hello';
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
