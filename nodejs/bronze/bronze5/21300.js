let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let output = input.reduce((a,b) => parseInt(a)+parseInt(b))*5;
console.log(output);