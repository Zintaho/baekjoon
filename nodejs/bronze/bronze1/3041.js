// N 퍼즐
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = {
    'A' : [0,0],
    'B' : [0,1],
    'C' : [0,2],
    'D' : [0,3],
    'E' : [1,0],
    'F' : [1,1],
    'G' : [1,2],
    'H' : [1,3],
    'I' : [2,0],
    'J' : [2,1],
    'K' : [2,2],
    'L' : [2,3],
    'M' : [3,0],
    'N' : [3,1],
    'O' : [3,2]
}

let sum = 0;
input.forEach((row, y) => {
    row.split('').forEach((a, x) => {
        if (a === '.') return;
        let [Y, X] = answer[a];
        sum += Math.abs(Y-y) + Math.abs(X-x);
    })
});

console.log(sum);