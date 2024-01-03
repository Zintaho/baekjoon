let [N, ...graph] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
graph.forEach((x, i) => graph[i] = x.split(' '));

let dp = Array.from({length:N}, _ => new Array(N).fill(0));

for (let y = 0; y < N; ++y) {
    for (let x = 0; x < N; ++x) {
        if (graph[y][x] === '1') {
            dp[y][x] = 1;
        } else {
            dp[y][x] = Infinity;
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

dp.forEach(x => {
    x = x.map(y=>y===Infinity?0:1);
    console.log(x.join(' '));
});