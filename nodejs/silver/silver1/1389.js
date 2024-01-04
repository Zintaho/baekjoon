let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let dp = Array.from({length: N}, _ => new Array(N).fill(Infinity));

for (let m = 0; m < M; ++m) {
    let [a,b] = input[m].split(' ').map(x=>+x - 1);
    dp[a][b] = 1;
    dp[b][a] = 1;
}

for (let n = 0; n < N; ++n) dp[n][n] = 0;

for (let k = 0; k < N; ++k) {
    for (let y = 0; y < N; ++y) {
        for (let x = 0 ; x < N; ++x) {
            dp[y][x] = Math.min(dp[y][x], dp[y][k] + dp[k][x]);
        }
    }
}

let [max, man] = [9999999, N];
for (let n = N - 1; n >= 0; --n) {
    let sum = dp[n].reduce((a,b) => a+b);
    if (sum <= max) {
        max = sum;
        man = n+1;
    }
}
console.log(man);

