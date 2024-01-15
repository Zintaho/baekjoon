let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;

let output = new Array(T);
let idx = 0;
for (let t = 0; t < T; ++t) {
    let [N, M] = input[idx++].split(' ').map(x=>+x);
    let dp = Array.from({length : N}, _ => new Array(N).fill(Infinity));
    for (let m = 0; m < M; ++m) {
        let [a,b,c] = input[idx++].split(' ').map(x=>+x);
        a--; b--;
        dp[a][b] = c;
        dp[b][a] = c;
    }
    for (let n = 0; n < N; ++n) dp[n][n] = 0;

    for (let k = 0; k < N; ++k) {
        for (let i = 0; i < N; ++i) {
            for (let j = 0; j < N; ++j) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
            }
        }
    }

    let K = +input[idx++];
    let friends = input[idx++].split(' ').map(x=>+x - 1);

    let min = 99999999;
    let minRoom = N;
    for (let n = N-1; n >= 0; --n) {
        let sum = 0;
        for (let k = 0; k < K; ++k) {
            sum += dp[friends[k]][n];
        }
        if (sum <= min) {
            min = sum;
            minRoom = n+1;
        }
    }
    output[t] = minRoom;
}

console.log(output.join('\n'));