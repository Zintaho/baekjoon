let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [A,B,C,D,E] = input.map(x=>parseInt(x,10));
let sec = 0;
if (A < 0) sec -= (A*C);
if (A <= 0) sec += D;
if (A < 0) sec += (B*E);
else sec += ((B-A) * E);
console.log(sec);