let [N,input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let M = input.length / N;
let board = new Array(M).fill(0).map(x=>new Array(N).fill(0));
let isReversed = false;
let k = 0;
for (let m = 0; m < M; ++m) {
    if (isReversed) {
        for (let j = N-1; j >=0 ; j--) {
            board[m][j] = input.charAt(k++);
        }
    } else {
        for (let j = 0; j < N; ++j) {
            board[m][j] = input.charAt(k++);
        }
    }
    isReversed = !isReversed
}
let output = new Array(input.length);
for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M; ++m) {
        output[n*M+m] = board[m][n];
    }
}
console.log(output.join(''));