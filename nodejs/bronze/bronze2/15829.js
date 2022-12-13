let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = BigInt(input[0]);
let sum = 0n;
let pow = 1n;

for (let i = 0; i < N; ++i) {
    let c = BigInt(input[1].charCodeAt(i) - 'a'.charCodeAt(0) + 1);
    if (i !== 0) pow *= 31n;
    sum += c*pow;
}
sum %= 1234567891n
console.log(sum.toString());