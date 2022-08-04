let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>parseInt(x));
let output = input[0] * 8 + input[1] * 3;
if (output >= 28) output -=28;
console.log(output);