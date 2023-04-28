let N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
let bits = [];
while ( N > 1n) {
    bits.push(+(N%2n).toString());
    N = N/2n;
}
bits.push(N.toString());
let sum = 0n;
let k = 1n;
for (let i = 0; i < bits.length; ++i) {
    if (bits[i]) sum += k;
    k *= 3n;
}
console.log(sum.toString());

// https://www.acmicpc.net/problem/1740