let [NM, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
board.forEach((x, i) => board[i] = x.split(' ').map(Number));

let cnt = 0;
for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M ; ++m) {
        if (board[n][m] === 1) {
            dfs(n, m);
            cnt++;
        }
    }
}
console.log(cnt);

function dfs(y, x) {
    let seq = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
    board[y][x] = 0;

    for (let [dy, dx] of seq) {
        let [Y, X] = [y+dy, x+dx]
        if (0 <= Y && Y < N && 0 <= X && X < M && board[Y][X] === 1) dfs(Y, X);
    }
}