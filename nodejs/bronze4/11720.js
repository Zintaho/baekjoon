let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = input[1].split('').map(x=>parseInt(x, 10)).reduce((a,b) => a+b);
console.log(output);