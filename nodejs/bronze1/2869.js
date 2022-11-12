let [A, B, V] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>parseInt(x, 10));
console.log(Math.ceil((V-A)/(A-B))+1);