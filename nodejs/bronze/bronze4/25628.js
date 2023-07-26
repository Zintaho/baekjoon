let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
console.log(Math.min(Math.floor(a/2), b));