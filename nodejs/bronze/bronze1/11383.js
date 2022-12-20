let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,M] = input[0].split(' ').map(x=>+x);
let isEyfa = true;
for (let n = 1; n <= N; ++n) {
    for (let m = 0; m < M; ++m) {
        let [A,B] = [input[n], input[n+N]];
        if (A[m] !== B[2*m] || A[m] !== B[2*m + 1]) {
            isEyfa = false;
            break;
        }
    }
    if (!isEyfa) break;
}
console.log(`${isEyfa?'':'Not '}Eyfa`);