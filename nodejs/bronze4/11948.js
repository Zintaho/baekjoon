let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>parseInt(x, 10));
let A = input.slice(0,4).sort((a,b)=>b-a).slice(0,3).reduce((a,b) => a+b);
let B = input.slice(4).sort((a,b) => b-a)[0];
console.log(A+B);