let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input.pop();

let dp = Array.from({length: N}, _ =>new Array(N).fill(Infinity));

for (let x of input) {
    let [a,b] = x.split(' ').map(y=>+y - 1);
    dp[a][b] = 1;
    dp[b][a] = 1;
}

for (let k = 0; k < N; ++k) {
    for (let a = 0; a < N; ++a) {
        for (let b= 0 ; b < N; ++b) {
            dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]);
        }   
    }
}

let min = 51;
let mins = [];
for (let i = 0; i < N; ++i) {
    let max = 0;
    for (let j = 0; j < N; ++j) {
        if (i === j) continue;
        max = Math.max(dp[i][j], max);
    }

    if (max < min) {
        min = max;
        mins = [i+1];
    } else if (max === min) {
        mins.push(i+1);
    }
};

console.log(min, mins.length);
console.log(mins.join(' '));