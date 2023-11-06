let [S, K] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(BigInt);
let s = 1n;
let a = S/K;
let b = a+1n;
let k1 = S-a*K;
let k2 = K - k1;
for (let k = 0n; k < k1; ++k) s *= b;
for (let k = 0n; k < k2; ++k) s *= a;

console.log(s.toString());