let K = +require('fs').readFileSync('/dev/stdin').toString().trim();
let [A,B] = [0,1];
for (let k = 1; k < K; ++k) [A,B] = [B,A+B];
console.log(A,B);