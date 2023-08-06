let [N,A] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
A = A.split(' ').map(x=>+x);

let dp = new Array(N).fill(1);
for (let i = 1; i < N; ++i) {
    let dpMax = 0;
    for (let j = 0; j < i ; ++j) {
        if ((A[j] > A[i]) && dpMax < dp[j]) dpMax = dp[j];
    }
    dp[i] = dpMax + 1;
}

console.log(Math.max(...dp));