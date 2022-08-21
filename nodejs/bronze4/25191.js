let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0],  10);
let [A,B] = input[1].split(' ').map(x=>parseInt(x, 10));
let K = Math.floor(A/2) + B;
console.log(N < K? N : K);