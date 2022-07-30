let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input[0];
console.log(input.charCodeAt(0));