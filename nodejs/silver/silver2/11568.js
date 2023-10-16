let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(x=>+x);

let dp = new Array(N).fill(1);
let max = 1;
for (let i = 1; i < N; ++i) {
    for (let j = 0; j < i; ++j) {
        if (input[i] > input[j] && dp[j]===dp[i]) {
            dp[i]++;
        }
    }
    max = Math.max(max, dp[i]);
}
console.log(max);