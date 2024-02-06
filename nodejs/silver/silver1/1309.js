let N = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let dp = new Array(+N + 2);
dp[0] = [0, 0, 0];
dp[1] = [1, 1, 1];
for (let n = 2; n <= (+N + 1); ++n) dp[n] = [
    (dp[n-1][0] + dp[n-1][1] + dp[n-1][2])%9901,
    (dp[n-1][0] + dp[n-1][2])%9901,
    (dp[n-1][0] + dp[n-1][1])%9901
];

console.log(dp[+N+1][0]);