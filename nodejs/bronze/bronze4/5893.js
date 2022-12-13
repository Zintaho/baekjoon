let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = BigInt(`0b${input}`) * 17n;
console.log(N.toString(2));