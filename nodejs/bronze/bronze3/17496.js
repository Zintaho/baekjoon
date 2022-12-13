let [N, T, C, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>parseInt(x, 10));
console.log(Math.floor((N-1)/T)*C*P)