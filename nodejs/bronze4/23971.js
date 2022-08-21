let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [H, W, N, M] = input.map(x=>parseInt(x, 10));
N += 1; M += 1;
let K = Math.ceil(H/N) * Math.ceil(W/M);
console.log(K);