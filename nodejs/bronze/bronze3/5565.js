let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>parseInt(x, 10));
console.log(input[0] - input.slice(1,10).reduce((a,b)=>a+b));