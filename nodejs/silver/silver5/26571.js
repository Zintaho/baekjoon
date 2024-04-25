let [k, abcd] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
k = Number(k);
let [a, b, c, d] = abcd.split(' ').map(Number);
let isTrue = true;
if (a*k + b !== c*k +d) isTrue = false;

console.log(isTrue?`Yes ${a*k+b}`:`No`);