let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
let dp = input.slice(0, N);
input = input.slice(N);

dp.forEach((x, i) => dp[i] = x.split(' ').map(y=>+y));

for (let k = 0 ; k < N; ++k) {
    for (let a = 0; a < N; ++a) {
        for (let b = 0; b < N; ++b) {
            dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]);
        }
    }
}

let output = new Array(M);
for (let m = 0; m < M; ++m) {
    let [a, b, t] = input[m].split(' ').map(x=>+x);
    a--; b--;

    output[m] = dp[a][b] <= t? 'Enjoy other party' : 'Stay here';
}

console.log(output.join('\n'));