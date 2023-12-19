let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let dp = new Array(N+1).fill(0);
let dp2 = new Array(N+1).fill('');
dp2[1] = '1';

for (let i = 2; i <= N; ++i) {
    let min = dp[i-1];
    let next = 0;
    if (i % 2 === 0) {
        if (dp[i/2] < min) {
            next = 1;
            min = dp[i/2];
        }
    }
    if (i % 3 === 0) {
        if (dp[i/3] < min) {
            next = 2;
            min = dp[i/3];
        }
    }

    dp[i] = min+1;
    switch (next) {
        case 0:
            dp2[i] = `${i} ${dp2[i-1]}`;
            break;
        case 1:
            dp2[i] = `${i} ${dp2[i/2]}`;
            break;
        case 2:
            dp2[i] = `${i} ${dp2[i/3]}`;
            break;
    }
}

console.log(dp[N]);
console.log(dp2[N]);