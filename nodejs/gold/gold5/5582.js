let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
/*
ABCR
ACRB
0   0   0   0   0 
0   A   0   0   0 
0   0   0   0   B
0   0   C   0   0
0   0   0   CR  0
*/

let [aLen, bLen] = [A.length, B.length];
let dp = Array.from({length : aLen + 1}, _ => new Array(bLen+1).fill(0));
let max = 0;
for (let a = 0; a < aLen; ++a) {
    for (let b = 0; b < bLen; ++b) {
        if (A[a] === B[b]) {
            dp[a+1][b+1] = dp[a][b] + 1;
            max = Math.max(max, dp[a+1][b+1]);
        }
    }
}

console.log(max);