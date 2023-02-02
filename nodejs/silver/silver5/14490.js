let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(':').map(x=>+x);
let K = Math.sqrt(Math.max(a,b));
for (let k = 2; k <= K; ++k) {
    while (true) {
        if (a%k === 0 && b%k === 0) {
            a/=k; b/=k;
            continue;
        }
        break;
    }
}
console.log(`${a}:${b}`);