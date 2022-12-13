let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let map = {
    1 : [1],
    2 : [2, 4, 8, 6],
    3 : [3, 9, 7, 1],
    4 : [4, 6],
    5 : [5],
    6 : [6],
    7 : [7, 9, 3, 1],
    8 : [8, 4, 2, 6],
    9 : [9, 1],
    0 : [10]
}

let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i <= T; ++i) {
    let [a, b] = input[i].split(' ');
    a = parseInt(a[a.length-1], 10);
    let answer = map[a][(b-1) % map[a].length];
    output += `${answer}\n`
}
console.log(output);