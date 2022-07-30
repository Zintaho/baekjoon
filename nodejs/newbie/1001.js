let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map((x) => parseInt(x));
console.log(input[0] - input[1]);