let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let year = parseInt(input[0]);
let output = 0;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) output = 1;
console.log(output);