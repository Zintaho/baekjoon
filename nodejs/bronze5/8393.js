let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input);
console.log(N*(N+1)/2);