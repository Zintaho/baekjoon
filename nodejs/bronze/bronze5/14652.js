let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map(x=>parseInt(x));
let M = input[1];
let K = input[2];
console.log(`${Math.floor(K/M)} ${K%M}`);