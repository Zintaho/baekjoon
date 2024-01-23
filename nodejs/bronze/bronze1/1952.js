let [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
if (M <= N) {
    console.log(2*(M-1));
} else console.log(2*N - 1);