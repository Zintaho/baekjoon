let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x => BigInt(x));
let n = input[0];
let m = input[1];
console.log((n+m).toString());
console.log((n-m).toString());
console.log((n*m).toString());