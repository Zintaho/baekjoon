let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [L,A,B,C,D] = input.map(x=>parseInt(x));
let kr = Math.ceil(A/C);
let ma = Math.ceil(B/D);
let S = kr>ma?kr:ma;
console.log(L-S);