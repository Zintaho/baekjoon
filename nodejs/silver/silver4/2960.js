let [N,K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let primes = new Array(N-1);
for (let i = 2; i <= N; ++i) primes[i-2] = i;
let k = 1;
for (let i = 2; i <= N; ++i) {
    let a = primes[i-2];
    if (a === 0) continue;

    let found = false;
    for (let j = i; j <= N; ++j) {
        let b = primes[j-2];
        if (b === 0) continue;

        if (b % a === 0) {
            primes[j-2] = 0;
            if (k++ === K) {
                console.log(b);
                found = true;
                break;
            }
        }
    }
    if(found) break;
}