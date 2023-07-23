let [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x); 

let dp = new Array(n).fill(0).map(x=>new Array(m).fill(0));

dp[0][0] = 1;
for (let y = 1; y < n; ++y) {
    dp[y][0] = 1;
}
for (let x = 1; x< m; ++x) {
    dp[0][x] = 1;
}

for (let y = 1; y < n; ++y) {
    for (let x = 1; x < m; ++x) {
        dp[y][x] = (dp[y-1][x-1] + dp[y][x-1] + dp[y-1][x])%1_000_000_007;
    }
}

console.log(dp[n-1][m-1]);