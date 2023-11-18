let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let dp = new Array(N+1);
dp[0] = 0;
dp[1] = 0;
dp[2] = 1;
dp[3] = 0;
dp[4] = 1;
dp[5] = 1;

for (let n = 6; n <= N; ++n) {
    if (dp[n-1] === 0 || dp[n-3] === 0 || dp[n-4] === 0) dp[n] = 1;
    else dp[n] = 0;
}

console.log(dp[N]===1?'SK':'CY');