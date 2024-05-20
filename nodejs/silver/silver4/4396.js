let [N, ...board] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
N = +N;

board.forEach((x, i) => {board[i] = x.split('');});
let output = Array.from({length: N}, _ => new Array(N).fill('.'));
let mines = [];

for (let n = 0; n < N; ++n) {
    for (let m = 0; m < N; ++m) {
        if (board[n][m] === '*') mines.push([n, m]);
    }
}

let sequence = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
]
let isMined = false;
for (let n = 0; n < N; ++n) {
    for (let m = 0; m < N; ++m) {
        if (board[n + N][m] === 'x') {
            let cnt = 0;
            for (let seq of sequence) {
                let [y,x] = seq;
                [y, x] = [n+y, m+x];
                if (0<= y && y < N && 0 <= x && x < N) {
                    if (board[y][x] === '*') cnt++;
                }
            }
            output[n][m] = cnt;
            if (board[n][m] === '*') isMined = true;
        }
    }
}

if (isMined) {
    for (let [y, x] of mines) {
        output[y][x] = '*';
    }
}

output = output.map(x => x.join(''));
console.log(output.join('\n'));