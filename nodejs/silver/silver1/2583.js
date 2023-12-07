let [MNK, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [M, N, K] = MNK.split(' ').map(x=>+x);
let board = Array.from({length:M}, _=>new Array(N).fill(0));

for (let row of input) {
    let [x1,y1, x2,y2] = row.split(' ').map(x=>+x);
    for (let y = y1; y < y2; ++y) {
        for (let x = x1; x < x2; ++x) {
            board[y][x] = 1;
        }
    }
}

let areas = [];
let cnt = 0;
for (let y = 0; y < M; ++y) {
    for (let x = 0; x < N; ++x) {
        if (board[y][x] === 0) {
            cnt = 0;
            fill(x, y);
            areas.push(cnt);
        }
    }
}

areas.sort((a,b) => a-b);
console.log(areas.length);
console.log(areas.join(' '));

function fill(x, y) {
    cnt++;
    board[y][x] = 1;
    let [a,b] = [x,y];

    [a,b] = [x-1, y];
    if (a >= 0 && board[b][a] === 0) fill(a,b);

    [a,b] = [x, y-1];
    if (b >= 0 && board[b][a] === 0) fill(a,b);

    [a,b] = [x+1, y];
    if (a < N && board[b][a] === 0) fill(a,b);

    [a,b] = [x, y+1];
    if (b < M && board[b][a] === 0) fill(a,b);
}