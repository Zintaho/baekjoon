let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let info = input[0].split(' ').map(x => parseInt(x));
let N = info[0];
let X = info[1];

input = input[1].split(' ').map(x => parseInt(x));
let output = '';
for (i = 0; i < N; ++i) if (input[i] < X) output += `${input[i]} `;
output = output.trimEnd();
console.log(output);