let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let C = parseInt(input[2], 10);
let K = input[1].split(' ').map(x=>Math.ceil(parseInt(x, 10)/C)).reduce((a,b) => a+b);
console.log(K*C);