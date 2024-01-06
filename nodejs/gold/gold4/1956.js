let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let dp = Array.from({length:N}, _=>new Array(N).fill(Infinity));

for (let m = 0; m < M; ++m) {
    let [a, b, k] = input[m].split(' ').map(x=>+x);    
    dp[a - 1][b - 1] = k;
}

for (let k = 0; k < N; ++k) {
    for (let a = 0; a < N; ++a) {
        for (let b = 0; b < N; ++b) {
            dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]);
        }
    }
}

let min = Infinity;
for (let n = 0; n < N; ++n) {
    let a = dp[n][n];
    min = Math.min(a, min);
}
console.log(min!==Infinity?min:-1);
