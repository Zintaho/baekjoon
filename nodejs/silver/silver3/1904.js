let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let dp = new Array(3);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for (let n = 3; n <= N; ++n) {
    dp[n%3] = (dp[(n-1)%3] + dp[(n-2)%3])%15746;
}
console.log(dp[N%3]);