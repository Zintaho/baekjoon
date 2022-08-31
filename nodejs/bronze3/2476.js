let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let max = 0;
for (row of input.slice(1)) {
    let result = new Array(6).fill(0);
    row = row.split(' ').map(x=> parseInt(x, 10));
    for (i of row) {
        result[i-1] += 1;
    }
    let third = result.indexOf(3);
    if (third != -1) {
        result = 10000 + 1000 * (third + 1);
        if (result > max) max = result;
        continue;
    }
    let second = result.indexOf(2);
    if (second != -1) {
        result = 1000 + 100 * (second + 1);
        if (result > max) max = result;
        continue;
    }
    let first = result.lastIndexOf(1);
    result = 100 * (first + 1);
    if (result > max) max = result;
}
console.log(max);