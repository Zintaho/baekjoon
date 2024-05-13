let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(Number);
input.sort((a,b ) => a-b);

for (let k = 0; k <= N; ++k) {
    let lCount = 0;
    let sameCount = 0;
    for (let a of input) {
        if (a <= k) lCount++;
        if (a === k) sameCount++;
        
        if (a > k) break;
    }

    for (let j = lCount - sameCount; j <= lCount; ++j) {
        if ((N- k) === j) {
            console.log(k);
            break;
        }
    }
}