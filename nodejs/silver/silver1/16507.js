let [RCQ, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C, Q] = RCQ.split(' ').map(x=>+x);
let dp = input.slice(0, R).map(x=>x.split(' ').map(Number));
for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
        if (1 <= r) dp[r][c] += dp[r-1][c];
        if (1 <= c) dp[r][c] += dp[r][c-1];
        if (1 <= r && 1 <= c) dp[r][c] -= dp[r-1][c-1];
    }
}

let output = new Array(Q);
input.slice(R, R+Q).forEach((x, q)=>{
    let [r1, c1, r2, c2] = x.split(' ').map(y=> +y - 1);
    let sum = dp[r2][c2];
    if (r1 > 0) sum -= dp[r1 - 1][c2];
    if (c1 > 0) sum -= dp[r2][c1 - 1];
    if (r1 > 0 && c1 > 0) sum += dp[r1 - 1][c1 - 1];
    output[q] = Math.floor(sum / ((r2-r1+1)*(c2-c1+1)));
});
console.log(output.join('\n'))