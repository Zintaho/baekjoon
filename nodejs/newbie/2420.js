let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map(x => parseInt(x));
let output = Math.abs(input[0] - input[1]);
console.log(output);