let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = input[1].split(' ').map(x=>Math.abs(+x)).reduce((a,b)=>a+b);
sum += input[2].split(' ').map(x=>Math.abs(+x)).reduce((a,b)=>a+b);
console.log(sum);