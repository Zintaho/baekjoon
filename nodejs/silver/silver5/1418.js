let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let count = 1;
for (let n = 2; n <= N; ++n) {
    let nn = n;
    for (let p of primes) {
        if (p > K) break;

        while (nn % p === 0) {
            nn /= p;
        }

        if (nn === 1) {
            count++;
            break;
        }
    }
}
console.log(count);