let [N, K] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);

let first = K*(K+1) / 2;
N -= first;

if (N < 0) console.log(-1);
else if (N === 0) console.log(K-1);
else {
    N = N % K;
    if (N === 0) console.log(K-1);
    else console.log(K);
}