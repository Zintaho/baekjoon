let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x, 10));

let gap = 100;
let sum = 0;

for (x of input) {
    const xGap = Math.abs(100 - (sum+x));
    if (xGap <= gap ) {
        sum += x;
        gap = xGap
    } else break;
}

console.log(sum);