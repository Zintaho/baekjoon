let fs = require('fs');
let N = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(N == '0'?'YONSEI':'Leading the Way to the Future');