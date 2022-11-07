let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x => parseInt(x, 10));
let ns = new Array(K+1).fill(1);
let ks = new Array(K+1).fill(1);
for (let n = N; n > (N-K); --n) ns[N-n] = n;
for (let k = K; k > 0; --k) ks[K-k] = k;
ns = ns.reduce((a,b) => a*b);
ks = ks.reduce((a,b) => a*b);
console.log(ns/ks);