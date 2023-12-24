let [N, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let M = 0;
board.forEach((x, i) => {
    board[i] = x.split(' ').map(x=>+x);
    M = Math.max(...board[i]);
});

let aMax = 1;
for (let m = 1; m < M; ++m) {
    let checked = Array.from({length:N}, _ => new Array(N).fill(false));
    let aCount = 0;
    for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
            if (checked[y][x]) continue;
            if (board[y][x] <= m) continue;
            aCount++;
            dfs(y, x);
        }
    }
    aMax = Math.max(aMax, aCount);

    function dfs(y, x) {
        checked[y][x] = true;
        if (y+1 < N && !checked[y+1][x] && board[y+1][x] > m) dfs(y+1, x);
        if (x+1 < N && !checked[y][x+1] &&  board[y][x+1] > m) dfs(y, x+1);
        if (y-1 >= 0 && !checked[y-1][x] &&  board[y-1][x] > m) dfs(y-1, x);
        if (x-1 >= 0 && !checked[y][x-1] &&  board[y][x-1] > m) dfs(y, x-1);
    }
}

console.log(aMax);