let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let ABC = input.map(x=>BigInt(x));
console.log(((ABC[1] - ABC[2])/ABC[0]).toString());