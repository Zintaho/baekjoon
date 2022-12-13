let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let A = 'A'.charCodeAt(0);
let sum = 0;
input[1].split('').forEach((x)=>sum += (x.charCodeAt(0) - A + 1));
console.log(sum);