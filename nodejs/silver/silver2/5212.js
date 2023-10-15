let [RC, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R,C] = RC.split(' ').map(x=>+x);
let newBoard = new Array(R);

let [rMin, rMax, cMin, cMax] = [R, 0, C, 0];

for (let r = 0; r < R; ++r) {
    board[r] = board[r].split('');
    newBoard[r] = [...board[r]];
    for (let c = 0; c < C; ++c) {
        let a = board[r][c];
        let seaCnt = 4;
        if (a === 'X') {
            if (board[r-1]!==undefined && board[r-1][c] === 'X') seaCnt--;
            if (board[r][c-1] === 'X') seaCnt--;
            if (board[r+1]!==undefined && board[r+1][c] === 'X') seaCnt--;
            if (board[r][c+1] === 'X') seaCnt--;
        }
        // if (seaCnt >= 3) board[r][c] = '.';
        if (seaCnt <= 2) {
            newBoard[r][c] = 'X';
            rMin = Math.min(r, rMin);
            rMax = Math.max(r, rMax);
            cMin = Math.min(c, cMin);
            cMax = Math.max(c, cMax);
        } else newBoard[r][c] = '.';
    }
}
let output = new Array(rMax - rMin +1);
for (let r = rMin; r <= rMax; ++r) {
    output[r-rMin] = newBoard[r].slice(cMin, cMax+1).join('');
}
console.log(output.join('\n'));