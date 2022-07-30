let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0]);
let output = '';
for (i = 1; i <= 9 ; ++i) output += `${N} * ${i} = ${N*i}\n`;
console.log(output);