let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
if (A < B) [A, B] = [B, A];
let answer = '1';
console.log(answer.repeat(Number(gcd(A, B))));

function gcd(a, b) {
    while (b > 0) {
        [a, b] = [b, a%b];
    }
    return a;
}