let [N,M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [n,m] = [+N, +M];
let str = N.repeat(n);
if (str.length > m) str = str.slice(0, m);
console.log(str);