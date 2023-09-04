let [, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let max = 0;
input.forEach((x, i) => {
    x = +x;
    max = Math.max(x, max);
    input[i] = x;
});
const primes = erastothenes(max);
const goldbach = {};

for (let n of input) {
    goldbach[n] = 0;
    for (let p of primes) {
        if (p > n/2) break;
        if (primes.has(n-p)) goldbach[n]++;
    }
}

input.forEach((x, i) => input[i] = goldbach[x]);
console.log(input.join('\n'));

function erastothenes(n) {
    let allNums = Array.from({length:n-1}, (_, i) => i+2);
    let primes = new Set();
    for (let i = 0; i < n-1; ++i) {
        let a = allNums[i];
        if (a === 0) continue;
        let d = a;

        primes.add(a);
        for (;a <= n; a += d) {
            allNums[a-2] = 0;
        }
    }

    return primes;
}