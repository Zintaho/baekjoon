let [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = +n;
input = input.split(' ').map(x=>+x);

let dp = new Array(n).fill(1);
let max = 1;
for (let i = 1; i < n; ++i) {
    let a = input[i];
    for (let j = 0; j < i; ++j) {
        if (input[j] < a) {
            dp[i] = Math.max(dp[j] + 1, dp[i]);
        }
    }
    max = Math.max(dp[i], max);
}

console.log(max);