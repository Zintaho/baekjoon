let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [B1, B2] = input.map(x=>BigInt(`0b${x}`));
console.log((B1*B2).toString(2));