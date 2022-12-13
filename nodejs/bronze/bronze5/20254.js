let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let I = input.map(x=>parseInt(x));
console.log(56*I[0] + 24*I[1] + 14*I[2] + 6*I[3]);