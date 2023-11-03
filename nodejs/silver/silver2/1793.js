let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = 1;
input.forEach((n, i) => {
    input[i] = +n;
    N = Math.max(+n, N);
});

let dp = new Array(N+1).fill(0n);
dp[0] = 1n
dp[1] = 1n
for (let n = 2; n <= N; ++n) dp[n] = dp[n-2] * 2n + dp[n-1];

let output = new Array(input.length);
for (let i = 0 ; i < input.length; ++i) output[i] = dp[input[i]];
console.log(output.join('\n'));