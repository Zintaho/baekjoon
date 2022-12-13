let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
console.log(input.slice(1).map(x=>parseInt(x, 10)).reduce((a,b) => a+b) - (N-1));