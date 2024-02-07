let [L1, L2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [x1, y1, x2, y2] = L1.split(' ').map(BigInt);
let [x3, y3, x4, y4] = L2.split(' ').map(BigInt);

let sum = 1n;
sum *=(ccw(x1, y1, x2, y2, x3, y3));
sum *=(ccw(x1, y1, x2, y2, x4, y4));

let sum2 = 1n;
sum2 *=(ccw(x1, y1, x3, y3, x4, y4));
sum2 *=(ccw(x2, y2, x3, y3, x4, y4));

if (sum < 0n && sum2 < 0n) console.log(1);
else console.log(0);

function ccw(x1, y1, x2, y2, x3, y3) {
    let [a, b] = [(x2-x1), (y2-y1)];
    let [c, d] = [(x3-x1), (y3-y1)];
    return a*d - b*c;
}