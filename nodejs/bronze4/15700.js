let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [N,M] = input.map(x=>BigInt(x));
console.log((N*M/2n).toString());