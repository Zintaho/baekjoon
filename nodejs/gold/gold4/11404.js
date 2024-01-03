let [N, M, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let graph = Array.from({length:N}, _=>new Array(N).fill(0));
for (let m = 0; m < +M; ++m) {
    let [y, x, k] = input[m].split(' ').map(a=>+a);
    if (graph[y-1][x-1] > 0) graph[y-1][x-1] = Math.min(graph[y-1][x-1], k);
    else graph[y-1][x-1] = k;
}

let dp = Array.from({length:N}, _ => new Array(N).fill(Infinity));

for (let y = 0; y < N; ++y) {
    for (let x = 0; x < N; ++x) {
        if (graph[y][x] > 0) {
            dp[y][x] = graph[y][x];
        } else {
            if (y===x) dp[y][x] = 0;
        }
    }
}

for (let k = 0; k < N; ++k) {
    for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
            dp[y][x] = Math.min(dp[y][x], dp[y][k] + dp[k][x]);
        }
    }
}

dp.forEach((x) => {
    x.forEach((xx, i) => {if (xx === Infinity) x[i] = 0;})
    console.log(x.join(' '));
});
