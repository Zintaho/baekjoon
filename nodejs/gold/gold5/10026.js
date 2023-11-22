let [N, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let weakBoard = new Array(N);
board.forEach((x,i) => {
    board[i] = x.split('')
    weakBoard[i] = [...board[i]];
});

let [notWeak, weak] = [0, 0];
for (let y = 0; y < N; ++y) {
    for (let x = 0; x < N; ++x) {
        if (board[y][x] !== 0) {
            notWeak++;
            dfs(y, x, board[y][x]);
        }
        if (weakBoard[y][x] !== 0) {
            weak++;
            weakDFS(y, x, weakBoard[y][x]);
        }
    }
}
console.log(notWeak, weak);

function dfs(y, x, b) {
    let a = board[y][x];
    if (a === 0) return;
    if (a !== b) return;
    board[y][x] = 0;
    if (y-1 >= 0) dfs(y-1, x, a);
    if (x-1 >= 0) dfs(y, x-1, a);
    if (y+1 < N) dfs(y+1, x, a);
    if (x+1 < N) dfs(y, x+1, a);
}

function weakDFS(y, x, b) {
    let a = weakBoard[y][x];
    if (a === 0) return;
    if (a !== b) {
        if (a === 'R' && b === 'G') {}
        else if (a === 'G' && b === 'R') {}
        else return;
    }
    weakBoard[y][x] = 0;
    if (y-1 >= 0) weakDFS(y-1, x, a);
    if (x-1 >= 0) weakDFS(y, x-1, a);
    if (y+1 < N) weakDFS(y+1, x, a);
    if (x+1 < N) weakDFS(y, x+1, a);
}