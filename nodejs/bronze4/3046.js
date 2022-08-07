let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [R1, S] = input.map(x=>parseInt(x));
console.log(2*S - R1);