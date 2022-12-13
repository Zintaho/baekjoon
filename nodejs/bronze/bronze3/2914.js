let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A,I] = input.map(x => parseInt(x, 10));
console.log(A*(I-1)+1);