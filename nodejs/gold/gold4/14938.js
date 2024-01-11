let [nmr, t, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m, r] = nmr.split(' ').map(x=>+x);

let dp = Array.from({length : n}, _ => new Array(n).fill(Infinity));

for (let i = 0; i < r; ++i) {
    let [a,b,k] = input[i].split(' ').map(x=>+x);
    a--; b--;
    dp[a][b] = k;
    dp[b][a] = k;
}
for (let i = 0; i < n; ++i) dp[i][i] = 0;

for (let k = 0; k < n; ++k) {
    for (let a = 0; a < n; ++a) {
        for (let b = 0; b < n; ++b) {
            dp[a][b] = Math.min(dp[a][b] , dp[a][k] + dp[k][b]);
        }
    }
}

let max = 0;
t = t.split(' ').map(x=>+x);
for (let i = 0; i < n; ++i) {
    let sum = 0;
    for (let j = 0; j < n; ++j) {
        if (dp[i][j] <= m) sum += t[j];
    }
    max = Math.max(sum, max);
}
console.log(max);