let [RCN, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C, N] = RCN.split(' ').map(Number);
board.forEach((x, i) => board[i] = x.split('').map(y=>y==='O'?0:y));

for (let n = 1; n <= N; ++n) {
    if (n === 1) tick(false);
    else tick();

}
console.log(board.map(x=>x.map(y=>y==='.'?y:'O').join('')).join('\n'));

function tick(isAdd=true) {
    let seq = [[-1, 0], [0, 1], [0, 0], [1, 0], [0, -1]];
    let toBoom = new Set();
    for (let r = 0; r < R; ++r) {
        for (let c = 0; c < C; ++c) {
            if (board[r][c] === '.') {
                if (isAdd) board[r][c] = 0;
            } else {
                if (++board[r][c] === 3) {
                    for ([dr, dc] of seq) {
                        let [rr, cc] = [r+dr, c+dc];
                        if (0 <= rr && rr < R && 0 <= cc && cc < C) {
                            toBoom.add(`${rr} ${cc}`);
                        }
                    }
                }
            }
        }
    }
    for (let rrcc of toBoom) {
        let [rr, cc] = rrcc.split(' ').map(Number);
        board[rr][cc] = '.';
    }
}