let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let n = input.map(x=>parseInt(x));
console.log(Math.floor((n[0] + 1)*(n[1]+1) / (n[2] + 1) - 1));