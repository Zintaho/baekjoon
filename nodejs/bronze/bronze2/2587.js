let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x, 10));
input = input.sort((a,b) => a-b);
console.log(input.reduce((a,b)=>a+b)/input.length);
console.log(input[Math.floor(input.length/2)]);