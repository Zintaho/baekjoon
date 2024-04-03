let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
/*
ACAYKP
CAPCAK
0   0   0   0   0   0   0
0   0   A   A   A   A   A
0   C   C   C   AC  AC  AC
0   C   CA  CA  CA  ACA ACA
0   C   CA  CA  CA  ACA ACA
0   C   CA  CA  CA  ACA ACAK
0   C   CA  CA  CA  ACA ACAK
*/

let [aLen, bLen] = [A.length, B.length];
let dp = Array.from({length : aLen + 1}, _ => new Array(bLen+1).fill(0));
let dp2 = Array.from({length : aLen + 1}, _ => new Array(bLen+1).fill(''));
for (let a = 0; a < aLen; ++a) {
    for (let b = 0; b < bLen; ++b) {
        if (A[a] === B[b]) {
            dp[a+1][b+1] = dp[a][b] + 1;
            dp2[a+1][b+1] = dp2[a][b] + B[b];
        }
        let MAX = Math.max(dp[a+1][b], dp[a+1][b+1], dp[a][b+1]);

        if (MAX === dp[a+1][b]) {
            dp2[a+1][b+1] = dp2[a+1][b];

        } else if (MAX === dp[a+1][b+1]) {
            dp2[a+1][b+1] = dp2[a+1][b+1];

        } else if (MAX === dp[a][b+1]) {
            dp2[a+1][b+1] = dp2[a][b+1];

        }

        dp[a+1][b+1] = MAX;
    }
}

console.log(dp[aLen][bLen]);
console.log(dp2[aLen][bLen]);