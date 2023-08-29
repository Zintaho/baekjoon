let n = +require('fs').readFileSync('/dev/stdin').toString().trim();
let k = 1;
if (n < 0 && Math.abs(n) %2 === 0) k = -1;
/*
-(짝수) 의 경우 -를 붙임.
*/
let dp = new Array(3);
dp[0] = 0;
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= Math.abs(n); ++i) {
    dp[i % 3] = (dp[(i-1) % 3]+ dp[(i-2) % 3])%1000000000;
}
console.log(n === 0?0 : k);
console.log(dp[Math.abs(n) % 3]);