let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x => BigInt(x));
let A = (input[0] + input[1])/BigInt(2);
let B = (input[0] - input[1])/BigInt(2);
console.log(A.toString());
console.log(B.toString());