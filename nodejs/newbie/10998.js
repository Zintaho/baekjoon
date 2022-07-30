let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map((x) => parseInt(x));
let a = input[0];
let b = input[1];
console.log(a+b, a-b, a*b, Math.floor(a/b), a%b);