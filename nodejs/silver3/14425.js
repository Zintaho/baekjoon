let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(x=>parseInt(x, 10));
let set = new Set(input.slice(1, 1+N));
let count = 0;
input.slice(1+N, 1+N+M).forEach((a) => {if(set.has(a)) count++;});
console.log(count);