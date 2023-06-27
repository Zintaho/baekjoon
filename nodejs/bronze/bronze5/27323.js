let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
console.log(A*B);