let N = +require('fs').readFileSync('/dev/stdin').toString();
let k = 1;
while (N >= 2) k*=(N--);
console.log(k);