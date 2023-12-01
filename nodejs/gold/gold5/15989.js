let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;
let max = 0;
input.forEach((x,i)=> {
    x = +x;
    input[i] = x;
    max = Math.max(x, max);
});
let dp = Array.from({length:max+1}, _ => new Array(3+1).fill(0));
dp[1][1] = 1;

dp[2][1] = 1;
dp[2][2] = 1;
dp[2][3] = 0;

dp[3][1] = 2;
dp[3][2] = 0;
dp[3][3] = 1;

for (let i = 4; i <= max; ++i) {
    dp[i][1] = dp[i-1][1] + dp[i-1][2] + dp[i-1][3];
    dp[i][2] = dp[i-2][2] + dp[i-2][3];
    dp[i][3] = dp[i-3][3];
}

input.forEach((x,i) => {
    input[i] = dp[x][1] + dp[x][2] + dp[x][3];
})
console.log(input.join('\n'));
