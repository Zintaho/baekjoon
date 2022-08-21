let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = input.map(x=>parseInt(x, 10)).reduce((a,b) => a+b) + 1;
console.log(N);