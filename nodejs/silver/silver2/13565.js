let [MN, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [M, N] = MN.split(' ').map(x=>+x);
board.forEach((x,i) => board[i]=x.split(''));

let isPercolated = false;
for (let n = 0; n < N; ++n) {
    if (board[0][n] === '0') percolate(0, n);
    for (let nn = 0; nn < N; ++nn) {
        if (board[M-1][nn] === '2') {
            isPercolated = true;
            break;
        }
    }
    if (isPercolated) break;
}
console.log(isPercolated?'YES':'NO');

function percolate(m, n) {
    board[m][n] = '2';
    if (m - 1 >= 0 && board[m-1][n] === '0') percolate(m-1, n);
    if (n - 1 >= 0 && board[m][n-1] === '0') percolate(m, n-1);
    if (m + 1 < M && board[m+1][n] === '0') percolate(m+1, n);
    if (n + 1 < N && board[m][n+1] === '0') percolate(m, n+1);
}