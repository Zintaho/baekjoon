let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let A = BigInt(input[1]);
let B = BigInt(input[2]);
console.log((A*B).toString());
