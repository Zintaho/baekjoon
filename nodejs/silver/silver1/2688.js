let [_, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let max = Math.max(...input);

let dp = Array.from({length : max+1}, _ => new Array(10).fill(0));
for (let i = 0; i < 10; ++i) dp[1][i] = 1;
for (let i = 2; i <= max; ++i) {
    let sum = dp[i-1].reduce((a,b) => a+b);
    for (let j = 0; j < 10; ++j) {
        dp[i][j] = sum;
        sum -= dp[i-1][j];
    }
}

console.log(input.map(x=>dp[x].reduce((a,b) => a+b)).join('\n'));