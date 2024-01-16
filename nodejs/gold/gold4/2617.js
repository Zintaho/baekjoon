let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let dp = Array.from({length : N}, _ => new Array(N).fill(Infinity));
for (let m = 0;m < M; ++m) {
    let [a,b] = input[m].split(' ').map(x=>+x - 1);
    dp[a][b] = 1;
}

for (let k = 0; k < N; ++k) {
    for (let a = 0; a < N; ++a) {
        for (let b = 0; b < N ;++b) {
            dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]);
        }
    }
}

let sum = 0;
for (let a= 0 ;a < N; ++a) {
    let [X, Y] = [0, 0];
    for (let b = 0 ; b < N; ++b) {
        if (dp[a][b] === Infinity) X++;
        if (dp[b][a] === Infinity) Y++;
    }
    if (X <= N/2 || Y <= N/2) sum++;
}

console.log(sum);