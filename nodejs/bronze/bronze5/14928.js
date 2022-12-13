let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = BigInt(input[0]);
console.log((input % BigInt(20000303)).toString());