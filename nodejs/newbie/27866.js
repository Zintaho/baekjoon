let [a,k] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(a.charAt(+k - 1));