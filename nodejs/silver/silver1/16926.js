let [NMR, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, R] = NMR.split(' ').map(Number);
board.forEach((x, i) => board[i] = x.split(' '));

let newBoard = Array.from({length : N}, _=> new Array(M).fill('0'));

for (let c = 0; c < Math.ceil(Math.min(N, M) / 2); ++c) {/* 바깥부터 고리를 하나씩 */
    let [B, A] = [0 + c, 0 + c];    /* 안 시작점 */ 
    let [Y, X] = [N - B - 1, M - A - 1];    /* 바깥 끝점 */
    let [y, x] = [B, A];            /* 현재 점 */

    let [ty, tx] = [Y-y, X-x];  /* 선분 길이 */
    let D = (ty+tx)*2               /* 둘레 */
    let r = (R % D);                /* 여러번의 회전을 한번으로 조정 */
    
    for (let d = 0; d < D; ++d) {
        let [ny, nx] = getPos(y, x, B, A, Y, X, r);
        newBoard[ny][nx] = board[y][x];

        [y, x] = getPos(y, x, B, A, Y, X, 1);
    }
}

console.log(newBoard.map(x=>x.join(' ')).join('\n'));

function getPos(y, x, B, A, Y, X, r) {
    for (let rr = 0; rr < r; ++rr) {
        if (y === B && A < x ) {
            --x;
        } else if (y === Y && x < X) {
            ++x
        } else if (x === A && y < Y) {
            ++y
        } else if (x === X && B < y) {
            --y
        }
    }
    return [y, x];
}
