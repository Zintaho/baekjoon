let [n, L, J] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = [+n + 1, 100 + 1];
L = L.split(' ').map(x=>+x);
J = J.split(' ').map(x=>+x);

let dp = Array.from({length:N}, _ => new Array(M).fill(0));
for (let i = 1; i < N; ++i) {
    let [l, j] = [L[i - 1], J[i - 1]];
    for (let m = 1; m < M; ++m) {
        let [a,b] = [0, 0];
        if ((i - 1) >= 0 && m > 0) a = dp[i - 1][m];
        if ((i - 1) >= 0 && (m - l) > 0) b = (dp[i-1][m-l] + j);
        dp[i][m] = Math.max(a,b);
    }
}
console.log(dp[N - 1][M - 1]);