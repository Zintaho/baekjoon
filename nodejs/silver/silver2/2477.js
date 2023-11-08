let [K, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
K = +K;
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
};

let p = [];
let P = new Point(0, 0);
let min = new Point(501, 501);
let max = new Point(-501, -501);
input.forEach(xx => {
    let [d,a] = xx.split(' ').map(xxx=>+xxx);
    p.push(P);
    switch (d) {
        case 1:
            P = new Point(P.x + a, P.y);
            break;
        case 2:
            P = new Point(P.x - a, P.y);
            break;
        case 3:
            P = new Point(P.x, P.y - a);
            break;
        case 4:
            P = new Point(P.x, P.y + a);
            break;
    }
    min.x = Math.min(min.x, P.x);
    min.y = Math.min(min.y, P.y);
    max.x = Math.max(max.x, P.x);
    max.y = Math.max(max.y, P.y);
});

let sum = Math.abs(min.x - max.x) * Math.abs(min.y - max.y);
let I = 0;
for (let i = 0; i < 6; ++i) {
    let pp = p[i];
    if (pp.x !== min.x && pp.x !== max.x && pp.y !== min.y && pp.y !== max.y) {
        I = i;
        break;
    }
}
let left = p[(I+5) % 6];
let center = p[I];
let right = p[(I+7) % 6];
let xx = Math.max(Math.abs(left.x - center.x), Math.abs(right.x - center.x));
let yy = Math.max(Math.abs(left.y - center.y), Math.abs(right.y - center.y));
sum -= xx * yy;
console.log(sum * K);