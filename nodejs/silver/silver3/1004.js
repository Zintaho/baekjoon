let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let output = new Array(+T);
let i = 0;
for (let t = 0; t < +T; ++t) {
    let count = 0;
    let [x1, y1, x2, y2] = input[i++].split(' ').map(Number);
    let J = +input[i++];
    for (let j = 0; j < J; ++i, ++j) {
        let [cx, cy, r] = input[i].split(' ').map(Number);
        let check1 = Math.pow((cx-x1), 2) + Math.pow((cy-y1), 2) <= r*r;
        let check2 = Math.pow((cx-x2), 2) + Math.pow((cy-y2), 2) <= r*r;
        if (check1 || check2) count++;
        if (check1 && check2) count--;
    }
    output[t] = count;
}

console.log(output.join('\n'));