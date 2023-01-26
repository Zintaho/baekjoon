let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, I] = input[0].split(' ').map(x=>+x);
input.shift();
input.sort();
console.log(input[I-1]);