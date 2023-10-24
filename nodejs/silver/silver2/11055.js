let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.split(' ').map(x=>+x);

let dp = [...input];
let max = dp[0];    
for (let i = 1; i < N; ++i) {
    for (let j = i-1; j >= 0; --j) {
        if (input[j] < input[i]) {
            dp[i] = Math.max(dp[i], input[i] + dp[j]);
            max = Math.max(dp[i], max);
        }
    }
}

console.log(max);