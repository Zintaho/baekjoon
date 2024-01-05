let [N, M, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[N, M] = [+N, +M]

let dp = Array.from({length: N}, _ => new Array(N).fill(Infinity));

for (let m = 0; m < M; ++m) {
    let [a,b] = input[m].split(' ').map(x=>+x - 1);
    dp[a][b] = 1;
}

for (let k = 0; k < N; ++k) {
    for (let y = 0; y < N; ++y) {
        for (let x = 0 ; x < N; ++x) {
            dp[y][x] = Math.min(dp[y][x], dp[y][k] + dp[k][x]);
        }
    }
}
dp.forEach((x,i) => dp[i] = x.map(y=>y===Infinity?0:y));

let output = new Array(N);
for (let a = 0; a < N; ++a) {
    let sum = N-1;
    for (let b = 0; b < N; ++b) {
        if (a === b) continue;
        if (dp[a][b] !== 0 || dp[b][a] !== 0) sum--;
    }
    output[a] = sum;
}
console.log(output.join('\n'));