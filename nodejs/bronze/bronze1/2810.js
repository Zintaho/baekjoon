let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let S = input[1];
S = S.split(/S|LL/g).length;
console.log(Math.min(N, S));