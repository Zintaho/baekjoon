let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input, 10);
let hand = [1,2,3,4,5,4,3,2]
console.log(hand[(N-1)%8]);