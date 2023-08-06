let [N,A] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
A = A.split(' ').map(x=>+x);

let dp = new Array(N).fill(1);
let dp2 = Array.from({length:N}, _ => []);
dp2[0].push(A[0]);

for (let i = 1; i < N; ++i) {
    let dpMax = 0;
    let idxMax = i;
    for (let j = 0; j < i ; ++j) {
        if ((A[j] < A[i]) && dpMax < dp[j]) {
            dpMax = dp[j];
            idxMax = [j];
        }
    }
    dp[i] = dpMax + 1;
    dp2[i] = [...dp2[idxMax], A[i]];
}

let dpMax = 0;
let idxMax = -1;
dp.forEach((x, i) => {
    if (x > dpMax) {
        dpMax = x;
        idxMax = i;
    }
})
console.log(dpMax);
console.log(dp2[idxMax].join(' '));