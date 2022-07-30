let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0]);
let output = '';
for (let i = 1; i <= N; ++i) output += `${i}\n`;
console.log(output);