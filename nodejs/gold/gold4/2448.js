let Y = +require('fs').readFileSync('/dev/stdin').toString().trim();
let [k, a,b,X] =[0, 3,1,5];
for (k = 0; k <= 10; ++k){
    if ( a*b >= Y) break;

    b *= 2;
    X *= 2
    X++
}

// 초기화
let board = new Array(Y).fill(0).map(_=>new Array(X).fill(' '));
let c = Math.floor(X/2);
board[0][c]='*';
board[1][c-1] = board[1][c+1] ='*';
board[2][c-2] = board[2][c-1] = board[2][c] = board[2][c+1] = board[2][c+2] = '*';

// 복사
let from = {ya:0, yb:2, xa:(c-2), xb:(c+2)};
for (let i = 1; i <= k; ++i) {
    let dx = (from.xb - from.xa);
    let dy = (from.yb - from.ya);
    let to1 = {};
    to1.ya = from.yb + 1;
    to1.yb = to1.ya + dy;
    to1.xa = from.xa - dy-1;
    let to2 = {};
    to2.ya = to1.ya;
    to2.yb = to1.yb;
    to2.xb = from.xb + dy+1;
    to2.xa = to2.xb - dx;

    for (let y = 0; y < dy+1; ++y) {
        for (let x = 0; x < dx+1; ++x) {
            board[to1.ya+y][to1.xa+x] = board[from.ya+y][from.xa+x];
            board[to2.ya+y][to2.xa+x] = board[from.ya+y][from.xa+x];
        }
    }
    from.yb = to1.yb;
    from.xa = to1.xa;
    from.xb = to2.xb;
}


// 최종 출력
board.forEach((x,i) => board[i] = x.join(''));
console.log(board.join('\n'))