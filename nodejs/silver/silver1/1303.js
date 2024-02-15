let [NM, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
board.forEach((x, i) => board[i] = x.split(''));

let [W, B] = [0, 0];
let cnt = 0;
for (let m = 0; m < M; ++m) {
    for (let n = 0; n < N; ++n) {
        if (board[m][n] === 0) continue;
        cnt = 0;
        let a = board[m][n];
        dfs(a, m, n);
        switch(a) {
            case 'W':
                W += cnt*cnt;
                break;
            case 'B':
                B += cnt*cnt;
                break;
        }
    }
}
console.log(W, B);


function dfs(a, m, n) {
    board[m][n] = 0;
    cnt++;

    if (m-1 >= 0 && board[m-1][n] === a) dfs(a, m-1, n);
    if (n-1 >= 0 && board[m][n-1] === a) dfs(a, m, n-1);
    if (m+1 < M && board[m+1][n] === a) dfs(a, m+1, n);
    if (n+1 < N && board[m][n+1] === a) dfs(a, m, n+1);
}