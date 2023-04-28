let [YX, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [Y, X] = YX.split(' ').map(x=>+x);

let count = new Array(5).fill(0);
for (let y = 0; y < Y; ++y) {
    for (let x = 0; x < X; ++x) {
        let anchor = input[5*y + 1][5*x + 1];
        if (anchor === '.') count[0]++;
        else {
            for (let yy =  5*y + 2, k = 1; yy < 5*y + 5; ++yy, ++k) {
                if (input[yy][5*x + 1] === '.') {
                    count[k]++;
                    break;
                }
            }
            if (input[5*y + 4][5*x + 1] === '*') count[4]++;
        }
    }
}
console.log(count.join(' '));
// https://www.acmicpc.net/problem/2799