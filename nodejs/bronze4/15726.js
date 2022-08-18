let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [A,B,C] = input.map(x => parseInt(x, 10));
let a = Math.floor(A*B/C);
let b = Math.floor(A/B*C);
console.log(a>b?a:b);