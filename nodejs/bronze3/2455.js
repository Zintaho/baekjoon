let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let max = 0;
let now = 0;
for (row of input) {
    [d, u] = row.split(' ').map(x=>parseInt(x, 10));
    now += (u-d);
    if (now > max) max = now;
}
console.log(max);