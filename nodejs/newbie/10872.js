let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0]);
let output = 1;
for(let i = 2; i <= N; ++i) output *= i;
console.log(output);