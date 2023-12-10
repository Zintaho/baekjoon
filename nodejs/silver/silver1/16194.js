let [N, dp] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
dp = dp.split(' ').map(x=>+x);
dp = [0, ...dp];

for (let i = 2 ; i <= N; ++i) {
    for (let j = 1; j <= Math.floor(i/2); ++j) {
        dp[i] = Math.min(dp[i], dp[j]+dp[i-j]);
    }
}

console.log(dp[N]);