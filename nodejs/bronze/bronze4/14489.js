let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [A,B] = input[0].split(' ').map(x => parseInt(x));
let C = parseInt(input[1]);
if (A+B < 2*C) console.log(A+B);
else console.log(A+B - 2*C);