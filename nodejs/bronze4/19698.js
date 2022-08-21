let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, W, H, L] = input.map(x => parseInt(x, 10));
let m = Math.floor(W/L) * Math.floor(H/L);
console.log(m > N? N : m);