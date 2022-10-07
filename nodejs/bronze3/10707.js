let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [a,b,c,d,p] = input.map(x=>parseInt(x, 10));
let x = a * p;
let y = b + ((p > c)? (p-c)*d : 0);
console.log(x > y? y : x);