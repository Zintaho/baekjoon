let sum = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
.map(x=>parseInt(x, 10)).reduce((a,b)=>a+b);
console.log(sum);