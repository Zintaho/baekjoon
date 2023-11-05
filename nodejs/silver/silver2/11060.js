let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(x=>+x);

let dp = new Array(N).fill(-1);
dp[0] = 0;
let before = Array.from({length:N}, _ => new Array());
for (let i = 0; i < N; ++i) {
    for (let j = 0; j < input[i]; ++j) {
        let a = i+j+1;
        if (a >= N) break;
        before[a].push(i);
    }
}
for (let i = 1; i < N; ++i) {
    if (before[i].length > 0) {
        let b = Math.min(...before[i].map(x=>dp[x]));
        dp[i] = b+1;
        if (dp[i] === 0) dp[i] = -1;
    }
}

console.log(dp[N-1]);