let M = +require('fs').readFileSync('/dev/stdin').toString().trim();
M /= 2;

let R = 987654321
let dp = Array.from({length: M+2}, _=>new Array(M+2).fill(0));
for (let b = 0; b < M+2; ++b) dp[0][b] = 1;

for (let a = 1; a < M+1; ++a) {
    for (let b = 0; b < M+1; ++b) {
        dp[a][b] = dp[a-1][b+1]%R;
        if (b !== 0) dp[a][b] += dp[a][b-1]%R;
        
        dp[a][b] %= R;
    }
}
console.log(dp[M][0])