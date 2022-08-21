let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, M] = input.map(x=>parseInt(x, 10));
console.log(Math.min(Math.floor(N/2), Math.floor(M/2)));