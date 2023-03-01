let [wh, N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [w,h] = wh.split(' ').map(x=>+x);
N = +N;

const compare = (a,b) => {
    if (a[0] > b[0]) {
        return 1
    } else if (a[0] === b[0]) {
        if (a[1] > b[1]) {
            return 1;
        } else if (a[1] === b[1]) {
            return 0;
        } else if (a[1] < b[1]) {
            return -1;
        }
    } else if (a[0] < b[0]) {
        return -1
    }
}

input = input.map(x=>x.split(' ').map(x=>+x));
input = input.sort(compare);
let X = [0];
let Y = [0];
for (let n = 0; n < N; ++n) {
    let [hv, p] = input[n];
    if (hv === 0) Y.push(p);
    else if (hv === 1) X.push(p);
}
X.push(w); Y.push(h);
let [xMax, yMax] = [0,0];
for (let i = 0; i < X.length - 1; ++i) {
    let x = X[i+1] - X[i];
    if (x > xMax) xMax = x;
}
for (let j = 0 ; j < Y.length- 1; ++j) {
    let y = Y[j+1] - Y[j];
    if (y > yMax) yMax = y;
}
console.log(xMax*yMax);