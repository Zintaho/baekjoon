let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let board = new Array(1001).fill(0).map(() => new Array(1001).fill(0));

let [xMin, yMin, xMax, yMax] = [1001, 1001, 0, 0];
for (let i = 1 ; i <= N; ++i) {
    let [ax, ay, bx, by] = input[i].split(' ').map(x=>+x);
    bx += ax;
    by += ay;
    for (let y = ay; y < by; ++y) {
        for (let x = ax; x < bx; ++x) board[y][x] = i;
    }
    if (ax < xMin) xMin = ax;
    if (bx > xMax) xMax = bx;
    if (ay < yMin) yMin = ay;
    if (by > yMax) yMax = by;
}
board = board.slice(yMin, yMax);
const result = new Array(N).fill(0);

for (let row of board) {
    row = row.slice(xMin, xMax).forEach(x => {
        result[x-1]++;
    });
}
console.log(result.join('\n'));