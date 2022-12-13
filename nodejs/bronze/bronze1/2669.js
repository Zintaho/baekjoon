let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let board = new Array(101).fill(0).map(() => new Array(101).fill(0));
let [xMin, yMin, xMax, yMax] = [101, 101, 0, 0];
for (let i = 0 ; i < 4; ++i) {
    let [ax, ay, bx, by] = input[i].split(' ').map(x=>+x);
    for (let y = ay; y < by; ++y) {
        for (let x = ax; x < bx; ++x) board[y][x] = 1;
    }
    if (ax < xMin) xMin = ax;
    if (bx > xMax) xMax = bx;
    if (ay < yMin) yMin = ay;
    if (by > yMax) yMax = by;
}

let sum = 0;
for (let y = yMin; y < yMax; ++y) {
    sum += board[y].slice(xMin, xMax).reduce((a,b) => a+b);
}
console.log(sum);