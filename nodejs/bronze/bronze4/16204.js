let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N,M,K] = input.map(x=>parseInt(x, 10));
console.log((M<K?M:K)+((N-M)<(N-K)?(N-M):(N-K)));