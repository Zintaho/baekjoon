let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(x=>+x);
let row = new Array(N).fill(0);
for (let i = 0; i < N; ++i) {
    let lCount = input[i];

    for (let j = 0; j < N; j++) {
        if (row[j] === 0) lCount--;
        if (lCount === -1) {
            row[j] = i+1;
            break;
        }
    }
}
console.log(row.join(' '));