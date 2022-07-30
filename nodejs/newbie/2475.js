let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map(x => parseInt(x));
let output = 0;
for (i of input) output += i*i;
console.log(output % 10);