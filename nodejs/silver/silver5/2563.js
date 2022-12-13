let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
input.shift();
input = input.map(x=>x.split(' ').map(x=>parseInt(x, 10)));

let [xMax, yMax, xMin, yMin] = [0, 0, 100, 100];
for (let i = 0; i < N; ++i) {
    let [x, y] = input[i];
    if (x > xMax) xMax = x;
    if (x < xMin) xMin = x;
    if (y > yMax) yMax = y;
    if (y < yMin) yMin = y;
}

let board = new Array(yMax + 10).fill(0).map(() => new Array(xMax+ 10).fill(0));
for (let i = 0; i < N; ++i) {
    let [x, y] = input[i];
    for (let Y = y; Y < y+10; ++Y) {
        for (let X = x; X < x+10; ++X) board[Y][X] = 1;
    }
}

let sum = 0;
for (let y = yMin ; y < yMax + 10; ++y) {
    sum += board[y].reduce((a,b) => a+b);
}
console.log(sum);