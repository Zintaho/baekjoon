let [n,k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>BigInt(x));
let dp = new Array(n+1n);
dp[0n] = 1n; dp[1n] = 1n;
for (let i = 2n; i <= n; ++i) {
    dp[i] = dp[i-1n]*i;
}
console.log((dp[n]/dp[n-k]/dp[k]).toString());