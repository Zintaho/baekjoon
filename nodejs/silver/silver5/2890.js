let [RC, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C] = RC.split(' ').map(Number);
board.forEach((x,i) => board[i] = x.split(''));

let output = new Array(9).fill(0);
let checked = 0;

let rank = 1;
for (let c = C-2; c >= 1; --c) {
    let isCounted = false;
    for (let r = 0; r < R; ++r) {
        if (board[r][c] !== '.') {
            let n = +board[r][c];
            if (output[n-1] !== 0) continue;
            output[n-1] = rank;
            isCounted = true;
            checked++;
        }
    }
    if (isCounted) rank++;
    if (checked === 9) break;
}

console.log(output.join('\n'))