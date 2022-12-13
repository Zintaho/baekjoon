let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [A,B] = input[0].split(' ').map(x=>parseInt(x, 10));
let [C,D] = input[1].split(' ').map(x=>parseInt(x, 10));
console.log(A+D < B+C ? A+D : B+C);