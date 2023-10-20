let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
let sum = N*M*2;

input.forEach((x,i) => input[i] = x.split(' ').map(x=>+x));

for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M; ++m) {
        let a = input[n][m];
        if (m-1 >= 0 && a > input[n][m-1]) sum += (a-input[n][m-1]);
        if (m-1 < 0) sum += a;

        if (n-1 >= 0 && a > input[n-1][m]) sum += (a-input[n-1][m]);
        if (n-1 < 0) sum += a;

        if (m+1 < M && a > input[n][m+1]) sum += (a-input[n][m+1]);
        if (m+1 >= M) sum += a;

        if (n+1 < N && a > input[n+1][m]) sum += (a-input[n+1][m]);
        if (n+1 >= N) sum += a;
    }
}

console.log(sum);