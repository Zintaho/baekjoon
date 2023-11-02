let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
let board = Array.from({length:N}, (_, i) => input[i].split(''));

let cnt = 0;
getAnswer();

function getAnswer() {
    
for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M; ++m) {
        if (board[n][m] === 'I') {
            dps(m, n);
            console.log(cnt>0?cnt : 'TT');
            return;
        }
    }
}

};

function dps(x, y) {
    if (board[y][x] === 'X') return;

    const a = board[y][x];
    board[y][x] = 'X';
    if (a === 'P') {cnt++;}

    if (x-1 >= 0) dps(x-1, y);
    if (y-1 >= 0) dps(x, y-1);
    if (x+1 < M) dps(x+1, y);
    if (y+1 < N) dps(x, y+1);
}