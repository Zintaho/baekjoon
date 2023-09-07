let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);

console.log(pow(A, B, 1000000007n).toString());

function pow(a, b, c) {
    if (b === 1n) return a % c;
    else {
        let fn = pow(a, b/2n, c);
        if (b % 2n === 0n) return fn * fn % c;
        else if (b % 2n === 1n) return fn * fn * a % c;
    }
}