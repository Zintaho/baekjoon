let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

let dp = Array.from({length: 32}, _=>new Array(32).fill(0n));
for (let b = 0; b < 32; ++b) dp[0][b] = 1n;

dp[1][0] = dp[0][1];
for (let a = 1; a < 31; ++a) {
    for (let b = 0; b < 31; ++b) {
        dp[a][b] = dp[a-1][b+1];
        if (b !== 0) dp[a][b] += dp[a][b-1];
    }
}

input = input.map(x=>dp[+x][0]);
console.log(input.join('\n'));