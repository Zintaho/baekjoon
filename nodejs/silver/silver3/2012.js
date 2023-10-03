let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
input.sort((a,b) => a-b);

let sum = 0;
input.forEach((x, i) => sum += Math.abs(x-i-1));
console.log(sum);