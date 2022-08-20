let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [d1, d2] = input.map(x=>parseInt(x, 10));
console.log(2*d1 + 2*d2*3.141592);