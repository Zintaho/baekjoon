let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0]);
console.log(`${2*(N+1)} ${3*(N+1)}`);