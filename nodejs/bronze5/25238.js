let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map(x => parseInt(x));
let a = input[0];
let b = input[1];
console.log(a*(100-b)/100 >= 100 ? 0 : 1);