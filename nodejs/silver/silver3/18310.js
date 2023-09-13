let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.split(' ').map(x=>+x);
input.sort((a,b) => a-b);
console.log(input[Math.floor((+N-1)/2)]);