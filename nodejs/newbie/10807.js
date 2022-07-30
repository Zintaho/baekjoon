let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = parseInt(input[0]);
let v = parseInt(input[2]);

input = input[1].split(' ').map(x => parseInt(x));
let output = 0;
for (i = 0; i < N; ++i) if (input[i] == v) output += 1;
console.log(output);