let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let dp = Array.from({length: N}, _=>new Array(N).fill(Infinity));

for (let m = 0; m < M; ++m) {
    let [a, b] = input[m].split(' ').map(x=>+x - 1);
    dp[a][b] = 1;
    dp[b][a] = 1;
}

for (let n = 0; n < N; ++n) dp[n][n] = 0;

for (let k = 0 ; k < N; ++k) {
    for (let a = 0; a < N; ++a) {
        for (let b = 0; b < N; ++b) {
            dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]);
        }
    }
}

let min =  30000;
let [I, J] = [0, 0];
for (let i = N - 1; i >= 0; --i) {
    for (let j = N - 1; j >= 0; --j) {
        if (i === j) continue;
        let sum = 0;
        for (let n = 0; n < N; ++n) {
            sum += Math.min(dp[n][i], dp[n][j]);
        }
        if (min >= sum) {
            min = sum;
            [I, J] = [i, j];
        }
    }
}
console.log(I+1, J+1, min*2);