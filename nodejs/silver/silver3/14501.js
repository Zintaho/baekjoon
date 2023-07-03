let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input.forEach((x,i) => {
    input[i] = x.split(' ').map(x=>+x);
});

let max = 0;
for (let i = 0; i < N; ++i) dp(i, 0);

console.log(max);

function dp(k, sum) {
    if (k >= N) {
        max = Math.max(sum, max);
        return;
    }

    let [t, p] = input[k];
    for (let j=k+t; j<=N; ++j) {
        dp(j, sum+p);
    }
    if (k+t > N) {
        max = Math.max(sum, max);
        return;
    }
}