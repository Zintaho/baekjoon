let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let sum = 0;
sum = A.split('').map(x=>+x).reduce((a,b)=>a+b) * B.split('').map(x=>+x).reduce((a,b)=>a+b);
console.log(sum);