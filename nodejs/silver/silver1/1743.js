let [NMK, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, K] = NMK.split(' ').map(x=>+x);

let board = Array.from({length:N}, _ => new Array(M).fill(0));
for (let k = 0; k < K; ++k) {
    let [n, m] = input[k].split(' ').map(x=>+x - 1);
    board[n][m] = 1;
}

let max = 0;
for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M; ++m) {
        if (board[n][m] === 1) {
            let cnt = dfs(n, m);
            max = Math.max(cnt, max);
        }
    }
}

console.log(max);


function dfs(y,x) {
    let stack = [[y,x]];
    let cnt = 1;
    board[y][x] = 0;

    while (stack.length > 0) {
        let [yy, xx] = stack.pop();
        if (yy - 1 >= 0 && board[yy-1][xx] === 1) {
            board[yy-1][xx] = 0;
            cnt++;
            stack.push([yy-1, xx]);
        }
        if (xx - 1 >= 0 && board[yy][xx-1] === 1) {
            board[yy][xx - 1] = 0;
            cnt++;
            stack.push([yy, xx-1]);
        }
        if (yy + 1 < N && board[yy+1][xx] === 1) {
            board[yy + 1][xx] = 0;
            cnt++;
            stack.push([yy+1, xx]);
        }
        if (xx + 1 < M && board[yy][xx+1] === 1) {
            board[yy][xx + 1] = 0;
            cnt++;
            stack.push([yy, xx + 1]);
        }
    }

    return cnt;
}