let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let P = [0, 1, 1, 1, 2, 2, 3, 4, 5];
/*
P[9] = P[4] + P[8];
P[10] = P[5] + P[9];
...
*/
let output = new Array(T);
for (let i = 0; i < T; ++i) {
    let N = +input[i];
    if (N >= P.length) {
        for (let j = P.length; j <= N; ++j) P[j] = P[j-5] + P[j-1];
    }
    output[i] = P[N];
}
console.log(output.join('\n'));