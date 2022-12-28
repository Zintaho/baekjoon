let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let [x, y] = [0, 0];
const re = /\.{2,}/g;
for (let i = 1; i <= N; ++i) {
    x += [...input[i].matchAll(re)].length;

    let str = '';
    for (let j = 1; j <= N; ++j) {
        str += input[j][i-1];
    }
    y += [...str.matchAll(re)].length;
}
console.log(x,y);