let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let standards = [];
let dp = new Array(N+1).fill(100000);

let k = Math.floor(Math.sqrt(N));
while ( k > 0)  {
    let K = k*(k--);
    dp[K] = 1;
    standards.push(K);
}

for (let i = 1; i <= N; ++i) {
    if (dp[i] === 1) continue;

    for (let K of standards) {
        if (K < i) {
            dp[i] = Math.min(dp[i], dp[K]+dp[i-K]);
        }
    }
}
console.log(dp[N]);