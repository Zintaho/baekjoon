let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T
let output ='';
for (let t = 0 ; t < T; ++t) {
    let [N, M] = input[t].split(' ').map(x=>BigInt(x));
    let [A, B] = [1n,1n];
    for (let m = M; m > (M-N); --m) A *= m;
    for (let n = N; n > 1; --n) B *= n;
    let sum = A/B;
    output += `${sum}\n`;
}
console.log(output);