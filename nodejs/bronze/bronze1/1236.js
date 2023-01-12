let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,M] = input[0].split(' ').map(x=>+x)
let nInfo = new Array(N).fill(1);
let mInfo = new Array(M).fill(1);
for (let n = 1; n <= N; ++n) {
    for (let m = 0; m < M; ++m) {
        if (input[n][m] === 'X') {
            nInfo[n-1] = 0;
            mInfo[m] = 0;
        }
    }
}
nInfo = nInfo.reduce((a,b) => a+b);
mInfo = mInfo.reduce((a,b) => a+b);
console.log(Math.max(nInfo, mInfo));