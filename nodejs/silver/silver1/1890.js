let [N, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N= +N;
board.forEach((x,i) => board[i] = x.split(' ').map(Number));
let dp = Array.from({length: N}, _ => new Array(N).fill(0n));
dp[0][0] = 1n;

for (let y = 0; y < N; ++y) {
    for (let x = 0; x < N; ++x) {
        let a = board[y][x];
        if (dp[y][x] === 0 && !(y===0 && x===0)) continue;
        if (a === 0 && !(y===0 && x===0)) continue;

        if (y+a < N) dp[y+a][x] += dp[y][x];
        if (x+a < N) dp[y][x+a] += dp[y][x];

    }
}

console.log(dp[N-1][N-1].toString());